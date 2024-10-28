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
import { useGetSkills } from './_hooks/use-get-skills';
import { Skeleton } from '@/shared/components/ui/skeleton';

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
      suggestedMax: 50,
      ticks: { stepSize: 10 },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
};

export const SkillsChart = memo(function SkillsChartComponent() {
  const { data: skills, isLoading } = useGetSkills();

  const labels = useMemo(
    () => skills?.map((skill) => skill.nameEn) ?? [],
    [skills],
  );
  const skillData = useMemo(
    () => skills?.map((skill) => skill.weight) ?? [],
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
    <div className="mx-auto mt-8 max-w-xl text-center">
      <h1 className="text-3xl font-bold">ทักษะ</h1>
      {isLoading ? (
        <Skeleton className="mx-auto mt-4 aspect-square w-full max-w-xl" />
      ) : (
        <Radar data={data} options={options} />
      )}
    </div>
  );
});
