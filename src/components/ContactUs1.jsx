import React from "react";
import { FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import bgImg from "../assets/ela30.jpg";

export default function ContactUs (){
    return (
       <section className="relative w-full  h-130 flex items-center ">

    {/* Background (compressed + rounded) */}
<div className="absolute inset-0 flex justify-center items-center bg-white pointer-events-none">
    <div className="w-[100%] h-[100%]  overflow-hidden shadow-lg">
        <img
            src={bgImg}
            alt="background"
            className="w-full h-full object-cover"
        />
    </div>
</div>


            {/* Main Container */}
            <div className="relative max-w-xl mx-auto rounded-3xl flex flex-col 
                bg-white backdrop-blur-lg border border-white/20 
                items-center gap-6 p-6">



                {/* Heading */}
                <h2 className=" text-4xl md:text-4xl font-serif text-center text-emerald-800">
                    For Enquiries <br /> Reach out to us.
                </h2>
                {/* Contact Button */}
                <button
                    onClick={() => window.location.href = "https://masindia.com/contact/"}
                    className="bg-emerald-700 border border-emerald-800 rounded-full 
                               px-8 py-3 text-white hover:bg-emerald-900 hover:text-white 
                               transition-all duration-300 text-lg font-medium"
                >
                    Contact us now
                </button>


                {/* Phone & Email (SIDE BY SIDE) */}
<div className="flex flex-wrap justify-center items-center gap-10 text-emerald-800 text-md">

  <p className="flex items-center gap-2">
    <FaPhoneAlt className="text-emerald-800 text-xl" />
    Phone: +91 9447 070 770
  </p>

  <p className="flex items-center gap-2">
    <FaEnvelopeOpen className="text-emerald-800 text-xl" />
    Email: <a href="mailto:mail@masindia.com" className="hover:underline">
      info@imcpc.com
    </a>
  </p>

</div>


                
            </div>
        </section>
    );
};


