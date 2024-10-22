import type { User } from '@/shared/types';

export type UploadTranscriptResponse = {
  transcript: {
    url: string;
  };
  missingCourses: string[];
  user: User;
};
