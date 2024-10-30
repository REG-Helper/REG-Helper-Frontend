'use client';

import { paths } from '@/shared/routes';
import { CourseGroupMapper, CourseSubGroupMapper } from './_constants';
import type { CourseGroup, CourseSubGroup } from './_enums';
import Link from 'next/link';
import { useCourseStore } from './_store';

type Props = {
  nameEn: string;
  id: string;
  group: CourseGroup;
  subGroup: CourseSubGroup;
  credit: number;
};

export function CourseCard({ id, credit, group, nameEn, subGroup }: Props) {
  const currentTerm = useCourseStore((state) => state.currentTerm);

  return (
    <div className="rounded-md border p-5 sm:p-8">
      <div>
        <h2 className="text-deep-blue-dark text-lg font-semibold md:text-xl">
          <Link
            className="hover:underline"
            href={paths.courses.detail(id, { term: currentTerm })}
          >
            {id} {nameEn}
          </Link>
          <span className="text-light-gray ml-4 whitespace-nowrap md:text-lg">
            [{credit} หน่วยกิต]
          </span>
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:flex">
        <div className="md:basis-[20%] lg:basis-[15%]">
          <p className="text-xs">หมวดหมู่</p>
          <p className="text-sm md:text-base">{CourseGroupMapper.get(group)}</p>
        </div>
        <div>
          <p className="text-xs">กลุ่มวิชา</p>
          <p className="text-sm md:text-base">
            {CourseSubGroupMapper.get(subGroup)}
          </p>
        </div>
      </div>
    </div>
  );
}
