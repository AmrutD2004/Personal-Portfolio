import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amrut Deshpande - FullStack Developer",
  description: "Portfolio of Amrut Deshpande, a FullStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Libertinus+Mono&family=Menbere:wght@100..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mozilla+Headline:wght@200..700&family=Mozilla+Text:wght@200..700&family=Special+Gothic+Expanded+One&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="overflow-x-hidden">
        <div className="fixed top-0 w-full z-[100]">
        </div>
        <main className="pt-5">
          {children}
        </main>
      </body>
    </html>
  );
}