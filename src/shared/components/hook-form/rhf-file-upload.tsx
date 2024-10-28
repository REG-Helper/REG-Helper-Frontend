'use client';

import { Icon } from '@iconify/react';
import { useCallback, useEffect, useState } from 'react';
import type { Accept } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { cn } from '@/shared/utils';
import { fromByteToMB } from './utils';
import type { FieldError} from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

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
  }, [file]);

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

type Props = {
  multipleFile?: boolean;
  maxFiles?: number;
  acceptFile?: Accept;
  name: string;
};

export function RHFFileUpload({
  maxFiles = 1,
  multipleFile = false,
  acceptFile = {
    'application/pdf': ['.pdf'],
    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
  },
  name,
}: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => {
      const newFiles = acceptedFiles.filter(
        (file) =>
          !prev.some(
            (prevFile) =>
              prevFile.name === file.name &&
              prevFile.size === file.size &&
              prevFile.lastModified === file.lastModified,
          ),
      );

      const updatedFiles = multipleFile ? [...prev, ...newFiles] : newFiles;

      setValue(name, updatedFiles);

      return updatedFiles;
    });
  }, []);

  const removeFile = useCallback((index: number) => {
    setUploadedFiles((prev) => {
      const updatedFiles = prev.filter((_, i) => i !== index);

      setValue(name, updatedFiles);

      return updatedFiles;
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: multipleFile,
    maxFiles: maxFiles,
    accept: acceptFile,
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          'flex items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all duration-300',
          {
            'border-blue-500 bg-blue-50': isDragActive,
            'border-gray-300 bg-gray-100': !isDragActive,
          },
        )}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-600">Drop the files here...</p>
        ) : (
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
    </div>
  );
}
