import React from "react";
import visionImg from "../assets/image.png";
import missionImg from "../assets/ela32.webp";

export default function VisionMissionSection () {
  return (
    <section className="w-full py-16 px-20 bg-lime-200">
      <h2 className="text-5xl font-extrabold text-lime-800 text-center mb-12">
        Vision & Mission
      </h2>
      <div className="mx-auto space-y-20">

        {/* VISION → Left Image, Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <img
            src={visionImg}
            alt="Vision"
            className="w-full rounded-xl object-cover h-96 transition-transform duration-300 hover:scale-105"
          />
          {/* Right Content */}
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-4xl font-bold text-lime-700">Vision</h2>
            <p className="text-lg text-gray-700">
              To become Kerala's most reliable and farmer-centric cardamom producer company, promoting traditional cultivation practices and ensuring global recognition for Idukki’s premium cardamom.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                Become Kerala's most reliable cardamom producer company
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                Focus on farmer-centric cultivation practices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                Promote traditional and sustainable farming methods
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                Ensure consistent quality of Idukki’s premium cardamom
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                Achieve global recognition for Idukki cardamom
              </li>
            </ul>
            
          </div>
        </div>

        {/* MISSION → Left Content, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-6 order-2 md:order-1">
            <h2 className="text-4xl font-bold text-lime-700">Mission</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To provide a transparent and efficient auction platform
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To ensure fair and competitive pricing for all growers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To promote scientific grading, packaging, and traceability
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To strengthen traditional and sustainable farming methods
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To create direct market access for farmers, traders, and exporters
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To deliver uncompromising quality to domestic and international buyers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lime-700 font-bold text-xl">–</span>
                To empower rural communities through collective growth
              </li>
            </ul>
            
          </div>
          {/* Right Image */}
          <img
            src={missionImg}
            alt="Mission"
            className="w-full rounded-xl object-cover h-96 order-1 md:order-2 transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};


