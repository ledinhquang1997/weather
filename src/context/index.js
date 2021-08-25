import React, { useReducer, createContext } from 'react';

import reducer from './reducer';

export const AppContext = createContext();

export const AppStateProvider = (props) => {
  const initialState = {
    loading: false,
    result: [],
    cityName: '',
    error: null,
    searchedOnce: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};
