import { CompanyRegisterRequest, StudentRegisterRequest } from "../../models/RegisterRequest";
import { getUserByEmail, users } from "../../models/User";

export const registerCompanyUser = (registerRequest: CompanyRegisterRequest): boolean => {
  const { email, password, companyName, location }= registerRequest;
  if (getUserByEmail(email)) {
    return false;
  }
  users.push({ 
    id: users.length + 1,
    role: 'company',
    email: email,
    password: password,
    companyName: companyName,
    location: location,
   });

   return true;
};

export const RegisterStudentUser = (registerRequest: StudentRegisterRequest): boolean => {
  const { email, password, firstName, lastName, university } = registerRequest;
  if (getUserByEmail(email)) {
    return false;
  }
  users.push({ 
    id: users.length + 1,
    role: 'student',
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    university: university,
   });

   return true;
}