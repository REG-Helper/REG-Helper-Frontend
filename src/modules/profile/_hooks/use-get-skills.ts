import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getSkills } from '../_services';

export const useGetSkills = () =>
  useQuery({
    queryKey: [QUERY_KEY.SKILLS],
    queryFn: getSkills,
  });
