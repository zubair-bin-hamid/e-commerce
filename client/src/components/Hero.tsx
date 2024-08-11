"use client";
import React, { useEffect, useState } from "react";
import SliderBtn from "./SliderButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import Button from "./MyButton";
import axios from "axios";
import { ErrorType } from "@/app/page";

function Hero() {
  const [banners, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/banner");
        setBanner(response.data); // Set the data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err as ErrorType); // Set error if there's an issue
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchRecommendedProducts(); // Call the fetch function
  }, []);

  const slider = React.useRef(null);
  let [curr, setcurr] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // touchMove: false,
    afterChange: (current: number) => setcurr(current),
  };
  return (
    <div className="relative w-full h-full ">
      <Slider className="w-full h-screen " ref={slider} {...settings}>
        {loading || error ? (
          <div className="relative w-full h-screen">
            <div className="h-full  w-full flex flex-col justify-center items-center">
              <div className="max-w-[1280px] w-[90%] flex flex-col justify-center gap-5 text-white fill-white uppercase">
                <div className="md:text-[20px] text-[18px] font-semibold">
                  sale
                </div>
                <div className="md:text-[50px] text-[30px] max-w-[500px] pb-6">
                  stocktake sale upto 75% off
                </div>
                <Button btntext="shop now" url="#" />
              </div>
            </div>
            <Image
              fill
              className="w-full h-full -z-30 object-cover"
              alt="call"
              priority
              src={"/Assets/Slider-img.png"}
            />
            <div className="md:hidden absolute inset-0 bg-black opacity-50 -z-20"></div>
          </div>
        ) : (
          banners.map(({ heading, id, slide, subheading }) => (
            <div className="relative w-full h-screen" key={id}>
              <div className="h-full  w-full flex flex-col justify-center items-center">
                <div className="max-w-[1280px] w-[90%] flex flex-col justify-center gap-5 text-white fill-white uppercase">
                  <div className="md:text-[20px] text-[18px] font-semibold">
                    {" "}
                    {subheading}{" "}
                  </div>
                  <div className="md:text-[50px] text-[30px] max-w-[500px] pb-6">
                    {heading}
                  </div>
                  <Button btntext="shop now" url="#" />
                </div>
              </div>
              <Image
                fill
                className="w-full h-full -z-30 object-cover"
                priority
                src={`http://localhost:5000${slide}`}
                alt="Slide"
              />
              <div className="md:hidden absolute inset-0 bg-black opacity-50 -z-20"></div>
            </div>
          ))
        )}
      </Slider>

      {/* hero bottom section */}
      <div className="absolute h-[150px] bottom-0 left-0 w-[50%] bg-white" />
      <div className="absolute  flex justify-center bottom-0 w-full h-[150px] ">
        <div className="max-w-[1280px] w-[90%] flex justify-between">
          <div className="w-[80%] bg-white rounded-tr-[50px] flex justify-between items-center gap-5 md:pr-20 pr-4">
            <div>
              <h3 className=" text-main-text-color font-bold pb-2">
                Free Shipping
              </h3>
              <p className="text-normal text-text-color">
                Fat new smallness few supposing
              </p>
            </div>
            <div className="hidden md:block">
              <h3 className=" text-main-text-color font-bold pb-2">
                99% Satisfied Customer
              </h3>
              <p className="text-normal text-text-color">
                Fat new smallness few supposing
              </p>
            </div>
            <div className="hidden md:block">
              <h3 className=" text-main-text-color font-bold pb-2">
                Originality Guaranteed
              </h3>
              <p className="text-normal text-text-color">
                Fat new smallness few supposing
              </p>
            </div>
          </div>
          <div className="w-[20%] hidden md:flex gap-3 items-center justify-end">
            <SliderBtn sliderclick={slider} curr={curr} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
