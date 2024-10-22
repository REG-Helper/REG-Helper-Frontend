'use client';

import Image from 'next/image';
import { useUserStore } from '../auth/_store';
import { IconButton } from '@/shared/components';
import { Button } from '@/shared/components/ui/button';
import { PersonalInfoCard } from './personal-info-card';
import { useBoolean } from '@/shared/hooks';
import { UploadTranscriptModal } from './upload-transcript-modal';

export function PersonalInfo() {
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);
  const openUploadTranscriptModal = useBoolean(false);

  const handleViewTranscript = () => {
    window.open(user?.transcript?.url, '_blank');
  };

  const handleUploadTranscript = () => {
    openUploadTranscriptModal.onTrue();
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 p-4 md:flex-row md:px-8 md:py-10">
      <div className="flex w-full basis-[35%] justify-center">
        <div className="relative z-20 h-40 w-40 overflow-hidden rounded-full border-4 border-dotted border-orange-300">
          <Image
            src={user?.profileImage || ''}
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
            content={`${user?.firstname} ${user?.lastname}`}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="รหัสนักศึกษา"
            content={user?.studentId}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="คณะ"
            content={user?.faculty}
          />
          <PersonalInfoCard
            isLoading={loading}
            title="สาขา"
            content={user?.department}
          />
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <Button>ดูวิชาที่เหลือ</Button>
          <IconButton
            icon="material-symbols-light:cloud-upload"
            onClick={handleUploadTranscript}
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
      <UploadTranscriptModal
        open={openUploadTranscriptModal.value}
        setOpen={openUploadTranscriptModal.onToggle}
      />
    </div>
  );
}
