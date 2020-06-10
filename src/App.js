import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormComponent from "./FormComponent";
import "./App.css";

import { getData, postData } from "./service";

const findAllItemShowMostInArray = (array) => {
  let max = 0;
  const countDataShow = array.reduce((result, item) => {
    result[item.length] = (result[item.length] + 1) | 0;
    return result;
  }, {});
  for (const item in countDataShow) {
    if (max < countDataShow[item]) {
      max = Number(item);
    }
  }
  const newArray = array.filter((item) => item.length === max);
  console.log(newArray, "newArray");
  return newArray;
};

const sumIntTop2InArray = (array) => {
  array.sort((a, b) => a - b);
  console.log(array[array.length - 1] + array[array.length - 2]);
  return array[array.length - 1] + array[array.length - 2];
};

function App({ getData, postData, data }) {
  useEffect(() => {
    getData();
  }, []);

  sumIntTop2InArray([-1, -4, -2, -3, -5, -100]);
  findAllItemShowMostInArray(["a", "ab", "abc", "cd", "def", "gh"]);

  const onSubmit = (e) => {
    const form = new FormData(e.target);
    const title = form.get("title");
    const body = form.get("body");
    const userId = form.get("userId");
    const newValue = { title: title, body: body, userId: userId };
    postData(newValue);
    e.preventDefault();
  };

  return (
    <>
      <FormComponent onSubmit={onSubmit} />
      <ul>
        <li className="head">
          <span>ID</span>
          <span>User Id</span>
          <span>Title</span>
          <span>Body</span>
        </li>
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.userId}</span>
            <span>{item.title}</span>
            <span>{item.body}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getData: getData,
      postData: postData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
