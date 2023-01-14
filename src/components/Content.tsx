import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  url?: string;
};

function Card({ title, url }: CardProps): JSX.Element {
  return (
    <div
      className="w-full overflow-hidden bg-[#E8F3D6] shadow-md cursor-pointer shadow-[#FAAB78] rounded-2xl hover:bg-[#FFB100]"
      onClick={() => {
        if (url) window.location.href = url;
        return;
      }}
    >
      <div className="px-6 py-4">
        <div className="text-lg font-bold text-center">{title}</div>
      </div>
    </div>
  );
}

export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 select-none">
      <Card
        title="Pemesanan Unit"
        url={`https://wa.me/6289522711818?text=Hi%20Pak%20Ulum%2C%20Saya%20ingin%20memesan%20unit%20ready`}
      />
      <Card
        title="Informasi Unit"
        url={`https://wa.me/6289522711818?text=Hi%20Pak%20Ulum%2C%20Saya%20ingin%20menanyakan%20unit%20apa%20saja%20yang%20ready%3F`}
      />
    </div>
  );
}
