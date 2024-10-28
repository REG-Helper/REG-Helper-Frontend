import { axiosInstance } from '@/shared/utils';
import type { GetYearsSemestersResponse } from '../_types';
import { endpoints } from '@/shared/configs';

export const getYearsAndSemesters = async () => {
  const response = await axiosInstance.get<GetYearsSemestersResponse[]>(
    endpoints.sections.yearsAndSemesters,
  );

  return response.data;
};
