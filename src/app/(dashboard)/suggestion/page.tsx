import { SearchByJob } from '@/modules/suggestion-course';
import { Courses } from '@/modules/suggestion-course';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'แนะนำวิชาเรียน | REG Helper',
};

export default function SuggestionPage() {
  return (
    <div>
      <div className="container mx-auto px-5 py-12 xl:max-w-screen-xl">
        <h1 className="text-3xl font-semibold">
          แนะนำวิชาที่ใช่ จากอาชีพที่ชอบ
        </h1>
        <SearchByJob />
        <Courses />
      </div>
    </div>
  );
}
