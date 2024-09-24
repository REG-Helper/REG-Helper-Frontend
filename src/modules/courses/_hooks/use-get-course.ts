import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getCourseById } from '../_service';

export const useGetCourse = (courseId: string) =>
  useQuery({
    queryKey: [QUERY_KEY.COURSES, courseId],
    queryFn: getCourseById,
  });
