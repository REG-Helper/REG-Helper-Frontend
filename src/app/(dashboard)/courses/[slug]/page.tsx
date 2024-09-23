'use client';

import { CourseDetail } from '@/modules/courses/course-detail';
import { buttonVariants } from '@/shared/components/ui/button';
import Link from 'next/link';

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto space-y-8 px-4 md:px-8 xl:max-w-screen-xl">
      <Link href="/courses" className={buttonVariants({ variant: 'outline' })}>
        กลับ
      </Link>
      <CourseDetail courseId={params.slug} />
    </div>
  );
}
