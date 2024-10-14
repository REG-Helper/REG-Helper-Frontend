'use client';

import { useGoogleLogin } from '@/modules/auth/_hooks';
import type { OauthLoginRequest } from '@/modules/auth/_types';
import { setSession } from '@/modules/auth/_utils';
import { paths } from '@/shared/routes';
import { useSearchParams, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutateAsync: googleLogin } = useGoogleLogin();

  const code = searchParams.get('code');
  const state = searchParams.get('state');

  const handleLogin = useCallback(
    async (oauthLoginRequest: OauthLoginRequest) => {
      try {
        const { credentials } = await googleLogin(oauthLoginRequest);

        setSession(credentials.accessToken);

        router.push(paths.profile.root);

        enqueueSnackbar('เข้าสู่ระบบสำเร็จ', { variant: 'info' });
      } catch (error) {
        console.error(error);

        router.push(paths.root);

        enqueueSnackbar('เกิดข้อผิดพลาดในการเชื่อมต่อกับบัญชี Google', {
          variant: 'error',
        });
      }
    },
    [googleLogin, router],
  );

  useEffect(() => {
    if (code && state) {
      handleLogin({ code, state });
    }
  }, [code, handleLogin, state]);

  return (
    <div>
      <h1>กำลังเชื่อมต่อกับบัญชี Google...</h1>
    </div>
  );
}
