import { endpoints } from '@/shared/configs';
import type { PaginationResponse } from '@/shared/types';
import { axiosInstance } from '@/shared/utils';
import type { Course } from '../_types';

type Params = {
  queryKey: (string | number)[];
};

export const getCourses = async ({
  queryKey,
  pageParam,
}: Params & { pageParam: number }) => {
  const [, perPage, search] = queryKey;

  console.log(queryKey);

  const response = await axiosInstance.get<PaginationResponse<Course>>(
    endpoints.courses.get({
      perPage,
      page: pageParam,
    }),
  );

  return response.data;
};

export const getCourseById = async ({ queryKey }: Params) => {
  const [, courseId] = queryKey;
  const response = await axiosInstance.get<Course>(
    endpoints.courses.getById(String(courseId)),
  );

  return response.data;
};
