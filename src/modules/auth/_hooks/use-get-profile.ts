import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getUserProfile } from '../_services';

export const useGetProfile = () =>
  useQuery({
    queryKey: [QUERY_KEY.PROFILE],
    queryFn: getUserProfile,
  });
