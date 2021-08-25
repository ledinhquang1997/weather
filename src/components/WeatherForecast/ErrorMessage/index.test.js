import { render } from '@testing-library/react';

import ErrorMessage from '.';
import { MockProvider } from '../../../common';
import { useAppContext } from '../../../hooks/useAppContext';

jest.mock('../../../hooks/useAppContext');

describe('Error message componen', () => {
  test('shold render as expected', () => {
    useAppContext.mockImplementation(() => ({ state: { error: 'shold render as expected' } }));
    const { container } = render(
      <MockProvider>
        <ErrorMessage />
      </MockProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
