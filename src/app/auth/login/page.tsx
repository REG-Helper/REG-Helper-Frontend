import { LoginView } from "@/modules/auth/_views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
};

export default function LoginPage() {
  return <LoginView />;
}
