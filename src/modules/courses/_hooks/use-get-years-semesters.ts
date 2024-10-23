import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../_config';
import { getYearsAndSemesters } from '../_service';

export const useGetYearsSemesters = () =>
  useQuery({
    queryKey: [QUERY_KEY.YEARS_AND_SEMESTERS],
    queryFn: getYearsAndSemesters,
  });
