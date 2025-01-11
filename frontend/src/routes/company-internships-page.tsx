import { InternshipList } from "../components/internships/internship-list"
import { Internship } from "../models/Internship"


export const CompanyInternshipsPage = (props: PropsCompanyInternshipsPage) => {
  return (
    <InternshipList internships={props.internships}/>
  )
}

type PropsCompanyInternshipsPage = {
  internships: Array<Internship>
}