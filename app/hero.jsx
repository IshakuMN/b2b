import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex mx-auto my-8 border max-w-4xl">
      {" "}
      <div className="">
        {" "}
        <div className="text-3xl font-bold border my-8 py-4">
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
        <div class="flex flex-col   border my-8 py-4">
          <h1 class="text-xl font-bold mb-2">
            УМЕНЬШАЙТЕ{" "}
            <div className="flex gap-2">
              <h1>НДС НА</h1> <h1 className="text-customBlue">85%</h1>
            </div>
          </h1>
          <p class="text-gray-700">
            получая отложенные вычеты{" "}
            <p className="text-customBlue">крупного бизнеса</p>
          </p>
          <p class="flex gap-4 text-sm items-baseline mt-8 text-stone-500 font-light">
            <Image src="/hammer.svg" alt="logo" width={34} height={34} />{" "}
            ЗАКОННАЯ ОПТИМИЗАЦИЯ
          </p>
          <p class="text-sm text-stone-500 mt-2">*согласно Главе 21 НК РФ</p>
        </div>
      </div>
      <div className="relative">
        <Image src="/4rombus.svg" alt="hero" width={500} height={500} />
        <Image
          src="/calculator.svg"
          alt="hero"
          width={220}
          height={220}
          className="absolute top-1/2  -mt-8 border -left-8"
        />
      </div>
    </div>
  );
};
export default Hero;
