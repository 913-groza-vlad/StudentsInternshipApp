import { Box, Button, Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentRegistrationForm } from '../components/register/register-student';
import { CompanyRegistrationForm } from '../components/register/register-company';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<'student' | 'company'>('student');

  const handleRoleChange = (newRole: 'student' | 'company') => {
    setRole(newRole);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50vw',
        height: '90vh',
        marginTop: '5vh',
      }}
    >
      <Box
        sx={{
          marginTop: 0,
          marginBottom: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Button
          variant={role === 'student' ? 'contained' : 'outlined'}
          onClick={() => handleRoleChange('student')}
          style={{
            textTransform: 'none',
            fontSize: '1.2rem',
          }}
        >
          Create a student account
        </Button>
        <Button
          variant={role === 'company' ? 'contained' : 'outlined'}
          onClick={() => handleRoleChange('company')}
          style={{
            textTransform: 'none',
            fontSize: '1.2rem',
          }}
        >
          Create a company account
        </Button>
      </Box>

      {role === 'student' ? (
        <StudentRegistrationForm />
      ) : (
        <CompanyRegistrationForm />
      )}

      <Button
        onClick={() => navigate('/login')}
        style={{
          textTransform: 'none',
          marginTop: '45px',
        }}
      >
        Already have an account? Log in
      </Button>
    </Container>
  );
};
