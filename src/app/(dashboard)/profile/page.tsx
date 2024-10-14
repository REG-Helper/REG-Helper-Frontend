'use client';

import { useUserStore } from '@/modules/auth/_store';
import { PersonalInfo, SkillsChart } from '@/modules/profile';

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold">Student Profile</h1>
        <PersonalInfo />
        <SkillsChart />
      </div>
    </div>
  );
}
