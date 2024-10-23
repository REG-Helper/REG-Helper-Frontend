'use client';

import { Courses, SearchCourse, SelectYearsSemesters } from '@/modules/courses';
import { useCourseStore } from '@/modules/courses/_store';
import { useDocumentTitle } from '@/shared/hooks';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const { setCurrentTerm } = useCourseStore((state) => state.actions);

  useDocumentTitle('ค้นหาวิชาเรียน | Reg Helper', {
    preserveTitleOnUnmount: false,
  });

  useEffect(() => {
    const term = searchParams.get('term') ?? '2567/1';

    if (term) {
      setCurrentTerm(term);
    }
  }, [searchParams, setCurrentTerm]);

  return (
    <div>
      <div className="container mx-auto space-y-8 px-5 py-12 md:px-8 xl:max-w-screen-xl">
        <div className="flex flex-row gap-4">
          <h1 className="text-3xl font-semibold">ค้นหาวิชาเรียน</h1>
          <SelectYearsSemesters />
        </div>

        <SearchCourse />

        <Courses />
      </div>
    </div>
  );
}
