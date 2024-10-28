import { addParamsToUrl } from '../utils';

const PATH = {
  COURSES: '/courses',
  AUTH: '/auth',
  SUGGESTION: '/suggestion',
  ABOUT: '/about',
  PROFILE: '/profile',
  COURSE_REMAINING: '/course-remaining',
};

export const paths = {
  root: '/',
  courses: {
    root: `${PATH.COURSES}`,
    detail: (id: string, params: Record<string, unknown>) =>
      addParamsToUrl(`${PATH.COURSES}/${id}`, params),
  },
  suggestion: {
    root: `${PATH.SUGGESTION}`,
  },
  profile: {
    root: `${PATH.PROFILE}`,
  },
  courseRemaining: {
    root: `${PATH.COURSE_REMAINING}`,
  },
};
