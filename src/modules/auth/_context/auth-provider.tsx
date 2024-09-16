'use client';

import type { PropsWithChildren} from 'react';
import { useCallback, useEffect } from 'react';
import { ACCESS_TOKEN_STORAGE_KEY } from '../_constants';
import { isValidToken, setSession } from '../_utils';
import { useUserStore } from '../_store';
import { getUserProfile } from '../_services';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);
  const setCredentials = useUserStore((state) => state.setCredentials);

  const resetSession = useCallback(() => {
    setUser(null);
    setLoading(false);
    setCredentials(null);
  }, [setCredentials, setLoading, setUser]);

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const userProfile = await getUserProfile();

        setCredentials({ accessToken });
        setUser(userProfile);
        setLoading(false);
      } else {
        resetSession();
      }
    } catch (error) {
      console.error(error);
      
      resetSession();
    }
  }, [resetSession, setCredentials, setLoading, setUser]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return <>{children}</>;
};
