import axios from 'axios';

export const search = async (searchText) => {
  return await axios(`/search/?searchText=${searchText}`);
};
