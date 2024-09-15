/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { OauthLoginRequest } from "@/modules/auth/_types";
import { enqueueSnackbar } from "notistack";
import { useGoogleLogin } from "@/modules/auth/_hooks";
import { useUserStore } from "@/modules/auth/_store";
import { paths } from "@/shared/routes";
import { setSession } from "@/modules/auth/_utils";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutateAsync: googleLogin } = useGoogleLogin();

  const setUser = useUserStore((state) => state.setUser);
  const setCredentials = useUserStore((state) => state.setCredentials);

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const handleLogin = useCallback(
    async (oauthLoginRequest: OauthLoginRequest) => {
      try {
        const { credentials, user } = await googleLogin(oauthLoginRequest);

        setCredentials(credentials);
        setUser(user);
        setSession(credentials.accessToken);

        router.push(paths.root);

        enqueueSnackbar("เข้าสู่ระบบสำเร็จ", { variant: "info" });
      } catch (error) {
        router.push(paths.root);
        enqueueSnackbar("เกิดข้อผิดพลาดในการเชื่อมต่อกับบัญชี Google", {
          variant: "error",
        });
      }
    },
    [googleLogin, router]
  );

  useEffect(() => {
    if (code && state) {
      handleLogin({ code, state });
    }
  }, [code, handleLogin, state]);

  return (
    <div>
      <h1>กำลังเชื่อมต่อกับบัญชี Google...</h1>
    </div>
  );
}
