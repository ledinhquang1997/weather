import { faThermometerEmpty, faThermometerFull, faTint, faWind, faUmbrella } from '@fortawesome/free-solid-svg-icons';

import { getDay, round } from '../../../common/utils/format';
import {
  Value,
  Box,
  City,
  Day,
  Icon,
  WeatherImage,
  WeatherState,
  WeatherStateCard,
  WeatherStatisticCard,
  Wrapper,
} from './style';

const CurrentWeather = ({ searchResult, cityName }) => {
  const {
    predictability,
    min_temp,
    max_temp,
    applicable_date,
    weather_state_name,
    weather_state_abbr,
    wind_speed,
    humidity,
  } = searchResult[0];

  return (
    <Wrapper>
      <WeatherStateCard>
        <City>{cityName}</City>
        <Day>{getDay(applicable_date)}</Day>
        <WeatherImage
          alt="weather-img"
          src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
        ></WeatherImage>
        <WeatherState>{weather_state_name}</WeatherState>
      </WeatherStateCard>
      <WeatherStatisticCard>
        <Box>
          <Icon size="3x" icon={faThermometerEmpty}></Icon>
          <Value>{round(min_temp)}°</Value>
        </Box>
        <Box>
          <Icon size="3x" icon={faThermometerFull}></Icon>
          <Value>{round(max_temp)}°</Value>
        </Box>
        <Box>
          <Icon size="3x" icon={faTint}></Icon>
          <Value>{round(predictability)}%</Value>
        </Box>
        <Box>
          <Icon size="3x" icon={faWind}></Icon>
          <Value>{round(wind_speed)}mph</Value>
        </Box>
        <Box>
          <Icon size="3x" icon={faUmbrella}></Icon>
          <Value>{round(humidity)}%</Value>
        </Box>
      </WeatherStatisticCard>
    </Wrapper>
  );
};

export default CurrentWeather;
