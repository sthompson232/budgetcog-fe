import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const history = useHistory();
    console.log("dashboard", props.currentUser.loggedIn)
    console.log("Hello")

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        history.push("/")
    }

    return (
        <div>
            Dashboard
            <Button
                color="primary"
                variant="outlined"
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    )
}

export default Dashboard
