import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://farros-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Farros Asadudin Milzam — 3D Artist, UI/UX & IT Support",
  description:
    "Portofolio Farros Asadudin Milzam, lulusan Teknik Informatika (S.Kom, IPK 3.67). Visualisasi 3D di Blender, desain antarmuka di Figma, dukungan IT, serta web modern dengan Next.js.",
  keywords: [
    "Farros Asadudin Milzam",
    "3D Artist",
    "Blender",
    "Cycles Render",
    "Architectural Visualization",
    "UI/UX Designer",
    "Figma",
    "IT Support",
    "Teknik Informatika",
    "Machine Learning",
    "Data Science",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Farros Asadudin Milzam" }],
  openGraph: {
    title: "Farros Asadudin Milzam — 3D Artist, UI/UX & IT Support",
    description:
      "Visualisasi 3D, desain antarmuka, dan dukungan teknis dari Malang, Indonesia. Lulusan S.Kom dengan IPK 3.67.",
    type: "website",
    url: "/",
    siteName: "Farros Asadudin Milzam",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farros Asadudin Milzam — 3D Artist, UI/UX & IT Support",
    description:
      "Visualisasi 3D, desain antarmuka, dan dukungan teknis dari Malang, Indonesia.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1eee5" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0d" },
  ],
};

const themeScript = `
try {
  var t = localStorage.getItem("farros_theme");
  if (t === "dark") {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
