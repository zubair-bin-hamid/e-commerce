import Image from "next/image";
import arrowprev from "/public/Assets/left-arrow.png";
import arrowpnex from "/public/Assets/right-arrow.png";

function SliderBtn(props: any) {
  const CounterI = () => {
    props.sliderclick?.current?.slickNext();
  };

  const CounterD = () => {
    props.sliderclick?.current?.slickPrev();
  };

  return (
    <>
      <div
        className="relative w-[50px] h-[50px] bg-primary rounded-full cursor-pointer"
        onClick={() => CounterD()}
      >
        <Image
          className="object-contain absolute top-0 bottom-0 left-0 right-0 m-auto w-[50%] h-[50%"
          alt="arrow prev"
          src={arrowprev}
          width={30}
          height={30}
        />
      </div>
      <div
        className="relative w-[50px] h-[50px] bg-primary rounded-full cursor-pointer"
        onClick={() => CounterI()}
      >
        <Image
          className="object-contain absolute top-0 bottom-0 left-0 right-0 m-auto w-[50%] h-[50%"
          alt="arrow next"
          src={arrowpnex}
          width={30}
          height={30}
        />
      </div>
    </>
  );
}

export default SliderBtn;
