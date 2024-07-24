import Image from "next/image";

const AdditionalService = () => {
  return (
      <section className="max-w-4xl mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
        <Image
            src="rombus6.svg"
            width={200}
            height={200}
            alt="rombus"
            className="absolute -right-40 -bottom-36 rotate-180"
        />
        <div className="flex flex-col w-full">
          <h2 className="font-medium text-3xl text-left mb-8 max-[700px]:mx-auto max-md:text-2xl">
            ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
          </h2>
          <div className="flex flex-row gap-5 mx-auto max-[700px]:flex-col">
            <div className="flex flex-col gap-4 bg-gray-100 h-52 w-48 rounded-[50px] shadow-lg m-auto py-6 px-8 max-[700px]:h-48">
              <Image
                  className="mx-auto"
                  src="/consulting.svg"
                  alt="tax consulting"
                  width={80}
                  height={80}
              />
              <p className="text-customGray text-center text-sm  text-stone-600 font-medium">
                НАЛОГОВЫЙ КОНСАЛТИНГ
              </p>
            </div>
            <Image src="/arrow_blue.svg" alt="arrow" width={40} height={40} className="max-[700px]:rotate-90 max-[700px]:mx-auto"/>
            <div className="flex flex-col gap-4 bg-gray-100 h-52 w-48 rounded-[50px] shadow-lg py-6 px-8 max-[700px]:h-48">
              <Image
                  className="mx-auto"
                  src="/case.svg"
                  alt="rehabilitation means 155 federal law"
                  width={80}
                  height={80}
              />
              <p className="text-customGray text-center text-sm  text-stone-600 font-medium">
                РЕАБИЛИТАЦИЯ СРЕДСТВ 115 ФЗ
              </p>
            </div>
            <Image src="/arrow_blue.svg" alt="arrow" width={40} height={40} className="max-[700px]:rotate-90 max-[700px]:mx-auto"/>
            <div className="flex flex-col gap-4 bg-gray-100 h-52 w-48 rounded-[50px] shadow-lg py-6 px-8 max-[700px]:h-48">
              <Image
                  className="mx-auto"
                  src="/control.svg"
                  alt="examination contractors"
                  width={80}
                  height={80}
              />
              <p className="text-customGray text-center text-sm  text-stone-600 font-medium">
                ПРОВЕРКА КОНТР. АГЕНТОВ
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AdditionalService;
