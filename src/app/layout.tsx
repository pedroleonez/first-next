
import { Header } from "@/components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetinho Next.js",
  description: "This is some page of the Projetinho Next.js",
  keywords: "projetinho, next.js",
  openGraph: {
    title: "Projetinho Next.js",
    description: "This is some page of the Projetinho Next.js",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
