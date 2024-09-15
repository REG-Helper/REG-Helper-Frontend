import { useMutation } from "@tanstack/react-query";
import { OauthLoginRequest } from "../_types";
import { googleLogin } from "../_services";
import { enqueueSnackbar } from "notistack";

export const useGoogleLogin = () =>
  useMutation({
    mutationFn: (oauthLoginRequest: OauthLoginRequest) =>
      googleLogin(oauthLoginRequest),
    onSuccess: (res) => res,
    onError: (error) => error,
  });
