import {useState} from 'react';
import './App.css';
import UserInput from './components/User/UserInput';
import Users from './components/User/Users';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    })
  }
  return (
    <div>
      <UserInput handleUserSubmit={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
