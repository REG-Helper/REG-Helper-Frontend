import type { Course } from '@/modules/courses/_types';

export type GetRemainingUserCoursesResponse = {
  specificCoursesCore: Course[];
  specificCoursesRequired: Course[];
  genEdFundamentals: Course[];
  genEdLanguageCommunication: Course[];
  genEdFacultySpecific: Course[];
  electiveRequired: number;
  altStudy: number;
  majorElective: number;
  languageCommunicationElective: number;
  genEdElective: number;
  freeElective: number;
};
