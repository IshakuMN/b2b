'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavButtom() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="w-full h-24 bg-customGrey max-lg:px-6 max-sm:px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between cursor-pointer">
                <Link href="/" className="cursor-pointer hover:opacity-80">
                    <Image src="/logo.svg" alt="logo" width={58} height={58}/>
                </Link>
                <div className="flex gap-2 items-center">
                    <p className="text-medium">Наверх</p>
                    <Image src="/arrowUp.svg" alt="arrow up" width={35} height={35}   onClick={scrollToTop} className="cursor-pointer hover:opacity-80"/>
                </div>
            </div>
            <div className="h-5 bg-customBlue"></div>
        </div>
    );
}
