import React from "react";
import { useState } from "react";

const Banner = () => {
  const [join, setJoin] = useState(false);
  return (
    <div>
      <div className="relative">
        <div className="brightness-50">
          <img
            src="dashboard-pic.png"
            alt="pic of pc"
            className="max-h-80 w-full object-cover lg:hidden"
          />
          <img
            src="banner-big.png"
            alt="pic of pc"
            className="hidden max-h-[60vh] w-full object-cover lg:block"
          />
        </div>
        <div className="absolute top-5 flex w-full items-center justify-between">
          <div className="ml-5 lg:hidden">
            <img src="back-arrow.svg" alt="" width={22} />
          </div>
          {join ? (
            <button
              onClick={() => {
                setJoin(false);
              }}
              className="mr-5 rounded-md border-2 border-white px-2 py-2 font-semibold text-white lg:hidden"
            >
              Leave Group
            </button>
          ) : (
            <button
              onClick={() => {
                setJoin(true);
              }}
              className="mr-5 rounded-md border-2 border-white px-2 py-2 font-semibold text-white lg:hidden"
            >
              Join Group
            </button>
          )}
        </div>
        <div className="absolute bottom-8 left-4 text-white md:left-14 lg:left-20 lg:bottom-16 xl:left-28 2xl:left-60 3xl:left-96">
          <p className="text-xl font-bold md:text-2xl lg:text-4xl xl:mb-3 xl:text-5xl">
            Computer Engineering
          </p>
          <p className="mt-[2px] md:text-lg xl:text-xl">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
