import Image from "next/image";
const AboutService = () => {
  return (
    <div className="max-w-4xl border mx-auto my-16 relative">
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
          className="absolute -left-40 top-5"
      />
      <h2 className="text-2xl font-medium my-4">О СЕРВИСЕ</h2>
      <div className="relative">
        <Image src="/lineList.svg" width={10} height={60} alt="lineList" />
        <div className="space-y-6 absolute left-12 top-[14px] uppercase font-medium">
          <h3 className="flex gap-1">
            {" "}
            <p className="text-customBlue">12 млрд</p> <br />
            <p> руб годовой совокупный оборот поставщиков</p>
          </h3>{" "}
          <h3 className="flex gap-1">
            {" "}
            <p className="text-customBlue">3,3 млрд </p> <br />
            <p> рублей сэкономили клиенты сервиса за 2023 год</p>
          </h3>{" "}
          <h3 className="flex">
            {" "}
            <p className="">
              Предоставляем отложенные вычеты функционирующего <br /> бизнеса на
              основании выполненных контрактов
            </p>{" "}
          </h3>{" "}
          <h3 className="flex gap-1">
            {" "}
            <p className="text-customBlue">15 летний </p> <br />
            <p> опыт налогового консалтинга</p>
          </h3>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
