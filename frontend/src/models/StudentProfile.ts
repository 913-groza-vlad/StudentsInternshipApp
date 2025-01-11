import { User } from "./User";

export type StudentProfile = {
  student: User;
  phoneNumber: string;
  skills: string[];
  fieldOfStudy: string;
  yearOfStudy: number;
  experience: WorkExperience[];
  profilePicture: string;
  resume: string;
  bio: string;
};

export type WorkExperience = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
};
