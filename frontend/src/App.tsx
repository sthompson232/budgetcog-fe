import { useEffect } from 'react';
import { useSelector } from "react-redux";
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import { axiosGet } from './utils/axios'


function App() {
  let name = useSelector((state: any) => {return state.user.fullName})
  let image = useSelector((state: any) => {return state.user.imageUrl})
  let email = useSelector((state: any) => {return state.user.email})
  let isAuthenticated = useSelector((state: any) => {return state.user.isAuthenticated})

  useEffect(() => {
    axiosGet('test/').then(res => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Your email address is {email}</h2>
      <img src={image} alt="" />
      {isAuthenticated ? <Logout /> : <Login />}
      
      
    </div>
  );
}

export default App;
