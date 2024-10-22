import { addParamsToUrl } from '../utils';

const ROOTS = {
  OAUTH: '/oauth',
  USERS: '/users',
  COURSES: '/courses',
  TRANSCRIPT: '/transcript',
  USER_COURSES: '/user-courses',
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
    getById: (id: string) => `${ROOTS.COURSES}/${id}`,
  },
  transcript: {
    upload: `${ROOTS.TRANSCRIPT}/upload`,
  },
  userCourses: {
    remaining: `${ROOTS.USER_COURSES}/remaining`,
  },
};
