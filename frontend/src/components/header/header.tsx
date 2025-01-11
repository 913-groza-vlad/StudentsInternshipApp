import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Box } from '@mui/material';

export const Header = () => {
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
      <AccountCircle 
        sx={{
          marginLeft: 'auto',
          cursor: 'pointer'
        }}
      />
    </AppBar>
  )
} 