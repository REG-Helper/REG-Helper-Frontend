import { useMutation } from '@tanstack/react-query';
import { verifyTranscript } from '../_services';

export const useVerifyTranscript = () =>
  useMutation({
    mutationFn: (data: FormData) => verifyTranscript(data),
    onError: (error) => error,
  });
