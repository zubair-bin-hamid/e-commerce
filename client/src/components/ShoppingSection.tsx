import Button from "./Button";
import ShoppingCard from "./ShoppingCard";

type props = {
  heading: string;
  products: {
    id: number;
    imgurl: string;
    title: string;
    price: string;
  }[];
};

function ShoppingSection({ heading,products }: props) {
  return (
    <div className="max-w-[1280px] w-[90%] overflow-hidden text-main-text-color flex-1 flex  justify-between items-center md:my-10 my-6">
      <div className="w-full">
        <div className="text-main-text-color flex md:justify-between justify-center">
          <h1 className="capitalize lg:text-h1 text-h1sm font-semibold">
            {heading}
          </h1>
          <div className="md:block hidden"> <Button btntext="show more" /> </div>
        </div>
        <div className="flex justify-between md:my-24 my-8 gap-6 overflow-x-auto scroll-smooth scrollbar-custom">
          {products.map(({ imgurl, price, title ,id}) => (
            <ShoppingCard imgurl={imgurl} price={price} title={title} key={id}/>
          ))}
        </div>
        <div className="text-main-text-color flex justify-center py-6"> <Button btntext="show more" /> </div>
      </div>
    </div>
  );
}

export default ShoppingSection;
