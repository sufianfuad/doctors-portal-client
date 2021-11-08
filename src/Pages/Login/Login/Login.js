import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//img
import loginImg from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginInUser, signInUsingGoogle, isLoading, authError } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginInUser(loginData.email, loginData.password, location, history)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImg} alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            // type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        {/* <br /> */}

                        <Button
                            type="submit"
                            sx={{ width: '75%', m: 1 }} variant="contained">LogIn</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Create Account</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Login Successfully!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleLogin} variant="contained">Sign In With Google</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;