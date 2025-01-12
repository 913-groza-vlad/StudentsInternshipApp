export type User = {
  id: number;
  role: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  university?: string;
  companyName?: string;
  location?: string;
};
