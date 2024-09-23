import { useDocumentTitle } from '@/shared/hooks';
import { useGetCourse } from './_hooks';

type Props = {
  courseId: string;
};

export function CourseDetail({ courseId }: Props) {
  const { data: course, isLoading, isError } = useGetCourse(courseId);
  useDocumentTitle(String(`${course?.nameEn} | Reg Helper`));

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>Course Not Found</div>;

  return (
    <div>
      <div>
        <h3>{course?.nameTh}</h3>
        <h3>{course?.nameEn}</h3>
      </div>
      <div>
        <div>
          <h5>คำอธิบายรายวิชา (ภาษาไทย)</h5>
          <p>{course?.descriptionTh}</p>
        </div>
        <div>
          <h5>คำอธิบายรายวิชา (ภาษาอังกฤษ)</h5>
          <p>{course?.descriptionEn}</p>
        </div>
      </div>
    </div>
  );
}
