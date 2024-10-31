import { ReactQueryProvider } from '@/shared/react-query';
import { SnackbarProvider } from '@/shared/components/notistack';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { AuthProvider } from '@/modules/auth/_context';
import 'src/globals.css';

const prompt = Prompt({
  weight: ['400', '500', '700'],
  subsets: ['thai'],
});

export const metadata: Metadata = {
  description: 'Check remaining credits: Computer Engineering',
  icons: '/logo.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={prompt.className}>
        <SnackbarProvider>
          <ReactQueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReactQueryProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
