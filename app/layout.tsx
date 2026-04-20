import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RARH Rupasinghe | Portfolio",
  description: "IT Student & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow" style={{ background: 'linear-gradient(135deg, #e8f7f4 0%, #d4edf9 100%)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}