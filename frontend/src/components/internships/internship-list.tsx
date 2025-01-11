import { Box, List, ListItem, Card, CardContent, Typography, Button } from '@mui/material'
import { Internship } from '../../models/Internship'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';


export const InternshipList = (props: PropsInternshipList) => {
  const [appliedInternships, setAppliedInternships] = useState<string[]>([]); // To track applied internships
  
  const handleApply = (title: string) => {
    setAppliedInternships((prev) => [...prev, title]);
  };


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
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

type PropsInternshipList = {
  internships: Array<Internship>,
  userType: string
}