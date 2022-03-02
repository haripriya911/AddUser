import User from './Components/User';
import './App.css';
import UserList from './Components/UserList';

function App() {
  return (
    <>
       <User></User>
   <UserList UserList={[]} />
   </>

  );
}

export default App;
