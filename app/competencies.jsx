import Image from "next/image";

const Competencies = () => {
    return (
        <div className="max-w-4xl border mx-auto relative">
            <Image
                src="percent1.svg"
                width={50}
                height={50}
                alt="percent"
                className="absolute -left-20 bottom-20"
            />
            <div className="relative">
                <div className="flex absolute top-4 items-baseline gap-6 ">
                    <h1 className="text-4xl ml-2">Pro</h1>
                    <h1 className="text-customBlue text-3xl">КОМПЕТЕНЦИИ</h1>
                </div>
                <Image
                    src="/arrowList.svg"
                    alt="competency list"
                    width={90}
                    height={250}
                />
                <div className="italic font-medium flex flex-col gap-[23px] absolute top-[87px] ml-24">
                    <p>Полное понимание работы контрольно-аналитических систем ФНС</p>{" "}
                    <p>Системный анализ вашей задачи</p>
                    <p>Полный мониторинг по алгоритму системы АСК НДС</p>
                    <p>Вырабатываем персональные решения для каждого клиента</p>
                    <p>Полное юридическое сопровождение всего контура сделок</p>
                </div>
            </div>
        </div>
    );
};

export default Competencies;
