import React from "react";

import FBIco from "./icons/facebook.svg";
import IGIco from "./icons/instagram.svg";
import TTIco from "./icons/tiktok.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-4 p-4 fill-[#FD841F]">
      <div
        className="cursor-pointer w-11 h-11"
        onClick={() =>
          (window.location.href = "https://www.facebook.com/bakhrul.ulum.31586")
        }
      >
        <FBIco />
      </div>
      <div
        className="w-10 h-10 cursor-pointer"
        onClick={() =>
          (window.location.href = "https://www.instagram.com/iam_bakhrul")
        }
      >
        <IGIco />
      </div>
      <div
        className="w-10 h-10 cursor-pointer"
        onClick={() =>
          (window.location.href = "https://www.tiktok.com/@iam_bakhrul")
        }
      >
        <TTIco />
      </div>
    </footer>
  );
}
