import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadTranscript } from '../_services';
import { QUERY_KEY } from '../_config';

export const useUploadTranscript = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => uploadTranscript(data),
    onError: (error) => error,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SKILLS] });
    },
  });
};
