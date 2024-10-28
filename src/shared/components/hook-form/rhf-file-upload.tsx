'use client';

import { Icon } from '@iconify/react';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { cn } from '@/shared/utils';
import { fromByteToMB } from './utils';
import type { FieldError } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { useVerifyTranscript } from '@/modules/profile/_hooks';
import { useBoolean } from '@/shared/hooks';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type UploadedCardProps = {
  file: File;
  removeFile: () => void;
};

function UploadedCard({ file, removeFile }: UploadedCardProps) {
  const isImage = file.type.startsWith('image/');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isImage) {
      const url = URL.createObjectURL(file);

      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    }

    setPreviewUrl(null);
  }, [file, isImage]);

  return (
    <div className="flex h-fit items-center justify-between rounded-md bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="flex items-center gap-3">
        {previewUrl ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-md">
            <Image
              src={previewUrl}
              alt={file.name}
              className="object-cover"
              fill
            />
          </div>
        ) : (
          <Icon icon="mdi:file-pdf-box" className="text-4xl text-red-500" />
        )}
        <div>
          <p className="text-sm font-medium">{file.name}</p>
          <p className="text-xs text-gray-500">{fromByteToMB(file.size)} MB</p>
        </div>
      </div>
      <button
        onClick={removeFile}
        className="text-gray-400 transition-colors duration-200 hover:text-red-500"
      >
        <Icon icon="mdi:close" className="text-xl" />
      </button>
    </div>
  );
}

// ======================================================================================================
type AlertMissingCourseProps = {
  missingCourses: string[];
};

function AlertMissingCourse({ missingCourses }: AlertMissingCourseProps) {
  return (
    <Alert variant="warning">
      <Icon icon="si:warning-fill" className="text-xl" />
      <AlertTitle>
        พบ {missingCourses.length} วิชาที่ไม่มีในฐานข้อมูล ได้แก่{' '}
        <span>
          {missingCourses.map((missingCourse, index) => (
            <span key={index}>{missingCourse}</span>
          ))}
        </span>
      </AlertTitle>
      <AlertDescription>
        หมายเหตุ: วิชาที่ไม่มีในฐานข้อมูลจะถูกนับเป็นวิชาในหมวดวิชาเลือกเสรี
        จำนวน 3 หน่วยกิต
      </AlertDescription>
    </Alert>
  );
}

// ======================================================================================================

type Props = {
  name: string;
};

export function RHFFileUpload({ name }: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [missingCourses, setMissingCourses] = useState<string[]>([]);
  const isUploading = useBoolean(false);
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const { mutateAsync: verifyTranscript } = useVerifyTranscript();

  const uploadAndVerifyFiles = useCallback(
    async (files: File[]) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('file', file));

      try {
        isUploading.onTrue();
        const response = await verifyTranscript(formData);
        setMissingCourses(response.missingCourses);

        setUploadedFiles([...files]);

        setValue(name, files);
      } catch (error) {
        setError(name, {
          type: 'manual',
          message: 'ไม่สามารถอัปโหลดไฟล์ เนื่องจาก format ของไฟล์ไม่ถูกต้อง',
        });
        setMissingCourses([]);
      } finally {
        isUploading.onFalse();
      }
    },
    [name, setError, setValue, verifyTranscript],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles([]);

      if (errors[name]) {
        clearErrors(name);
      }

      setMissingCourses([]);

      uploadAndVerifyFiles(acceptedFiles);
    },
    [clearErrors, errors, name, uploadAndVerifyFiles],
  );

  const removeFile = useCallback(
    (index: number) => {
      setUploadedFiles((prev) => {
        const updatedFiles = prev.filter((_, i) => i !== index);

        return updatedFiles;
      });

      setValue(name, uploadedFiles);

      clearErrors();
      setMissingCourses([]);
    },
    [clearErrors, name, setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          'flex h-40 items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all duration-300',
          {
            'border-blue-500 bg-blue-50': isDragActive,
            'border-gray-300 bg-gray-100': !isDragActive,
          },
        )}
      >
        <input {...getInputProps()} />
        {isUploading.value ? (
          <p className="text-blue-600">Uploading your files...</p>
        ) : null}

        {!isUploading.value && isDragActive && (
          <p className="text-blue-600">Drop the files here...</p>
        )}

        {!isUploading.value && !isDragActive && (
          <div className="flex flex-col items-center gap-4">
            <Icon
              icon="material-symbols:upload"
              className="text-4xl text-gray-500"
            />
            <div className="text-center">
              <p className="text-lg font-semibold">
                Drag 'n' drop your files here
              </p>
              <p className="text-sm text-gray-500">10 MB max per file</p>
            </div>
          </div>
        )}
      </div>

      {errors[name] && (
        <p className="text-sm text-red-500">
          {(errors[name] as FieldError)?.message}
        </p>
      )}

      {uploadedFiles.length > 0 && (
        <div className="h-full max-h-64 space-y-2 overflow-y-auto pb-2">
          {uploadedFiles.map((file, index) => (
            <UploadedCard
              file={file}
              key={index}
              removeFile={() => removeFile(index)}
            />
          ))}
        </div>
      )}

      {missingCourses.length > 0 && (
        <AlertMissingCourse missingCourses={missingCourses} />
      )}
    </div>
  );
}
