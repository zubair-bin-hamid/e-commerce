import { title } from "process";
import ShoppingCard from "./ShoppingCard";
import Image from "next/image";

type props = {
  imgurl: string;
  title: string;
  subtitle: string;
};

function ChooseUs() {
  let products = [
    {
      id: 1,
      imgurl: "/Assets/truck.png",
      subtitle: "Fat new smallness few supposing",
      title: "free shipping",
    },
    {
      id: 2,
      imgurl: "/Assets/pay.png",
      subtitle: "Fat new smallness few supposing",
      title: "easy payments",
    },
    {
      id: 3,
      imgurl: "/Assets/shield.png",
      subtitle: "Fat new smallness few supposing",
      title: "money back guarantee",
    },
    {
      id: 4,
      imgurl: "/Assets/quality.png",
      subtitle: "Fat new smallness few supposing",
      title: "finest quality",
    },
  ];
  return (
    <div className="max-w-[1280px] w-[90%] overflow-hidden text-main-text-color flex-1 flex  justify-between items-center ">
      <div className="w-full">
        <div className="text-main-text-color flex justify-between">
          <h1 className="w-full capitalize text-center lg:text-h1 text-h1sm font-semibold">
            why should choose us?
          </h1>
        </div>
        <div className="flex flex-wrap justify-between md:my-24 my-16  md:gap-6 gap-3">
          {products.map(({ imgurl, subtitle, id, title }) => (
            <ChooseCard
              title={title}
              imgurl={imgurl}
              subtitle={subtitle}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

function ChooseCard({ imgurl, subtitle, title }: props) {
  return (
    <div className="flex flex-col md:justify-start md:items-start justify-center items-center  gap-1 max-w-[150px] md:text-start text-center">
      <div className="bg-[#EEEEEE] w-min p-6 rounded-lg flex justify-center items-center border-4 border-b-primary">
        <div className="relative  w-[30px] h-[36px] ">
          <Image
            fill
            className="object-contain"
            alt="call"
            priority
            src={imgurl}
          />
        </div>
      </div>
      <h3 className="text-main-text-color font-semibold capitalize md:text-h3 text-h3sm md:pt-8 pt-4">
        {title}
      </h3>
      <p className="text-text-color text-normal"> ${subtitle} </p>
    </div>
  );
}
