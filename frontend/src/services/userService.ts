import { StudentProfile } from "../models/StudentProfile";
import { User } from "../models/User";

const users: User[] = [
  {
    id: 1,
    email: 'allanjames@gmail.com',
    password: 'password123',
    firstName: 'Allan',
    lastName: 'James',
    university: 'University of Toronto',
    role: 'student',
  },
  {
    id: 2,
    email: 'google@gmail.com',
    password: 'password456',
    companyName: 'Google',
    location: 'USA',
    role: 'company',
  },
  {
    id: 3,
    email: 'amazon@amazon.com',
    password: 'Password789',
    companyName: 'Amazon',
    location: 'USA',
    role: 'company',
  },
  {
    id: 4,
    email: 'tesla@tesla.com',
    password: 'Password1234',
    companyName: 'Tesla',
    location: 'USA',
    role: 'company',
  },
  {
    id: 5,
    email: 'janedoe@gmail.com',
    password: 'studentPass2',
    firstName: 'Jane',
    lastName: 'Doe',
    university: 'Boston University',
    role: 'student',
  },
];

export const studentProfiles: StudentProfile[] = [];

export const userService = {
  getUserByEmail: (email: string): User | undefined => {
    return users.find((user) => user.email === email);
  },

  updateUser: (updatedUser: User): boolean => {
    const index = users.findIndex((user) => user.email === updatedUser.email);

    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser};
      return true;
    }

    return false;
  },

  addUser: (newUser: User): void => {
    users.push(newUser);
  },

  getAllUsers: (): User[] => {
    return users;
  },

  updateStudentProfile: (updatedProfile: StudentProfile): void => {
    const index = studentProfiles.findIndex((profile) => profile.student.email === updatedProfile.student.email);

    if (index !== -1) {
      studentProfiles[index] = updatedProfile;
      return;
    }

    studentProfiles.push(updatedProfile);
  },

  addStudentProfile: (newProfile: StudentProfile): void => {
    studentProfiles.push(newProfile);
  },

  getAllStudentProfiles: (): StudentProfile[] => {
    return studentProfiles;
  },

  getStudentProfile: (user: User): StudentProfile | undefined => {
    return studentProfiles.find((profile) => profile.student.email === user.email);
  },

  getUserById: (id: number): User | undefined => {
    return users.find((user) => user.id === id);
  }
};