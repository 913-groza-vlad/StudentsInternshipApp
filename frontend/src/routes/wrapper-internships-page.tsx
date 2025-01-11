import { Header } from '../components/header/header';
import { StudentInternshipsPage } from './student-internships-page';
import { CompanyInternshipsPage } from './company-internships-page';


export const WrapperInternshipsPage = (props: PropsWrapperInternshipsPage) => {
  return (
    <>
      <Header />
      {props.userType == "student" 
        ?
          <StudentInternshipsPage />
        : 
          <CompanyInternshipsPage />
      }
    </>
  )
}

type PropsWrapperInternshipsPage = {
  userType: string
}