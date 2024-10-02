import Image from "next/image";

const IndustryExpertise = () => {
    return (
        <div className="mx-auto my-8 max-w-4xl max-lg:px-6 max-sm:px-4">
            <h1 className="my-8 font-medium text-2xl text-center max-md:my-4">
                ОТРАСЛЕВАЯ ЭКСПЕРТИЗА
            </h1>

            <div className="flex max-[414px]:flex-col">
                <div className="relative w-96">
                    <div className="relative">
                        <Image
                            src="/Frame.png"
                            width={500}
                            height={500}
                            alt="hands"
                            className="absolute top-0 -right-10 -z-30 max-[500px]:scale-150  max-[500px]:top-20 max-[500px]:left-0 max-[414px]:relative max-[414px]:-left-10"
                        />
                    </div>
                </div>
                <div className=" flex relative">
                    {" "}
                    <div className="absolute top-0 -left-40 text-sm max-[414px]:left-20 max-[414px]:-top-60">
                        <p>
                            С НАМИ <br/> СОТРУДНИЧАЮТ
                        </p>
                        <Image
                            src="/arrowTgPointer.svg"
                            width={30}
                            height={30}
                            alt="arrow"
                            className="ml-16 pt-3 rotate-0 -scale-x-100"
                        />
                        {/*<Image*/}
                        {/*    src="/arrowPointer.svg"*/}
                        {/*    alt="arrowPointer"*/}
                        {/*    width={35}*/}
                        {/*    height={30}*/}
                        {/*    className="ml-16 pt-3"*/}
                        {/*/>*/}
                    </div>
                    <div className="bg-customGrey rounded-2xl shadow-lg py-6 px-8 space-y-4 w-fit font-medium sm:mr-0">
            <span className="bg-customBlue py-2 px-4 rounded-md text-white">
              КОМПАНИИ
            </span>
                        <div className="space-y-1">
                            {" "}
                            <span className="flex gap-6">
                {" "}
                                <Image src="/arrow.svg" width={16} height={60} alt="lineList"/>
                <p>Розничная и оптовая торговля</p>
              </span>
                            <span className="flex gap-6">
                {" "}
                                <Image src="/arrow.svg" width={16} height={60} alt="lineList"/>
                <p>Логистические компании</p>
              </span>
                            <span className="flex gap-6">
                {" "}
                                <Image src="/arrow.svg" width={16} height={60} alt="lineList"/>
                <p>IT-компании и маркетинговые агенства</p>
              </span>
                            <span className="flex gap-6">
                {" "}
                                <Image src="/arrow.svg" width={16} height={60} alt="lineList"/>
                <p>Строительные компании</p>
              </span>
                            <span className="flex gap-6">
                {" "}
                                <Image src="/arrow.svg" width={16} height={60} alt="lineList"/>
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
