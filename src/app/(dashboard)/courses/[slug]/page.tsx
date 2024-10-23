'use client';

import { CourseDetail } from '@/modules/courses/course-detail';
import { buttonVariants } from '@/shared/components/ui/button';
import { paths } from '@/shared/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const param = new URLSearchParams(url.search);
    const yearParam = param.get('year');
    const semesterParam = param.get('semester');

    setYear(yearParam ? yearParam : '');
    setSemester(semesterParam ? semesterParam : '');
  }, []);

  return (
    <div className="mx-auto space-y-8 px-4 pb-4 md:px-8 xl:max-w-screen-xl">
      <Link
        href={paths.courses.root}
        className={buttonVariants({ variant: 'outline' })}
      >
        กลับ
      </Link>
      <CourseDetail courseId={params.slug} year={year} semester={semester}/>
    </div>
  );
}
