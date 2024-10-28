import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../courses/_config';
import { getJobs } from '../_services';

export const useGetJobs = () =>
  useQuery({
    queryKey: [QUERY_KEY.JOBS],
    queryFn: getJobs,
  });
