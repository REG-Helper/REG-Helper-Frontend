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
    <Button onClick={redirectToGoogleLoginPage} className='text-white' variant='ghost'>เข้าสู่ระบบ</Button>
  );
}
