import { CourseGroupMapper, CourseSubGroupMapper } from './_constants';
import type { CourseGroup, CourseSubGroup } from './_enums';

type Props = {
  nameEn: string;
  id: string;
  group: CourseGroup;
  subGroup: CourseSubGroup;
  credit: number;
};

export function CourseCard({ id, credit, group, nameEn, subGroup }: Props) {
  return (
    <div className="rounded-md border p-5 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row">
        <h2 className="text-lg font-semibold md:text-xl">
          {id} {nameEn}
        </h2>
        <p className="md:text-lg">[{credit} หน่วยกิต]</p>
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
