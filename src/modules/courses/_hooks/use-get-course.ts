import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getCourseById } from '../_service';
import { useCourseStore } from '../_store';

export const useGetCourse = (courseId: string) => {
  const currentTerm = useCourseStore((state) => state.currentTerm);

  const [year, semester] = currentTerm.split('/');
  const convertedYear = Number(year) - 543;

  return useQuery({
    queryKey: [QUERY_KEY.COURSES, courseId, convertedYear, semester],
    queryFn: getCourseById,
  });
};
