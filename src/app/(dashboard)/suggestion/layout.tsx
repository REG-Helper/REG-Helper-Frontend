import { AuthGuard } from '@/modules/auth/_guards';
import type { PropsWithChildren } from 'react';

export default function SuggestionLayout({ children }: PropsWithChildren) {
  return <AuthGuard>{children}</AuthGuard>;
}
