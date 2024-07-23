import React from "react";
import Image from "next/image";

const TaxpayerService = () => {
    return (
        <section className="max-w-4xl mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
            <Image className="absolute top-8 z-30 -right-20 object-contain max-[753px]:top-16 max-[753px]:-right-40 max-sm:top-64 max-sm:-right-72 max-[440px]:top-96 max-[440px]:-right-52 max-[349px]:top-2/3"
                   src="/iPhone.svg" width={500} height={250} alt="iPhone"/>
            <div className="flex flex-col w-full">
                <h2 className="font-medium text-3xl mb-10 text-center max-[440px]:text-2xl">
                    СЕРВИС ГРАМОТНЫХ НАЛОГОПЛАТЕЛЬЩИКОВ
                </h2>
            </div>
            <div
                className="h-40 bg-custom-gradient rounded-2xl flex flex-row gap-2 mb-8 max-sm:flex-wrap max-sm:gap-7 max-sm:w-5/6 max-sm:mx-auto max-sm:my-0 max-sm:py-5 max-sm:h-auto max-[440px]:w-full">
                <div className="h-32 w-32 bg-white rounded-lg m-auto flex justify-center shadow-lg">
                    <Image
                        className="object-contain m-auto"
                        src="/portfolio.svg"
                        alt="portfolio"
                        width={90}
                        height={90}
                    />
                </div>
                <div className="h-40 w-40 bg-white rounded-lg m-auto flex justify-center shadow-lg relative top-3">
                    <Image
                        className="object-contain"
                        src="/qrCodeTwo.svg"
                        alt="qrCode"
                        width={130}
                        height={130}
                    />
                </div>
                <div className="h-32 w-32 bg-white rounded-lg m-auto flex justify-center shadow-lg">
                    <Image
                        className="object-contain"
                        src="/document2.svg"
                        alt="document"
                        width={90}
                        height={90}
                    />
                </div>
                <div className="h-32 w-32 bg-white rounded-lg m-auto flex justify-center shadow-lg">
                    <Image
                        className="object-contain"
                        src="/documentation 1.svg"
                        alt="document"
                        width={90}
                        height={90}
                    />
                </div>
            </div>
            <div className="flex flex-row mb-20 max-sm:mt-10 max-sm:ml-10 max-[440px]:flex-col max-[440px]:ml-0">
                <h3 className="font-medium text-base uppercase w-52 max-[440px]:text-sm ">СКИДКА ПРИ ПЕРЕХОДЕ ПО <span
                    className="text-customBlue">QR КОДУ 5%</span>
                </h3>
                <Image
                    className="object-contain h-8 w-8 my-auto mx-0"
                    src="/arrowService.svg"
                    alt="arrow up"
                    width={58}
                    height={58}
                />
            </div>
        </section>
    );
}

export default TaxpayerService;