

import React from "react";
import { motion } from "framer-motion";
import ig from "../assets/farmer_cardamom.jpg";
import { Link } from "react-scroll";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pt-17 px-6 md:px-12 lg:px-20"
    >
      {/* Redesigned Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Who We Are
        </h1>

        <p className="mt-4 text-black text-base md:text-lg leading-relaxed">
          We are a farmer-owned producer company dedicated to strengthening the 
          traditional cardamom ecosystem of Idukki through transparency, innovation, 
          and community-driven growth.
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-16">

        {/* Left Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={ig}
            alt="Farmers in Idukki"
            className="w-full h-[470px] object-cover"
          />

          {/* Soft dark overlay for premium depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lime-600 leading-tight">
            Empowering Farmers,
            <br className="hidden md:block" />
            Preserving Traditions
          </h2>

          <p className="text-black mt-6 text-base md:text-lg leading-relaxed">
            IMCPC ( Idukki Mahila Cardamom Producer Company Limited) is built on 
            the foundation of trust, fairness, and sustainability. Our mission is 
            to support cardamom growers by providing transparent digital trading 
            systems and market access that uplifts communities.
            <br /><br />
            By bridging growers, traders, and buyers, we ensure a fair-value supply chain 
            rooted in the rich heritage of Idukki’s spice cultivation.
          </p>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#auctions"
              smooth={true}
              duration={700}
              className="mt-8 inline-block px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 transition-all duration-300"
            >
              Discover More
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-lime-200 h-5 w-full mt-27">

      </div>
    </section>
  );
}
