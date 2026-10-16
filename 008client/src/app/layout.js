import { Geist, Geist_Mono,Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://008dev.vercel.app"),
  title: {
    default: "008 Dev – Backend Architecture & System Design Resources for Students",
    template: "%s | 008 Dev",
  },
  description:
    "Learn backend architecture and system design with step-by-step guides, real-world examples and notes. Free resources for students plus premium in-depth content.",
  keywords: [
    "backend development",
    "backend architecture",
    "system design",
    "system design for beginners",
    "learn backend",
    "backend roadmap",
    "008 Dev",
  ],
  authors: [{ name: "008 Dev" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "008 Dev",
    title: "008 Dev – Learn Backend Architecture & System Design",
    description:
      "Free and premium resources to master backend architecture and system design, made for students.",
    url: "/",
    images: [{ url: "/YTLOGO.png.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "008 Dev – Backend Architecture & System Design",
    description:
      "Free and premium backend and system design resources for students.",
    images: ["/YTLOGO.png.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
