import { cn } from '@/shared/utils';
import { TopJob } from './_types';

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

type Props = {
  job: TopJob & {
    rank: number;
  };
};

export function RankCard({ job }: Props) {
  return (
    <div
      className={cn(
        'flex w-full max-w-[200px] flex-col items-center justify-center rounded-lg border border-gray-300 p-4',
        { '-translate-y-8 transform shadow-lg': job.rank === 1 },
      )}
    >
      <div className="mb-2 flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-gray-200">
        <span className="text-2xl font-bold">{getMedalIcon(job.rank)}</span>
      </div>
      <div className="mt-4">
        <h3 className="text-center text-lg font-semibold text-deep-blue">{job.nameEn}</h3>
        <p className="text-center text-gray-500">{job.nameTh}</p>
      </div>
    </div>
  );
}

export function RankCardMobile({ job }: Props) {
  return (
    <div className="flex items-center border-b p-4 last:border-b-0">
      <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-gray-200">
        <span className="font-bold">{getMedalIcon(job.rank)}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{job.nameEn}</h3>
        <p className="text-gray-500">{job.nameTh}</p>
      </div>
    </div>
  );
}
