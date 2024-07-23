import Image from "next/image";

const CooperationStages = () => {
  return (
    <div className="max-w-4xl border mx-auto my-8 relative max-lg:px-6 max-sm:px-4">
      <Image
          src="rombus6.svg"
          width={50}
          height={50}
          alt="rombus"
          className="absolute -left-20 -bottom-40 -z-10 max-lg:-left-10"
      />
      <Image
          src="gear.svg"
          width={60}
          height={60}
          alt="gear"
          className="absolute right-0 -top-10"
      />
      <Image
          src="gear.svg"
          width={150}
          height={150}
          alt="gear"
          className="absolute top-8 -right-20"
      />
      <h1 className="text-3xl font-medium text-center">ЭТАПЫ СОТРУДНИЧЕСТВА</h1>
      <div className="relative mt-36">
        <div className="w-36 border absolute -top-24 left-56">
          <h2 className="text-lg font-medium">02</h2>
          <p className="text-[10px] font-light">
            Анализируем заявку, предоставляем реест по вашим критериям
          </p>
        </div>
        <div className="w-36 border absolute -bottom-16 left-[124px]">
          <h2 className="text-lg font-medium">01</h2>
          <p className="text-[10px] font-light">Вы формируете заявку </p>
        </div>
        <div className="w-36 border absolute -bottom-[110px] left-[380px] max-[900px]:left-[330px]">
          <h2 className="text-lg font-medium">03</h2>
          <p className="text-[10px] font-light">
            Подписываем договор и сдаем отчеты после финального утверждения всех
            параметров сделки
          </p>
        </div>
        <div className="w-36 border absolute -top-24 right-[180px]">
          <h2 className="text-lg font-medium">04</h2>
          <p className="text-[10px] font-light">
            Высылаем квитанции о сдаче отчетности и выставляем счет на оплату
          </p>
        </div>

        <div className="w-36 border absolute -bottom-[95px] right-[40px]">
          <h2 className="text-lg font-medium">05</h2>
          <p className="text-[10px] font-light">
            Высылаем квитанции о принятии и закрывающие документы{" "}
          </p>
        </div>
        <Image
          src="/cooperationStages.svg"
          width={700}
          height={100}
          className="mx-auto m-4 max-[900px]:w-9/12"
        />
        <div className=" flex justify-center relative">
          <div className="absolute -bottom-40 mx-auto">
            <h1 className="flex justify-between font-medium text-xl">
              <p>LOADING</p> <p>100%</p>
            </h1>
            <Image
              src="/loadingLine.svg"
              width={650}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationStages;
