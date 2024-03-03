import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Footer from "@/widgets/Layout/Footer/ui/Footer";
import Header from "@/widgets/Layout/Header/ui/Header";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Frontend",
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
        <div className="min-h-screen max-w-4xl mx-auto flex flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
