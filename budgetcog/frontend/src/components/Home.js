import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { Button, Grid, Typography, Box, CssBaseline, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imageBackground: {
        height: '100vh',
        backgroundImage: "url('../../static/frontend/images/backdrop.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom"
    },
    imageVector: {
        maxWidth: "55vw",
        height: "auto",
        paddingLeft: 50
    },
    vectorWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    heroTextWrapper: {
        paddingLeft: 40,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    colorText: {
        color: "#ff0000"
    },
    body: {
        paddingTop: 20,
        paddingBottom: 20
    }
}));


const Home = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <CssBaseline>
            <Navbar />
            <div className={classes.imageBackground}>
                <Grid container>
                    <Grid container item sm={12} md={5} spacing={3}>
                        <div className={classes.heroTextWrapper}>
                            <div>
                                <Typography variant="h2" style={{ fontWeight: 700 }}>Save <span className={classes.colorText}>smarter</span> with BudgetCog</Typography>
                                <Typography variant="h6" className={classes.body}>Use BudgetCog to manage and track your monthly expenses all in one place</Typography>
                                <Button variant="contained" color="primary">Register</Button>
                            </div> 
                        </div>
                    </Grid>
                    <Grid container item sm={12} md={7} spacing={3}>
                        <div className={classes.vectorWrapper}>
                            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                                <img className={classes.imageVector} src='../../static/frontend/images/phone.png' />
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </CssBaseline>
    )
}

export default Home
