import Image from "next/image";

const Suppliers = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="flex items-center justify-between ">
        {" "}
        <div className="flex items-center gap-2 my-4 rounded-lg border-2 py-2 px-4 h-fit w-fit shadow-md">
          <Image src="/delivery.svg" alt="delivery" width={46} height={46} />
          <span className="text-customBlue">|</span>
          <h1 className="text-xl font-bold">ПОСТАВЩИКИ</h1>
        </div>
        <Image src="/gears.svg" alt="gears" width={200} height={160} />
      </div>
      <div></div>
      <div className="relative">
        <Image src="zigNumbers.svg" alt="zigNumbers" width={65} height={240} />
        <div className="font-medium absolute left-12 top-0 space-y-[18px]">
          <p>Работающие Сотрудники в штате каждой компании</p>
          <p className="ml-10">Наличие лицензий и допусков СРО</p>
          <p>Электронный документооборот</p>
          <p className="ml-10">
            Возможность выполнять реальные подрядные работы
          </p>
          <p>Средний Годовой оборот 1 поставщика 800 млн рублей!</p>
        </div>
        <div className="flex items-center space-x-2 my-8">
          {" "}
          <Image src="/miniChart.svg" alt="miniChart" width={50} height={50} />
          <p>ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОЙ ЗАЯВКЕ !</p>
        </div>
        <Image
          src="/2rombus1.svg"
          alt="2rombus1"
          width={300}
          height={210}
          className="absolute -right-20 -bottom-10"
        />
      </div>
    </div>
  );
};

export default Suppliers;
