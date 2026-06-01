import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Гаврилычев Михаил | Photographer",
  description:
    "Коммерческая, портретная и lifestyle фотография. Портфолио фотографа Михаила Гаврилычева.",

  keywords: [
    "фотограф",
    "портфолио фотографа",
    "photographer",
    "portrait photography",
    "commercial photography",
  ],

  authors: [
    {
      name: "Гаврилычев Михаил",
    },
  ],

  openGraph: {
    title: "Гаврилычев Михаил | Photographer",
    description:
      "Портфолио фотографа Михаила Гаврилычева",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}