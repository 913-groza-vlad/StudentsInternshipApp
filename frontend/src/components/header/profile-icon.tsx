import { Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import React from 'react';

interface ProfilePictureProps {
  profilePicture: string;
}

export const ProfileIcon: React.FC<ProfilePictureProps> = ({
  profilePicture,
}) => {
  return (
    <Box>
      {profilePicture ? (
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: profilePicture ? 'transparent' : 'lightblue',
            cursor: 'pointer',
            marginRight: 1,
          }}
        >
          <img
            src={profilePicture}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      ) : (
        <AccountCircle sx={{ marginRight: 1, cursor: 'pointer' }} />
      )}
    </Box>
  );
};
