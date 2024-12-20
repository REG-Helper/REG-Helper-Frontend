'use client';

import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSuggestionStore } from './_store';
import { useGetCourses } from '../courses/_hooks';
import { Loading } from '../courses/loading';
import { CourseCard } from '../courses';

export function Courses() {
  const selectedJob = useSuggestionStore((state) => state.selectedJob);
  const { ref, inView } = useInView();
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    useGetCourses({
      perPage: 20,
      search: '',
      job: selectedJob,
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

  if (isLoading) return <Loading />;

  return (
    <div className='mt-8'>
      {selectedJob && (
        <div>
          <div className="flex flex-col gap-4 text-deep-blue">
            {courses?.length ? (
              <>
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
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
      )}
    </div>
  );
}
