import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
        <header><nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/news">News</Link>
            <Link href="/fixtures">Fixtures</Link>
            <Link href="/teams">Teams</Link>
            <Link href="/tables">Tables</Link>
          </div>
          </nav></header>
        </div>
        
        {children}
      </body>
    </html>
  );
}
