import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";
import spiceImg from "../assets/spice_auction.png";
import { Link } from "react-scroll";


const SpiceAppOverview = forwardRef((props, ref) => {
  // iOS click handler
  const handleIosClick = () => {
    alert("iOS App coming soon!"); // simple popup
  };

  // Android click handler
  const handleAndroidClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.itcpc.project",
      "_blank"
    );
  };

  return (
    <section 
      id="auctions"
      ref={ref}
      // COLOR CHANGE: Switched to a light, clean green background
      className="py-24 w-full bg-lime-50 text-emerald-950" 
    >
      <div className="mx-auto px-4 sm:px-10 lg:px-20 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span 
            // COLOR CHANGE: Darkened subtitle tag for contrast
            className="text-emerald-700 uppercase tracking-widest font-semibold text-sm block mb-2"
          >
            Digital Marketplace
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
            Smart Spice Auction App
          </h2>
          <p 
            // COLOR CHANGE: Used dark, softer text color
            className="text-stone-600 text-lg md:text-xl leading-relaxed"
          >
            Empowering farmers and traders through a secure, transparent, and
            digital cardamom auction ecosystem built for the future.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          
          {/* Left Image (Digital Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center order-2 md:order-1"
          >
            <img
              src={spiceImg}
              alt="Spice App Overview Screen"
              // The shadow needs adjustment for a light background
              className="w-full max-w-md h-auto " 
            />
          </motion.div>

          {/* Right Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <p 
              // COLOR CHANGE: Used dark, softer text color
              className="text-stone-700 text-lg md:text-xl leading-relaxed mb-8"
            >
              The Spice Auction Smart Management System is the core digital
              platform for IMCPC. It streamlines the entire process, from CSV-based 
              data uploads and secure, OTP-based mobile authentication for 
              planters and administrators, to efficient auction data management. 
              Gain direct, real-time access to the market wherever you are.
            </p>

            {/* Download Buttons */}
            <div className="flex  gap-4">
              
              {/* Android (Primary Action - Highlighted) */}
              <motion.button
                onClick={handleAndroidClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // COLOR CHANGE: Darkened primary button color for contrast
                className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-3 rounded-xl font-bold shadow-xl hover:bg-emerald-800 transition-colors"
              >
                <FaAndroid className="text-2xl" />
                <span>Download on Android</span>
              </motion.button>

              {/* iOS (Secondary Action - Outline/Ghost) */}
              <motion.button
                onClick={handleIosClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // COLOR CHANGE: Used dark emerald for outline and text
                className="flex items-center gap-2 bg-transparent border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <FaApple className="text-2xl" />
                <span>iOS App (Coming Soon)</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SpiceAppOverview;