import { endpoints } from '@/shared/configs';
import { axiosInstance } from '@/shared/utils';
import type {
  UploadTranscriptResponse,
  VerifyTranscriptResponse,
} from '../_types';

export const uploadTranscript = async (data: FormData) => {
  const response = await axiosInstance.post<UploadTranscriptResponse>(
    endpoints.transcript.upload,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export const verifyTranscript = async (data: FormData) => {
  const response = await axiosInstance.post<VerifyTranscriptResponse>(
    endpoints.transcript.verify,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};
