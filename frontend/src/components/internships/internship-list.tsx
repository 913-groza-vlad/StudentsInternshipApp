import { Box, List, ListItem, Card, CardContent, Typography, Button, TextField, DialogContent, DialogTitle, Dialog, Alert, DialogActions } from '@mui/material'
import { Internship } from '../../models/Internship'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';


export const InternshipList = (props: PropsInternshipList) => {
  const [appliedInternships, setAppliedInternships] = useState<string[]>([]);
  const [editingInternship, setEditingInternship] = useState<Internship | null>(null);
  const [updatedInternship, setUpdatedInternship] = useState<Internship | null>(null);
  const [message, setMessage] = useState<string>('');
  
  const handleApply = (title: string) => {
    setAppliedInternships((prev) => [...prev, title]);
  };

  const handleEdit = (internship: Internship) => {
    setEditingInternship(internship);
    setUpdatedInternship(internship);
  };

  const handleSave = () => {
    if (updatedInternship) {
      setEditingInternship(null);
      console.log("Updated Internship:", updatedInternship);
    }
  };

  const handleChange = (field: keyof Internship, value: string) => {
    if (updatedInternship) {
      setUpdatedInternship({ ...updatedInternship, [field]: value });
    }
  };

  const handleClose = () => {
    setEditingInternship(null);
  }


  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <List>
        {props.internships.map((internship, index) => (
          <ListItem key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {internship.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {internship.summary}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${internship.salary.toString()}/month
                </Typography>

                {props.userType == 'student' &&
                  <Button 
                    variant="contained"
                    color={appliedInternships.includes(internship.title) ? 'success' : 'primary'} // Change color to green if applied
                    sx={{ marginTop: 2 }}
                    onClick={() => handleApply(internship.title)} 
                    startIcon={appliedInternships.includes(internship.title) ? <CheckCircleIcon /> : null} // Show checkmark if applied
                  >
                    {appliedInternships.includes(internship.title) ? 'Applied' : 'Apply'}
                  </Button>
                }

                {props.userType == 'company' &&
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ marginTop: 2 }}
                    onClick={() => handleEdit(internship)}
                  > 
                    Edit Internship
                  </Button>
                }
              </CardContent>
            </Card>
          </ListItem>
        ))}

        
        {editingInternship && (
          <Dialog open={editingInternship != null} onClose={handleClose}>
            {message && <Alert severity={message === 'Internship added successfully!' ? 'success' : 'error'}>{message}</Alert>}

            <DialogTitle>Edit Internship</DialogTitle>
            

            <DialogContent>
              <Box sx={{ marginTop: 4 }}>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={updatedInternship?.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Summary"
                  variant="outlined"
                  value={updatedInternship?.summary}
                  onChange={(e) => handleChange('summary', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Salary"
                  variant="outlined"
                  type="number"
                  value={updatedInternship?.salary}
                  onChange={(e) => handleChange('salary', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </List>
    </Box>
  )
}

type PropsInternshipList = {
  internships: Array<Internship>,
  setInternships: (internships: Array<Internship>) => void,
  userType: string
}