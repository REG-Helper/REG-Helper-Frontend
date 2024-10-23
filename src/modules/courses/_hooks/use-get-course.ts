import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getCourseById } from '../_service';

export const useGetCourse = (
  courseId: string, 
  year: string ,
  semester: string 
) => {
  return useQuery({
    queryKey: [QUERY_KEY.COURSES, courseId, year, semester],
    queryFn: () => getCourseById(courseId, year, semester),
    enabled: !!courseId,
  });
};
  