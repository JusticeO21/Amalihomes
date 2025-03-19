import type { Metadata } from "next";
import { QueryProvider } from "../providers/react-query/query-provider";
import "./globals.css";

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
      <body className={`font-lato`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
