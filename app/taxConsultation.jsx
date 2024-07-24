import Image from "next/image";

const TaxConsulation = () => {
    return (
        <section className="relative">
            <div className="max-w-4xl mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
                <Image
                    src="percent1.svg"
                    width={50}
                    height={50}
                    alt="percent"
                    className="absolute -left-60 bottom-20"
                />
                <Image
                    src="percent2.svg"
                    width={100}
                    height={100}
                    alt="percent"
                    className="absolute -left-40 top-40"
                />
                <h2 className="text-3xl font-medium my-8 max-md:text-2xl">НАЛОГОВЫЙ КОНСАЛТИНГ</h2>
                <div
                    className="flex space-x-20 max-sm:space-x-3 max-[500px]:flex-col max-[500px]:gap-5 max-[500px]:space-x-10">
                    {" "}
                    <div className="flex flex-col w-fit gap-y-6">
                        {" "}
                        <span className="font-medium shadow-md py-2 px-4 rounded-md border-b-2 border-r-2 w-fit">
            Полный анализ деятельности
          </span>
                        <span className="font-medium shadow-md py-2 px-4 rounded-md border-b-2 border-r-2 w-fit">
            Сопровождение проверок
          </span>
                        <span className="font-medium shadow-md py-2 px-4 rounded-md border-b-2 border-r-2 w-fit">
            Представление интересов в ФНС
          </span>
                        <span className="font-medium shadow-md py-2 px-4 rounded-md border-b-2 border-r-2 w-fit">
            Работа с проблемной задолженностью
          </span>
                        <span className="font-medium shadow-md py-2 px-4 rounded-md border-b-2 border-r-2 w-fit">
            Мониторинг сложных разрывов
          </span>
                    </div>
                    <div className="-mt-2">
                        <Image src="/manComp.svg" alt="manComp" width={300} height={200}/>
                        <Image src="/manCompDown.svg" alt="manComp" width={300} height={300}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxConsulation;
