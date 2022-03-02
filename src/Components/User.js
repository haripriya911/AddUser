import ErrorModel from "./ErrorModel";
import "./User.css";
import React, { useState } from "react";
const User = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid input name and age",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "invalid input",
        message: "please enter a valid input age>1",
      });
      return;
    }
    props.onAddUser(enterName, enterAge);
    event.preventDefault();

    console.log(enterName, enterAge);
  };

  const userNameHandler = (event) => {
    setEnterName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={addUserHandler}>
        <div className="box">
          <div className="box-label">
            <label>Username</label>
            <input
              type="text"
              value={enterName}
              onChange={userNameHandler}
            ></input>
            <label>Age</label>
            <input
              type="number"
              value={enterAge}
              onChange={userAgeHandler}
            ></input>
            <div className="user">
              <button className="adduser" type="submit">
                AddUser
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default User;
