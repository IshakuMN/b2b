import React, { useState } from 'react';
import Image from 'next/image';
import { Slider } from '../components/ui/slider';

// Функция для форматирования числа с точками как разделителями тысяч
const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Функция для преобразования форматированного числа обратно в чистое число
const parseNumber = (value) => {
    return Number(value.replace(/\./g, ''));
};

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [activeQuarter, setActiveQuarter] = useState(1);
    const [activeYear, setActiveYear] = useState('2024');
    const [inputYear, setInputYear] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [sliderValue, setSliderValue] = useState([1000000]);
    const [inputTurnover, setInputTurnover] = useState(1000000);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleQuarterClick = (quarter) => {
        setActiveQuarter(quarter);
    };

    const getQuarterClass = (quarter) => {
        return activeQuarter === quarter ? 'text-customBlue' : 'text-white';
    };

    const decreaseValue = () => {
        const newValue = Math.max(sliderValue[0] - 1000000, 1000000);
        setSliderValue([newValue]);
        setInputTurnover(newValue);
    };

    const increaseValue = () => {
        const newValue = Math.min(sliderValue[0] + 1000000, 500000000);
        setSliderValue([newValue]);
        setInputTurnover(newValue);
    };

    const handleInputTurnoverChange = (e) => {
        const value = parseNumber(e.target.value);
        if (value >= 1000000 && value <= 500000000) {
            setSliderValue([value]);
            setInputTurnover(value);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;


        if (/^\d*$/.test(value) && value.length <= 10) {
            if (value.length !== 0 && !value.startsWith('+7')) {
                setInputValue('+7' + value);
            } else {
                setInputValue(value);
            }
            setError('');
        } else {
            setInputValue(value);
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setError('Поле не может быть пустым');
            return;
        }

        const isNumber = /^[0-9]+$/.test(inputValue);
        if (isNumber) {
            if (inputValue.length === 11) {
                setError('Номер телефона должен состоять из 10 цифр');
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
        const formData = {
            inputValue,
            activeYear,
            inputYear,
            sliderValue: sliderValue[0],
            activeQuarter,
            selectedOption
        };

        console.log('Form Data:', formData);
        setError('');
    };

    return (
        <div className="relative max-[760px]:mx-0">
            <Image src="/4rombus.svg" alt="hero" width={500} height={500}
                   className="max-[760px]:absolute max-[760px]:-z-10 max-[760px]:-right-36 max-[760px]:-top-96"/>
            <div
                className="bg-customGreyEight absolute z-20 top-[32%] -mt-8 right-0 w-[400px] rounded-[20px] p-3 flex flex-col max-[888px]:top-[25%] max-[888px]:left-2 max-[760px]:relative max-[760px]:mx-auto max-[450px]:w-[320px] max-[350px]:w-[280px] max-sm:left-0">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-baseline gap-6 justify-between">
                        <p className="text-base font-medium text-black max-[760px]:text-sm">Рассчитать стоимость</p>
                        <div
                            className='py-2 px-3 rounded-[22px] bg-customGreySeven flex flex-row gap-1 items-center'>
                            <p className="text-sm font-normal text-customBlue max-[760px]:text-xs">калькулятор</p>
                            <Image src='/calculator2.svg' alt='calculator' width={20} height={20}
                                   className="object-contain"/>
                        </div>
                    </div>
                    <div className="px-[10px] py-[5px] rounded-[10px] bg-white flex flex-col">
                        <div className="flex flex-row justify-between gap-3 items-center">
                            <p className="text-xs font-normal text-customGreyFive whitespace-nowrap">1 млн</p>
                            <div className="my-2 w-[100%]">
                                <Slider
                                    min={1000000}
                                    max={500000000}
                                    step={1}
                                    value={sliderValue}
                                    onValueChange={(newValue) => {
                                        setSliderValue(newValue);
                                        setInputTurnover(newValue[0]);
                                    }}
                                />
                            </div>
                            <p className="text-xs font-normal text-customGreyFive whitespace-nowrap">500 млн</p>
                        </div>
                        <div className="flex items-center space-x-2 flex-row gap-2 max-sm:flex-col">
                            <p className="text-xs font-normal text-customGreyFive will-change-contents">оборот деклараций</p>
                            <div className="flex flex-row items-center gap-1 justify-between">
                            <button onClick={decreaseValue} className="w-[12px] h-0.5 bg-black"></button>
                            <input
                                type="text"
                                className="border border-customBlue rounded-[3px] text-center text-xs font-normal placeholder:text-customGreySix h-[25px] flex-grow"
                                placeholder="1.000.000"
                                value={formatNumber(inputTurnover)}
                                onChange={handleInputTurnoverChange}
                            />
                            <button className="relative w-[12px] h-0.5 bg-black" onClick={increaseValue}>
                                <div className="absolute inset-0 w-full h-0.5 bg-black rotate-90"></div>
                                <div className="absolute inset-0 h-full w-0.5 bg-black"></div>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-4">
                    {/*<p className="text-sm pb-4 font-medium max-sm:text-xs">Выбрать период</p>*/}
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between items-center  max-[450px]:flex-wrap">
                            <p className="flex items-center justify-center font-medium text-sm max-sm:text-xs">Выбрать период</p>
                            <p
                                className={`flex items-center justify-center text-xs rounded-[10px] px-2 p-1 ${activeYear === '2024' && inputYear.length === 0 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                onClick={() => setActiveYear('2024')}
                            >
                                2024
                            </p>
                            <p
                                className={`flex items-center justify-center text-xs rounded-[10px] px-2 py-1 ${activeYear === '2023' && inputYear.length === 0 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                onClick={() => setActiveYear('2023')}
                            >
                                2023
                            </p>
                            <p
                                className={`flex items-center justify-center text-xs rounded-[10px] px-2 py-1 ${activeYear === '2022' && inputYear.length === 0 ? 'text-white bg-customBlue' : 'bg-white'}`}
                                onClick={() => setActiveYear('2022')}
                            >
                                2022
                            </p>
                            <input
                                type="text"
                                className={`flex items-center text-center justify-center text-xs rounded-[10px] px-2 py-1 border outline-none max-w-[80px] hover:border-customBlue hover:border-[1px] hover:border-solid ${inputYear.length === 4 ? 'text-white bg-customBlue' : 'bg-white text-black'}`}
                                value={inputYear}
                                onChange={(e) => {
                                    const year = e.target.value;
                                    setInputYear(year);
                                    if (/^\d{4}$/.test(year)) {
                                        setActiveYear(year);
                                    }
                                }}
                                placeholder="Указать"
                            />
                        </div>
                        <div className="flex flex-row justify-around mt-1 max-[760px]:mt-3">
                            {[1, 2, 3, 4].map((quarter) => (
                                <div
                                    key={quarter}
                                    className={`flex flex-col text-center gap-1 ${getQuarterClass(quarter)}`}
                                    onClick={() => handleQuarterClick(quarter)}
                                >
                                    <span className="text-4xl font-normal">
                                        {quarter === 1 ? 'Ⅰ' : quarter === 2 ? 'Ⅱ' : quarter === 3 ? 'Ⅲ' : 'Ⅳ'}
                                    </span>
                                    <span className="text-xs font-normal max-sm:text-xs">Квартал</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between items-center mt-2 gap-5">
                            <label className="text-sm font-medium max-sm:text-xs" htmlFor="material-select">
                                Назначение
                            </label>
                            <div className="relative max-w-[291px] h-[26px] text-xs ">
                                <select
                                    id="material-select"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    className="w-full text-xs  px-2 py-1 bg-white text-black outline-none pr-10 appearance-none"
                                >
                                    <option value="строительные материалы" className="text-xs">Строительные материалы</option>
                                    <option value="строительно-монтажные работы">Строительно-монтажные работы</option>
                                    <option value="аренда спецтехники">Аренда спецтехники</option>
                                    <option value="промышленная химия">Промышленная химия</option>
                                    <option value="клининг">Клининг</option>
                                    <option value="бытовая химия">Бытовая химия</option>
                                    <option value="промышленное оборудование">Промышленное оборудование</option>
                                    <option value="транспортные услуги">Транспортные услуги</option>
                                    <option value="другое">Другое</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                            <input value={inputValue}
                                   onChange={handleInputChange}
                                   type="text" placeholder="Телефон / Никнеим телеграмм"
                                   className="w-full rounded-[10px] bg-white p-[10px] outline-none text-sm placeholder:text-customGreyFour max-sm:text-xs"/>
                            <p className="text-red-500 text-[10px] h-[12px] mt-1 max-sm:mt-1">{error}</p>
                        </form>
                    </div>
                    <div className="mt-1 flex flex-col">
                        <button type="submit"
                                className="mt-2 text-base font-normal bg-customGreen text-white rounded-[10px] py-2 max-sm:text-xs max-sm:mt-1">Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
