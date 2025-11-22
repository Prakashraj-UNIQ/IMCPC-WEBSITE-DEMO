import React from "react";
import { motion } from "framer-motion";
// import ig from "../assets/farmer_cardamom.jpg";
import { Link } from "react-scroll";
import { Handshake } from "lucide-react"; // Importing an elegant icon

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-50 py-24 px-6 md:px-12 lg:px-20"
    >
      {/* Redesigned Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="text-emerald-700 font-medium tracking-widest text-sm uppercase mb-2 block">
          Our Foundation
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-emerald-950 tracking-tight">
          Who We Are
        </h1>

        <p className="mt-5 text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We are a farmer-owned producer company dedicated to strengthening the traditional 
          cardamom ecosystem of Idukki through transparency, innovation, and community-driven growth.
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-20">

        {/* Left Image */}
        <motion.div
          className="relative rounded-[2rem] overflow-hidden shadow-2xl lg:order-1 "
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <img
            src={ig}
            alt="Cardamom farmers in Idukki"
            className="w-full h-[470px] object-cover transition-transform duration-500 hover:scale-[1.03]"
          /> */}

          {/* Elegant Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-left lg:order-2 p-4"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-950 leading-tight">
            Empowering Farmers, Preserving Traditions
          </h2>

          <p className="text-stone-600 mt-6 text-base md:text-lg leading-relaxed">
            IMCPC (Idukki Mahila Cardamom Producer Company Limited) is built on 
            the foundation of trust, fairness, and sustainability. Our mission is 
            to support cardamom growers by providing transparent digital trading 
            systems and market access that uplifts their communities.
            <br /><br />
            By bridging growers, traders, and international buyers, we ensure a fair-value 
            supply chain rooted in the rich heritage of Idukki’s spice cultivation.
          </p>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* Using Link for smooth scroll, adjusted styling */}
            <Link
              to="auctions" // Assuming the auctions section is below
              smooth={true}
              duration={900}
              className="mt-10 inline-flex items-center gap-3 px-8 py-3 bg-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-900 transition-all duration-300 cursor-pointer"
            >
              <Handshake className="w-5 h-5" />
              Join Our Community
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Removed the distracting lime bar */}
    </section>
  );
}