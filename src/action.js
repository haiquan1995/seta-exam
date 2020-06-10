import { GET_DATA_SUCCESS, POST_DATA_SUCCESS } from "./constant";

export const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
};

export const postDataSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    data,
  };
};
