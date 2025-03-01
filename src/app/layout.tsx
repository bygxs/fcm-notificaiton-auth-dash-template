import { ServiceWorkerRegistration } from "@/app/components/ServiceWorkerRegistration";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { version } from "../../package.json";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTH-ONBOARD-DASH-SIGN-OUT-TEMPLATE-I ",
  description: "User flow template on GitHub to apply to new apps ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
  {/*     <header><ThemeToggle /></header> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           {/* Global Header */}
           <Header />
        <ThemeProvider>{children}</ThemeProvider>
        <ServiceWorkerRegistration />
        <footer className="text-xs fixed bottom-0 left-0 right-0 flex justify-center items-center bg-gray-800 text-white">
          Version: {version}
        </footer>
      </body>
    </html>
  );
}
