import { useMutation } from '@tanstack/react-query';
import { uploadTranscript } from '../_services';

export const useUploadTranscript = () =>
  useMutation({
    mutationFn: (data: FormData) => uploadTranscript(data),
    onError: (error) => error,
  });
