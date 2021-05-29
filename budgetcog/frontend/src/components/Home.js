import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
    Button, 
    Grid, 
    Typography, 
    Box, 
    CssBaseline, 
    Container, 
    CardMedia 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imageBackground: {
        height: '100vh',
        backgroundImage: "url('../../static/frontend/images/backdrop.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        [theme.breakpoints.up('sm')]: {
            backgroundPositionX: "75%",
            backgroundPositionY: "bottom"
        },
        [theme.breakpoints.down('sm')]: {
            backgroundPositionX: "50%",
            backgroundPositionY: "center"
        }
    },
    imageVector: {
        maxWidth: "50vw",
        height: "auto",
    },
    vectorWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    heroTextWrapper: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: 100,
        },
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    colorText: {
        [theme.breakpoints.down('md')]: {
            color: "#000000"
        },
        [theme.breakpoints.up('md')]: {
            color: "#ff0000"
        },
    },
    body1: {
        paddingTop: 20,
        paddingBottom: 20
    },
    smallerText: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            backdropFilter: `blur(20px)`,
            boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
            borderRadius: theme.spacing(2),
        }
    },
    registerLink: {
        textDecoration: "none",
        color: "#ffffff",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
    }
}));


const Home = () => {
    
    const classes = useStyles();
    return (
        <CssBaseline>
            <Navbar />
            <div className={classes.imageBackground}>
                <Container>
                    <Grid container>
                        <Grid container item sm={12} md={6} spacing={3} className={classes.heroTextWrapper}>
                            <CardMedia className={classes.smallerText}>
                                <Box px={4} py={2}>
                                    <Typography variant="h2" style={{ fontWeight: 700 }}>Save <span className={classes.colorText}>smarter</span> with BudgetCog</Typography>
                                    <Typography variant="h6" className={classes.body1}>Use BudgetCog to manage and track your monthly expenses all in one place</Typography>
                                    <Button variant="contained" color="primary" size="large"><Link className={classes.registerLink} to="/register">Register</Link></Button>
                                </Box>
                            </CardMedia> 
                        </Grid>
                        <Grid container item sm={12} md={6} spacing={3}>
                            <div className={classes.vectorWrapper}>
                                <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                                    <img className={classes.imageVector} src='../../static/frontend/images/phone.png' />
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </CssBaseline>
    )
}

export default Home
