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
        textDecoration: "none",
        [theme.breakpoints.down('md')]: {
            borderColor: "#000000",
            color: "#000000",
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.up('md')]: {
        borderColor: "white",
        color: "#ffffff",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        }
    },
    appbarWrapper: {
        width: '95%',
        margin: '0 auto',
      },
    link: {
        textDecoration: "none"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
    <div>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <Typography variant="h4" className={classes.logo}>BudgetC<img className={classes.cog} src="../../static/frontend/images/cog.png"/>g</Typography>
                <Link to="/login" className={classes.link}><Button variant="outlined" className={classes.button}>Login</Button></Link>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Navbar;