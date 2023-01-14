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
      <div className="flex flex-col items-center justify-center gap-2 font-medium text-white">
        <span className="text-lg">Ulum Toyota</span>
        <div className="flex items-center gap-2 justify-items-end">
          <span className="text-gray-200 text-md">Toyota Sales</span>
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded motion-safe:animate-bounce">
            Professional
          </span>
        </div>
      </div>
    </header>
  );
}
