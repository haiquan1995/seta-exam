import React from "react";

function FormComponent({ onSubmit }) {
  return (
    <form method="POST" onSubmit={onSubmit} className="form">
      <div>
        <label>title</label>
        <input type="text" name="title"></input>
      </div>
      <div>
        <label>body</label>
        <input type="text" name="body"></input>
      </div>
      <div>
        <label>userId</label>
        <input type="text" name="userId"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
