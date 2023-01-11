import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-white border-b">
      <h1>
        <Link href="/" className="text-red-800 hover:text-red-700 drop-shadow">
          Next.js + TypeScript + Upstash + TailwindCSS
        </Link>
      </h1>
    </header>
  );
}
