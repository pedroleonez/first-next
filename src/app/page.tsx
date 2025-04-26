import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Projetinho Next.js",
  description: "This is the home page of the Projetinho Next.js",
  keywords: "home, projetinho, next.js",
  openGraph: {
    title: "Home - Projetinho Next.js",
    description: "This is the home page of the Projetinho Next.js",
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

export default function Home() {
  return (
    <div>
      <h1>HOME page</h1>
    </div>
  );
}
