import "./globals.css";
import { getSeoTags } from "@/lib/seo/seo";
import { Lato } from "next/font/google";
import { QueryProvider } from "../providers/react-query/query-provider";
import { AppFooter } from "@/features/footer/footer";
import { AppHeader } from "@/features/header/header";
import { Analytics } from "@/features/analytics";
import ConsentBanner from "@/features/analytics/consent-banner";
import ConsentInitScript from "@/features/analytics/consent-init-script";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = getSeoTags({
  title: {
    default: "AmaliHomes",
    template: "%s | AmaliHomes",
  },
  description: "Quality furniture for every home & office",
  keywords: "home, office, furniture, amalihome",
  openGraph: {
    title: "AmaliHomes",
    description: "Quality furniture for every home & office",
  },
  canonicalUrlRelative: "/",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${lato.variable}`}>
        <ConsentInitScript />
        <Analytics />
        <ConsentBanner />
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
          <AppHeader />
          {children}
          <AppFooter />
        </QueryProvider>
      </body>
    </html>
  );
}
