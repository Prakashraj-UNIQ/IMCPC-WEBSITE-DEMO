import React from 'react'
import bgImg from "../assets/ela2.jpg";


export default function AboutUs ()  {
    return (
        <section
            className="relative w-full bg-cover bg-center h-150 py-16 px-4 overflow-hidden"
            style={{ backgroundImage: `url(${bgImg})` }}
        >

            {/* Blur Overlay */}
            <div className="absolute inset-0  bg-black/30"></div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center space-y-6">

                <h6
                    className="text-lg font-semibold  tracking-wide uppercase  animate-fadeInUp text-lime-400"
                    style={{ animationDelay: "300ms" }}
                >
                    Company Profile
                </h6>

                <h2
                    className="text-5xl font-extrabold animate-fadeInUp text-white"
                    style={{ animationDelay: "300ms" }}
                >
                    About Us
                </h2>

                <p
                    className="text-2xl font-semibold leading-relaxed px-30 animate-fadeInUp text-white"
                    style={{ animationDelay: "400ms" }}
                >
                    IMCPC  is a producer-owned organisation registered under the Companies Act as a Farmer Producer Company.
                    Our mission is to empower small and marginal cardamom farmers of Idukki by providing a stable and transparent marketplace, scientific grading standards, and assured value for their produce.

                </p>

                <button
                    className="inline-flex items-center space-x-2 text-lg font-bold bg-lime-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-lime-800 transition animate-fadeInUp"
                    style={{ animationDelay: "700ms" }}
                    onClick={() => window.location.href = "/products"}

                >Explore Products</button>
            </div>
        

        </section>


    )
}

