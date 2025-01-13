import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginUser } from './login-service';
import { useState } from 'react';
import { userService } from '../../services/userService';

export const LoginComponent = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginRequest: LoginRequest = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    if (LoginUser(loginRequest)) {
      const user = userService.getUserByEmail(loginRequest.username);
      const studentProfile = userService.getStudentProfile(user!);
      localStorage.setItem('user', JSON.stringify(user));
      if (studentProfile)
        localStorage.setItem('student-profile', JSON.stringify(studentProfile));
      navigate('/main/' + user?.role);
    } else {
      setMessage('Invalid username or password. Please try again.');
      setVisible(true);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container component={'main'} maxWidth={'xs'}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }} variant="h6">
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmitLogin}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="off"
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
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '80%' }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={visible}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
