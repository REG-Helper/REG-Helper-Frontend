'use client';

import { useGetCourses } from './_hooks';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { CourseCard } from './course-card';
import { useCourseStore } from './_store';
import { useDebounceValue } from '@/shared/hooks';

export function Courses() {
  const search = useCourseStore((state) => state.search);
  const [searchTerm] = useDebounceValue(search, 500);
  const { ref, inView } = useInView();
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
  } = useGetCourses({
    perPage: 20,
    id: searchTerm,
  });

  const courses = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data],
  );

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm) {
      refetch();
    }
  }, [refetch, searchTerm]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <div className="flex flex-col gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <div ref={ref} className="h-[20px] bg-transparent">
        {isFetchingNextPage && 'Loading more...'}
      </div>
    </div>
  );
}
