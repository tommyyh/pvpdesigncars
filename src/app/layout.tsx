import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--satoshi',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'PVPDesignCars',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>{children}</body>
    </html>
  );
}
