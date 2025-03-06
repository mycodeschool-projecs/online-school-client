import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoginProvider from "@/modules/context/LoginProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Academy - Ana Buda",
  description:
    "Beauty Academy is a beauty school that offers a variety of courses in cosmetology, esthetics, and nail technology. Our mission is to provide students with the skills and knowledge they need to succeed in the beauty industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginProvider>
          <Header />
          {children}
          <Footer />
        </LoginProvider>
      </body>
    </html>
  );
}
