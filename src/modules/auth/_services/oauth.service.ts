import { axiosInstance } from "@/shared/utils";
import {
  GetOauthLinkResponse,
  OauthLoginRequest,
  OauthLoginResponse,
} from "../_types/auth";
import { endpoints } from "@/shared/configs";
import { ApiResponse } from "@/shared/types";

export const getGoogleLoginLink = async (): Promise<string> => {
  const response = await axiosInstance.get<ApiResponse<GetOauthLinkResponse>>(
    endpoints.oauth.google
  );

  return response.data.data.url;
};

export const googleLogin = async (
  data: OauthLoginRequest
): Promise<OauthLoginResponse> => {
  const response = await axiosInstance.post<ApiResponse<OauthLoginResponse>>(
    endpoints.oauth.googleLogin,
    data
  );

  return response.data.data;
};
