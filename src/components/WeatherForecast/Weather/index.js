import React from 'react';

import { useAppContext } from '../../../hooks/useAppContext';
import ErrorMessage from '../ErrorMessage';
import Search from '../Search';
import SearchResult from '../SearchResult';
import { Wrapper, Title, SubTitle } from './style';

const Weather = () => {
  const {
    state: { searchedOnce },
  } = useAppContext();

  return (
    <Wrapper>
      <SubTitle showResults={searchedOnce}>Weather Forecast</SubTitle>
      <Title showResults={searchedOnce}>Weather Forecast</Title>
      <Search />
      <SearchResult />
      <ErrorMessage />
    </Wrapper>
  );
};

export default Weather;
