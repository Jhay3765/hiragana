import type { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";

import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource-variable/lexend-mega";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/noto-sans-jp";
export const metadata: Metadata = {
  title: "theJapaneseSpot",
  description:
    "Your Japanese learning tool - Completely for free. Learn at your own pace with quizes and fun articles!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-orange-950 ">{children}</body>
    </html>
  );
}
