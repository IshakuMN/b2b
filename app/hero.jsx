import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex mx-auto my-8 max-w-4xl max-lg:px-6 max-sm:px-4 max-sm:flex-col">
      {" "}
      <div className="">
        {" "}
        <div className="text-3xl font-bold my-8 py-4 max-sm:text-2xl">
          {" "}
          <div className="flex gap-2">
            <h1 className="text-customGreen">В2В</h1>
            <h1>СЕРВИС</h1>
          </div>{" "}
          <div className="flex gap-2">
            {" "}
            <h1>ОПТИМИЗАЦИИ</h1> <h1 className="text-customBlue">НДС</h1>
          </div>{" "}
        </div>
        <div className="flex flex-col my-8 py-4">
          <h1 className="text-xl font-bold mb-2">
            УМЕНЬШАЙТЕ{" "}
            <div className="flex gap-2">
              <h1>НДС НА</h1> <h1 className="text-customBlue">85%</h1>
            </div>
          </h1>
          <p className="text-gray-700">
            получая отложенные вычеты{" "}
            <p className="text-customBlue">крупного бизнеса</p>
          </p>
          <p className="flex gap-4 text-sm items-baseline mt-8 text-stone-500 font-light">
            <Image src="/hammer.svg" alt="logo" width={34} height={34} />{" "}
            ЗАКОННАЯ ОПТИМИЗАЦИЯ
          </p>
          <p className="text-sm text-stone-500 mt-2">*согласно Главе 21 НК РФ</p>
        </div>
      </div>
      <div className="relative max-sm:mx-auto">
        <Image src="/4rombus.svg" alt="hero" width={500} height={500} className="max-sm:absolute max-sm:-z-10 max-sm:-right-36 max-sm:-top-96"/>
        <Image
          src="/calculator.svg"
          alt="hero"
          width={220}
          height={220}
          className="absolute top-1/2  -mt-8 border -left-8 max-sm:relative max-sm:mx-auto"
        />
      </div>
    </div>
  );
};
export default Hero;
