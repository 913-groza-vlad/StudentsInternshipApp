import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import {
  Description as FileIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { StudentProfile } from '../../models/StudentProfile';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

interface ResumeUploaderProps {
  profile: StudentProfile;
  setProfile: (profile: StudentProfile) => void;
}

const UploadResume: React.FC<ResumeUploaderProps> = ({
  profile,
  setProfile,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setProfile({
        ...profile,
        resume: file.name,
      });
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleRemoveFile = () => {
    setProfile({
      ...profile,
      resume: '',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        mb: 2,
        ml: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Resume:
      </Typography>

      {profile.resume ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          <FileIcon sx={{ color: 'gray' }} />
          <Typography variant="body1">{profile.resume}</Typography>
          <IconButton onClick={handleRemoveFile} color="error" size="small">
            <CloseIcon />
          </IconButton>
        </Stack>
      ) : (
        <>
          <Button
            variant="contained"
            component="label"
            sx={{ textTransform: 'none' }}
          >
            <NoteAddIcon />
            <input
              hidden
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
            />
          </Button>
        </>
      )}
    </Box>
  );
};

export default UploadResume;
