import React from 'react';

import { render } from '@testing-library/react';

import WeatherList from '.';
import { MockProvider, MOCK_DATA } from '../../../common';

describe('WeatherList component', () => {
  test('should show expected items with mock data', () => {
    const { container } = render(
      <MockProvider>
        <WeatherList searchResult={MOCK_DATA.result} />
      </MockProvider>
    );
    const weatherItems = container.querySelectorAll('.weather-item');
    expect(weatherItems.length).toBe(MOCK_DATA.result.length);
  });
});
