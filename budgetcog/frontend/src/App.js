import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    setLoggedIn(localStorage.getItem('access_token') ? true : false)
  })

  console.log(loggedIn)

  if (loggedIn) {
    return <Dashboard />
  } else {
    return <Home />
  }
}

export default App;
