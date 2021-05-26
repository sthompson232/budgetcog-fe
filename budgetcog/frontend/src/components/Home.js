import React from 'react'
import { Button, Grid, Typography, CardMedia, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: "url('../../static/frontend/images/backdrop.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover"
    },
}));


const Home = () => {
    const classes = useStyles();
    return (
        <CssBaseline>
            <div className={classes.root}>
                <Grid container>
                    <Grid container item xs={12} sm={6} spacing={3}>

                    </Grid>
                    <Grid container item xs={12} sm={6} spacing={3}>
                        <Button color="primary" variant="contained">Default</Button>
                    </Grid>
                    <Grid container item xs={12} sm={6} spacing={3}>
                        <Typography variant="h1">Save smarter with BudgetCog</Typography>
                    </Grid>
                </Grid>
            </div>
        </CssBaseline>
    )
}

export default Home
