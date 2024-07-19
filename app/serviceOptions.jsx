import Image from "next/image";

const ServiceOptions = () => {
  return (
      <section className="max-w-4xl border mx-auto my-8">
        <div className="flex flex-col w-full">
          <h2 className="font-medium text-3xl text-left mb-8">
            ОПЦИИ СЕРВИСА
          </h2>
          <div className="flex flex-row gap-7">
            <div className="flex flex-col gap-7  w-3/6">
              <div className="flex flex-row gap-7 min-w-70">
                <p className="flex pl-6 pr-14 pb-8 items-end  bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5">
                  Сдать текущий квартал
                </p>
                <div className="flex flex-col gap-7 w-3/5">
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl">
                    Сдать уточненку
                  </p>
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl">
                    Блокировка счета 115 ФЗ
                  </p>
                </div>
              </div>
              <p className="flex items-center text-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl">
                Вызвать в ФНС юридическое сопровождение
              </p>
            </div>
            <div className="flex flex-col gap-7 w-3/6">
              <div className="flex flex-row gap-7">
                <div className="flex flex-col gap-7 min-w-70 w-3/5">
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center">
                    Заказать аналитику по модели ФНС
                  </p>
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center">
                    Подключить умную бухгалтерию
                  </p>
                </div>
                <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5">
                  Мониторинг по модели ФНС. Детализация разрывов
                </p>
              </div>
              <p className=" flex items-center justify-center h-20 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
                Проверка контрагента по критериям ЦБ
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ServiceOptions;
