import { paths } from '@/shared/routes';

export const NAV_LINKS = [
  {
    id: 1,
    title: 'ค้นหาวิชาเรียน',
    path: paths.courses.root,
  },
  {
    id: 2,
    title: 'แนะนำวิชาเรียน',
    path: paths.suggestion.root,
  },
  {
    id: 3,
    title: 'เกี่ยวกับเรา',
    path: paths.about.root,
  },
];
