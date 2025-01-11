import { CompanyRegisterRequest, StudentRegisterRequest } from "../../models/RegisterRequest";
import { userService } from "../../services/userService";

export const registerCompanyUser = (registerRequest: CompanyRegisterRequest): boolean => {
  const { email, password, companyName, location }= registerRequest;
  if (userService.getUserByEmail(email)) {
    return false;
  }
  const users = userService.getAllUsers();
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
  if (userService.getUserByEmail(email)) {
    return false;
  }
  const users = userService.getAllUsers();
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