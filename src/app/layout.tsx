import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
  title: 'Starter Kit Basic',
  description: 'Next.js + MUI + Bun Starter Kit',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
