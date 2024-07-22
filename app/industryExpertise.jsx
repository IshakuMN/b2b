import Image from "next/image";

const IndustryExpertise = () => {
  return (
    <div className="mx-auto my-8 border max-w-4xl">
      <h1 className="my-8 font-medium text-2xl text-center">
        ОТРАСЛЕВАЯ ЭКСПЕРТИЗА
      </h1>

      <div className="flex">
        <div className="relative border w-96 ">
          <Image
            src="/rombusHand.png"
            width={250}
            height={210}
            alt="hands"
            className="mx-auto -z-50 absolute top-8 right-20"
          />
          <div className="relative border">
            <Image
              src="/2hands.png"
              width={410}
              height={280}
              alt="hands"
              className="absolute top-0 -right-10 -z-30"
            />
            <Image
              src="/handBlock.png"
              width={200}
              height={700}
              alt="hands"
              className="mx-auto absolute top-0 -ml-10 -mt-20"
            />
          </div>
        </div>
        <div className=" flex relative">
          {" "}
          <div className="absolute top-0 -left-40 text-sm">
            <p>
              С НАМИ <br /> СОТРУДНИЧАЮТ
            </p>
            <Image
              src="/arrowPointer.svg"
              width={35}
              height={30}
              className="ml-16 pt-3"
            />
          </div>
          <div className="bg-customGrey rounded-2xl shadow-lg py-6 px-8 space-y-4 w-fit font-medium sm:mr-40">
            <span className="bg-customBlue py-2 px-4 rounded-md text-white">
              КОМПАНИИ
            </span>
            <div className="space-y-1">
              {" "}
              <span className="flex gap-6">
                {" "}
                <Image src="/arrow.svg" width={16} height={60} alt="lineList" />
                <p>Розничная и оптовая торговля</p>
              </span>
              <span className="flex gap-6">
                {" "}
                <Image src="/arrow.svg" width={16} height={60} alt="lineList" />
                <p>Логистические компании</p>
              </span>
              <span className="flex gap-6">
                {" "}
                <Image src="/arrow.svg" width={16} height={60} alt="lineList" />
                <p>IT-компании и маркетинговые агенства</p>
              </span>
              <span className="flex gap-6">
                {" "}
                <Image src="/arrow.svg" width={16} height={60} alt="lineList" />
                <p>Строительные компании</p>
              </span>
              <span className="flex gap-6">
                {" "}
                <Image src="/arrow.svg" width={16} height={60} alt="lineList" />
                <p>Клининговые компании</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
