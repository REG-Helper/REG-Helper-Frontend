import { UserCourseRemaining } from '@/modules/user-courses';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'วิชาที่เหลือ | REG Helper',
};

export default function CourseRemainingPage() {
  return (
    <div>
      <div className="container mx-auto px-5 py-12 xl:max-w-screen-xl">
        <h1 className="text-3xl font-semibold text-deep-blue-dark">วิชาที่เหลือ</h1>
        <UserCourseRemaining />
      </div>
    </div>
  );
}
