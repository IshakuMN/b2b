import Image from "next/image";
const AboutService = () => {
  return (
    <div className="max-w-4xl border mx-auto my-16">
      <h2 className="text-2xl font-medium my-4">О СЕРВИСЕ</h2>
      <div className="relative">
        <Image src="/lineList.svg" width={10} height={60} alt="lineList" />
        <div className="space-y-6 absolute left-12 top-[14px]">
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
