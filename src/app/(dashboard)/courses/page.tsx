'use client';

import { Courses, SearchCourse, SelectYearsSemesters } from '@/modules/courses';
import { useCourseStore } from '@/modules/courses/_store';
import { CourseFilter } from '@/modules/courses/course-filter';
import { Button } from '@/shared/components/ui/button';
import { useBoolean, useDocumentTitle } from '@/shared/hooks';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const openFilter = useBoolean(true);
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

        <div>
          <SearchCourse />
          <Button onClick={openFilter.onToggle}>Setting</Button>
        </div>

        <div className="flex">
          <div
            className={`w-full ${openFilter.value ? 'basis-[80%]' : 'basis-full'}`}
          >
            <Courses />
          </div>
          {openFilter.value && (
            <div className="basis-[20%]">
              <CourseFilter />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
