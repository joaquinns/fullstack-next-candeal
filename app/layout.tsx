import type { Metadata } from "next";
import localFont from "next/font/local";
import { CartProvider } from "./context/CartContext";
import "./globals.css";
import { CartButton } from "./ui/CartButton";
import { Footer } from "./ui/Footer";
import { Navbar } from "./ui/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Candeal - Inicio",
  description:
    "Bienvenido a Candeal tu restaurante/panaderia favorito de cabimas mira nuestro menu y haz tus reservas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <CartProvider>
          <Navbar />
          <div id="modal-root"></div>
          {children}
          <CartButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
