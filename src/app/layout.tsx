"use client";

import type { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-sm">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
