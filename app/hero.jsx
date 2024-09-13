'use client';
import Image from "next/image";
import React, {useState} from 'react';
import {Slider} from "@/components/ui/slider"
import Form from "@/app/Form";


const Hero = () => {

    return (
        <div className="flex mx-auto my-8 max-w-4xl max-lg:px-6 max-[760px]:px-4 max-[760px]:flex-col justify-between">
            {" "}
            <div className="">
                {" "}
                <div className="text-3xl font-bold my-8 py-4 max-[760px]:text-2xl">
                    {" "}
                    <div className="flex gap-2">
                        <h1 className="text-customGreen">В2В</h1>
                        <h1>СЕРВИС</h1>
                    </div>
                    {" "}
                    <div className="flex gap-2">
                        {" "}
                        <h1>ОПТИМИЗАЦИИ</h1> <h1 className="text-customBlue">НДС</h1>
                    </div>
                    {" "}
                </div>
                <div className="flex flex-col my-8 py-4">
                    <h1 className="text-xl font-bold mb-2">
                        УМЕНЬШАЙТЕ{" "}
                        <div className="flex gap-2">
                            <h1>НДС НА</h1> <h1 className="text-customBlue">85%</h1>
                        </div>
                    </h1>
                    <p className="text-gray-700">
                        получая отложенные вычеты{" "}
                        <br/>
                        <span className="text-customBlue">крупного бизнеса</span>
                    </p>
                    <div className="flex gap-4 text-sm items-baseline mt-8 text-stone-500 font-light">
                        <Image src="/hammer.svg" alt="hammer" width={34} height={34}/>{" "}
                        ЗАКОННАЯ ОПТИМИЗАЦИЯ
                    </div>
                    <p className="text-sm text-stone-500 mt-2">*согласно Главе 21 НК РФ</p>
                </div>
            </div>
            <Form />
        </div>
    );
};
export default Hero;
