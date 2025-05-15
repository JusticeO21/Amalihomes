import { Analytics } from "@/features/analytics/analytics";
import { getSeoTags } from "@/lib/seo/seo";
import { AnalyticsProvider } from "@/providers/analytics/analytics-provider";
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
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <QueryProvider>{children}</QueryProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
