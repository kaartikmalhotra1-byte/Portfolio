import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaartik Malhotra — Product Designer",
  description:
    "I design products where humans and AI share the work. Lead Product Designer at Monotype.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
