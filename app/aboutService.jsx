import Image from "next/image";
const AboutService = () => {
  return (
    <div className="max-w-4xl mx-auto my-16 relative max-lg:px-6 max-sm:px-4">
      <Image
          src="rombus3.svg"
          alt="rombus3"
          width={210}
          height={210}
          className="absolute -right-20 -top-10"
      />
      <Image
          src="rombus4.svg"
          alt="rombus4"
          width={80}
          height={80}
          className="absolute -left-40 top-5 -z-10 max-[1100px]:left-0 max-sm:top-0"
      />
      <h2 className="text-2xl font-medium my-4">О СЕРВИСЕ</h2>
      <div className="relative">
        <Image src="/lineList.svg" width={10} height={60} alt="lineList" />
        <div className="space-y-6 absolute left-12 top-[14px] uppercase font-medium max-sm:text-sm max-sm:space-y-7 max-[555px]:text-xs max-[555px]:space-y-9 max-[484px]:text-customThree max-[484px]:space-y-9  max-[454px]:space-y-7 max-[444px]:space-y-6 max-[432px]:space-y-5  max-[392px]:text-customFour">
          <h3 className="flex gap-1">
            {" "}
            <span className="text-customBlue">12 млрд</span> <br />
            <span> руб годовой совокупный оборот поставщиков</span>
          </h3>{" "}
          <h3 className="flex gap-1">
            {" "}
            <span className="text-customBlue">3,3 млрд </span> <br />
            <span> рублей сэкономили клиенты сервиса за 2023 год</span>
          </h3>{" "}
          <h3 className="flex">
            {" "}
            <span className="">
              Предоставляем отложенные вычеты функционирующего <br /> бизнеса на
              основании выполненных контрактов
            </span>{" "}
          </h3>{" "}
          <h3 className="flex gap-1">
            {" "}
            <span className="text-customBlue">15 летний </span> <br />
            <span> опыт налогового консалтинга</span>
          </h3>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
