import { useMutation } from '@tanstack/react-query';
import type { OauthLoginRequest } from '../_types';
import { googleLogin } from '../_services';
import { useUserStore } from '../_store';

export const useGoogleLogin = () => {
  const { setUser, setCredentials } = useUserStore((state) => state.actions);

  return useMutation({
    mutationFn: (oauthLoginRequest: OauthLoginRequest) =>
      googleLogin(oauthLoginRequest),
    onSuccess: (res) => {
      setCredentials(res.credentials);
      setUser(res.user);
    },
    onError: (error) => error,
  });
};
