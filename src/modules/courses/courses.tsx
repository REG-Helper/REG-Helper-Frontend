'use client';

import { useGetCourses } from './_hooks';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { CourseCard } from './course-card';
import { useCourseStore } from './_store';
import { useDebounceValue } from '@/shared/hooks';
import { Loading } from './loading';

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
    if (searchTerm) {
      refetch();
    }
  }, [refetch, searchTerm]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="flex flex-col gap-4">
        {courses?.length ? (
          <>
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </>
        ) : (
          <p className="text-center text-lg font-semibold">ไม่พบรายวิชา</p>
        )}
      </div>

      <div ref={ref} className="h-[20px] bg-transparent">
        {isFetchingNextPage && <Loading />}
      </div>
    </div>
  );
}
