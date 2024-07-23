import Image from "next/image";
import Link from "next/link";

const CommissionService = () => {
  return (
      <div className="max-w-4xl mx-auto justify-center my-8 relative max-lg:px-6 max-sm:px-4">
          <Image
              src="rombus6.svg"
              width={200}
              height={200}
              alt="rombus"
              className="absolute -right-60 -top-16 max-lg:-right-20"
          />
        <div className="flex  justify-center space-x-4">
          <div className="relative flex space-x-6 items-center max-[540px]:space-x-1 max-[340px]:space-x-0 ">
            <Image
                src="/rombusComp.svg"
                width={400}
                height={400}
                alt="rombus"
                className="absolute -top-20 -z-50 -left-20 rotate-180"
            />
            <Image src="/computer.svg" width={300} height={300} alt="computer" className="max-[540px]:w-[200px] max-[340px]:w-[180px]"/>
            <Image
                src="/qrCode.svg"
                width={150}
                height={150}
                alt="qrCode"
                className="pb-10 max-[540px]:w-[100px]"
            />
          </div>
        </div>
        <div className="absolute right-4  max-w-48 space-y-4">
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
          <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer" className="flex  space-x-2 bg-customBlue rounded-lg text-white text-[10px] py-1 px-4 w-fit hover:opacity-80">
            ТЕЛЕГРАММ <br /> @NDS4B
            <Image
                src="/telegramSmall.svg"
                width={20}
                height={20}
                alt="telegram"
            />
          </Link>
        </div>
      </div>
  );
};

export default CommissionService;