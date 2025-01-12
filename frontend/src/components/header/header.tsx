import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('user');
    localStorage.removeItem('student-profile');
  };

  return (
    <AppBar
      position="static"
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
        <AccountCircle
          onClick={() => navigate('/student-profile')}
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
        />
      </Box>
    </AppBar>
  );
};
