'use client';

import { AutoComplete } from '@/shared/components';
import { useGetJobs } from './_hooks';
import { useMemo } from 'react';
import { useSuggestionStore } from './_store';

export function SearchByJob() {
  const { data, isLoading } = useGetJobs();

  const searchJob = useSuggestionStore((state) => state.searchJob);
  const selectedJob = useSuggestionStore((state) => state.selectedJob);
  const { setSearchJob, setSelectedJob } = useSuggestionStore(
    (state) => state.actions,
  );

  const formattedItems = useMemo(() => {
    return (
      data?.map(({ from }) => ({
        value: from,
        label: from,
      })) || []
    );
  }, [data]);

  return (
    <div className="mt-4">
      <AutoComplete
        selectedValue={selectedJob}
        onSelectedValueChange={setSelectedJob}
        searchValue={searchJob}
        onSearchValueChange={setSearchJob}
        items={formattedItems}
        isLoading={isLoading}
        placeholder="ค้นหาวิชาจากอาชีพที่ใช่"
        emptyMessage="ไม่พบอาชีพที่ต้องการ"
      />
    </div>
  );
}
