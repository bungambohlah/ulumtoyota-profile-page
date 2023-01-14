"use client";

import type { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className="flex flex-col items-center p-6">
        <div className="w-full max-w-sm">
          <Header />
          <Content />
          <Footer />
        </div>
      </body>
    </html>
  );
}
