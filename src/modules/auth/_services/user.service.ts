import { endpoints } from "@/shared/configs";
import { User } from "@/shared/types";
import { axiosInstance } from "@/shared/utils";

export const getUserProfile = async (): Promise<User> => {
  const response = await axiosInstance.get<User>(endpoints.users.me);

  return response.data;
};
