import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})
export const metadata: Metadata = {
  title: "Capital Blend",
  description: "Capital Blend is a mdoern Banking app that incorporates Modern day Finance management and is a DeFi application for crypto users to connect ther wallets and manage their crytpo",
  icons: {
    icon: 'icons/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
