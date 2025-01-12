import { InternshipList } from "../components/internships/internship-list"
import { Internship } from "../models/Internship"
import { Button, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Alert } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


export const CompanyInternshipsPage = (props: PropsCompanyInternshipsPage) => {
  const [open, setOpen] = useState(false);

  // State for form fields
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [salary, setSalary] = useState('');

  const [message, setMessage] = useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
    setMessage('');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddInternship = () => {
    if (!title || !summary || !salary) {
      setMessage('All fields are required.');
      return;
    }

    setMessage('Internship added successfully!');

    props.setInternships([...props.internships, {
      title: title,
      summary: summary,
      salary: Number(salary)
    }]);

    setTitle('');
    setSummary('');
    setSalary('');
    handleClose();
  };


  return (
    <>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          <AddIcon />
          Add Internship
        </Button>

        <Dialog open={open} onClose={handleClose}>
          {message && <Alert severity={message === 'Internship added successfully!' ? 'success' : 'error'}>{message}</Alert>}

          <DialogTitle>Add Internship</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Internship Title"
              fullWidth
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              margin="dense"
              label="Summary"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setSummary(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              margin="dense"
              label="Salary"
              fullWidth
              variant="outlined"
              type="number"
              onChange={(e) => setSalary(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddInternship} color="primary">
              Add Internship
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      <InternshipList internships={props.internships} setInternships={props.setInternships} userType="company" />
    </>
  )
}

type PropsCompanyInternshipsPage = {
  internships: Array<Internship>,
  setInternships: (internships: Array<Internship>) => void 
}