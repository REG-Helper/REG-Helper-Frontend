import { AuthGuard } from '@/modules/auth/_guards';
import type { PropsWithChildren } from 'react';

export default function ProfileLayout({ children }: PropsWithChildren) {
  return <AuthGuard>{children}</AuthGuard>;
}
