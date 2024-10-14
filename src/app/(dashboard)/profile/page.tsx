import { PersonalInfo } from '@/modules/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'โปรไฟล์',
};

export default function ProfilePage() {
  return (
    <div className="py-12 sm:px-6">
      <div className="container mx-auto flex justify-center xl:max-w-screen-xl">
        <div className="w-full max-w-5xl px-6 sm:rounded-2xl sm:shadow-lg">
          <h1 className="text-center text-3xl font-bold">ข้อมูลส่วนตัว</h1>
          <PersonalInfo />
          {/* <SkillsChart /> */}
        </div>
      </div>
    </div>
  );
}
