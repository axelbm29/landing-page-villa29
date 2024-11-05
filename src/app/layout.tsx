import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restobar Villa29",
  description: "Pagina de presentacion del restobar Villa29",
};

const bowlbyOne = localFont({
  src: "./fonts/BowlbyOne-Regular.woff",
  variable: "--font-bowlby-one",
  weight: "400", // Ajusta el peso si es necesario
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlbyOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
