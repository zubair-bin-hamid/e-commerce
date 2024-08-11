import Image from "next/image";

function Testimonials() {
  const imgs = [
    { id: 1, imgurl: "/Assets/logo1.png" },
    { id: 2, imgurl: "/Assets/logo2.png" },
    { id: 3, imgurl: "/Assets/logo3.png" },
    { id: 4, imgurl: "/Assets/logo4.png" },
    { id: 5, imgurl: "/Assets/logo5.png" },
    { id: 6, imgurl: "/Assets/logo6.png" },
  ];
  return (
    <div className="max-w-[1280px] w-[90%] overflow-hidden text-main-text-color flex-1 flex  justify-between items-center py-36 overflow-x-scroll scrollbar-custom">
      {imgs.map(({id,imgurl}) => {
        return (
          <div className="w-min p-6 flex justify-center items-center" key={id}>
            <div className="relative  md:min-w-[138px] min-w-[78px] md:min-h-[83px] min-h-[44px]   w-full h-full">
              <Image
                fill
                className="object-contain"
                alt="call"
                priority
                src={imgurl}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
