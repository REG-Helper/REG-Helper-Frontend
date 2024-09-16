'use client';

import { Button } from '@/shared/components/ui/button';
import { useGetGoogleLoginUrl } from './_hooks';

export function GoogleLoginBtn() {
  const { mutateAsync: getGoogleLoginUrl } = useGetGoogleLoginUrl();

  const redirectToGoogleLoginPage = async () => {
    const googleLoginUrl = await getGoogleLoginUrl();

    window.location.replace(googleLoginUrl);
  };

  return (
    <Button onClick={redirectToGoogleLoginPage}>เข้าสู่ระบบด้วย Google</Button>
  );
}
