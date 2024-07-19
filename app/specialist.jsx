import Image from "next/image";

const Specialist = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto justify-center items-center my-8">
      <h1 className="text-3xl font-medium">5 СПЕЦИАЛИСТОВ</h1>
      <p className="text-sm">СОПРОВОЖДАЮТ ВАШУ ЗАЯВКУ</p>
      <div className="my-8 border relative">
        <div className="flex justify-between absolute -left-52 top-[110px] space-x-64">
          <div className="w-[220px] relative border">
            <Image
              src="/dialogRight.svg"
              alt="dialogRight"
              width={240}
              height={220}
              className=""
            />{" "}
            <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
              ГЛАВНЫЙ БУХГАЛТЕР
            </p>
            <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
              Помогает сформировать реестр по требованиям заказчика. Адаптирует
              весь контур сделки и ведет документооборот по заявке.
            </p>
          </div>

          <div className="w-[220px] relative border">
            <Image
              src="/dialogLeft.svg"
              alt="dialogLeft"
              width={240}
              height={220}
              className=""
            />{" "}
            <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
              НАЛОГОВЫЙ ЭКСПЕРТ
            </p>
            <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
              Анализирует и сопровождает каждую заявку. Проверяет безопасность
              каждой сделки по критериям АСК НДС.
            </p>
          </div>
        </div>

        <div className="flex justify-between absolute -left-52 top-[280px] space-x-64">
          <div className="w-[220px] relative border">
            <Image
              src="/dialogRight.svg"
              alt="dialogRight"
              width={240}
              height={220}
              className=""
            />{" "}
            <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-[11px] font-medium">
              КОРПОРАТИВНЫЙ ЮРИСТ
            </p>
            <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
              Анализирует всю логику взаимодействия хозяйствующих субъектов.
              Даёт правовую оценку всем договорам.
            </p>
          </div>

          <div className="w-[220px] relative border">
            <Image
              src="/dialogLeft.svg"
              alt="dialogLeft"
              width={240}
              height={220}
              className=""
            />{" "}
            <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
              Мастер платежей
            </p>
            <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
              Проверяет контрагентов на списки ЦБ. Согласовывает графики оплат.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[220px] relative border">
            <Image
              src="/dialogDown.svg"
              alt="dialogDown"
              width={240}
              height={220}
              className=""
            />{" "}
            <p className=" absolute top-2 left-4 bg-blue-200 rounded-md w-fit py-1 px-3 text-sm font-medium">
              ЛИЧНЫЙ МЕНЕДЖЕР
            </p>
            <p className="text-[10px] font-extralight p-2 absolute top-8 left-4">
              Сопровождает каждую задачу и координирует работу команды. Служба
              клиентской поддержки 24/7.
            </p>
          </div>

          <Image
            src="/specialistTree.svg"
            alt="specialistTree"
            width={280}
            height={220}
            className="my-4 border mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Specialist;
