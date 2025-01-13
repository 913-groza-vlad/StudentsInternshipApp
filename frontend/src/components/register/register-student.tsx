import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { StudentRegisterRequest } from '../../models/RegisterRequest';
import { RegisterStudentUser } from './register-service';
import { useNavigate } from 'react-router-dom';

export const StudentRegistrationForm = () => {
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

    const email = e.currentTarget.email.value.trim();
    const firstName = e.currentTarget.firstName.value.trim();
    const lastName = e.currentTarget.lastName.value.trim();
    const university = e.currentTarget.university.value.trim();
    const password = e.currentTarget.password.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !university ||
      !password ||
      !confirmPassword
    ) {
      setMessage('All fields are required');
      setSeverity('error');
      setVisible(true);
      return;
    }

    if (
      passwordMatchError ||
      password !== e.currentTarget.confirmPassword.value
    ) {
      setMessage('Passwords do not match');
      setSeverity('error');
      setVisible(true);
      return;
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long');
      setSeverity('error');
      setVisible(true);
      return;
    }

    const registerRequest: StudentRegisterRequest = {
      email,
      password,
      firstName,
      lastName,
      university,
    };

    if (RegisterStudentUser(registerRequest)) {
      setMessage('You have registered successfully');
      setSeverity('success');
      setVisible(true);
      setTimeout(() => navigate('/login'), 1000);
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
          display: 'flex',
          flexDirection: 'column',
          mt: 1,
          gap: 2,
          alignItems: 'center',
        }}
      >
        <TextField
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          autoComplete="off"
        />
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
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
          id="university"
          label="University"
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
          sx={{ mt: 3, mb: 1, maxWidth: '80%' }}
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
