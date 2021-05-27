import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from './graphql/Queries';

function App() {

  const {error, loading, data} = useQuery(CURRENT_USER)
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    if (data) {
      console.log(data.me)
      setCurrentUser([data.me])
    }
  }, [data])

  return (
    <div>
      {currentUser}
      {currentUser ? <Home /> : <Dashboard />}
    </div>
  );
}

export default App;
