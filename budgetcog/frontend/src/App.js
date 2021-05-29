import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {

  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    verified: false,
    email: ""
  });

  useEffect(() => {
    setCurrentUser({
      ...currentUser,
      loggedIn: localStorage.getItem('access_token') ? true : false
    });
  });

  if (currentUser.loggedIn) {
    return <Dashboard currentUser={currentUser} />
  } else {
    return <Home />
  }
}

export default App;
