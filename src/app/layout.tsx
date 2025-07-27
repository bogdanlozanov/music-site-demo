import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import GlobalStyle from '@/styles/GlobalStyle';
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Providers } from "./providers";
import 'swiper/css';
import 'swiper/css/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music World",
  description: "Your favorite online music shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle />
        <Providers>
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <NewsletterSignup />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
