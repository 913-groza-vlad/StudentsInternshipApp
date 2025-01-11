import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('user');
  }

  return (
    <AppBar 
      position="fixed"
      sx={{
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        px: 5
      }}
    >
      <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>

        <AccountCircle 
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer'
          }}
        />
      </div>
    </AppBar>
  )
} 