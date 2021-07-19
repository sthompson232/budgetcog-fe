import { useSelector } from "react-redux"
import Landing from './components/landing/Landing'
import Dashboard from './components/Dashboard';


function App() {
  let isAuthenticated = useSelector((state: any) => {return state.user.isAuthenticated})

  return (
    <div className="App">
      {isAuthenticated ? <Dashboard /> : <Landing />} 
    </div>
  );
}

export default App;
