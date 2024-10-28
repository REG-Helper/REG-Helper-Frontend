import { endpoints } from '@/shared/configs';
import { axiosInstance } from '@/shared/utils';
import type { GetSkillsResponse } from '../_types';

export const getSkills = async () => {
  const response = await axiosInstance.get<GetSkillsResponse[]>(
    endpoints.userCourses.skills,
  );

  return response.data;
};
