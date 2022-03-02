import "./UserList.css";
const UserList = (props) => {
  return (
    <div className="list">
      <ul>
        {props.Users.map((User) => (
          <li>
            {User.name}({User.age}years old)
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
