import type { CourseGroup, CourseSubGroup, DayOfWeek } from '../_enums';

export type Course = {
  id: string;
  nameEn: string;
  nameTh: string;
  descriptionEn: string;
  descriptionTh: string;
  credit: number;
  creditStr: string;
  group: CourseGroup;
  subGroup: CourseSubGroup;
  sections: Section[];
};

export type Section = {
  id: string;
  name: string;
  day: string;
  room: string;
  type: string;
  year: number;
  semester: number;
  limit: number;
  count: number;
  midtermExamDate: string;
  finalExamDate: string;
  condition: string;
  startAt: string;
  endAt: string;
  teachers: Teacher[];
};

export type Teacher = {
  id: string;
  firstnameEn: string;
  lastnameEn: string;
  firstnameTh: string;
  lastnameTh: string;
};

export type GetCoursesQuery = {
  page?: number;
  perPage?: number;
  search?: string;
  day?: DayOfWeek;
  group?: CourseGroup;
  subGroup?: CourseSubGroup;
  startAt?: string;
  endAt?: string;
  year?: number;
  semester?: number;
  job?: string;
};
