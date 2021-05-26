import React from 'react';
import { makeStyles, AppBar, Button, Typography, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cog: {
        width: 20, 
    },
    appbar: {
        background: "none",
        paddingTop: 30
    },
    logo: {
        color: "#000000",
        flexGrow: '1'
    },
    button: {
        borderRadius: 5,
        borderColor: "white",
        color: "white"
    },
    appbarWrapper: {
        width: '95%',
        margin: '0 auto',
      },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
    <div>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <Typography variant="h4" position="fixed" className={classes.logo}>BudgetC<img className={classes.cog} src="../../static/frontend/images/cog.png"/>g</Typography>
                <Button variant="outlined" className={classes.button}>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar;