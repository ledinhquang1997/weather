import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './common';
import { Weather } from './components';
import Loading from './components/WeatherForecast/Loading';
import { AppStateProvider } from './context';

function App() {
  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <Loading></Loading>
        <GlobalStyle />
        <Weather />
      </ThemeProvider>
    </AppStateProvider>
  );
}

export default App;
