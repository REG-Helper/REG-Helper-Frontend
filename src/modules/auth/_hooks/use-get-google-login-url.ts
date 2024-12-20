import { useMutation } from '@tanstack/react-query';
import { getGoogleLoginUrl } from '../_services';
import { enqueueSnackbar } from 'notistack';

export const useGetGoogleLoginUrl = () =>
  useMutation({
    mutationFn: getGoogleLoginUrl,
    onError: (error) => {
      enqueueSnackbar('เกิดข้อผิดพลาดในการเชื่อมต่อกับบัญชี Google', {
        variant: 'error',
      });
    },
  });
