/* eslint-disable @next/next/no-img-element */
import React from "react"

const Hero = () => {
  return (
    <div id="hero" className="h-[50vh] mx-2 md:mx-4 lg:mx-6 xl:mx-8 xl:h-[70vh] relative after:absolute after:inset-0 after:bg-black/30">
      <img src="/hero-1.jpg" className="object-cover w-full h-full" alt="" />
      <div className="absolute z-10 mx-auto w-full flex items-start mt-8 md:mt-0 md:items-center max-w-7xl inset-0 p-3 pl-6 ">
        <div className="max-w-lg">
          <h1 className="text-6xl tracking-tighter md:text-7xl xl:text-8xl font-extrabold text-red-400 deepShadow">
            fall in <span className=" ">love</span> <br />{" "}
            <span className="text-white deepShadow">with a donut</span>
          </h1>
          <p className="text-white text-xl lg:text-2xl max-w-sm lg:max-w-md  font-medium mt-6 md:mt-4">
            Or three... checkout with $30 or more and receive 35% off instantly.
          </p>
          <div className="flex ">
            <button className="bg-red-400 px-8 py-4 rounded-full text-white uppercase mt-8  font-extrabold tracking-wide scale-95 md:scale-100 xl:scale-110 transition-opacity hover:bg-opacity-75 duration-150">
              shop sweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
