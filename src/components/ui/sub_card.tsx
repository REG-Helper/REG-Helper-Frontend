
interface courses {
  id: string;
  name: string;
  credits: number;
  description: string;
}

export default function CourseSearch({ 
  id, 
  name, 
  credits, 
  description
}: courses) {

  return(
    <div className="w-full p-4 mx-auto max-w-5xl">
      <div className="space-y-4"> 
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full" 
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">
                {id} {name}
                <span className="text-lg text-[#A2A9B0] ml-2">[{credits} หน่วยกิต]</span>
              </h2>
            </div>
            <p className="text-[#757575] text-sm">{description}</p>
          </div>
      </div>
    </div>
  );
}