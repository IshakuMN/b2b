import Image from "next/image";

const ServiceOptions = () => {
  return (
    <section className="options max-w-4xl mx-auto">
      <div className="flex flex-col gap-24 w-full">
        <h2 className="font-medium text-50px leading-59.25px text-left">
          ОПЦИИ СЕРВИСА
        </h2>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-7 flex-1">
            <div className="flex flex-row gap-7 min-w-80">
              <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl h-full">
                Сдать текущий квартал
              </p>
              <div className="flex flex-col gap-7">
                <p className="flex items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
                  Сдать уточненку
                </p>
                <p className="p-11 flex items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
                  Блокировка счета 115 ФЗ
                </p>
              </div>
            </div>
            <p className="flex items-center text-center justify-center h-24 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
              Вызвать в ФНС юридическое сопровождение
            </p>
          </div>
          <div className="flex flex-col gap-7 flex-1">
            <div className="flex flex-row gap-7">
              <div className="flex flex-col gap-7 min-w-80">
                <p className="flex pr-9 pl-9 items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
                  Заказать аналитику по модели ФНС
                </p>
                <p className="flex pr-9 pl-9 items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
                  Подключить умную бухгалтерию
                </p>
              </div>
              <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl h-full">
                Мониторинг по модели ФНС. Детализация разрывов
              </p>
            </div>
            <p className=" flex items-center justify-center h-24 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">
              Проверка контрагента по критериям ЦБ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
