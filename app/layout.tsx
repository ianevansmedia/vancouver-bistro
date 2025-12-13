import type { Metadata } from "next";
import "./globals.css";

// This sets the default SEO for every page on the site
export const metadata: Metadata = {
  title: {
    template: '%s | Greenhouse', // e.g. "Menu | Greenhouse"
    default: 'Greenhouse | Farm to Table Bistro', // Homepage title
  },
  description: "Sustainable, organic dining in Kitsilano, Vancouver. Experience fresh local ingredients from the Fraser Valley.",
  keywords: ["Vancouver Restaurant", "Farm to Table", "Kitsilano", "Organic Dining", "Greenhouse Bistro"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        'scroll-smooth' makes the "Visit Us" link scroll down nicely 
        instead of jumping instantly.
      */}
      <body>{children}</body>
    </html>
  );
}