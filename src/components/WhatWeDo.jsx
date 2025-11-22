import React from "react";
import { FaBalanceScale, FaBoxOpen, FaChartLine, FaChalkboardTeacher, FaHandshake, FaWarehouse, FaSeedling } from "react-icons/fa";

export default function WhatWeDo() {
  const points = [
    { text: "Conduct regulated and transparent cardamom auctions", icon: FaBalanceScale },
    { text: "Offer quality grading, sorting, and packaging", icon: FaBoxOpen },
    { text: "Provide accurate market information to growers & traders", icon: FaChartLine },
    { text: "Support farmers through training, workshops & advisory services", icon: FaChalkboardTeacher },
    { text: "Facilitate direct linkages with traders, exporters & corporates", icon: FaHandshake },
    { text: "Maintain state-of-the-art auction and storage facilities", icon: FaWarehouse },
    { text: "Promote sustainable and traditional farming practices", icon: FaSeedling },
  ];

  return (
    <section className="w-full py-20 px-1 bg-emerald-50">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-emerald-950 mb-12">
        What We Do
      </h2>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl border-2 border-emerald-300 p-6 flex items-center gap-4 
                         hover:bg-emerald-700 hover:shadow-2xl transition duration-300"
            >
              {/* Icon */}
              <IconComponent className="w-10 h-10 text-stone-700 group-hover:text-white transition-colors duration-300" />
              {/* Text */}
              <p className="text-lg font-semibold text-stone-700 group-hover:text-white transition-colors duration-300">
                {point.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};


