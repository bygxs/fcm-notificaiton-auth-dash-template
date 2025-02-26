
import {ServiceWorkerRegistration} from  "@/app/components/ServiceWorkerRegistration";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { version } from "../../package.json";
import { ThemeProvider } from "@/app/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DARK-MODE-TEMPLATE-III",
  description: "My dark mode template on GitHub to apply to new apps ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  

  return (
    <html lang="en">
      <head><link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <ServiceWorkerRegistration />
        <footer className="py-2 fixed bottom-0 left-0 right-0 flex justify-center items-center py-4 bg-gray-800 text-white">
          Version: {version}
        </footer>
      </body>
    </html>
  );
}
