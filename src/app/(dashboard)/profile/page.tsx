// 'use client';
// import { useUserStore } from '@/modules/auth/_store';
import SkillsChart from './skillchart';
import PersonalInfo from './personinfo';

export default function ProfilePage() {
  // const student = useUserStore((state) => state.student);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Student Profile</h1>
        <PersonalInfo />
        <SkillsChart />
      </div>
    </div>
  );
}
