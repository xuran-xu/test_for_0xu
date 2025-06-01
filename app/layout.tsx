import "./css/style.css";

import { Sora } from "next/font/google";

import Header from "@/components/ui/header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "0xU Hong Kong Blockchain Club",
  description: "Initiated by university students in Hong Kong, committed to cross-school cooperation and integration into the Web3 industry.",
  icons: {
    icon: "/images/logo0xu.jpg",
    shortcut: "/images/logo0xu.jpg",
    apple: "/images/logo0xu.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo0xu.jpg" />
      </head>
      <body
        className={`${sora.variable} bg-gray-950 font-sora text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="pt-14 pb-96">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
