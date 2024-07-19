import Image from "next/image";

const TaxConsulation = () => {
  return (
    <section className="max-w-4xl mx-auto my-8 border">
      <h2 className="text-3xl font-medium my-8">НАЛОГОВЫЙ КОНСАЛТИНГ</h2>
      <div className="flex space-x-20">
        {" "}
        <div className="flex flex-col w-fit gap-y-6 border">
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
        <div className="border -mt-2">
          <Image src="/manComp.svg" width={300} height={200} />
          <Image src="/manCompDown.svg" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default TaxConsulation;
