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

export const users: User[] = [
  {
    id: 1,
    email: 'user1@gmail.com',
    password: 'password123',
    firstName: 'User',
    lastName: 'One',
    companyName: undefined,
    role: 'student',
  },
  {
    id: 2,
    email: 'google@gmail.com',
    password: 'password456',
    firstName: undefined,
    lastName: undefined,
    companyName: 'Google',
    role: 'company',
  },
];

export const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};
