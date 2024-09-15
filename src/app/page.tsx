import Navbar_Not_Login from "@/components/ui/navbar_not_login";
import Navbar_Login from "@/components/ui/navbar_login";
import CourseSearch from "@/components/ui/home";

export default function Homepage() {
  return (
  <>
    <Navbar_Login></Navbar_Login>
    <CourseSearch></CourseSearch>
   </>
  );
}
