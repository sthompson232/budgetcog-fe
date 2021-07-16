import { useEffect } from 'react';
import { useSelector } from "react-redux";
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import axios from 'axios'


function App() {
  let name = useSelector((state: any) => {return state.user.fullName})
  let image = useSelector((state: any) => {return state.user.imageUrl})
  let email = useSelector((state: any) => {return state.user.email})

  useEffect(() => {
    axios.get('http://localhost:8000/api/test/', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        accept: 'application/json',
      }
    })
    .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
            <h1>Hello {name}</h1>
      <h2>Your email address is {email}</h2>
      <img src={image} alt="" />
      <Login />
      <Logout />
    </div>
  );
}

export default App;
