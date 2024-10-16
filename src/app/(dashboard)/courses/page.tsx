import { Courses, SearchCourse } from '@/modules/courses';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ค้นหาวิชาเรียน',
};

export default function CoursesPage() {
  return (
    <main className="py-12 px-5">
      <div className="container mx-auto space-y-8 px-4 md:px-8 xl:max-w-screen-xl">
        <h1 className="text-3xl font-semibold">ค้นหาวิชาเรียน</h1>
        <SearchCourse />
        <Courses />
      </div>
    </main>
  );
}
