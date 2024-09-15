"use client";

import { PropsWithChildren, useEffect } from "react";
import { useUserStore } from "../_store";
import { paths } from "@/shared/routes";
import { useRouter } from "next/navigation";

export function AuthGuard({ children }: PropsWithChildren) {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const checkAuthenticated = () => {
    if (loading) {
      return;
    }

    if (!user) {
      router.replace(paths.auth.login);
      return;
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, [loading]);

  return <>{children}</>;
}
