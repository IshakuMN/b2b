'use client'

import Image from "next/image";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";


const NewUser = () => {
    return (
        <section className="max-w-4xl border mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
            <Image
                src="rombus3.svg"
                alt="rombus3"
                width={220}
                height={220}
                className="absolute -left-60 -z-10 -top-20 max-lg:-left-20"
            />
            <Image
                src="rombus6.svg"
                width={180}
                height={180}
                alt="rombus"
                className="absolute -left-60 top-20 rotate-180  max-lg:-left-20 -z-10"
            />
            <Image
                src="rombus4.svg"
                alt="rombus"
                width={100}
                height={100}
                className="absolute -right-20 -top-10 rotate-180 max-lg:right-0"
            />
            <Image
                src="rombus6.svg"
                width={50}
                height={50}
                alt="rombus"
                className="absolute -right-20 top-20 rotate-180 max-lg:right-0"
            />
            <div className="flex flex-col gap-16 w-full align-center max-md:gap-10">
                <div className="px-11 py-6 flex flex-row gap-9 align-center rounded-3xl max-w-[781px] shadow-lg relative z-10 max-lg:px-6 max-lg:py-3">
                    <div className="pr-9 border-r-4 border-r-customBlue max-lg:pr-5">
                        <Image
                            className="object-contain h-18 w-20"
                            src="/users.svg"
                            alt="users"
                            width={108}
                            height={88}
                        />
                    </div>
                    <h2 className="font-medium text-3xl my-auto max-md:text-2xl max-sm:text-lg">ВЫ НОВЫЙ ПОЛЬЗОВАТЕЛЬ?</h2>
                </div>
                <div className="flex flex-row gap-9">
                    <h3 className="font-medium text-2xl uppercase  max-sm:text-xl">Попробуйте <span
                        className="text-customBlue">бесплатно</span> проверить <span className="text-customBlue">2 компании</span>
                    </h3>
                    <Image
                        className="object-contain h-8 w-8"
                        src="/arrowDown.svg"
                        alt="arrow down"
                        width={58}
                        height={58}
                    />
                </div>
                <div className="flex flex-col gap-9 max-w-4xl py-9 px-9 rounded-[24px] bg-custom-gradient  max-sm:py-6 max-sm:px-6">
                    <h2 className="font-medium text-4xl text-white max-[700px]:text-3xl  max-sm:text-xl">ПРОВЕРИТЬ ПРЯМО СЕЙЧАС</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-10 items-center max-[1034px]:flex-col">
                            <form
                                className="max-w-[681px] flex flex-row gap-8 shadow-lg bg-white py-5 px-5 flex-1 rounded-2xl h-28 items-center max-[700px]:flex-col">
                                <label for="inn"
                                       className="text-xl uppercase text-customGreyThree ">ВВЕДИТЕ
                                    ИНН КОМПАНИИ</label>
                                <InputOTP name="inn" id="inn" type="number"
                                    maxLength={10}
                                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                                    className=" max-w-[366px] h-10 outline-none rounded border-2 border-solid border-customGreyFour font-medium text-2xl text-customGreyThree"
                                >
                                    <InputOTPGroup className="max-[480px]:w-64">
                                        <InputOTPSlot index={0} className="your-slot-class" />
                                        <InputOTPSlot index={1} className="your-slot-class" />
                                        <InputOTPSlot index={2} className="your-slot-class" />
                                        <InputOTPSlot index={3} className="your-slot-class" />
                                        <InputOTPSlot index={4} className="your-slot-class" />
                                        <InputOTPSlot index={5} className="your-slot-class" />
                                        <InputOTPSlot index={6} className="your-slot-class" />
                                        <InputOTPSlot index={7} className="your-slot-class" />
                                        <InputOTPSlot index={8} className="your-slot-class" />
                                        <InputOTPSlot index={9} className="your-slot-class" />
                                    </InputOTPGroup>
                                </InputOTP>


                            </form>
                            <button
                                className="text-white bg-customBlue px-9 rounded-xl font-medium text-xl uppercase h-16"
                                type="submit">ПРОВЕРИТЬ
                            </button>
                        </div>
                        <p className="font-regular text-lg text-white max-w-[598px] text-center">Уникальный сервис
                            налоговой аналитики и проверки
                            на типологические списки ЦБ</p>
                    </div>
                </div>
                <div className="flex flex-row max-w-[794px]">
                    <div className="flex flex-col max-w-[641px]">
                        <p className="font-normal">Купить ежемесячную подписку и
                            проверять <br/> больше компаний</p>
                        <a href="#"
                           className="flex space-x-2 bg-customBlue rounded-lg text-white text-[10px] py-1 px-4 w-fit ml-auto">
                            ТЕЛЕГРАММ <br/> @NDS4B
                            <Image
                                src="/telegramSmall.svg"
                                width={20}
                                height={20}
                                alt="telegram"
                            />
                        </a>
                    </div>
                    <Image
                        className="object-contain"
                        src="/arrowСrooked.svg"
                        alt="arrow"
                        width={80}
                        height={80}
                    />
                </div>

            </div>
        </section>
    );
}

export default NewUser;