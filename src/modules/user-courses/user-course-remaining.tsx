'use client';

import { courseCategoryMapping } from './_constants/user-course';
import { useGetRemainingCourse } from './_hooks';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';

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
          return (
            <AccordionItem value={key} key={index}>
              <AccordionTrigger>
                <div>
                  {label} {remainingCourses?.remainingCredits || 0} /{' '}
                  {remainingCourses?.requiredCredits || 0} credits remaining
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
}
