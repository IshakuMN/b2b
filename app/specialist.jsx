'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Specialist = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Устанавливаем начальное значение ширины окна
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Функции для определения правильного src в зависимости от ширины окна
  const getDialogRightSrc = () => {
    if (windowWidth <= 750) {
      return '/dialogRight2.svg';
    } else {
      return '/dialogRight.svg';
    }
  };

  const getDialogLeftSrc = () => {
    if (windowWidth <= 750) {
      return '/dialogLeft2.svg';
    } else {
      return '/dialogLeft.svg';
    }
  };

  const getDialogDownSrc = () => {
    if (windowWidth <= 750) {
      return '/dialogDown2.svg'; // Или другая альтернативная картинка для dialogDown
    } else {
      return '/dialogDown.svg';
    }
  };

  return (
      <div className="flex flex-col max-w-4xl mx-auto justify-center items-center my-8 relative max-lg:px-6 max-sm:px-4">
        <Image
            src="gear.svg"
            width={200}
            height={200}
            alt="gear"
            className="absolute -left-60 top-0 -z-10 max-lg:-left-20"
        />
        <Image
            src="rombus5.svg"
            width={400}
            height={400}
            alt="rombus"
            className="absolute -right-60 top-0 -z-10"
        />
        <h1 className="text-3xl font-medium max-sm:text-2xl">5 СПЕЦИАЛИСТОВ</h1>
        <p className="text-sm max-lg:text-xs">СОПРОВОЖДАЮТ ВАШУ ЗАЯВКУ</p>
        <div className="my-8 relative max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-5">
          <div className="flex justify-between absolute -left-52 top-[110px] space-x-64 max-[750px]:space-x-0 max-[750px]:relative  max-[750px]:flex-col max-[750px]:gap-5 max-[750px]:left-0 max-[750px]:top-0">
            <div className="w-[220px] relative">
              <Image
                  src={getDialogRightSrc()}
                  alt="dialogRight"
                  width={240}
                  height={220}
                  className=""
              />
              <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
                ГЛАВНЫЙ БУХГАЛТЕР
              </p>
              <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
                Помогает сформировать реестр по требованиям заказчика. Адаптирует
                весь контур сделки и ведет документооборот по заявке.
              </p>
            </div>

            <div className="w-[220px] relative">
              <Image
                  src={getDialogLeftSrc()}
                  alt="dialogLeft"
                  width={240}
                  height={220}
                  className=""
              />
              <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
                НАЛОГОВЫЙ ЭКСПЕРТ
              </p>
              <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
                Анализирует и сопровождает каждую заявку. Проверяет безопасность
                каждой сделки по критериям АСК НДС.
              </p>
            </div>
          </div>

          <div className="flex justify-between absolute -left-52 top-[280px] space-x-64 max-[750px]:space-x-0 max-[750px]:relative  max-[750px]:flex-col max-[750px]:gap-5 max-[750px]:left-0 max-[750px]:top-0">
            <div className="w-[220px] relative">
              <Image
                  src={getDialogRightSrc()}
                  alt="dialogRight"
                  width={240}
                  height={220}
                  className=""
              />
              <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-[11px] font-medium">
                КОРПОРАТИВНЫЙ ЮРИСТ
              </p>
              <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
                Анализирует всю логику взаимодействия хозяйствующих субъектов.
                Даёт правовую оценку всем договорам.
              </p>
            </div>

            <div className="w-[220px] relative">
              <Image
                  src={getDialogLeftSrc()}
                  alt="dialogLeft"
                  width={240}
                  height={220}
                  className=""
              />
              <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
                Мастер платежей
              </p>
              <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
                Проверяет контрагентов на списки ЦБ. Согласовывает графики оплат.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[220px] relative">
              <Image
                  src={getDialogDownSrc()}
                  alt="dialogDown"
                  width={240}
                  height={220}
                  className=""
              />
              <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
                ЛИЧНЫЙ МЕНЕДЖЕР
              </p>
              <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
                Сопровождает каждую задачу и координирует работу команды. Служба
                клиентской поддержки 24/7.
              </p>
            </div>
            <div className=" my-4 mx-auto max-[750px]:block max-[750px]:hidden">
              <Image
                  src="/specialistTree.svg"
                  alt="specialistTree"
                  width={280}
                  height={220}
                  className=""
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Specialist;
