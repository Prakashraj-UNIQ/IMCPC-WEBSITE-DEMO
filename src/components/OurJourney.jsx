import React from "react";
import journeyImg from "../assets/ela29.jpg";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";



export default function OurJourney (){
    return (
        <section className="w-full py-16 px-20 bg-white">
            <div className=" mx-auto space-y-5">

                {/* Heading */}


                {/* IMAGE under the heading */}
                <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: "200ms" }}>
                    <img
                        src={journeyImg}
                        alt="Our Journey"
                        className="w-full  rounded-lg h-100 object-cover"
                    />
                </div>

                <h2
                    className="text-4xl mt-15 font-bold text-center  text-lime-700 "

                >
                    Our Journey
                </h2>


                {/* Paragraphs in 2 columns BELOW the image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

                    {/* LEFT SIDE → 1st Paragraph */}
                    <p
                        className="text-lg leading-relaxed mt-6 md:mt-10 animate-fadeInUp"
                        style={{ animationDelay: "400ms" }}
                    >
                        <strong>Our Operations : </strong>

                        Reflect a high level of professionalism and fairness, built on years of experience within the cardamom ecosystem.
                        With a deep understanding of cultivation practices, market dynamics, and auction processes, we ensure transparency and trust at every stage.
                        This commitment has strengthened our relationships with growers, traders, and customers, helping us maintain quality and integrity across all our activities.
                        <br /><br />
                        <strong>Key Highlights:</strong><br />

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700 text-xl" />
                            Deep expertise in cultivation and processing
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700 text-xl" />
                            Transparent and fair auction practices
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700 text-xl" />
                            Strong relations with growers & traders
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700 text-xl" />
                            Commitment to quality and integrity
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700 text-xl" />
                            Trust-driven operations across all stages
                        </span>
                    </p>


                    {/* RIGHT SIDE → 2nd Paragraph (slightly lower) */}
                    <p
                        className="text-lg leading-relaxed mt-6 md:mt-10 animate-fadeInUp"
                        style={{ animationDelay: "400ms" }}
                    >
                        <strong>Our Foundation : </strong>

                        Idukki district is India’s biggest cardamom-producing region, known for its ideal climate, fertile soil,
                        and superior-quality cardamom. IMCPC was formed to unite these growers under one strong, organised, and
                        efficient producer-driven system. Over the years, this collective strength has empowered farmers with
                        better market access and fair pricing.
                        <br /><br />

                        <strong>We continue to uphold the values of:</strong><br />

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700" /> Trust
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700" /> Transparency
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700" /> Farmer Welfare
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700" /> Quality Excellence
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheckCircle className="text-lime-700" /> Ethical Business Practices
                        </span>
                    </p>


                </div>

            </div>
        </section>
    );
};


