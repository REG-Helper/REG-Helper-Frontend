import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getTopJobs } from '../_services';

export const useGetTopJobs = () =>
  useQuery({
    queryKey: [QUERY_KEY.TOP_JOBS],
    queryFn: getTopJobs,
  });
