import './globals.css';
import ThemeRegistry from './ThemeRegistry';

export const metadata = {
  title: 'Starter Kit Basic',
  description: 'Next.js + MUI + Bun Starter Kit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
