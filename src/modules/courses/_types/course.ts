import { CourseGroup, CourseSubGroup, DayOfWeek } from '@/shared/enums';

export type Course = {
  id: string;
  nameEn: string;
  nameTh: string;
  descriptionEn: string;
  descriptionTh: string;
  credit: number;
  creditStr: string;
  group: string;
  subGroup: string;
  sections: Section[];
};

type Section = {
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

type Teacher = {
  id: string;
  firstnameEn: string;
  lastnameEn: string;
  firstnameTh: string;
  lastnameTh: string;
};

export type GetCoursesQuery = {
  page?: number;
  perPage?: number;
  id?: string;
  name?: string;
  day?: DayOfWeek;
  group?: CourseGroup;
  subGroup?: CourseSubGroup;
  startAt?: string;
  endAt?: string;
  year?: number;
  semester?: number;
};
