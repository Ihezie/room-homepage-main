import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";

import { useState, useEffect } from "react";

import sliderData from "../data";

const Slider = () => {
  const [deviceType, setDeviceType] = useState("");
  const [heroDataIndex, setHeroDataIndex] = useState(0);

  const toggleImageType = () => {
    if (innerWidth <= 450) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  };
  useEffect(() => {
    toggleImageType();
    window.addEventListener("resize", toggleImageType);
    return () => {
      window.removeEventListener("resize", toggleImageType);
    };
  }, []);

  const prev = () => {
    if (heroDataIndex === 0) {
      const index = sliderData.length - 1;
      setHeroDataIndex(index);
    } else {
      setHeroDataIndex(heroDataIndex - 1);
    }
  };
  const next = () => {
    if (heroDataIndex >= sliderData.length - 1) {
      setHeroDataIndex(0);
    } else {
      setHeroDataIndex(heroDataIndex + 1);
    }
  };

  const keyboardFunc = (e) => {
    if (e.key === "ArrowRight") {
      next();
    } else if (e.key === "ArrowLeft") {
      prev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardFunc);
    return () => {
      window.removeEventListener("keydown", keyboardFunc);
    };
  }, [heroDataIndex]);

  return (
    <section className="lg:flex lg:items-center">
      <div className="relative lg:w-3/5">
        <img
          src={sliderData[heroDataIndex].images[deviceType]}
          className="w-full object-cover"
          alt="hero"
        />
        <div className="absolute flex bottom-0 right-0 h-16 w-36 lg:translate-x-full">
          <button
            type="button"
            className="bg-black h-full w-1/2 flex justify-center items-center hover:bg-veryDarkGray cursor-pointer"
            onClick={prev}
          >
            <img src={angleLeft} alt="angle-left" />
          </button>
          <button
            type="button"
            className="bg-black h-full w-1/2 flex justify-center items-center hover:bg-veryDarkGray"
            onClick={next}
          >
            <img src={angleRight} alt="angle-right" />
          </button>
        </div>
      </div>

      <div className="pl-9 pr-5 py-14 lg:w-2/5 lg:py-0 lg:px-12 xl:px-24">
        <article className="">
          <h1 className="text-[2.2rem]/10 font-bold mb-4 lg:max-xl:text-[1.8rem]/8">
            {sliderData[heroDataIndex].heading}
          </h1>
          <p className="text-darkGray mb-5">{sliderData[heroDataIndex].text}</p>
          <p className="flex items-baseline gap-6 cursor-pointer group w-max lg:mb-10">
            <a
              href="#"
              className="uppercase tracking-[10px] font-bold group-hover:opacity-25"
            >
              shop now
            </a>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="currentColor"
                fillRule="nonzero"
                className="group-hover:opacity-25"
              />
            </svg>
          </p>
        </article>
      </div>
    </section>
  );
};
export default Slider;
