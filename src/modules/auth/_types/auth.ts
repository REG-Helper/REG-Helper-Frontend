import { User } from "@/shared/types";

export type Credentials = {
  accessToken: string;
};

export type OauthLoginResponse = {
  credentials: Credentials;
  user: User;
};

export type GetOauthUrlResponse = {
  url: string;
};

export type OauthLoginRequest = {
  code: string;
  state: string;
};
