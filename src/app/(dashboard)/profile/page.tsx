import {
  JobsSuggestionModal,
  PersonalInfo,
  SkillsChart,
} from '@/modules/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'โปรไฟล์ | REG Helper',
};

export default function ProfilePage() {
  return (
    <div>
      <div className="container mx-auto flex justify-center py-12 sm:px-5 xl:max-w-screen-xl">
        <div className="w-full max-w-5xl px-5 py-8 sm:rounded-2xl sm:p-8 sm:shadow-lg">
          <h1 className="mb-4 text-center text-3xl font-bold">ข้อมูลส่วนตัว</h1>
          <PersonalInfo />
          <SkillsChart />
          <JobsSuggestionModal />
        </div>
      </div>
    </div>
  );
}
