import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vniTruck = localFont({
  src: "./fonts/Quen-Regular-v1.1.otf",
  variable: "--font-vni-truck",
  display: "swap",
});

export const metadata: Metadata = {
  title: "App này chill chill",
  description: "A magical way to ask that special someone on a date!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vniTruck.className} ${vniTruck.variable} antialiased`}
        style={{ overscrollBehaviorX: "none" }}
      >
        {children}
      </body>
    </html>
  );
}
