import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eneplus - Energetska Efikasnost",
  description: "Konsultantska firma koja pruža usluge iz oblasti energetskog menadžmenta, energetske efikasnosti i projektnog menadžmenta.",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
