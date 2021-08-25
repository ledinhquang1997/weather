import { useRef } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { search } from '../../../apis/weatherSearchApi';
import { validate } from '../../../common';
import { SEARCH, SEARCH_FAIL, SEARCH_SUCESS, SET_ERROR } from '../../../context/constants';
import { useAppContext } from '../../../hooks/useAppContext';
import { Icon, Input, Wrapper } from './style';

const Search = () => {
  const {
    dispatch,
    state: { searchedOnce },
  } = useAppContext();
  const inputRef = useRef(null);

  const handleSearch = async (searchText) => {
    try {
      const validateError = validate(searchText);

      if (validateError) {
        dispatch({ type: SET_ERROR, payload: { error: validateError } });

        return;
      }

      dispatch({ type: SEARCH });

      const weather = await search(searchText);
      const result = weather?.data?.weather || [];
      const cityName = weather?.data?.city?.title;

      dispatch({ type: SEARCH_SUCESS, payload: { cityName, result } });
    } catch (err) {
      dispatch({ type: SEARCH_FAIL, payload: { error: 'No city found :(' } });
    }
  };

  const searchClickHandler = (e) => {
    e.preventDefault();
    const searchText = inputRef.current.value;
    handleSearch(searchText);
  };

  return (
    <Wrapper showResults={searchedOnce} onSubmit={searchClickHandler}>
      <Input ref={inputRef}></Input>
      <Icon icon={faSearch} onClick={searchClickHandler}></Icon>
    </Wrapper>
  );
};

export default Search;
