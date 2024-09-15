import { PropsWithChildren } from "react";
import { useUserStore } from "../_store";
import { paths } from "@/shared/routes";
import { redirect } from "next/navigation";

export function AuthGuard({ children }: PropsWithChildren) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    redirect(paths.auth.login);
  }

  return <>{children}</>;
}
