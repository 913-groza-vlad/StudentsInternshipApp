import { Box, List, ListItem, Card, CardContent, Typography } from '@mui/material'
import { Internship } from '../../models/Internship'

export const InternshipList = (props: PropsInternshipList) => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <List>
        {props.internships.map((internship, index) => (
          <ListItem key={index} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: '8px'}}>
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
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

type PropsInternshipList = {
  internships: Array<Internship>
}