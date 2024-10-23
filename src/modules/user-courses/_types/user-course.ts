import type { Course } from '@/modules/courses/_types';

type CourseGroup = {
  fixedCourses: Course[];
  electiveCourses: number;
};

type RemainingCourses = {
  remainingCredits: number;
  requiredCredits: number;
  courses: CourseGroup;
};

export type GetRemainingUserCoursesResponse = {
  gedEdFundamental: RemainingCourses;
  genEdLanguageCommunication: RemainingCourses;
  genEdFacultySpecific: RemainingCourses;
  gendEdElective: RemainingCourses;
  specificCore: RemainingCourses;
  specificReq: RemainingCourses;
  specificElectiveReq: RemainingCourses;
  specificAltStudy: RemainingCourses;
  specificMajorElective: RemainingCourses;
  freeElective: RemainingCourses;
};
