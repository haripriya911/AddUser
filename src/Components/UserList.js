import "./UserList.css";

const UserList = (props) => {
let value=props.Users.length!=0;
  return (
    <>
      <div className="list">
       {value?<ul>
          {props.Users.map((User) => (
            <li>
              {User.name}({User.age}years old)
            </li>
          ))}
        </ul>:<h2>NO USER FOUND</h2>}
      </div>
    </>
  );
};

export default UserList;
