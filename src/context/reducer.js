import { SEARCH, SEARCH_FAIL, SEARCH_SUCESS, SET_ERROR } from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        loading: true,
        searchedOnce: true,
      };
    }

    case SEARCH_SUCESS: {
      const { cityName, result } = action.payload;

      return {
        ...state,
        loading: false,
        cityName,
        error: null,
        result,
      };
    }

    case SET_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        searchedOnce: true,
      };
    }

    case SEARCH_FAIL: {
      const { error } = action.payload;

      return {
        ...state,
        loading: false,
        error,
      };
    }

    default:
      return state;
  }
};

export default reducer;
