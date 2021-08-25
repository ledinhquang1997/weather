import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { search as mockSearch } from '../apis/weatherSearchApi';
import App from '../App';
import { MOCK_WEATHER_INFO } from '../common';

jest.mock('../apis/weatherSearchApi');

describe('Weather forecast integration test', () => {
  test('verify user can search weather by city name', async () => {
    mockSearch.mockResolvedValueOnce(MOCK_WEATHER_INFO);

    const { container } = render(<App />);

    expect(screen.getAllByText('Weather Forecast')).toBeDefined();
    const searchInput = screen.getByPlaceholderText(/Please enter city name/i);
    expect(searchInput).toBeDefined();

    user.type(searchInput, 'London');
    expect(searchInput).toHaveValue('London');

    const button = screen.getByTestId('submitButton');
    user.click(button);

    await screen.findByAltText(/spinner/i);

    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockSearch).toHaveBeenCalledWith('London');

    // rerender(<App />);

    const weatherItems = container.querySelectorAll('.weather-item');
    expect(weatherItems).toHaveLength(MOCK_WEATHER_INFO.data.weather.length);
  });
});
