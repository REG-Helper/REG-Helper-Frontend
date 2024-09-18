import Navbar_Login from "@/components/ui/navbar_login";
import CourseSearch from "@/components/ui/sub_card";
import { Search } from "lucide-react"


export default function Homepage() {
  const courses = [
    { id: "01076567", name: "IMAGE PROCESSING", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { id: "01076034", name: "PRINCIPLES OF SOFTWARE DEVELOPMENT PROCESS", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { id: "01076567", name: "IMAGE PROCESSING", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { id: "01076627", name: "ICT SECURITY ARCHITECTURE AND MANAGEMENT", credits: 3,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
  ]
  return (
    <div className="w-full mx-auto">
      <Navbar_Login></Navbar_Login>
          <h1 className="mt-4 text-3xl font-bold text-center mb-6">ค้นหาวิชาเรียน</h1>
          <div className=" mb-8 w-3/4 mx-auto grid grid-row-2">
            <div className="flex items-center w-2/4 p-3 pl-6 rounded-full bg-[#ECE6F0] placeholder:text-[#49454F] focus:outline-none focus:ring-2 focus:ring-purple-200 justify-between justify-self-center">
              <input
                type="text"
                placeholder="ค้นหารหัสวิชา / ชื่อวิชา"
                className="bg-[#ECE6F0]"
              />
              <Search className=" text-[#49454F]" />
            </div>
              <div>
                {courses.map((course, index) => (
                  <CourseSearch
                    key={index}
                    id={course.id}
                    name={course.name}
                    credits={course.credits}
                    description={course.description}
                  />

                ))}
                </div>
          </div>
    </div>
  );
}
