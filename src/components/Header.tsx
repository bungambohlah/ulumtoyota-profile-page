import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-4 p-4">
      <Image
        className="p-1 rounded-full ring-4 ring-[#F49D1A]"
        src="/images/profile.jpeg"
        alt="Bordered avatar"
        width={125}
        height={125}
      />
      <div className="flex flex-col items-center justify-center gap-1 font-medium text-white">
        <span className="text-lg">Ulum Toyota</span>
        <span className="text-gray-200 text-md motion-safe:animate-pulse">
          Best Toyota Sales Marketer
        </span>
      </div>
    </header>
  );
}
