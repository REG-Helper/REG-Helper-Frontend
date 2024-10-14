import { Footer } from '@/shared/components';
import type { PropsWithChildren } from 'react';

export default function CoursesLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="min-h-screen flex-1">{children}</main>
      <Footer />
    </div>
  );
}
