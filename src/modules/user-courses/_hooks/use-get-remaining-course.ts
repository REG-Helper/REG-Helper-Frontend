import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getRemainingCourse } from '../_services';

export const useGetRemainingCourse = () =>
  useQuery({
    queryKey: [QUERY_KEY.REMAINING_COURSE],
    queryFn: getRemainingCourse,
  });
