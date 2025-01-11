import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { StudentProfile, WorkExperience } from '../models/StudentProfile';
import { Add, Delete } from '@mui/icons-material';
import { userService } from '../services/userService';

export const StudentProfilePage = () => {
  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : { firstName: '', lastName: '', email: '', university: '' };

  const profileData = localStorage.getItem('student-profile')
    ? JSON.parse(localStorage.getItem('student-profile')!)
    : {
        user: user,
        phoneNumber: '',
        skills: [],
        experience: [],
        bio: '',
        profilePicture: '',
        resume: '',
      };

  const [profile, setProfile] = useState<StudentProfile>({
    student: user,
    phoneNumber: profileData.phoneNumber,
    skills: profileData.skills,
    fieldOfStudy: profileData.fieldOfStudy,
    yearOfStudy: profileData.yearOfStudy,
    experience: profileData.experience,
    bio: profileData.bio,
    profilePicture: profileData.profilePicture,
    resume: profileData.resume,
  });

  const [newSkill, setNewSkill] = useState<string>('');
  const [newExperience, setNewExperience] = useState<WorkExperience>({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in profile.student) {
      setProfile({
        ...profile,
        student: { ...profile.student, [name]: value },
      });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSkillAdd = () => {
    if (newSkill.trim()) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const handleSkillDelete = (index: number) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((_, i) => i !== index),
    });
  };

  const handleExperienceAdd = () => {
    if (
      newExperience.company.trim() &&
      newExperience.position.trim() &&
      newExperience.startDate.trim() &&
      newExperience.endDate.trim()
    ) {
      setProfile({
        ...profile,
        experience: [...profile.experience, newExperience],
      });
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleExperienceDelete = (index: number) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter((_, i) => i !== index),
    });
  };

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Container
      sx={{
        maxWidth: 'sm',
        color: 'black',
      }}
    >
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h4" gutterBottom>
          Student Profile
        </Typography>

        {/* Personal Details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, ml: 2 }}>
            Personal Details
          </Typography>
          <TextField
            label="First Name"
            name="firstName"
            value={profile.student.firstName}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '70%' }}
            autoComplete="off"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={profile.student.lastName}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '70%' }}
            autoComplete="off"
          />
          <TextField
            label="Email"
            name="email"
            value={profile.student.email}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2, width: '70%' }}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '70%' }}
            autoComplete="off"
          />
        </Box>

        {/* Education */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ mb: 2, ml: 2 }}>
            Education
          </Typography>
          <TextField
            label="University"
            name="university"
            value={profile.student.university}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '50%' }}
            autoComplete="off"
          />
          <TextField
            label="Field Of Study"
            name="fieldOfStudy"
            value={profile.fieldOfStudy}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '50%' }}
            autoComplete="off"
          />
          <TextField
            label="Year Of Study"
            name="yearOfStudy"
            value={profile.yearOfStudy}
            onChange={handleInputChange}
            sx={{ mb: 2, width: '50%' }}
            autoComplete="off"
          />
        </Box>

        {/* Skills */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Add Skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={handleSkillAdd}>
              <Add />
            </Button>
          </Box>
          <List
            sx={{
              width: '100%',
              borderRadius: 2,
              mt: 1,
            }}
          >
            {profile.skills.map((skill, index) => (
              <ListItem
                sx={{
                  borderBottom: '1px solid rgba(198, 198, 198, 0.7)',
                }}
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => handleSkillDelete(index)}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Work Experience */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Company"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Position"
              value={newExperience.position}
              onChange={(e) =>
                setNewExperience({ ...newExperience, position: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Start Date"
              value={newExperience.startDate}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  startDate: e.target.value,
                })
              }
              fullWidth
            />
            <TextField
              label="End Date"
              value={newExperience.endDate}
              onChange={(e) =>
                setNewExperience({ ...newExperience, endDate: e.target.value })
              }
              fullWidth
            />
            <Button onClick={handleExperienceAdd} variant="contained">
              <Add />
            </Button>
          </Box>
          <List>
            {profile.experience.map((exp, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => handleExperienceDelete(index)}
                  >
                    <Delete />
                  </IconButton>
                }
                sx={{
                  borderBottom: '1px solid rgba(198, 198, 198, 0.7)',
                }}
              >
                <ListItemText
                  primary={`${exp.position} at ${exp.company}`}
                  secondary={`${exp.startDate} - ${exp.endDate}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Bio */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ mb: 2, ml: 2 }}>
            About
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Bio"
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            localStorage.setItem('student-profile', JSON.stringify(profile));
            localStorage.setItem('user', JSON.stringify(profile.student));
            userService.updateUser(profile.student);
            userService.updateStudentProfile(profile);
            setMessage('Profile saved successfully');
            setVisible(true);
          }}
          sx={{ mt: 2, mb: 5, width: '50%', alignSelf: 'center' }}
        >
          Save Profile
        </Button>
      </Box>

      <Snackbar
        open={visible}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
