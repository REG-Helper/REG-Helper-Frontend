import { AuthGuard } from '@/modules/auth/_guards';
import type { PropsWithChildren } from 'react';

export default function CourseRemainingLayout({ children }: PropsWithChildren) {
  return <AuthGuard checkTranscript={true}>{children}</AuthGuard>;
}
