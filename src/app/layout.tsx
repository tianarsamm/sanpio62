import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from './context/AudioContext';
import SimpleAudioPlayer from './components/organisms/SimpleAudioPlayer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanpio62",
  description: "Alumni Seminari Pius XII Kisol 2017-2023",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioProvider>
          {children}
          <SimpleAudioPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
