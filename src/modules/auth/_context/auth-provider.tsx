/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { PropsWithChildren, useCallback, useEffect } from "react";
import { ACCESS_TOKEN_STORAGE_KEY } from "../_constants";
import { isValidToken, setSession } from "../_utils";
import { useUserStore } from "../_store";
import { getUserProfile } from "../_services";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const setUser = useUserStore((state) => state.setUser);
  const setCredentials = useUserStore((state) => state.setCredentials);

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const userProfile = await getUserProfile();

        setCredentials({ accessToken });
        setUser(userProfile);
      } else {
        resetSession();
      }
    } catch (error) {
      resetSession();
    }
  }, []);

  const resetSession = () => {
    setUser(null);
    setCredentials(null);
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  return <>{children}</>;
};
