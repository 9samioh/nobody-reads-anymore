import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lardent = localFont({
  src: "./fonts/lardent-slab-regular-pro.woff2",
  variable: "--font-lardent",
});

const foldGrotesque = localFont({
  src: "./fonts/fold-grotesque-medium-pro.woff2",
  variable: "--font-foldGrotesque",
});

export const metadata: Metadata = {
  title: "Nobody Reads Anymore",
  description:
    "A manifesto challenging the popular narrative that fiction is dying",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lardent.variable} ${foldGrotesque.variable}`}>
        {children}
      </body>
    </html>
  );
}
