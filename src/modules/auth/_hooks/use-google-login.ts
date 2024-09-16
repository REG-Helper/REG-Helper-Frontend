import { useMutation } from '@tanstack/react-query';
import type { OauthLoginRequest } from '../_types';
import { googleLogin } from '../_services';

export const useGoogleLogin = () =>
  useMutation({
    mutationFn: (oauthLoginRequest: OauthLoginRequest) =>
      googleLogin(oauthLoginRequest),
    onSuccess: (res) => res,
    onError: (error) => error,
  });
