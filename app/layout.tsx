import type { Metadata } from "next";
import { Abril_Fatface, Inter, Caveat } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const display = Abril_Fatface({ variable: "--font-display", subsets: ["latin"], weight: ["400"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], weight: ["400","600","700"] });

export const metadata: Metadata = {
  title: "Castaway Restaurant & Bar — Watchung Ave, Orange NJ",
  description: "Steaks, seafood, cocktails. A neighborhood bar and grill at 284 Watchung Ave in Orange, NJ. 812 reviews · 4.1★. Open Tue-Sun.",
  openGraph: { title: "Castaway Restaurant & Bar · Orange NJ", description: "Steaks · Seafood · Cocktails.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} antialiased`}>
      <body className="bg-kraft text-deep kraft-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
