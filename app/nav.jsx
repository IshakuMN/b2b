import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="w-full h-16 bg-customGrey">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between max-lg:px-6 max-sm:px-4">
                <Link href="/" className="cursor-pointer hover:opacity-80">
                        <Image src="/logo.svg" alt="logo" width={58} height={58}/>
                </Link>
                <div className="flex gap-2 cursor-pointer">
                    <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <Image src="/telegram.svg" alt="telegram" width={24} height={24}/>
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <Image src="/mail.svg" alt="mail" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
