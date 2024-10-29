import { endpoints } from '@/shared/configs';
import { axiosInstance } from '@/shared/utils';
import type { GetSkillsResponse, GetTopJobsResponse } from '../_types';

export const getSkills = async () => {
  const response = await axiosInstance.get<GetSkillsResponse[]>(
    endpoints.userCourses.skills,
  );

  return response.data;
};

export const getTopJobs = async () => {
  const response = await axiosInstance.get<GetTopJobsResponse>(
    endpoints.userCourses.topJobs,
  );
  return response.data.topJobs;
};
