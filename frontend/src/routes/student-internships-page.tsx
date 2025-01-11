import { InternshipList } from "../components/internships/internship-list"
import { Internship } from "../models/Internship"


export const StudentInternshipsPage = (props: PropsStudentInternshipsPage) => {
  return (
    <InternshipList internships={props.internships}/>
  )
}

type PropsStudentInternshipsPage = {
  internships: Array<Internship>
}