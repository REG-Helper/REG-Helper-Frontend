import { axiosInstance } from "@/shared/utils";
import {
  GetOauthUrlResponse,
  OauthLoginRequest,
  OauthLoginResponse,
} from "../_types";
import { endpoints } from "@/shared/configs";

export const getGoogleLoginUrl = async (): Promise<string> => {
  const response = await axiosInstance.get<GetOauthUrlResponse>(
    endpoints.oauth.google
  );

  return response.data.url;
};

export const googleLogin = async (
  data: OauthLoginRequest
): Promise<OauthLoginResponse> => {
  const response = await axiosInstance.post<OauthLoginResponse>(
    endpoints.oauth.googleLogin,
    data
  );

  return response.data;
};
