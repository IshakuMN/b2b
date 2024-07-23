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
import Link from "next/link";


const ServiceOptions = () => {
  return (
      <section className="max-w-4xl mx-auto mb-8 mt-40 relative max-lg:px-6 max-sm:px-4">
        <Image
            src="rombus7.svg"
            width={180}
            height={180}
            alt="rombus"
            className="absolute -right-40 -top-16 -z-10 max-lg:-right-20"
        />
        <div className="flex flex-col w-full">
          <h2 className="font-medium text-3xl text-left mb-8 max-md:text-2xl">
            ОПЦИИ СЕРВИСА
          </h2>
          <div className="flex flex-row gap-7 max-[860px]:gap-4 max-[760px]:flex-col max-[860px]:w-full">
            <div className="flex flex-col gap-7  w-3/6 max-[860px]:gap-4 max-[860px]:w-10/12 max-[860px]:mx-auto max-[600px]:w-full">
              <div className="flex flex-row gap-7 min-w-70 max-[860px]:gap-4">
                <Dialog>
                  <DialogTrigger  className="flex pl-6 pr-14 pb-8 items-end  bg-gray-100 font-medium text-base h-full   rounded-2xl w-2/5 max-[860px]:text-sm max-[860px]:h-auto cursor-pointer hover:opacity-40">Сдать текущий квартал</DialogTrigger>
                  <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                    <DialogHeader>
                      <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-8 max-[450px]:text-base max-[450px]:gap-1">
                        <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">1</div>
                        <h2>Сдать текущий квартал</h2></DialogTitle>
                      <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
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
                    <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                      <div className="flex gap-2 justify-end max-[450px]:gap-1">
                        <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                        <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                      </div>
                    </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <div className="flex flex-col gap-7 w-3/5 max-[860px]:gap-4">
                  <Dialog>
                    <DialogTrigger  className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl max-[860px]:text-sm cursor-pointer hover:opacity-40">Сдать уточненку</DialogTrigger>
                    <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-8 max-[450px]:text-base max-[450px]:gap-1">
                          <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">2</div>
                          <h2>Сдать уточненку</h2></DialogTitle>
                        <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                          Сервис 4НДС предоставляет опцию – уточнение предыдущих периодов.
                          Мы анализируем Вашу заявку и предоставляем рекомендации экологичного
                          уточнения декларации с учетом нюансов работы системы АСК НДС.
                          После индивидуального анализа мы предоставляем Вам контрагентов
                          на выбор, которые готовы заключить с Вами договор задним числом. После утверждения подошедшего Вам поставщика менеджер высылает Вам реестр
                          к заполнению по нашей форме. Далее Вы направляете заполненный реестр
                          нам на утверждение вместе с договором и закрывающими документами
                          по сделке. После редакции, согласования и утверждения всех необходимых
                          Вам документов мы сдаем отчеты в ФНС. После подачи уточнений декларации
                          в ФНС мы направляем Вам квитанции о принятии уточненной декларации ФНС. Оригиналы подписанных документов высылаются Вам с курьером.
                          После получения квитанций о принятии деклараций от ФНС мы направляем
                          их Вам и выставляем счет за оказанную услугу. Вы оплачиваете комиссию за
                          оказанную услугу на контрагента, которого выбрали либо рассчитываетесь
                          переводом на карту физического лица. Сервис 4НДС предоставляет Вам
                          трехлетнюю гарантию на оказанную услугу и полное юридическое и
                          документальное сопровождение в случае возникновения запросов от ФНС.
                          Мы предоставляем Вам только проверенных поставщиков со среднегодовым
                          оборотом 350 млн рублей. 4НДС это умная оптимизация налогов законными
                          методами в формате B2B.
                        </DialogDescription>
                        <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                          <div className="flex gap-2 justify-end max-[450px]:gap-1">
                            <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                            <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger  className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl px-2.5 max-[860px]:text-sm cursor-pointer hover:opacity-40">Блокировка счета 115 ФЗ</DialogTrigger>
                    <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:px-4 max-[450px]:text-base max-[450px]:gap-1">
                          <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">3</div>
                          <h2>Блокировка счета 115 ФЗ</h2></DialogTitle>
                        <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                          Если Вам заблокировали счет ,наши специалисты по банковскому делу
                          готовы помочь. Вы заполняете форму ,в которой указываете наименование
                          банка, в котором произошла блокировка, и ИНН компании, у которой
                          произошел блок. Мы анализируем Ваш запрос и предоставляем схему
                          вывода денежных средств с заблокированного счета. Мы помогаем Вам
                          самостоятельно открыть счет в банке партнере , который произведет
                          реабилитацию от негативных меток. Вы самостоятельно сделаете перевод
                          средств на свой счет в другом банке и оплатите денежные средства по
                          договору на своего контрагента. При необходимости сервис может
                          предоставить Вам контрагента для оплаты комиссии за оказанную услугу.
                          4НДС финансовый сервис «разблокируй себя сам».
                        </DialogDescription>
                        <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                          <div className="flex gap-2 justify-end max-[450px]:gap-1">
                            <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                            <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <Dialog>
                <DialogTrigger  className="flex items-center text-center justify-center h-20 bg-gray-100 font-medium px-2.5 text-base rounded-2xl max-[860px]:text-sm cursor-pointer hover:opacity-40">Вызвать в ФНС юридическое сопровождение</DialogTrigger>
                <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                  <DialogHeader>
                    <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-8 max-[450px]:text-base max-[450px]:gap-1">
                      <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">4</div>
                      <h2>Вызвать в ФНС юридическое сопровождение</h2></DialogTitle>
                    <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                      Если Вас вызывают в ФНС. При вызове в ФНС необходимо иметь качественное сопровождение
                      профильного специалиста. Корпоративный юрист тут не подойдет.
                      Знание нюансов и внутренних положений фискальных органов – это самый
                      важный аспект по взаимодействию с органами ФНС. В нашем штате
                      работают бывшие Сотрудники ФНС. Благодаря обширному практическому
                      опыту мы предоставляем полное юридическое и налоговое сопровождение
                      предотвращая противоправных действий со стороны сотрудников ФНС
                      и минимизируя риски неправомерных взысканий. Сопровождение на всех
                      этапах взаимодействия с ФНС.
                    </DialogDescription>
                    <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                      <div className="flex gap-2 justify-end max-[450px]:gap-1">
                        <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                        <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex flex-col gap-7 w-3/6 max-[860px]:gap-4 max-[860px]:w-10/12 max-[860px]:mx-auto max-[600px]:w-full">
              <div className="flex flex-row gap-7 max-[860px]:gap-4">
                <div className="flex flex-col gap-7 min-w-70 w-3/5 max-[860px]:gap-4">
                  <Dialog>
                    <DialogTrigger  className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center px-2.5 max-[860px]:text-sm cursor-pointer hover:opacity-40">Заказать аналитику по модели ФНС</DialogTrigger>
                    <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-10 max-[450px]:text-base max-[450px]:gap-1">
                          <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">5</div>
                          <h2>Заказать аналитику по модели ФНС</h2></DialogTitle>
                        <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                          Если у Вас есть задача увидеть свой бизнес и его орбиту глазами
                          сотрудника ФНС, наш сервис предоставит Вам данную услугу.
                          Вы получаете полное отражение из системы АСК НДС с подробными
                          пояснениями и сносками. Таким образом Вы сможете проверить
                          экологичность сотрудничества с Вашими поставщиками и партнерами.
                          Сведения предоставляются в виде доступа к архиву для скачивания.
                          Запрос мониторинга доступен за любой период.
                        </DialogDescription>
                        <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                          <div className="flex gap-2 justify-end max-[450px]:gap-1">
                            <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                            <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger  className="flex items-center justify-center h-20 bg-gray-100 font-medium text-base rounded-2xl text-center px-2.5 max-[860px]:text-sm cursor-pointer hover:opacity-40">Подключить умную бухгалтерию</DialogTrigger>
                    <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium pl-10 pr-20 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-8 max-[450px]:text-base max-[450px]:gap-1">
                          <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">6</div>
                          <h2>Подключить умную бухгалтерию</h2></DialogTitle>
                        <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                          Умная бухгалтерия – это сервис аутсорсинга. Мы предоставляем гибкие
                          условия предлагая оптимальную цену с включенными комплексными
                          решениями по оптимизации бизнес процессов.
                          Выбирая услугу “Умная бухгалтерия” Вы получаете сопровождение сразу
                          3 специалистов по цене одного штатного бухгалтера - Бухгалтер, налоговый
                          юрист, Банковский брокер. Вы занимаетесь бизнесом не отвлекаясь на
                          ненужные хлопоты , получая рекомендации и готовые решения от
                          надежного партнера! Оптимизируй это с 4НДС !.
                        </DialogDescription>
                        <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                          <div className="flex gap-2 justify-end max-[450px]:gap-1">
                            <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                            <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <Dialog>
                  <DialogTrigger  className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-base rounded-2xl h-full w-2/5 max-[860px]:text-sm max-[860px]:h-auto max-[860px]:px-2.5 cursor-pointer hover:opacity-40">Мониторинг по модели ФНС. Детализация разрывов</DialogTrigger>
                  <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                    <DialogHeader>
                      <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium px-10 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-10 max-[450px]:text-sm max-[450px]:gap-1">
                        <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">4</div>
                        <h2>Мониторинг по модели ФНС. Детализация разрывов</h2></DialogTitle>
                      <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                        Мы предоставляем сервис оказания услуг налогового юриста, включающий
                        в себя полный мониторинг и анализ рисков по критериям АСК НДС.
                        Консультационное сопровождение вашей компании при взаимодействии с
                        ФНС , анализ отчетности , документов и проверка контрагентов по
                        критериям рисков АСК НДС.
                      </DialogDescription>
                      <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                        <div className="flex gap-2 justify-end max-[450px]:gap-1">
                          <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                          <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                        </div>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Dialog>
                <DialogTrigger  className="flex items-center justify-center h-20 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl max-[860px]:text-sm cursor-pointer hover:opacity-40">Проверка контрагента по критериям ЦБ</DialogTrigger>
                <DialogContent className="px-0 py-0 rorder-5 overflow-hidden border-0 rounded-2xl max-sm:w-[95%]">
                  <DialogHeader>
                    <DialogTitle className="flex flex-row items-center gap-4 text-2xl bg-customBlue text-white font-medium pl-10 pr-20 py-8 text-left max-sm:text-xl max-[450px]:py-4 max-[450px]:pl-4 max-[450px]:pr-10 max-[450px]:text-base max-[450px]:gap-1">
                      <div className="w-8 h-8 border-2 border-white rounded-[50px] flex items-center justify-center">5</div>
                      <h2>Проверка контрагента по критериям ЦБ</h2></DialogTitle>
                    <DialogDescription className="text-sm px-10 py-6 bg-white text-left text-customGreyTwo max-sm:text-xs max-[450px]:py-4 max-[450px]:px-4">
                      Мы предоставляем сервис проверки контрагентов по критериям ЦБ РФ
                      и Росфинмониторинга . Вы получаете подробный отчет с историей компании.
                      Статус и характеристика Вашей компании отражается в базе регулятора
                      со всеми метками. Банковский светофор , сбис и другие базы и источники не способны дать
                      объективной картины о реальном статусе Вашей компании.
                      Мы помогаем с реабилитацией Вашей компании ,осуществляя очистку
                      репутации и помогаем подобрать банк партнер для комфортной работы.
                      С нашим сервисом вы сможете проверять контрагентов , выявляя токсичных
                      поставщиков , предупреждая возможные блокировки счета и запросы
                      со стороны ФНС. Выбирайте экологичный бизнес вместе с сервисом 4НДС.
                    </DialogDescription>
                    <div className="bg-customGrey px-10 py-4 max-[450px]:px-4">
                      <div className="flex gap-2 justify-end max-[450px]:gap-1">
                        <Link href="https://t.me/NDS4B" target="_blank" rel="noopener noreferrer"><Image src="/telegram.svg" alt="telegram" width={24} height={24}  className="hover:opacity-80 cursor-pointer"/></Link>

                        <Link href="" target="_blank" rel="noopener noreferrer"><Image src="/mail.svg" alt="mail" width={24} height={24} className="hover:opacity-80 cursor-pointer"/></Link>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div >
          </div>
        </div>
      </section>
  );
};

export default ServiceOptions;
