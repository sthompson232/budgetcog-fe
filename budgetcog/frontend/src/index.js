import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import {
  Route,
  HashRouter as Router,
  Switch
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

// MATERIAL UI THEME
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000"
    },
    secondary: {
      main: blue[500],
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
   "fontFamily": `'Montserrat', sans-serif`,
   "fontSize": 15,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
  spacing: 8,
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </React.StrictMode>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));
