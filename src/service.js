import axios from "axios";
import { getDataSuccess, postDataSuccess } from "./action";

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(getDataSuccess(res.data)));
  };
};

export const postData = (data) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => dispatch(postDataSuccess(res.data)));
  };
};
