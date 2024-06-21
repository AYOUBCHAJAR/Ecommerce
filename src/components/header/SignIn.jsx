import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, Dialog, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import SignUp from "./SignUp";

export default function SignIn() {
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const formRef = React.useRef(null); // Reference to the form

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    axios.post('http://localhost:8080/api/users/login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('User logged in successfully', response.data);
        setSuccess(true);
        setError(null);
        resetForm();
      })
      .catch(error => {
        console.error('There was an error logging in the user!', error);
        setError('Failed to log in. Please check your credentials and try again.');
        setSuccess(false);
      });
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const [up, setup] = React.useState(false);

  const handleOpenClick = () => {
    setup(true);
  };

  const handleCloseClick = () => {
    setup(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#81C4FA' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {success && (
          <Typography variant="body2" color="success.main">
            User logged in successfully!
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} ref={formRef}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handleOpenClick}>
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Typography color="text.secondary" align="center" sx={{ mt: 2, mb: 3 }}>
          {'Copyright © '}
          <Link color="inherit" href="http://localhost:5173/">
            ElecTech
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
      <Dialog open={up}
        onClose={handleCloseClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <SignUp />
      </Dialog>
    </Container>
  )
}
