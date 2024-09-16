import { AlreadyAuthenticatedGuard } from "@/modules/auth/_guards";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <AlreadyAuthenticatedGuard>{children}</AlreadyAuthenticatedGuard>;
}
