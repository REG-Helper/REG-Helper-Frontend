import { endpoints } from "@/shared/configs";
import { ApiResponse, User } from "@/shared/types";
import { axiosInstance } from "@/shared/utils";

export const getUserProfile = async (): Promise<User> => {
  const response = await axiosInstance.get<ApiResponse<User>>(
    endpoints.users.me
  );

  return response.data.data;
};
