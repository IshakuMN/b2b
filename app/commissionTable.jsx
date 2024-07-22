import Image from "next/image";

const CommissionTable = () => {
  return (
    <div className="max-w-4xl mx-auto mt-56 relative">
      <Image
          src="rombus6.svg"
          width={200}
          height={200}
          alt="rombus"
          className="absolute -left-60 -top-16"
      />
      <h1 className="text-3xl font-medium text-center my-8">
        КОМИССИЯ СЕРВИСА
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-customGrey">
            <th className="border border-blue-300 px-4 py-2 text-left">
              Объем заказа
            </th>
            <th className="border border-blue-300 px-4 py-2 text-center bg-customBlue">
              Текущий квартал
            </th>
            <th className="border border-blue-300 px-4 py-2 text-center bg-customGreen">
              Уточнение
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-blue-300 px-4 py-2">1 - 10 млн</td>
            <td className="border border-blue-300 px-4 py-2 text-center">3.5 x</td>
            <td className="border border-blue-300 px-4 py-2 text-center">4.5 x</td>
          </tr>
          <tr>
            <td className="border border-blue-300 px-4 py-2">10 - 50 млн</td>
            <td className="border border-blue-300 px-4 py-2 text-center">3.3 x</td>
            <td className="border border-blue-300 px-4 py-2 text-center">4.3 x</td>
          </tr>
          <tr>
            <td className="border border-blue-300 px-4 py-2">50 - 200 млн</td>
            <td className="border border-blue-300 px-4 py-2 text-center">3 x</td>
            <td className="border border-blue-300 px-4 py-2 text-center">4 x</td>
          </tr>
          <tr>
            <td className="border border-blue-300 px-4 py-2">Более 200 млн</td>
            <td className="border border-blue-300 px-4 py-2 text-center">2.7 x</td>
            <td className="border border-blue-300 px-4 py-2 text-center">3.5 x</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center space-x-8 my-8">
        <Image src="/phone.png" alt="phone" width={60} height={60} />
        <p className="text-sm  text-stone-600 font-light">
          ОПЛАТА КОМИССИИ СЕРВИСА ПРОИЗВОИДТСЯ В БЕЗНАЛИЧНОЙ ФОРМЕ ПО
          ВЫСТАВЛЕННОМУ СЧЕТУ НА РЕКВИЗИТЫ ПОСТАВЩИКА СОГЛАСНО НАЗНАЧЕНИЮ
          ОСНОВНОГО ДОГОВОРА
        </p>
      </div>
    </div>
  );
};

export default CommissionTable;
