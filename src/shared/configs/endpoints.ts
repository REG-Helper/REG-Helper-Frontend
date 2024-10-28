import { addParamsToUrl } from '../utils';

const ROOTS = {
  OAUTH: '/oauth',
  USERS: '/users',
  COURSES: '/courses',
  TRANSCRIPT: '/transcript',
  USER_COURSES: '/user-courses',
  SECTIONS: '/sections',
};

export const endpoints = {
  oauth: {
    google: `${ROOTS.OAUTH}/google`,
    googleLogin: `${ROOTS.OAUTH}/google/login`,
  },
  users: {
    me: `${ROOTS.USERS}/me`,
  },
  courses: {
    get: (params: Record<string, unknown>) =>
      addParamsToUrl(`${ROOTS.COURSES}`, params),
    getById: (id: string, params: Record<string, unknown>) =>
      addParamsToUrl(`${ROOTS.COURSES}/${id}`, params),
  },
  transcript: {
    upload: `${ROOTS.TRANSCRIPT}/upload`,
    verify: `${ROOTS.TRANSCRIPT}/verify`,
  },
  userCourses: {
    remaining: `${ROOTS.USER_COURSES}/remaining`,
    skills: `${ROOTS.USER_COURSES}/skills`,
  },
  sections: {
    yearsAndSemesters: `${ROOTS.SECTIONS}/years-semesters`,
  },
};
