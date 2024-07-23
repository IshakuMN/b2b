import Image from "next/image";

const Reliability = () => {
  return (

    <div className="max-w-4xl mx-auto relative max-lg:px-6 max-sm:px-4  max-sm:z-20">
      <Image
        src="rombus.svg"
        width={200}
        height={200}
        alt="rombus"
        className="absolute -left-60 -top-16"
      />
      <div className="flex items-cente justify-center w-full space-x-6 my-10 ">
        <Image
          src="/circleCheck.svg"
          alt="circleCheck"
          width={40}
          height={40}
          className=""
        />
        <h2 className="font-medium">
          {" "}
          <p className="text-3xl max-sm:text-2xl">НАДЁЖНОСТЬ</p>
          <p className="text-lg">И ОТВЕТСТВЕННОСТЬ</p>
        </h2>
      </div>
      <div className="flex  items-center justify-between max-[750px]:flex-col gap-6">
        {" "}
        <div className="rounded-lg h-40 w-32 border overflow-hidden flex flex-col max-[750px]:w-6/12">
          <div className="bg-customGrey pt-4 flex-shrink-0">
            <Image
              src="/pay 1.svg"
              alt="pay"
              width={28}
              height={28}
              className="mx-auto"
            />
          </div>
          <h2 className="text-center text-xs py-3 px-4 font-medium">
            <p className="text-customBlue font-semibold">ПОСТОПЛАТА</p>
            <p>ПО СЧЕТУ ПОСЛЕ СДАЧИ ОТЧЕТНОСТИ</p>
          </h2>
          <div className="bg-customBlue w-full h-16"></div>
        </div>
        <div className="rounded-lg h-40 w-32 border overflow-hidden flex flex-col max-[750px]:w-6/12">
          <div className="bg-customGrey pt-4 flex-shrink-0">
            <Image
              src="/approve 1.svg"
              alt="pay"
              width={28}
              height={28}
              className="mx-auto"
            />
          </div>
          <h2 className="text-center text-xs py-3 px-4 h-full font-medium">
            <p className="text-customBlue font-semibold">УТОЧНЯЕМ</p>
            <p>ПРЕДЫДУЩИЕ ПЕРИОДЫ</p>
          </h2>
          <div className="bg-customGreen w-full h-16"></div>
        </div>
        <div className="rounded-lg h-[200px] w-44 border overflow-hidden flex flex-col max-[750px]:w-6/12">
          <div className="bg-customGrey pt-4 flex-shrink-0">
            <Image
              src="/documentation 2.svg"
              alt="pay"
              width={28}
              height={28}
              className="mx-auto"
            />
          </div>
          <h2 className="text-center py-3 px-4 h-full font-medium">
            <p>ФОРМИРУЕМ ДОКУМЕНТЫ</p>
            <p className="text-customBlue font-semibold">ЗА ОДИН ДЕНЬ</p>
            <p>ПО ЭДО</p>
          </h2>
          <div className="bg-customGreen w-full h-16"></div>
        </div>
        <div className="rounded-lg h-40 w-32 border overflow-hidden flex flex-col max-[750px]:w-6/12">
          <div className="bg-customGrey pt-4 flex-shrink-0">
            <Image
              src="/guarantee 1.svg"
              alt="pay"
              width={28}
              height={28}
              className="mx-auto"
            />
          </div>
          <h2 className="text-center text-xs py-3 px-4 h-full font-medium">
            <p className="text-customBlue font-semibold">ГАРАНТИЯ 3 ГОДА</p>
            <p className="text-[10px] font-bold">СОПРОВОЖДЕНИЕ</p>
          </h2>
          <div className="bg-customGreen w-full h-16"></div>
        </div>
        <div className="rounded-lg h-40 w-32 border overflow-hidden flex flex-col max-[750px]:w-6/12">
          <div className="bg-customGrey pt-4 flex-shrink-0">
            <Image
              src="/people 1.svg"
              alt="pay"
              width={28}
              height={28}
              className="mx-auto"
            />
          </div>
          <h2 className="text-center text-xs py-3 px-4 h-full font-medium">
            <p className="text-customBlue font-semibold">КОНТРАГЕНТЫ 50+</p>
            <p className="text-[10px] font-bold">ДОБРОСОВЕСТНЫХ ПОСТАВЩИКОВ</p>
          </h2>
          <div className="bg-customGreen w-full h-16"></div>
        </div>
      </div>
    </div>
  );
};
export default Reliability;
