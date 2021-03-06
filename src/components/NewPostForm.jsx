import React from "react";
import Moment from "moment";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { Redirect } from "react-router-dom";

function NewPosttForm(props) {
  let _title = null;
  let _post = null;

  function handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = props;
    let action = {
      type: "NEW_POST",
      post: _post.value,
      title: _title.value,
      id: v4(),
      timeCreacted: Moment()
    };
    dispatch(action);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={input => {
            _title = input;
          }}
        />
        <input
          type="text"
          ref={input => {
            _post = input;
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect()(NewPosttForm);
