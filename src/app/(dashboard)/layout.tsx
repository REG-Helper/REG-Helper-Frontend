import { Navbar } from '@/modules/navbar';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="mt-10">{children}</div>
    </>
  );
}
