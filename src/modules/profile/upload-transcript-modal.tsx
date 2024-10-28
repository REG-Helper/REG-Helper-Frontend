'use client';

import { Form, RHFFileUpload } from '@/shared/components/hook-form';
import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ALLOW_FILE_TYPES, MAX_FILE_SIZES } from './_constants';
import { fromByteToMB } from '@/shared/components/hook-form/utils';
import { useUploadTranscript } from './_hooks';
import { enqueueSnackbar } from 'notistack';
import { useUserStore } from '../auth/_store';

export type Props = {
  open: boolean;
  setOpen: () => void;
};

const uploadSchema = z.object({
  file: z
    .array(z.instanceof(File))
    .min(1, 'กรุณาอัปโหลดไฟล์')
    .refine((files) => files.every((file) => file instanceof File), {
      message: 'กรุณาอัปโหลดไฟล์ที่ถูกต้อง',
    })
    .refine(
      (files) => files.every((file) => ALLOW_FILE_TYPES.includes(file.type)),
      {
        message: 'กรุณาอัปโหลดไฟล์ที่มีนามสกุลที่ถูกต้อง (pdf)',
      },
    )
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZES), {
      message: `กรุณาอัปโหลดไฟล์ที่มีขนาดไม่เกิน ${fromByteToMB(MAX_FILE_SIZES)}MB`,
    }),
});

export function UploadTranscriptModal({ open, setOpen }: Props) {
  const { setUser } = useUserStore((state) => state.actions);
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(uploadSchema),
  });
  const { mutateAsync: uploadTranscript } = useUploadTranscript();
  const {
    formState: { isSubmitting },
    watch,
  } = methods;
  const file = watch('file');

  const handleSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();

      formData.append('file', data.file[0]);

      const response = await uploadTranscript(formData);

      enqueueSnackbar('อัปโหลดทรานสคริปต์สำเร็จแล้ว', {
        variant: 'info',
      });

      setUser({
        ...response.user,
        transcript: response.transcript,
      });
      setOpen();
    } catch (error) {
      console.error(error);

      enqueueSnackbar('เกิดข้อผิดพลาดในการอัปโหลดทรานสคริปต์', {
        variant: 'error',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full max-w-xl p-5">
        <DialogHeader>
          <DialogTitle>อัปโหลดทรานสคริปต์</DialogTitle>
        </DialogHeader>
        <Form methods={methods} onSubmit={handleSubmit}>
          <RHFFileUpload name="file" />
          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              disabled={!(file?.length > 0) || isSubmitting}
            >
              ยืนยัน
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
