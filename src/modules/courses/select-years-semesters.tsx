'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { useGetYearsSemesters } from './_hooks';
import { useCourseStore } from './_store';
import { useCallback } from 'react';
import { convertToBuddhistYear } from '@/shared/utils';
import { useRouter } from 'next/navigation';

export function SelectYearsSemesters() {
  const { data: yearsSemesters } = useGetYearsSemesters();
  const currentTerm = useCourseStore((state) => state.currentTerm);
  const { setCurrentTerm } = useCourseStore((state) => state.actions);
  const router = useRouter();

  const handleValueChange = useCallback(
    (value: string) => {
      setCurrentTerm(value);

      router.replace(`?term=${value}`);
    },
    [setCurrentTerm, router],
  );

  return (
    <div>
      <Select value={currentTerm} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="เลือกเทอมที่ต้องการ" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {yearsSemesters?.map((item) => (
              <SelectItem
                key={`${convertToBuddhistYear(item.year)}/${item.semester}`}
                value={`${convertToBuddhistYear(item.year)}/${item.semester}`}
              >
                {convertToBuddhistYear(item.year)}/{item.semester}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
