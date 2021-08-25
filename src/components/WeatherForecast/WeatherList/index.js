import WeatherItem from '../WeatherItem';
import { List, Wrapper } from './style';

const WeatherList = ({ searchResult }) => {
  return (
    <Wrapper>
      <List>
        {searchResult.map((item) => (
          <WeatherItem key={item.id} item={item} />
        ))}
      </List>
    </Wrapper>
  );
};

export default WeatherList;
