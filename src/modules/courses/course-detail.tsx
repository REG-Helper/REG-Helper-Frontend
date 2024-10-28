import { useDocumentTitle } from '@/shared/hooks';
import { useGetCourse } from './_hooks';
import type { Section } from './_types';

type Props = {
  courseId: string;
  year: string;
  semester: string;
};

const dayAbbreviations = {
  MONDAY: 'M',
  TUESDAY: 'T',
  WEDNESDAY: 'W',
  THURSDAY: 'Th',
  FRIDAY: 'F',
  SATURDAY: 'Sa',
  SUNDAY: 'Su',
};

function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function CourseDetail({ courseId, year, semester }: Props) {
  const {
    data: course,
    isLoading,
    isError,
  } = useGetCourse(courseId, year, semester);
  useDocumentTitle(String(`${course?.nameEn} | Reg Helper`));
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Course Not Found</div>;

  return (
    <div>
      <h1 className="pb-5 text-3xl font-bold text-blue-900">{course?.id}</h1>
      <h1 className="text-xl font-semibold text-blue-900">{course?.nameEn} </h1>
      <h1 className="text-xl font-semibold text-blue-900">{course?.nameTh}</h1>
      <div className="mt-4 grid grid-cols-2 items-center space-y-2">
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">รูปแบบรายวิชา</span>
          <span>{course?.group}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">หน่วยกิต</span>
          <span>{course?.creditStr}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <span className="font-medium text-gray-500">
          คำอธิบายรายวิชา (ภาษาไทย)
        </span>
        <p>{course?.descriptionTh} </p>
        <span className="font-medium text-gray-500">
          คำอธิบายรายวิชา (ภาษาอังกฤษ)
        </span>
        <p>{course?.descriptionEn} </p>
      </div>

      <h2 className="mt-4 pb-4 font-semibold text-blue-900">วันที่เปิดสอน</h2>
      {course?.sections && course.sections.length > 0 ? (
        <div className="overflow-auto whitespace-nowrap">
          <table className="min-w-full border-collapse overflow-y-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Section</th>
                <th className="border border-gray-300 p-2">Day</th>
                <th className="border border-gray-300 p-2">Room</th>
                <th className="border border-gray-300 p-2">Time</th>
                <th className="border border-gray-300 p-2">Enrolled</th>
                <th className="border border-gray-300 p-2">Teachers</th>
              </tr>
            </thead>
            <tbody>
              {course?.sections.map((section: Section) => (
                <tr key={section.id} className="text-center hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    {' '}
                    {section.name}{' '}
                  </td>
                  <td className="hidden border border-gray-300 p-2 md:table-cell">
                    {capitalize(section.day)}
                  </td>
                  <td className="table-cell border border-gray-300 p-2 md:hidden">
                    {
                      dayAbbreviations[
                        section.day as keyof typeof dayAbbreviations
                      ]
                    }
                    .
                  </td>
                  <td className="border border-gray-300 p-2">
                    {' '}
                    {section.room}{' '}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {new Date(section.startAt)
                      .toUTCString()
                      .split(' ')[4]
                      .substring(0, 5)}{' '}
                    -{' '}
                    {new Date(section.endAt)
                      .toUTCString()
                      .split(' ')[4]
                      .substring(0, 5)}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {section.count}/{section.limit}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {section.teachers.length > 0 ? (
                      <ul>
                        {section.teachers.map((teacher) => (
                          <li key={teacher.id}>
                            {teacher.firstnameTh
                              ? teacher.firstnameTh + ' ' + teacher.lastnameTh
                              : teacher.firstnameEn + ' ' + teacher.lastnameEn}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      'No Teachers Assigned'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No sections available for this course.</p>
      )}
    </div>
  );
}
