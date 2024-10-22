'use client';

import { Input } from '@/shared/components/ui/input';
import { useCallback, type ChangeEvent } from 'react';
import { useCourseStore } from './_store';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@iconify/react';

export function SearchCourse() {
  const { setSearch } = useCourseStore((state) => state.actions);
  const searchTerm = useCourseStore((state) => state.search);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  const clearSearch = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  return (
    <div className="relative">
      <Input
        value={searchTerm}
        onChange={handleChange}
        placeholder="ค้นหาด้วยรหัสวิชา / ชื่อวิชา"
        className="py-5 text-base font-medium"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full text-gray-400"
        onClick={searchTerm ? clearSearch : undefined}
      >
        <Icon
          icon={
            searchTerm ? 'material-symbols:close' : 'material-symbols:search'
          }
          className="text-2xl"
        />
      </Button>
    </div>
  );
}
