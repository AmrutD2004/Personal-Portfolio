
import Navbar from "@/components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{scrollBehavior: 'smooth'}} >
      <body className="overflow-x-hidden">
        <div className="flex items-center justify-center w-full z-[100] ">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
