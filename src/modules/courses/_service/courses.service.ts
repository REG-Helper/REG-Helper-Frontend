import { endpoints } from '@/shared/configs';
import type { PaginationResponse } from '@/shared/types';
import { axiosInstance } from '@/shared/utils';
import type { Course } from '../_types';

type Params = {
  queryKey: (string | number)[];
  pageParam?: number;
};

export const getCourses = async ({ queryKey, pageParam }: Params) => {
  const [, perPage] = queryKey;

  const response = await axiosInstance.get<PaginationResponse<Course>>(
    endpoints.courses.get({
      perPage,
      page: pageParam,
    }),
  );

  return response.data;
};
