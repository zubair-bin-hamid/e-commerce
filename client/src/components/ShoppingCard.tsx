import Image from "next/image";

type props = {
  imgurl: string;
  title: string;
  price: string;
};

function ShoppingCard({ imgurl, price, title }: props) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="relative w-[270px] h-[370px] ">
        <Image
          fill
          className="w-full h-full object-cover"
          alt={`product ${title}`}
          priority
          src={`http://localhost:5000${imgurl}`}
        />
      </div>
      <h3 className="text-main-text-color font-semibold capitalize text-h3 pt-8"> {title} </h3>
      <p className="text-text-color text-normal"> ${price} </p>
    </div>
  );
}

export default ShoppingCard;
