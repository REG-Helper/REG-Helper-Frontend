'use client';

import Image from 'next/image';
import { useUserStore } from '../auth/_store';
import { IconButton } from '@/shared/components';
import { Button } from '@/shared/components/ui/button';
import { PersonalInfoCard } from './personal-info-card';

const profileData = {
  name: 'Mr. Thanpisit Suriyaroj',
  studentID: '65010461',
  nationalID: '1100801480644',
  dateOfBirth: 'November 18, 2003',
  dateOfAdmission: '2022',
  dateOfGraduation: 'N/A (สถานะ: เรียน)',
  faculty: 'Bachelor of Engineering',
  department: 'Computer Engineering',
  GPA: 3.36,
};

export function PersonalInfo() {
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);

  const handleViewTranscript = () => {
    // TODO: Change the URL to the transcript file

    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 p-4 md:flex-row md:px-8 md:py-10">
      <div className="flex w-full basis-[35%] justify-center">
        <div className="relative z-20 h-40 w-40 overflow-hidden rounded-full border-4 border-dotted border-orange-300">
          <Image
            src={user?.profileImage as string}
            layout="fill"
            alt="Profile Picture"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full basis-[65%]">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          <PersonalInfoCard
            isLoading={loading}
            title="ชื่อ-นามสกุล"
            content={`${user?.firstname || ''} ${user?.lastname || ''}`}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="รหัสนักศึกษา"
            content={user?.studentId || ''}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="เกรดเฉลี่ย"
            content={profileData.GPA}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="คณะ"
            content={profileData.faculty}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="สาขา"
            content={profileData.department}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <Button>ดูวิชาที่เหลือ</Button>
          <IconButton
            icon="material-symbols-light:cloud-upload"
            onClick={() => {}}
          >
            อัปโหลดทรานสคริปต์
          </IconButton>
          <IconButton
            icon="material-symbols:cloud-download"
            onClick={handleViewTranscript}
          >
            ดูทรานสคริปต์
          </IconButton>
        </div>
      </div>
    </div>
  );
}
