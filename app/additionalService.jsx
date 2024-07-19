import Image from "next/image";

const AdditionalService = () => {
  return (
    <section className="services">
      <div className="flex flex-col gap-24 w-full">
        <h2 className="font-medium text-50px leading-59.25px text-left">
          ОПЦИИ СЕРВИСА
        </h2>
        <div className="flex flex-row flex-wrap gap-5">
          <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
            <Image
              className="mx-14"
              src="/consulting.svg"
              alt="tax consulting"
              width={80}
              height={80}
            />
            <p className="text-customGray font-medium text-28px leading-33.18px text-center">
              НАЛОГОВЫЙ КОНСАЛТИНГ
            </p>
          </div>
          <Image src="/arrow_blue.svg" alt="arrow" width={80} height={80} />
          <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
            <Image
              className="mx-14"
              src="/case.svg"
              alt="rehabilitation means 155 federal law"
              width={80}
              height={80}
            />
            <p className="text-customGray font-medium text-28px leading-33.18px text-center">
              РЕАБИЛИТАЦИЯ СРЕДСТВ 115 ФЗ
            </p>
          </div>
          <img src="/arrow_blue.svg" alt="arrow" width={80} height={80} />
          <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
            <Image
              className="mx-14"
              src="/control.svg"
              alt="examination contractors"
              width={80}
              height={80}
            />
            <p className="text-customGray font-medium text-28px leading-33.18px text-center">
              ПРОВЕРКА КОНТР. АГЕНТОВ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalService;
