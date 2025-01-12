import { AccountCircle } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { StudentProfile } from '../../models/StudentProfile';

interface ProfilePictureUploaderProps {
  profile: StudentProfile;
  setProfile: (profile: StudentProfile) => void;
}

export const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({
  profile,
  setProfile,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({
          ...profile,
          profilePicture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative', // Ensure hover styling applies to children
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover .hover-text': {
          opacity: 1, // Trigger on hover of the parent container
        },
      }}
    >
      <Box
        sx={{
          width: 125,
          height: 125,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: profile.profilePicture ? 'transparent' : 'lightblue',
          cursor: 'pointer',
          border: profile.profilePicture ? 'none' : '1px dashed grey',
          '&:hover .hover-text': {
            opacity: 1,
          },
        }}
      >
        {profile.profilePicture ? (
          <img
            src={profile.profilePicture}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <AccountCircle sx={{ fontSize: 60, color: 'white' }} />
        )}
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
          aria-label="Upload Profile Picture"
          title=""
        />
      </Box>

      <Typography
        className="hover-text"
        sx={{
          position: 'relative',
          top: 10,
          color: 'white',
          fontSize: 12,
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          backgroundColor: 'rgba(137, 137, 137, 0.5)',
          borderRadius: 5,
          padding: '5px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        Upload Profile Picture
      </Typography>
    </Box>
  );
};
