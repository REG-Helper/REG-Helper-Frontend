'use client';

import { useCourseStore } from '@/modules/courses/_store';
import { CourseDetail } from '@/modules/courses/course-detail';
import { buttonVariants } from '@/shared/components/ui/button';
import { paths } from '@/shared/routes';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const { setCurrentTerm } = useCourseStore((state) => state.actions);

  useEffect(() => {
    const term = searchParams.get('term') ?? '2567/1';

    if (term) {
      setCurrentTerm(term);
    }
  }, [searchParams, setCurrentTerm]);

  return (
    <div>
      <div className="container mx-auto space-y-8 px-5 py-12 xl:max-w-screen-xl">
        <Link
          href={paths.courses.root}
          className={buttonVariants({ variant: 'outline' })}
        >
          กลับ
        </Link>
        <CourseDetail courseId={params.slug} />
      </div>
    </div>
  );
}
