'use client';
import Image from "next/image";
import React, {useState} from 'react';
import {Slider} from "@/components/ui/slider"


const Hero = () => {
    const [inputValue, setInputValue] = useState('');
    const [sliderValue, setSliderValue] = useState([1000000]);
    const [error, setError] = useState('');
    const [inputTurnover, setInputTurnover] = useState('');
    const [period, setPeriod] = useState(false);
    const [appointment, setAppointment] = useState(false);
    const [activeQuarter, setActiveQuarter] = useState(1);
    const [activeYear, setActiveYear] = useState(null);

    const handleQuarterClick = (quarter) => {
        setActiveQuarter(quarter);
    };

    const getQuarterClass = (quarter) => {
        return activeQuarter === quarter ? 'text-customBlue' : 'text-white';
    };

    const handlePeriodClick = () => {
        setPeriod(!period);
    }
    const handleAppointmentClick = () => {
        setAppointment(!appointment);
    }

    const decreaseValue = () => {
        setInputTurnover(+inputTurnover - 1)
    }
    const increaseValue = () => {
        setInputTurnover(+inputTurnover + 1)
    }
    const handleInputTurnoverChange = (e) => {
        const value = e.target.value;
        setInputTurnover(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger
        if (!inputValue.trim()) {
            setError('Поле не может быть пустым');
            return;
        }

        // Простейшая проверка на наличие символов
        const isNumber = /^[0-9]+$/.test(inputValue);
        if (isNumber) {
            if (inputValue.length < 11) {
                setError('Номер телефона должен содержать минимум 11 цифр');
                return;
            }
        } else {
            const isValidTelegramUsername = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(inputValue) &&
                !inputValue.includes('__') && !inputValue.endsWith('_');

            if (!isValidTelegramUsername) {
                setError('Введите корректное имя пользователя Telegram');
                return;
            }
        }

        setError('');
    };
    return (
        <div className="flex mx-auto my-8 max-w-4xl max-lg:px-6 max-[700px]:px-4 max-[700px]:flex-col">
            {" "}
            <div className="">
                {" "}
                <div className="text-3xl font-bold my-8 py-4 max-[700px]:text-2xl">
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
            <div className="relative max-[700px]:mx-auto">
                <Image src="/4rombus.svg" alt="hero" width={500} height={500}
                       className="max-[700px]:absolute max-[700px]:-z-10 max-[700px]:-right-36 max-[700px]:-top-96"/>
                <div
                    className="bg-customGrey absolute top-[40%]  -mt-8 -left-8 w-[350px] rounded-[20px] p-4 flex flex-col max-[700px]:relative max-[700px]:mx-auto max-[700px]:left-0 max-[700px]:p-2 max-[380px]:w-[280px]">
                    <div className="flex flex-row justify-between mb-3 gap-2 max-[700px]:gap-1">
                        <div
                            className='px-2 py-1 rounded-[22px] bg-customGreySeven flex flex-row gap-1 items-center'
                            onClick={handlePeriodClick}>
                            <p className="text-sm font-normal max-[700px]:text-xs">период</p>
                            <Image src='/chek.svg' alt="arrow" width={8} height={2}
                                   className={`cursor-pointer max-[700px]:w-[7px] ${period ? 'rotate-180' : ''} transition-transform duration-300 ease-in-out`}/>
                        </div>
                        <div onClick={handleAppointmentClick}
                             className='px-2 py-1 rounded-[22px] bg-customGreySeven flex flex-row gap-1 items-center'>
                            <p className="text-sm font-normal max-[700px]:text-xs">назначение</p>
                            <Image src='/chek.svg' alt="arrow" width={8} height={2}
                                   className={`cursor-pointer max-[700px]:w-[7px] ${appointment ? 'rotate-180' : ''} transition-transform duration-300 ease-in-out`}/>
                        </div>
                        <div
                            className='px-2 py-1 rounded-[22px] bg-customGreySeven flex flex-row gap-1 items-center'>
                            <p className="text-sm font-normal text-customBlue max-[700px]:text-xs">калькулятор</p>
                            <Image src='/calculator2.svg' alt='calculator' width={20} height={20}
                                   className="object-contain"/>
                        </div>
                    </div>
                    {!period && !appointment && (<div className="flex flex-col">
                        <div className="px-[10px] py-[5px] rounded-[10px] bg-white flex flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="text-xs font-normal text-customGreyFive">1 млн</p>
                                <p className="text-xs font-normal text-customGreyFive">500 млн</p>
                            </div>
                            <div className="my-3">
                                <Slider defaultValue={[1000000]} min={1000000} max={500000000} step={1}
                                        value={sliderValue}
                                        onValueChange={(newValue) => setSliderValue(newValue)}/>
                            </div>
                            <div className="flex items-center space-x-2 flex-row gap-2">
                                <button onClick={decreaseValue} className="w-[12px] h-0.5 bg-black">
                                </button>
                                <p className="text-xs font-normal text-customGreyFive will-change-contents">оборот
                                    деклараций</p>
                                <input
                                    type="number"
                                    min={1000000}
                                    max={500000000}
                                    className="border border-customBlue rounded-[3px] text-center text-xs font-normal placeholder:text-customGreySix h-[25px] flex-grow"
                                    placeholder="1.000.000"
                                    value={inputTurnover}
                                    onChange={handleInputTurnoverChange}
                                />
                                <button className="relative w-[12px] h-0.5 bg-black" onClick={increaseValue}>
                                    <div className="absolute inset-0 w-full h-0.5 bg-black rotate-90"></div>
                                    <div className="absolute inset-0 h-full w-0.5 bg-black"></div>
                                </button>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
                            <input value={inputValue}
                                   onChange={(e) => setInputValue(e.target.value)}
                                   type="text" placeholder="Телефон / Никнеим телеграмм"
                                   className="w-full rounded-[10px] bg-white p-[10px] outline-none text-sm placeholder:text-customGreyFour max-sm:text-xs"/>
                            <p className="text-red-500 text-[10px] h-[15px] mt-2 max-sm:mt-1">{error}</p>
                            <button type="submit"
                                    className="mt-2 text-base font-normal bg-customGreen text-white rounded-[10px] py-1.5 max-sm:text-xs max-sm:mt-1">Рассчитать
                            </button>
                        </form>
                        <p className="text-[10px] font-normal text-customGreyFour mt-2 px-3 text-center">Вы будете
                            перенаправлены в
                            персональный чат Telegram</p>
                    </div>)}
                    {period && !appointment && (<div className="flex flex-col">
                        <div className="px-[10px] py-[5px] rounded-[10px] flex flex-col bg-customGreySeven">
                            <div className="flex flex-row justify-between items-center gap-2 max-[380px]:flex-wrap">
                                <p className="text-sm max-sm:text-xs">Год</p>
                                <p
                                    className={`text-xs rounded-[10px] px-2 py-1 ${activeYear === 2024 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                    onClick={() => setActiveYear(2024)}
                                >
                                    2024
                                </p>
                                <p
                                    className={`text-xs rounded-[10px] px-2 py-1 ${activeYear === 2023 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                    onClick={() => setActiveYear(2023)}
                                >
                                    2023
                                </p>
                                <p
                                    className={`text-xs rounded-[10px] px-2 py-1 ${activeYear === 2022 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                    onClick={() => setActiveYear(2022)}
                                >
                                    2022
                                </p>
                                <p
                                    className={`text-xs rounded-[10px] px-2 py-1 ${activeYear === 2021 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                    onClick={() => setActiveYear(2021)}
                                >
                                    2021
                                </p>
                                <p
                                    className={`text-xs rounded-[10px] px-2 py-1 ${activeYear === 'выбрать' ? 'text-white bg-customBlue' : 'bg-white'}`}
                                    onClick={() => setActiveYear('выбрать')}
                                >
                                    выбрать
                                </p>
                            </div>
                            <div className="flex flex-row justify-between mt-5 max-[700px]:mt-3">
                                {[1, 2, 3, 4].map((quarter) => (
                                    <div
                                        key={quarter}
                                        className={`flex flex-col text-center gap-2 ${getQuarterClass(quarter)}`}
                                        onClick={() => handleQuarterClick(quarter)}
                                    >
                    <span className="text-6xl font-normal">
                        {quarter === 1 ? 'Ⅰ' : quarter === 2 ? 'Ⅱ' : quarter === 3 ? 'Ⅲ' : 'Ⅳ'}
                    </span>
                                        <span className="text-sm font-normal max-sm:text-xs">Квартал</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col">
                            <button type="submit"
                                    className="mt-2 text-base font-normal bg-customGreen text-white rounded-[10px] py-1.5 max-sm:text-xs max-sm:mt-1">Выбрать
                                период
                            </button>
                        </div>
                        <p className="text-[10px] font-normal text-customGreyFour mt-2 px-3 text-center h-[15px]"></p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};
export default Hero;
