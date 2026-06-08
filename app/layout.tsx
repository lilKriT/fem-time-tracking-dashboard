import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Time Tracking Dashboard | lilKriT",
  description: "Fronted Mentor Challenge completed by lilKriT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubikSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
