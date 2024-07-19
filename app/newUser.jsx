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
        <section className="max-w-4xl border mx-auto my-8">
            <div className="flex flex-col gap-16 w-full align-center">
                <div className="px-11 py-6 flex flex-row gap-9 align-center rounded-3xl  max-w-[981px] shadow-lg">
                    <div className="pr-9 border-r-4 border-r-customBlue">
                        <Image
                            className="object-contain h-18 w-20"
                            src="/users.svg"
                            alt="users"
                            width={108}
                            height={88}
                        />
                    </div>
                    <h2 className="font-medium text-3xl my-auto ">ВЫ НОВЫЙ ПОЛЬЗОВАТЕЛЬ?</h2>
                </div>
                <div className="flex flex-row gap-9">
                    <h3 className="font-medium text-2xl uppercase">Попробуйте <span
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
                <div className="flex flex-col gap-9 max-w-4xl py-9 px-9 rounded-[24px] bg-custom-gradient">
                    <h2 className="font-medium text-4xl text-white">ПРОВЕРИТЬ ПРЯМО СЕЙЧАС</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-10 items-center">
                            <form
                                className="max-w-[681px] flex flex-row gap-8 shadow-lg bg-white py-5 px-5 flex-1 rounded-2xl h-28 items-center">
                                <label for="inn"
                                       className="text-xl uppercase text-customGreyThree ">ВВЕДИТЕ
                                    ИНН КОМПАНИИ</label>
                                <InputOTP
                                    maxLength={10}
                                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                                    className="max-w-[366px] h-10 outline-none rounded border-2 border-solid border-customGreyFour font-medium text-2xl text-customGreyThree"
                                >
                                    <InputOTPGroup name="inn" id="inn" type="number">
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