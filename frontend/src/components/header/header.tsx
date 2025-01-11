import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

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
