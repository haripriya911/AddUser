import User from "./Components/User";
import UserList from "./Components/UserList";
import React,{useState} from "react";

import "./App.css";

function App() {
  const[userList,setUserList]=useState([]);
  const addUserHandler=(uname,uage)=>{
    setUserList((prevuserList)=>{
      return[...prevuserList,{name:uname,age:uage}];
    })
  }
  return (
    <>
      <User onAddUser={addUserHandler}></User>
      <UserList Users={userList} ></UserList>
    </>
  );
}

export default App;
