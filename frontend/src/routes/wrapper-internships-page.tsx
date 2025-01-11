import { Header } from '../components/header/header';
import { StudentInternshipsPage } from './student-internships-page';
import { CompanyInternshipsPage } from './company-internships-page';
import { Internship } from '../models/Internship';
import { useState } from 'react';
import { internshipsHardcodedInitialState } from '../models/Internship'

export const WrapperInternshipsPage = (props: PropsWrapperInternshipsPage) => {
  const [internships, setInternships] = useState<Array<Internship>>(internshipsHardcodedInitialState)

  return (
    <div style={{'marginTop': '60px'}}>
      <Header />
      {props.userType == "student" 
        ?
          <StudentInternshipsPage internships={internships} />
        : 
          <CompanyInternshipsPage internships={internships} setInternships={setInternships} />
      }
    </div>
  )
}

type PropsWrapperInternshipsPage = {
  userType: string
}