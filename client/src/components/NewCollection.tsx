import Image from "next/image";
import Button from "./Button";

function NewCollection() {
  return (
    <div className="relative w-full h-full ">
      <div>
        <div className="relative w-full h-[70vh]">
          <Image
            fill
            className="w-full h-full -z-30 object-cover"
            alt="call"
            priority
            src={"/Assets/New-Collection--img.png"}
          />
        </div>
      </div>

      {/* botton new collection */}
      <div className="absolute md:h-[200px] h-[300px] bottom-0 right-0 w-[50%] bg-white" />
      <div className="absolute  flex justify-center bottom-0 w-full md:h-[200px] h-[300px] ">
        <div className="max-w-[1280px] w-[90%] flex justify-between">
          <div className="w-[25%] hidden md:flex gap-3 items-center justify-center">
          </div>
          <div className="md:w-[75%] w-full bg-white rounded-tl-[100px] flex md:flex-row flex-col md:justify-between justify-center items-center gap-5 md:pr-20 pr-4">
            <div className="pl-12  md:w-[70%] w-full">
              <h1 className=" text-main-text-color md:text-h1 text-h1sm capitalize font-semibold pb-2">
                new collections
              </h1>
              <p className="md:text-[16px] text-normal text-text-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                excepturi ut eaque sed, vero quibusdam?
              </p>
            </div>
            <div className="text-white pl-12 md:pl-0 md:w-[30%] w-full md:text-end">
              <Button btntext="shop now" pri={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
