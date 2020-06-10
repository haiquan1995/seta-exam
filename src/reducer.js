import { combineReducers } from "redux";
import { GET_DATA_SUCCESS, POST_DATA_SUCCESS } from "./constant";

const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    default:
      return state;
  }
};

export default combineReducers({
  dataReducer: dataReducer,
});
