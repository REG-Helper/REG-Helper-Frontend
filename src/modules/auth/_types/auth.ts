import { User } from "@/shared/types";

export type Credentials = {
  accessToken: string;
};

export type OauthLoginResponse = {
  credentials: Credentials;
  user: User;
};

export type GetOauthLinkResponse = {
  url: string;
};

export type OauthLoginRequest = {
  code: string;
  state: string;
};
