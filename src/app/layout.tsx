import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Farros Asadudin Milzam — 3D Artist & Informatics",
  description:
    "Portofolio Farros Asadudin Milzam. Visualisasi arsitektur dan interior 3D di Blender, eksplorasi data & machine learning dengan Python, dan web modern dengan Next.js.",
  keywords: [
    "Farros Asadudin Milzam",
    "3D Artist",
    "Blender",
    "Cycles Render",
    "Architectural Visualization",
    "Informatics",
    "Machine Learning",
    "Data Science",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Farros Asadudin Milzam" }],
  openGraph: {
    title: "Farros Asadudin Milzam — 3D Artist & Informatics",
    description:
      "Visualisasi arsitektur & interior 3D, data science, dan web engineering dari Malang, Indonesia.",
    type: "website",
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
