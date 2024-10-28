// import Image from 'next/image';

const profileData = {
    name: "Mr. Thanpisit Suriyaroj",
    studentID: "65010461",
    nationalID: "1100801480644",
    dateOfBirth: "November 18, 2003",
    dateOfAdmission: "2022",
    dateOfGraduation: "N/A (สถานะ: เรียน)",
    faculty: "Bachelor of Engineering",
    department: "Computer Engineering",
    GPA: 3.36
  }

export default function PersonalInfo() {
    return (
      
      <div className="container mx-auto bg-white p-6 rounded">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      {/* Profile Picture */}
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-dotted border-orange-300">
          {/* <Image
            src="/default-avatar.png"
            layout="fill"
            alt="Profile Picture"
            className="object-cover"
          /> */}
        </div>

        {/* Profile Information Display */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
          <div className="col-span-2 flex flex-col justify-center items-start">
            <h2 className="font-semibold text-gray-700">ชื่อ-นามสกุล</h2>
            <p className="text-gray-900 bg-gray-100 px-5 py-2 w-full">{profileData.name}</p>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start ">
            <h2 className="font-semibold text-gray-700">รหัสนักศึกษา</h2>
            <p className="text-gray-900 bg-gray-100 px-5 py-2 w-full">{profileData.studentID}</p>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start">
            <h2 className="font-semibold text-gray-700">เกรดเฉลี่ย</h2>
            <p className="text-gray-900 bg-gray-100 px-5 py-2 w-full">{profileData.GPA}</p>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start">
            <h2 className="font-semibold text-gray-700">คณะ</h2>
            <p className="text-gray-900 bg-gray-100 px-5 py-2 w-full">{profileData.faculty}</p>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start">
            <h2 className="font-semibold text-gray-700">สาขา</h2>
            <p className="text-gray-900 bg-gray-100 px-5 py-2 w-full">{profileData.department}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mt-6 justify-around flex-col sm:flex-row space-y-2 ">
        <button className="bg-red-500 text-white py-4 px-4 rounded-full">วิชาที่เหลือ</button>
        <button className="bg-gray-200 text-black py-4 px-4 rounded-full inline-flex justify-center">
        <span className="material-icons mx-2">cloud_upload</span>
        <p>Upload Transcript</p>
        </button>
        <button className="bg-white border border-gray-300 text-black py-4 px-4 rounded-full inline-flex justify-center">
        <span className="material-icons mx-2">cloud_download</span>
        View Transcript</button>
      </div>
    </div>
      )
}
