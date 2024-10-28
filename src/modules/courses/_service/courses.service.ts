import { endpoints } from '@/shared/configs';
import type { PaginationResponse } from '@/shared/types';
import { axiosInstance } from '@/shared/utils';
import type { Course } from '../_types';
import axios from 'axios';

type Params = {
  queryKey: (string | number)[];
};

export const getCourses = async ({
  queryKey,
  pageParam,
}: Params & { pageParam: number }) => {
  const [, perPage, search] = queryKey;

  const response = await axiosInstance.get<PaginationResponse<Course>>(
    endpoints.courses.get({
      perPage,
      page: pageParam,
      search,
    }),
  );

  return response.data;
};

export const getCourseById = async ({ queryKey }: Params) => {
  const [, courseId, year, semester] = queryKey;
  const response = await axiosInstance.get<Course>(
    endpoints.courses.getById(String(courseId), {
      year,
      semester,
    }),
  );

//   return response.data;
// };
export const getCourseById = async (courseId: string, year: string, semester: string) => {
  let api = `https://reg-api.kitton.dev/courses/${courseId}`;
  if (year && semester) api += `?year=${year}&semester=${semester}`
  else if (year) api += `?year=${year}`
  else if (semester) api += `?semester=${semester}`
  const response = await axios.get(api);
  return response.data;
};