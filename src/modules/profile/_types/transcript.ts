import type { User } from '@/shared/types';
import type { Grade } from '../enums';

export type UploadTranscriptResponse = {
  transcript: {
    url: string;
  };
  missingCourses: string[];
  user: User;
};

type UserCourse = {
  courseId: string;
  userId: string;
  grade: Grade;
};

export type VerifyTranscriptResponse = {
  extractUser: User;
  userCourses: UserCourse[];
  missingCourses: string[];
};
