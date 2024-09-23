'use client';

import { useGetCourses } from './_hooks';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

export function Courses() {
  const { ref, inView } = useInView();
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    useGetCourses({
      perPage: 50,
    });

  const courses = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data],
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>{course.nameEn}</div>
        ))}
      </div>

      <div ref={ref} className="h-[20px] bg-transparent">
        {isFetchingNextPage && 'Loading more...'}
      </div>
    </div>
  );
}
