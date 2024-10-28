'use client';

import { courseCategoryMapping } from './_constants/user-course';
import { useGetRemainingCourse } from './_hooks';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';
import Link from 'next/link';
import { paths } from '@/shared/routes';
import { cn } from '@/shared/utils';

export function UserCourseRemaining() {
  const { data, isLoading } = useGetRemainingCourse();

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {Array.from(courseCategoryMapping.entries())
        .filter(([key]) => (data?.[key]?.remainingCredits || 0) > 0)
        .map(([key, label], index) => {
          const remainingCourses = data?.[key];
          const fixedCoursesList = data?.[key].courses.fixedCourses;
          return (
            <AccordionItem value={key} key={index}>
              <AccordionTrigger>
                <div className="flex flex-col text-left">
                  <div className="text-xl">
                    {label} {remainingCourses?.remainingCredits || 0} หน่วยกิต
                  </div>
                  <div className="text-sm text-gray-500">
                    หลักสูตรต้องการ {remainingCourses?.requiredCredits || 0}{' '}
                    หน่วยกิต
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {remainingCourses?.courses?.fixedCourses.length ? (
                  <div>
                    <div className="text-xl font-medium">
                      คุณต้องลงเรียนวิชาดังต่อไปนี้
                    </div>
                    <div className="my-4 grid grid-flow-row grid-cols-12 gap-2 text-gray-500">
                      <div>รหัสวิชา</div>
                      <div className="col-start-4 col-end-10">ชื่อวิชา</div>
                      <div>หน่วยกิต</div>
                    </div>
                    <ul>
                      {fixedCoursesList?.map((course) => (
                        <li
                          key={course.id}
                          className="grid grid-flow-row grid-cols-12 gap-2"
                        >
                          <div className="my-1">{course.id}</div>
                          <div className="col-start-4 col-end-10 my-1 hover:underline">
                            <Link href={`${paths.courses.root}/${course.id}`}>
                              {course.nameEn}
                            </Link>
                          </div>
                          <div className="mx-6 my-1">{course.credit}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : undefined}

                {remainingCourses?.courses.electiveCredits ? (
                  <div className="mt-4 text-xl font-medium">
                    <span
                      className={cn({
                        hidden: !remainingCourses?.courses?.fixedCourses.length,
                      })}
                    >
                      และ
                    </span>
                    คุณต้องลงวิชาในหมวดหมู่นี้เพิ่มอีก{' '}
                    {remainingCourses?.courses.electiveCredits || 0} หน่วยกิต
                  </div>
                ) : undefined}
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
}
