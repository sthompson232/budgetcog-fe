import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
    FormControlLabel, 
    Checkbox,  
    Grid, 
    Typography, 
    Container, 
    Card,
    Box,
    makeStyles 
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "95vh"
      },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        color: "#ff0000",
        textDecoration: "none"
    },
    centerAvatar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
  }));


const Register = () => {
    const classes = useStyles();
    return (
        <CssBaseline>
        <Navbar />
            <div className={classes.imageBackground}>
                <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                <Card>
                <Box p={6}>
                <div  className={classes.centerAvatar}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                </div>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password1"
                        label="Password"
                        type="password"
                        id="password1"
                        autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                        autoComplete="current-password"
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/login" variant="body2" className={classes.link}>
                        Already have an account? Sign in
                        </Link>
                    </Grid>
                    </Grid>
                </form>
                </Box>
            </Card>
            </div>
        </Container>
      </div>
    </CssBaseline>
    )
}

export default Register
