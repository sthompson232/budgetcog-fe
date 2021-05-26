import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, AppBar, Button, Typography, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cog: {
        [theme.breakpoints.up('xs')]: {
            width: 16
        },
        [theme.breakpoints.up('sm')]: {
            width: 20
        }
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
        textDecoration: "none",
        color: "#ffffff",
        [theme.breakpoints.up('sm')]: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 35,
        paddingRight: 35,
        }
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
                <Typography variant="h4" className={classes.logo}>BudgetC<img className={classes.cog} src="../../static/frontend/images/cog.png"/>g</Typography>
                <Link to="/login"><Button variant="outlined" className={classes.button}>Login</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar;