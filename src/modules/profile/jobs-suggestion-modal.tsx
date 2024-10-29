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
import { RankCard, RankCardMobile } from './rank-card';

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
