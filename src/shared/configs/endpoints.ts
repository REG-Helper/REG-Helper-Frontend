import { addParamsToUrl } from '../utils';

const ROOTS = {
  OAUTH: '/oauth',
  USERS: '/users',
  COURSES: '/courses',
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
};
