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


const App = () => {
  let isAuthenticated = useSelector((state) => {return state.user.isAuthenticated})

  return (
    <div className="App">
      <Router>
        {isAuthenticated ? 
          <Switch>
            <Route exact path="/">
              <AppWrapper page={<Dashboard />} />
            </Route>
            <Route exact path="/settings">
              <AppWrapper page={<Settings />} />
            </Route>
          </Switch>
        :
        <Landing />}
      </Router>
    </div>
  );
}

export default App;
