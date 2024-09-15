import { paths } from "@/shared/routes";
import { redirect } from "next/navigation";

export default function HomePage() {
  return redirect(paths.courses.root);
}
