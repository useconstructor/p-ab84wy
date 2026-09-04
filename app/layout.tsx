import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Surf Academy | Escuela de Surf en Playa del Carmen",
  description:
    "Clases de surf para todos los niveles en Playa del Carmen. Instructores certificados, grupos pequeños y los mejores breaks del Caribe mexicano.",
  keywords: [
    "surf",
    "clases de surf",
    "Playa del Carmen",
    "escuela de surf",
    "surf lessons",
    "Riviera Maya",
    "surf Mexico",
  ],
  openGraph: {
    title: "Surf Academy | Escuela de Surf en Playa del Carmen",
    description:
      "Clases de surf para todos los niveles en Playa del Carmen. Instructores certificados, grupos pequeños y los mejores breaks del Caribe mexicano.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
