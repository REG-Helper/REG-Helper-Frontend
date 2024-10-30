import { Suspense, type PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>;
}
