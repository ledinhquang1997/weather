import React from 'react';

import { render } from '@testing-library/react';

import { MockProvider } from '../../../common';
import Search from './index';

it('renders correctly', () => {
  const tree = render(
    <MockProvider>
      <Search />
    </MockProvider>
  );
  expect(tree).toMatchSnapshot();
});

// describe('WeatherSearch component', () => {
//   test('should show expected elements', () => {
//     render(
//       <MockProvider>
//         <Search />
//       </MockProvider>
//     );

//     expect(n.getByPlaceholderText(/Enter your city/i)).toBeDefined();
//     expect(screen.getByTestId('submitButton')).toBeDefined();
//   });
// });
