/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useMemo } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { useGetTopJobs } from './_hooks';
import { Button } from '@/shared/components/ui/button';
import type { TopJob } from './_types';
import { cn } from '@/shared/utils';

// ======================================================================================================

const getMedalIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return '';
  }
};

type RankCardProps = {
  job: TopJob & {
    rank: number;
  };
};

export function RankCard({ job }: RankCardProps) {
  return (
    <div
      className={cn(
        'flex w-full max-w-[200px] flex-col items-center justify-center rounded-lg border border-gray-300 p-4',
        { '-translate-y-8 transform shadow-lg': job.rank === 1 },
      )}
    >
      <div className="mb-2 flex h-16 w-16 aspect-square items-center justify-center rounded-full bg-gray-200">
        <span className="text-2xl font-bold">{getMedalIcon(job.rank)}</span>
      </div>
      <div className="mt-4">
        <h3 className="text-center text-lg font-semibold">{job.nameEn}</h3>
        <p className="text-center text-gray-500">{job.nameTh}</p>
      </div>
    </div>
  );
}

export function RankCardMobile({ job }: RankCardProps) {
  return (
    <div className="flex items-center border-b p-4 last:border-b-0">
      <div className="flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-gray-200">
        <span className="font-bold">{getMedalIcon(job.rank)}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{job.nameEn}</h3>
        <p className="text-gray-500">{job.nameTh}</p>
      </div>
    </div>
  );
}

// ======================================================================================================

export function JobsSuggestionModal() {
  const { data: topJobs } = useGetTopJobs();
  const sortedTopJobs = useMemo(() => {
    return topJobs
      ?.sort((a, b) => b.relevancyScore - a.relevancyScore)
      .map((job, index) => ({ ...job, rank: index + 1 }));
  }, [topJobs]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">อาชีพที่เหมาะกับคุณ</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] rounded-lg sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>อาชีพที่เหมาะกับคุณ</DialogTitle>
        </DialogHeader>

        <div className="hidden md:block">
          <div className="mx-auto grid grid-cols-3 gap-6 pt-8">
            {/* Rank 2 */}
            {sortedTopJobs?.[1] && <RankCard job={sortedTopJobs[1]} />}

            {/* Rank 1 */}
            {sortedTopJobs?.[0] && <RankCard job={sortedTopJobs[0]} />}

            {/* Rank 3 */}
            {sortedTopJobs?.[2] && <RankCard job={sortedTopJobs[2]} />}
          </div>
        </div>

        <div className="block md:hidden">
          {sortedTopJobs?.map((job) => (
            <RankCardMobile key={job.nameEn} job={job} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
