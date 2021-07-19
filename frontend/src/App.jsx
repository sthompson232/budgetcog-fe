import { useEffect } from 'react'
import { useSelector } from "react-redux"
import Landing from './components/landing/Landing'
import Dashboard from './components/Dashboard'
import AppWrapper from './components/AppWrapper'
import Settings from './components/Settings'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  let isAuthenticated = useSelector((state) => {return state.user.isAuthenticated})

  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <AppWrapper page={<Dashboard />}/> : <Landing />} 
          </Route>
          <Route exact path="/settings">
            <AppWrapper page={<Settings />} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
