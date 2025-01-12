import { InternshipList } from "../components/internships/internship-list"
import { Internship } from "../models/Internship"
import { useState } from "react";
import { TextField } from '@mui/material'


export const StudentInternshipsPage = (props: PropsStudentInternshipsPage) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInternships = props.internships.filter((internship) =>
    internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    internship.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ width: "300px", marginLeft: '30px', marginTop: '20px' }}
      />

      <InternshipList internships={filteredInternships} setInternships={props.setInternships} userType="student" />
    </>
  )
}

type PropsStudentInternshipsPage = {
  internships: Array<Internship>,
  setInternships: (internships: Array<Internship>) => void
}