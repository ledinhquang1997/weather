import { ThemeProvider } from 'styled-components';

import { AppStateProvider } from '../../context';
import { theme } from '../styles';

export const MockProvider = ({ children }) => {
  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppStateProvider>
  );
};
