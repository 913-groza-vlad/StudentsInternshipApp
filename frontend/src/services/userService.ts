import { StudentProfile } from "../models/StudentProfile";
import { User } from "../models/User";

const users: User[] = [
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
  {
    id: 3,
    email: 'amazon@amazon.com',
    password: 'Password789',
    firstName: undefined,
    lastName: undefined,
    companyName: 'Amazon',
    role: 'company',
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