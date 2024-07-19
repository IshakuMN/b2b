import React from "react";
import Image from "next/image";

const TaxpayerService = () => {
    return (
        <section className="max-w-4xl border mx-auto my-8 relative">
            <Image className="absolute top-8 z-50 -right-10 object-contain" src="/iPhone.svg" width={500} height={300} alt="iPhone"/>
            <div className="flex flex-col w-full">
                <h2 className="font-medium text-3xl mb-8 text-center">
                    СЕРВИС ГРАМОТНЫХ НАЛОГОПЛАТЕЛЬЩИКОВ
                </h2>
            </div>
            <div className="h-40 bg-custom-gradient rounded-2xl flex flex-row gap-2 mb-8">
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
            <div className="flex flex-row mb-20">
                <h3 className="font-medium text-base uppercase w-52">СКИДКА ПРИ ПЕРЕХОДЕ ПО <span
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