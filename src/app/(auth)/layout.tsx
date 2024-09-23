import { AlreadyAuthenticatedGuard } from '@/modules/auth/_guards';
import { Suspense, type PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <AlreadyAuthenticatedGuard>{children}</AlreadyAuthenticatedGuard>
    </Suspense>
  );
}