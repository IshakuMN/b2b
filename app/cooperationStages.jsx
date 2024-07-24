'use client';
import Image from "next/image";
import {useEffect, useState} from "react";


const CooperationStages = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
      <Image
          src="rombus6.svg"
          width={50}
          height={50}
          alt="rombus"
          className="absolute -left-20 -bottom-40 -z-10 max-lg:-left-10"
      />
      <Image
          src="gear.svg"
          width={60}
          height={60}
          alt="gear"
          className="absolute right-0 -top-10"
      />
      <Image
          src="gear.svg"
          width={150}
          height={150}
          alt="gear"
          className="absolute top-8 -right-20  max-[810px]:-left-20"
      />
      <h1 className="text-3xl font-medium text-center max-[810px]:text-2xl">ЭТАПЫ СОТРУДНИЧЕСТВА</h1>
      <div className="relative mt-36 max-[810px]:mt-10 max-[810px]:flex max-[810px]:flex-col max-[810px]:gap-10 max-[810px]:pl-12">
        <div className="w-36 absolute -top-24 left-56 max-[810px]:relative max-[810px]:left-0 max-[810px]:top-0 max-[810px]:w-[60%]">
          <h2 className="text-lg font-medium">02</h2>
          <p className="text-[10px] font-light">
            Анализируем заявку, предоставляем реест по вашим критериям
          </p>
        </div>
        <div className="w-36 absolute -bottom-16 left-[124px] max-[810px]:relative max-[810px]:left-0 max-[810px]:top-0 max-[810px]:-order-1 max-[810px]:w-[60%]">
          <h2 className="text-lg font-medium">01</h2>
          <p className="text-[10px] font-light">Вы формируете заявку </p>
        </div>
        <div className="w-36 absolute -bottom-[110px] left-[380px] max-[810px]:relative max-[810px]:left-0 max-[810px]:top-0 max-[810px]:w-[60%]">
          <h2 className="text-lg font-medium">03</h2>
          <p className="text-[10px] font-light">
            Подписываем договор и сдаем отчеты после финального утверждения всех
            параметров сделки
          </p>
        </div>
        <div className="w-36 absolute -top-24 right-[180px] max-[810px]:relative max-[810px]:left-0 max-[810px]:top-0 max-[810px]:w-[60%]">
          <h2 className="text-lg font-medium">04</h2>
          <p className="text-[10px] font-light">
            Высылаем квитанции о сдаче отчетности и выставляем счет на оплату
          </p>
        </div>

        <div className="w-36 absolute -bottom-[95px] right-[40px] max-[810px]:relative max-[810px]:left-0 max-[810px]:top-0 max-[810px]:w-[60%]">
          <h2 className="text-lg font-medium">05</h2>
          <p className="text-[10px] font-light">
            Высылаем квитанции о принятии и закрывающие документы{" "}
          </p>
        </div>
        {windowWidth >= 810 ? (
        <Image
          src="/cooperationStages.svg"
          width={700}
          height={100}
          className="mx-auto m-4 max-[900px]:w-9/12 w-[85%]"
          alt="cooperationStages"
        />) : (
            <Image
                src="/mob.jpg"
                width={90}
                height={570}
                className="absolute right-0 -top-6 object-contain h-[100%]"
                alt="mob"
            />
        )}
        <div className=" flex justify-center relative">
          <div className="absolute -bottom-40 mx-auto max-[810px]:-bottom-20 max-sm:-left-10">
            <h1 className="flex justify-between font-medium text-xl">
              <span>LOADING</span> <span>100%</span>
            </h1>
            <Image
              src="/loadingLine.svg"
              width={650}
              height={100}
              className=""
              alt="loadingLine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationStages;
