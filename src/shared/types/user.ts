import type { Transcript } from './transcript';

export type User = {
  studentId: string;
  email: string;
  firstname: string;
  lastname: string;
  profileImage: string;
  faculty: string;
  department: string;
  transcript: Transcript;
};
