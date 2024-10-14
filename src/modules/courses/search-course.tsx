'use client';

import { Input } from '@/shared/components/ui/input';
import { type ChangeEvent } from 'react';
import { useCourseStore } from './_store';

export function SearchCourse() {
  const { setSearch } = useCourseStore((state) => state.actions);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input
        onChange={handleChange}
        placeholder="ค้นหาด้วยรหัสวิชา / ชื่อวิชา"
        className="py-5 text-base font-medium"
      />
    </div>
  );
}
