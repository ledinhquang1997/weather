import { getDay, round } from '../../../common/utils/format';
import { Day, Temperature, WeatherImage, WeatherState, Wrapper } from './style';

const WeatherItem = ({ item }) => {
  const { applicable_date, weather_state_name, weather_state_abbr, min_temp, max_temp } = item;

  return (
    <Wrapper>
      <Day>{getDay(applicable_date)}</Day>
      <WeatherState>{weather_state_name}</WeatherState>
      <WeatherImage
        src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
        alt="weather-item"
      />
      <Temperature>Min: {round(min_temp)}</Temperature>
      <Temperature>Max: {round(max_temp)}</Temperature>
    </Wrapper>
  );
};

export default WeatherItem;
