import { useInfiniteQuery } from '@tanstack/react-query';
import type { GetCoursesQuery } from '../_types';
import { QUERY_KEY } from '../_config';
import { getCourses } from '../_service';

export const useGetCourses = (getCoursesQuery: GetCoursesQuery) =>
  useInfiniteQuery({
    queryKey: [QUERY_KEY.COURSES, ...Object.values(getCoursesQuery)],
    queryFn: getCourses,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.data.length > 0 ? allPages.length + 1 : undefined,
  });
