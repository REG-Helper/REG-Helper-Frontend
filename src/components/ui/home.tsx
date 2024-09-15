import { Search } from "lucide-react"

export default function CourseSearch() {
  const courses = [
    { code: "01076567", title: "IMAGE PROCESSING", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { code: "01076034", title: "PRINCIPLES OF SOFTWARE DEVELOPMENT PROCESS", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { code: "01076567", title: "IMAGE PROCESSING", credits: 3 ,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."},
    { code: "01076627", title: "ICT SECURITY ARCHITECTURE AND MANAGEMENT", credits: 3,description:"Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
  ]

  return (
    <div className="w-full p-4 mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6">ค้นหาวิชาเรียน</h1>
      <div className="relative mb-8 w-3/4 mx-auto">
        <input
          type="text"
          placeholder="ค้นหารหัสวิชา / ชื่อวิชา"
          className="w-full p-3 pr-10 pl-6 rounded-full bg-purple-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="space-y-4"> 
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full" 
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">
                {course.code} {course.title}
                <span className="text-lg text-gray-400 ml-2">[{course.credits} หน่วยกิต]</span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
