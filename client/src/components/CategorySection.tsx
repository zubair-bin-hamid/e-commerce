import Image from "next/image";
import Button from "./MyButton";

function CategorySection() {
  return (
    <div className="max-w-[1280px] w-[90%] overflow-hidden text-main-text-color flex-1 flex sm:flex-row flex-col justify-between items-center gap-8 md:my-32 my-24">
      <div className="relative w-full h-full flex-1">
        <div className="absolute z-10 h-full w-full flex flex-col  justify-center items-end pr-6">
          <div className="w-[55%] ">
            <div className="lg:text-h1 text-h1sm  font-semibold max-w-[500px] pb-6">
              Men&apos;s Casual Fashion Style
            </div>
            <div className=" ">
              {" "}
              <Button btntext="view all" url="#" />{" "}
            </div>
          </div>
        </div>
        <Image
          width={570}
          height={370}
          className="w-full h-full -z-20 md:aspect-auto aspect-square object-cover"
          alt="call"
          priority
          src={"/Assets/men-coll.png"}
        />
      </div>
      <div className="relative w-full h-full flex-1">
        <div className="absolute z-10 h-full w-full flex flex-col  justify-center ml-16">
          <div className="w-[55%] ">
            <div className="lg:text-[34px] text-[26px]  font-semibold max-w-[500px] pb-6">
              Women&apos;s Casual Fashion Style
            </div>
            <div className=" ">
              {" "}
              <Button btntext="view all" url="#" />{" "}
            </div>
          </div>
        </div>
        <Image
          width={570}
          height={370}
          className="w-full h-full -z-20 md:aspect-auto aspect-square object-cover"
          alt="call"
          priority
          src={"/Assets/women-coll.png"}
        />
      </div>
    </div>
  );
}

export default CategorySection;
