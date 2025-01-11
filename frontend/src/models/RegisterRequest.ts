export type StudentRegisterRequest = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  university: string
};

export type CompanyRegisterRequest = {
  email: string,
  password: string,
  companyName: string,
  location: string
};