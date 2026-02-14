import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"]
});

export const metadata = {
  title: "Ali Rohde",
  description:
    "Ali Rohde is the Managing Partner at Outset Capital, a venture capital firm investing in AI, devtools, robotics, and future of work companies.",
  openGraph: {
    title: "Ali Rohde",
    description:
      "Ali Rohde is the Managing Partner at Outset Capital, a venture capital firm investing in AI, devtools, robotics, and future of work companies.",
    url: "https://alirohde.com",
    siteName: "Ali Rohde",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RohdeAli",
    creator: "@RohdeAli",
  },
  metadataBase: new URL("https://alirohde.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${geist.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme !== 'light') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>

      <body className="text-stone-700 dark:text-stone-300 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
