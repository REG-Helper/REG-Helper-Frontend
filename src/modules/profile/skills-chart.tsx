'use client';

import { memo, useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { useGetSkills } from './_hooks';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { JobsSuggestionModal } from './jobs-suggestion-modal';
import { useUserStore } from '../auth/_store';
import { Button } from '@/shared/components/ui/button';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const options = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: { stepSize: 2 },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
};

const defaultLabels = [
  'Programming',
  'Hardware',
  'Circuit',
  'Network',
  'Language',
];
const defaultData = [0, 0, 0, 0, 0];

export const SkillsChart = memo(function SkillsChartComponent() {
  const { data: skills, isLoading } = useGetSkills();
  const user = useUserStore((state) => state.user);

  const labels = useMemo(
    () => skills?.map((skill) => skill.nameEn) ?? defaultLabels,
    [skills],
  );

  const skillData = useMemo(
    () => skills?.map((skill) => skill.weight) ?? defaultData,
    [skills],
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'ทักษะ',
          data: skillData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    }),
    [labels, skillData],
  );

  return (
    <div className="relative mx-auto mt-8 max-w-xl text-center">
      <h1 className="mb-4 text-3xl font-bold text-deep-blue-dark">ทักษะ</h1>
      {user?.transcript?.url ? (
        <JobsSuggestionModal />
      ) : (
        <Button variant="outline" disabled={true}>        
            อาชีพที่เหมาะกับคุณ
        </Button>
      )}
      {isLoading ? (
        <Skeleton className="mx-auto mt-4 aspect-square w-full max-w-xl" />
      ) : (
        <div className="relative">
          <Radar
            data={data}
            options={options}
            className="transition-opacity duration-300"
          />
          {!user?.transcript?.url && (
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
              <p className="text-center text-lg font-medium">
                กรุณาอัปโหลดทรานสคริปต์
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
