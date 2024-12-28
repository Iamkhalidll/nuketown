import { Jua } from 'next/font/google';
import "./globals.css";
// Load Jua font with specific weight
const jua = Jua({ 
  weight: '400',  // Explicitly specify the weight
  subsets: ['latin'] 
});
export const metadata = {
  title: "Nuke town",
  description: "The future",
  icons: {
    icon: '/nuketown logo.png', // Place your favicon in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jua.className}>
      <link rel="icon" type="image/png" href="/logo.png" />
      <body>
        {children}
      </body>
    </html>
  );
}
