// 'use client' directive to ensure this is treated as a client-side component
'use client';

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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export function SkillsChart() {
  const data = {
    labels: [
      'Qualitative Research',
      'Workshop Facilitation',
      'Interaction Design',
      'Visual Design',
      'Design Strategy',
      'Quantitative Research',
      'Backend Developer',
    ],
    datasets: [
      {
        label: 'Skills Assessment',
        data: [40, 30, 40, 20, 40, 30, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <>
      <h1 className="mb-4 text-center text-3xl font-bold">My Skill</h1>
      <Radar data={data} options={options} className="rounded-lg shadow" />
    </>
  );
}
