import { useSelector } from "react-redux"
import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'
import AppWrapper from './components/AppWrapper'
import Settings from './components/settings/Settings'
import ThisMonth from "./components/thismonth/ThisMonth"
import PastMonths from "./components/pastmonths/PastMonths"
import AddExpense from "./components/addexpense/AddExpense"
import RecurringExpenses from "./components/RecurringExpenses"
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
            <Route exact path="/month/:month/:year">
              <AppWrapper page={<ThisMonth />} />
            </Route>
            <Route exact path="/past-months">
              <AppWrapper page={<PastMonths />} />
            </Route>
            <Route exact path="/add-expense">
              <AppWrapper page={<AddExpense />} />
            </Route>
            <Route exact path="/recurring-expenses">
              <AppWrapper page={<RecurringExpenses />} />
            </Route>
          </Switch>
        :
        <Landing />}
      </Router>
    </div>
  );
}

export default App;
