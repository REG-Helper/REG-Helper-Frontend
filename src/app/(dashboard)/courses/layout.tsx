import { Footer } from '@/shared/components';
import { Suspense, type PropsWithChildren } from 'react';

export default function CoursesLayout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <div className="flex min-h-screen flex-col">
        <main className="min-h-screen flex-1">{children}</main>
        <Footer />
      </div>
    </Suspense>
  );
}
