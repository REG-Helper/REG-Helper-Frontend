import { GoogleCallbackView } from "@/modules/auth/_views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "กำลังเข้าสู่ระบบ",
};

export default function GoogleCallbackPage() {
  return <GoogleCallbackView />;
}
