import { useAppContext } from '../../../hooks/useAppContext';
import CurrentWeather from '../CurrentWeather';
import WeatherList from '../WeatherList';
import { Wrapper } from './style';

const SearchResult = () => {
  const {
    state: { result, cityName, error },
  } = useAppContext();

  return (
    result.length > 0 &&
    cityName &&
    !error && (
      <Wrapper>
        <CurrentWeather searchResult={result} cityName={cityName} />
        <WeatherList searchResult={result} />
      </Wrapper>
    )
  );
};

export default SearchResult;
