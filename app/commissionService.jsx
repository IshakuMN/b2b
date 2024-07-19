import Image from "next/image";

const CommissionService = () => {
  return (
      <div className="max-w-4xl mx-auto border justify-center my-8 relative">
        <div className="flex  justify-center space-x-4">
          <div className="relative flex space-x-6 items-center ">
            <Image
                src="/rombusComp.svg"
                width={400}
                height={400}
                alt="rombus"
                className="absolute -top-20 -z-50 left-40"
            />
            <Image src="/computer.svg" width={300} height={300} alt="computer" />
            <Image
                src="/qrCode.svg"
                width={150}
                height={150}
                alt="qrCode"
                className="pb-10"
            />
          </div>
        </div>
        <div className="absolute right-4  max-w-48 space-y-4 ">
          <p className="text-[10px] font-medium">
            ЗАПРОСИТЬ СПИСОК ПОСТАВЩИКОВ У МЕНЕДЖЕРА
          </p>
          <Image
              src="/arrowTgPointer.svg"
              width={20}
              height={20}
              alt="arrow"
              className="absolute right-10 top-6"
          />
          <div className="flex  space-x-2 bg-customBlue rounded-lg text-white text-[10px] py-1 px-4 w-fit">
            ТЕЛЕГРАММ <br /> @NDS4B
            <Image
                src="/telegramSmall.svg"
                width={20}
                height={20}
                alt="telegram"
            />
          </div>
        </div>
      </div>
  );
};

export default CommissionService;