import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "../providers/react-query/query-provider";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Amalizon",
  description: "Amalizon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
