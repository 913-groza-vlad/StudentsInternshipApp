import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { CompanyRegisterRequest } from '../../models/RegisterRequest';
import { registerCompanyUser } from './register-service';
import { useNavigate } from 'react-router-dom';

export const CompanyRegistrationForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
    if (e.target.value === '') {
      setPasswordMatchError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerRequest: CompanyRegisterRequest = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      companyName: e.currentTarget.companyName.value,
      location: e.currentTarget.location.value,
    };
    if (
      passwordMatchError ||
      registerRequest.password !== e.currentTarget.confirmPassword.value
    ) {
      setMessage('Passwords do not match');
      setSeverity('error');
      setVisible(true);
      return;
    }

    if (registerCompanyUser(registerRequest)) {
      setMessage('You have registered successfully');
      setSeverity('success');
      setVisible(true);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } else {
      setMessage('User already exists');
      setSeverity('error');
      setVisible(true);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container maxWidth="xs" sx={{ height: 500 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <TextField
          required
          fullWidth
          id="companyName"
          label="Company Name"
          autoFocus
          autoComplete="off"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
        />
        <TextField
          required
          fullWidth
          id="location"
          label="Location"
          autoComplete="off"
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={handlePasswordChange}
        />
        <TextField
          required
          fullWidth
          name="confirmPassword"
          label="Confirm password"
          type="password"
          id="confirm-password"
          error={passwordMatchError}
          onChange={handleConfirmPasswordChange}
          helperText={passwordMatchError ? 'Passwords do not match' : ''}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, maxWidth: '80%' }}
        >
          Submit
        </Button>
      </Box>
      <Snackbar
        open={visible}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
