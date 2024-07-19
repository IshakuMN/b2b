import Image from "next/image";

const TaxConsultation2 = () => {
  return (
    <section className="max-w-4xl mx-auto my-8 border space-y-10">
      <div className="flex  space-x-4 w-fit rounded-lg border-b-2 border-r-2 shadow-lg py-2 px-6 items-center">
        <Image src="/house.svg" width={50} height={50} />
        <hr className="border-[1.5px] h-12 rounded-lg  border-customBlue" />
        <span className="text-3xl font-medium">ФЗ - 115</span>
      </div>
      <div className="space-y-4 max-w-[660px] text-start">
        <h3 className="flex space-x-2 items-center">
          <Image src="/arrow_blue.svg" width={30} height={30} alt="arrow" />{" "}
          <h4>
            {" "}
            <p>Разрабатываем индивидуальную стратегию</p>{" "}
            <p className="text-customBlue">реабилитации компании</p>
          </h4>
        </h3>
        <h3 className="flex space-x-2 items-center">
          <Image src="/arrow_blue.svg" width={30} height={30} alt="arrow" />{" "}
          <p>Проводим реабилитацию компании через межведомственную комиссию</p>{" "}
        </h3>
        <h3 className="flex space-x-2 items-center">
          <Image src="/arrow_blue.svg" width={30} height={30} alt="arrow" />{" "}
          <p>
            На основании решения осуществяем снятие негативных меток в системе
            ЦБ и выводим из внутрибанковских списков
          </p>{" "}
        </h3>
        <h3 className="flex space-x-2 items-center">
          <Image src="/arrow_blue.svg" width={30} height={30} alt="arrow" />{" "}
          <h4>
            {" "}
            <p>
              Предоставляем персональную стратеию по выводу заблокированных
              средств через
              <span className="text-customBlue"> банк партнер</span>
            </p>{" "}
          </h4>
        </h3>
      </div>
      <div className="flex space-x-4 items-center my-8 max-w-[600px]">
        {" "}
        <Image
          src="/handshake.svg"
          width={50}
          height={50}
          alt="handshake"
        />{" "}
        <h3 className="text-stone-500">
          ПРЕДОСТАВЛЯЕМ ПОНЯТНУЮ ДОРОЖНУЮ КАРТУ ДЛЯ ВАШИХ САМОСТОЯТЕЛЬНЫХ
          ДЕЙСТВИЙ
        </h3>
      </div>
    </section>
  );
};

export default TaxConsultation2;
