import { endpoints } from '@/shared/configs';
import { axiosInstance } from '@/shared/utils';
import type { Job } from '../_types';

export const getJobs = async () => {
  const response = await axiosInstance.get<Job[]>(endpoints.jobs.get);

  return response.data;
};
