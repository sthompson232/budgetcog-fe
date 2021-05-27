import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import Navbar from './Navbar';
import { 
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
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
      marginTop: theme.spacing(1),
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


const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [tokenAuth, { error }] = useMutation(LOGIN);

    const login = () => {
      tokenAuth({
        variables: {
          email: email,
          password: password
        }
      })

      if (error) {
        console.log(error);
      }
    };

    return (
        <CssBaseline>
        <Navbar />
        <div className={classes.imageBackground}>
        <Container component="main" maxWidth="sm">

      <div className={classes.paper}>
          <Card>
              <Box p={6}>
                  <div className={classes.centerAvatar}>
                  <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2" className={classes.link}>
                {"Don't have an account? Sign Up"}
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

export default Login
