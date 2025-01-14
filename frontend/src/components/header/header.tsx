import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : {};

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('user');
    localStorage.removeItem('student-profile');
    localStorage.removeItem('company-profile');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        px: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <AccountCircle
            onClick={() => {
              if (user.role === 'student') navigate('/student-profile');
              else if (user.role === 'company') navigate('/company-profile');
            }}
            sx={{ marginRight: 1, cursor: 'pointer' }}
          />
          <Typography variant="body1" color="inherit">
            {user.role === 'student'
              ? user.firstName + ' ' + user.lastName
              : user.companyName}
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
};
