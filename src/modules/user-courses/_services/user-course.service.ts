import { endpoints } from '@/shared/configs';
import { axiosInstance } from '@/shared/utils';
import type { GetRemainingUserCoursesResponse } from '../_types';

export const getRemainingCourse = async () => {
  const response = await axiosInstance.get<GetRemainingUserCoursesResponse>(
    endpoints.userCourses.remaining,
  );

  return response.data;
};
