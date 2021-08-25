import { useContext, useState } from 'react';

import { search } from '../apis/weatherSearchApi';
import { validate } from '../common';
import { AppContext } from '../context';
import { SET_LOADING } from '../context/constants';

export const useWeatherSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AppContext);

  const handleSearch = async (searchText) => {
    try {
      const validateError = validate(searchText);

      if (validateError) {
        setError(validateError);

        return;
      }

      dispatch({ type: SET_LOADING, payload: true });
      const weather = await search(searchText);
      const result = weather?.data?.weather || [];
      const city = weather?.data?.city?.title;

      if (result.length <= 0 || !city) {
        setError('No city found :(');
      } else {
        setError(null);
        setCityName(city);
        setSearchResult(result);
      }

      dispatch({ type: SET_LOADING, payload: false });
    } catch (err) {
      setCityName('');
      setSearchResult([]);
      setError('No city found :(');
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  return { searchResult, handleSearch, error, cityName };
};
