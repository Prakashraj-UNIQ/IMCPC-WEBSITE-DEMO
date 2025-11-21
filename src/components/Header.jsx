import React from "react";
import { Link } from "react-router-dom";
import gif from "../assets/bg_gif.mp4"



export default function Home() {
  return (
    <div>
      {/* Hero Section With Background Video */}
      <section
        id="home"
        className="relative w-full flex items-center justify-start 
                   h-[300px] sm:h-[400px] md:h-[500px] lg:h-[565px] 
                   overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={gif} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Section */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 text-left max-w-2xl">
          <h1 className="px-3 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
            Empowering Traditional Spice Growers of Idukki
          </h1>

          <p className="mt-3 px-3 text-sm sm:text-base md:text-lg text-white">
            We connect smallholder producers to fair markets and preserve
            traditional farming practices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center px-3 sm:items-start gap-3 sm:gap-5 mt-5">
            <Link
              to=""
              className="px-3 py-2 bg-lime-500 
                         text-white rounded hover:bg-transparent border border-lime-500
                         transition-all duration-300 text-center w-full sm:w-auto"
            >
              Explore Products
            </Link>

            <Link
              to=""
              className="px-5 py-2 text-lime-500
                         rounded bg-white hover:bg-transparent border border-white
                         transition-all duration-300 text-center w-full sm:w-auto"
            >
              Join as Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
