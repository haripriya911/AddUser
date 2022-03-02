import "./UserList.css"
const Users=(props)=>{
    return(
        <div className="list">
        <ul>
            {props.Users.map((Users)=>(
                <li>
                    {Users.name}({Users.age}years old)
                </li>
            ))}
            
        </ul>
        </div>
    );
};
export  default UserList;