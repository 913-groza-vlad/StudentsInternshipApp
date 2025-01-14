import {
    Alert,
    Box,
    Button,
    Container,
    Snackbar,
    TextField,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  import { Company } from '../models/Company';
  import { companyService } from '../services/companyService';
  
  export const CompanyProfilePage = () => {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : { companyName: '', email: '', location: '' };
  
    const companyData = localStorage.getItem('company-profile')
      ? JSON.parse(localStorage.getItem('company-profile')!)
      : {
          id: user.id,
          companyName: user.companyName,
          industry: '',
          mission: '',
          location: user.location,
        };
  
    const [company, setCompany] = useState<Company>(companyData);
  
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCompany({ ...company, [name]: value });
    };
  
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
            Company Profile
          </Typography>
  
          {}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, ml: 2 }}>
              Company Details
            </Typography>
            <TextField
              label="Company Name"
              name="companyName"
              value={company.companyName}
              InputProps={{ readOnly: true }}
              sx={{ mb: 2, width: '70%' }}
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              InputProps={{ readOnly: true }}
              sx={{ mb: 2, width: '70%' }}
            />
            <TextField
              label="Location"
              name="location"
              value={company.location}
              onChange={handleInputChange}
              sx={{ mb: 2, width: '70%' }}
            />
            <TextField
              label="Industry"
              name="industry"
              value={company.industry}
              onChange={handleInputChange}
              sx={{ mb: 2, width: '70%' }}
            />
          </Box>
  
          {}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ mb: 2, ml: 2 }}>
              Mission
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Mission Statement"
              name="mission"
              value={company.mission}
              onChange={handleInputChange}
            />
          </Box>
  
          {}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              localStorage.setItem('company-profile', JSON.stringify(company));
              companyService.updateCompany(company);
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
  