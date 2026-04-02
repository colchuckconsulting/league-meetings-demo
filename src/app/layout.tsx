import type { Metadata } from "next";
import { Providers } from "./providers";
import { industry } from "./fonts/industry";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeagueStarz",
  description:
    "LeagueStarz is your ultimate player profile platform. Discover and compare player profiles, stats, and ratings all in one place. Built for fans, by fans.",
  metadataBase: new URL("http://leaguestarz.com"),
  openGraph: {
    title: "LeagueStarz",
    description:
      "Discover and compare player profiles, stats, and ratings all in one place.",
    images: [
      {
        url: "/leaguestarz_preview.png",
        width: 1200,
        height: 630,
        alt: "LeagueStarz",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeagueStarz",
    description:
      "Discover and compare player profiles, stats, and ratings all in one place.",
    images: ["/leaguestarz_preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={industry.variable}>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
