"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "../_store";
import { GoogleLoginBtn } from "../google-login-btn";
import { paths } from "@/shared/routes";
import { useEffect } from "react";
import { useCallback } from "react";
import { useBoolean } from "@/shared/hooks";

export function LoginView() {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const checkAlreadyAuthenticated = useCallback(() => {
    if (loading) {
      return;
    }

    if (user) {
      router.replace(paths.root);
      return;
    }
  }, [loading, user, router]);

  useEffect(() => {
    checkAlreadyAuthenticated();
  }, [checkAlreadyAuthenticated]);

  return (
    <div>
      <GoogleLoginBtn />
    </div>
  );
}
