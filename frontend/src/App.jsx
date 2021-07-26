import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Settings from './components/settings/Settings'
import ThisMonth from "./components/thismonth/ThisMonth"
import PastMonths from "./components/pastmonths/PastMonths"
import AddExpense from "./components/addexpense/AddExpense"
import AddRecurringExpense from "./components/addexpense/AddRecurringExpense"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoginPage from './components/landing/LoginPage'


const App = () => {


  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
              <PrivateRoute page={<Dashboard />} />
            </Route>
            <Route exact path="/settings">
              <PrivateRoute page={<Settings />} />
            </Route>
            <Route exact path="/month/:month/:year">
              <PrivateRoute page={<ThisMonth />} />
            </Route>
            <Route exact path="/past-months">
              <PrivateRoute page={<PastMonths />} />
            </Route>
            <Route exact path="/add-expense/:month/:year">
              <PrivateRoute page={<AddExpense />} />
            </Route>
            <Route exact path="/add-recurring-expense">
              <PrivateRoute page={<AddRecurringExpense />} />
            </Route>
          </Switch>
        

      </Router>
    </div>
  );
}

export default App;
