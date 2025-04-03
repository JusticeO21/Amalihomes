import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import { Analytics } from "../components/analytics";
import { QueryProvider } from "../providers/react-query/query-provider";
import { Footer } from "features/footer";
import { Header } from "features/header";

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
      <Analytics />
      <body className={`${lato.variable}`}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRDDB8RS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
