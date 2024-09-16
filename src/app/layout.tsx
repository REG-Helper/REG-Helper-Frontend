import { ReactQueryProvider } from '@/shared/react-query';
import { SnackbarProvider } from '@/shared/components/notistack';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { AuthProvider } from '@/modules/auth/_context';
import 'src/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Reg Helper',
    template: `%s | Reg Helper`,
  },
  description: 'Check remaining credits: Computer Engineering',
  icons: '/next.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense>
          <SnackbarProvider>
            <ReactQueryProvider>
              <AuthProvider>{children}</AuthProvider>
            </ReactQueryProvider>
          </SnackbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
