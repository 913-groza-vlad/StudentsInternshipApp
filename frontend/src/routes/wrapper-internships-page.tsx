import { Header } from '../components/header/header';
import { StudentInternshipsPage } from './student-internships-page';
import { CompanyInternshipsPage } from './company-internships-page';
import { Internship } from '../models/Internship';
import { useState } from 'react';
import { getInternshipsFromLocalStorage } from '../models/Internship'

export const WrapperInternshipsPage = (props: PropsWrapperInternshipsPage) => {
  const [internships, setInternships] = useState<Array<Internship>>(getInternshipsFromLocalStorage())

  return (
    <div style={{'marginTop': '60px'}}>
      <Header />
      {props.userType == "student" 
        ?
          <StudentInternshipsPage internships={internships} setInternships={setInternships} />
        : 
          <CompanyInternshipsPage internships={internships} setInternships={setInternships} />
      }
    </div>
  )
}

type PropsWrapperInternshipsPage = {
  userType: string
}