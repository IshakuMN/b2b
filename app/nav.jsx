import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="w-full h-16 bg-customGrey">
      <div className="max-w-4xl h-full mx-auto flex items-center justify-between max-lg:px-6 max-sm:px-4">
        <Image src="/logo.svg" alt="logo" width={58} height={58} />
        <div className="flex gap-2">
          <Image src="/telegram.svg" alt="telegram" width={24} height={24} />

          <Image src="/mail.svg" alt="mail" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
