import { Analytics } from "@/features/analytics";
import { AnalyticsProvider } from "@/features/analytics/analytics-provider";
import { AppFooter } from "@/features/footer/footer";
import { AppHeader } from "@/features/header/header";
import TawkChat from "@/features/live-chat";
import { getSeoTags } from "@/lib/seo/seo";
import { Lato } from "next/font/google";
import { QueryProvider } from "../providers/react-query/query-provider";
import "./globals.css";

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
        <AnalyticsProvider>
          <Analytics />
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
        </AnalyticsProvider>
        <TawkChat />
      </body>
    </html>
  );
}
