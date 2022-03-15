import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate, Link as RouteLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login } from "../services/AuthService";
import Copyright from './Copyright';
import AuthPage from './common/AuthPage';
import MailIcon from '../images/iconEmail.png'
import PassIcon from '../images/iconPassword.png'
import GoogleImg from '../images/google.png'
import FacebookImg from '../images/facebook.png'
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get('email');
    let password = data.get('password');

    console.log({
      email: email,
      password: password,
    });

    let validEmail = validateEmail(email);
    let validPassword = validatePassword(password);

    if (!validEmail || !validPassword) {
      return;
    }

    // attemp login
    login(email, password).then(loggedIn => {

      if (loggedIn) {
        navigate("/dashboard");
      } else {
        setLoginError("Sorry something went wrong, try again later.");
      }


    });
  };

  function validateEmail(email) {
    if (email.length > 255 || email.length <= 0) {
      setEmailError("Email no more than 255 or less than 0");
      return false;
    }

    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if ( re.test(email) ) {
    //   console.log("he valid")
    //     // this is a valid email address
    //     // call setState({email: email}) to update the email
    //     // or update the data in redux store.
    //     setEmailError("");
    // }
    // else {
    //     // invalid email, maybe show an error to the user.
    //     setEmailError("This ain't a email bro");
    //     return false;
    // }


    setEmailError("");
    return true;
  }

  function validatePassword(password) {
    if (password.length > 255 || password.length <= 0) {
      setPasswordError("Password no more than 255 or less than 0");
      return false;
    }

    setPasswordError("");
    return true;
  }



  return (
    <AuthPage text1='Welcome Back' text2='Sign in to continue access pages'>

      <Container component="main" maxWidth="xs" className='login'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar> */}
          <Typography component="h1" variant="h5" style={{color:'#2B395B', fontWeight:'bold'}}>
            Login With Email
          </Typography>
          <p className='text-center mt-3' style={{ color: '#929EBA', width: '80%', margin: 'auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
          </p>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              error={emailError != ""}
              helperText={emailError}
              onChange={validateEmail}
              required
              fullWidth
              label='Email Address'
              id="email"
              name="email"
              autoComplete="email"
              autoFocus

              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img style={{ position: 'absolute', left: '10px', marginRight: '20px' }} src={MailIcon} alt='' />
                  </InputAdornment>
                )
              }}
              style={{background:'#F9F9F9'}}

            />
            <TextField
              margin="normal"
              error={passwordError != ""}
              helperText={passwordError}
              onChange={validatePassword}
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              style={{background:'#F9F9F9'}}
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position="end">
                      <img style={{ position: 'absolute', left: '10px', marginRight: '20px' }} src={PassIcon} alt='' />
                    </InputAdornment>
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  </>
                )
              }}
            />
            <Typography variant="overline" display={loginError != "" ? "block" : "none"}>
              {loginError}
            </Typography>

            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{background: 'linear-gradient(90deg, #008720 0%, #004A47 100%)'}}
            >
              Sign In
            </Button>
            <p className='text-center'>Forgot your password? <a href="#" className='resetLink'>Reset here</a></p>
            <div className='d-flex align-items-center mt-5 justify-content-between'>
              <div>
                <img style={{marginRight:'20px'}} src={GoogleImg} alt="" />
                <img  src={FacebookImg} alt="" />
              </div>
              <div className='text-center'>
                <span style={{fontWeight:'bold'}}>Haven't Account? <RouteLink to="/register" className='mylink'> Register</RouteLink></span>
              </div>
            </div>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </AuthPage>
  )
}

export default Login