import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";


const ServiceOptions = () => {
  return (
      <section className="max-w-4xl border mx-auto mb-8 mt-40 relative max-lg:px-6 max-sm:px-4">
        <Image
            src="rombus7.svg"
            width={180}
            height={180}
            alt="rombus"
            className="absolute -right-40 -top-16 -z-10 max-lg:-right-20"
        />
        <div className="flex flex-col w-full">
          <h2 className="font-medium text-3xl text-left mb-8">
            ОПЦИИ СЕРВИСА
          </h2>
          <div className="flex flex-row gap-7 max-[860px]:gap-4 max-[760px]:flex-col max-[860px]:w-full">
            <div className="flex flex-col gap-7  w-3/6 max-[860px]:gap-4 max-[860px]:w-10/12 max-[860px]:mx-auto max-[600px]:w-full">
              <div className="flex flex-row gap-7 min-w-70 max-[860px]:gap-4">
                {/*<p className="flex pl-6 pr-14 pb-8 items-end  bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5 max-[860px]:text-sm max-[860px]:h-auto">*/}
                {/*  Сдать текущий квартал*/}
                {/*</p>*/}
                <Dialog>
                  <DialogTrigger  className="flex pl-6 pr-14 pb-8 items-end  bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5 max-[860px]:text-sm max-[860px]:h-auto">Сдать текущий квартал</DialogTrigger>
                  <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 max-sm:w-full">
                    <DialogHeader>
                      <DialogTitle className="text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left  max-sm:text-xl">Сдать текущий квартал</DialogTitle>
                      <DialogDescription className="text-sm px-10 py-6 bg-white text-left  max-sm:text-xs">
                        Мы анализируем Вашу заявку и предоставляем контрагентов на выбор.
                        После утверждения, подошедшего Вам поставщика, менеджер
                        высылает реестр к заполнению по нашей форме. Далее Вы направляете
                        заполненный реестр нам на утверждение вместе с договором и
                        закрывающими документами по сделке. После редакции, согласования
                        и утверждения всех необходимых Вам документов мы сдаем отчеты в ФНС.
                        Менеджер высылает Вам ссылку-приглашение на обмен документами по ЭДО.
                        После подачи декларации и сдачи отчетов в ФНС мы направляем Вам
                        квитанции о принятии. По каждой сделке производится обмен документами
                        по ЭДО и Вам высылаются оригиналы с курьером. После получения квитанций
                        о принятии деклараций от ФНС мы направляем их Вам и выставляем счет
                        за оказанную услугу. Вы оплачиваете комиссию за оказанную услугу
                        на контр агента, которого выбрали либо рассчитываетесь переводом на карту
                        физического лица. Сервис 4НДС предоставляет Вам трехлетнюю гарантию
                        на оказанную услугу и полное юридическое и документальное сопровождение
                        в случае возникновения запросов от ФНС. Мы предоставляем Вам только
                        проверенных поставщиков со среднегодовым оборотом 500 млн рублей.
                        4НДС это умная оптимизация налогов законными методами в формате B2B.
                      </DialogDescription>
                    <div className="bg-customGrey px-10 py-4">
                      <div className="flex gap-2 justify-end">
                        <a href="#"><Image src="/telegram.svg" alt="telegram" width={24} height={24} /></a>

                        <a href="#"><Image src="/mail.svg" alt="mail" width={24} height={24} /></a>
                      </div>
                    </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <div className="flex flex-col gap-7 w-3/5 max-[860px]:gap-4">
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl max-[860px]:text-sm">
                    Сдать уточненку
                  </p>
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl max-[860px]:text-sm">
                    Блокировка счета 115 ФЗ
                  </p>
                </div>
              </div>
              <p className="flex items-center text-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl max-[860px]:text-sm">
                Вызвать в ФНС юридическое сопровождение
              </p>
            </div>
            <div className="flex flex-col gap-7 w-3/6 max-[860px]:gap-4 max-[860px]:w-10/12 max-[860px]:mx-auto max-[600px]:w-full">
              <div className="flex flex-row gap-7 max-[860px]:gap-4">
                <div className="flex flex-col gap-7 min-w-70 w-3/5 max-[860px]:gap-4">
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center px-2.5 max-[860px]:text-sm">
                    Заказать аналитику по модели ФНС
                  </p>
                  <p className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center px-2.5 max-[860px]:text-sm">
                    Подключить умную бухгалтерию
                  </p>
                </div>
                <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5 max-[860px]:text-sm max-[860px]:h-auto">
                  Мониторинг по модели ФНС. Детализация разрывов
                </p>
              </div>
              <p className=" flex items-center justify-center h-20 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl max-[860px]:text-sm">
                Проверка контрагента по критериям ЦБ
              </p>
            </div >
          </div>
        </div>
      </section>
  );
};

export default ServiceOptions;
