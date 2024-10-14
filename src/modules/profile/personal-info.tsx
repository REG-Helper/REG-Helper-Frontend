// import Image from 'next/image';

const profileData = {
  name: 'Mr. Thanpisit Suriyaroj',
  studentID: '65010461',
  nationalID: '1100801480644',
  dateOfBirth: 'November 18, 2003',
  dateOfAdmission: '2022',
  dateOfGraduation: 'N/A (สถานะ: เรียน)',
  faculty: 'Bachelor of Engineering',
  department: 'Computer Engineering',
  GPA: 3.36,
};

export function PersonalInfo() {
  return (
    <div className="container mx-auto rounded bg-white p-6">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {/* Profile Picture */}
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-dotted border-orange-300">
          {/* <Image
          src="/default-avatar.png"
          layout="fill"
          alt="Profile Picture"
          className="object-cover"
        /> */}
        </div>

        {/* Profile Information Display */}
        <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="col-span-2 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">ชื่อ-นามสกุล</h2>
            <p className="w-full bg-gray-100 px-5 py-2 text-gray-900">
              {profileData.name}
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">รหัสนักศึกษา</h2>
            <p className="w-full bg-gray-100 px-5 py-2 text-gray-900">
              {profileData.studentID}
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">เกรดเฉลี่ย</h2>
            <p className="w-full bg-gray-100 px-5 py-2 text-gray-900">
              {profileData.GPA}
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">คณะ</h2>
            <p className="w-full bg-gray-100 px-5 py-2 text-gray-900">
              {profileData.faculty}
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center">
            <h2 className="font-semibold text-gray-700">สาขา</h2>
            <p className="w-full bg-gray-100 px-5 py-2 text-gray-900">
              {profileData.department}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col justify-around space-y-2 sm:flex-row">
        <button className="rounded-full bg-red-500 px-4 py-4 text-white">
          วิชาที่เหลือ
        </button>
        <button className="inline-flex justify-center rounded-full bg-gray-200 px-4 py-4 text-black">
          <span className="material-icons mx-2">cloud_upload</span>
          <p>Upload Transcript</p>
        </button>
        <button className="inline-flex justify-center rounded-full border border-gray-300 bg-white px-4 py-4 text-black">
          <span className="material-icons mx-2">cloud_download</span>
          View Transcript
        </button>
      </div>
    </div>
  );
}
