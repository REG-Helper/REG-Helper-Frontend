import { ReactQueryProvider } from "@/shared/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "src/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reg Helper",
  description: "Check remaining credits: Computer Engineering",
  icons: "/next.svg",
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
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
