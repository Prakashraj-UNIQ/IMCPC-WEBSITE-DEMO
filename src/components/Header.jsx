// import React from "react";
// import { Link } from "react-router-dom";
// import gif from "../assets/bg_gif.mp4";
// import pic from '../assets/g1wallpaper.jpg';
// import { motion } from 'framer-motion';

// export default function Home() {
//   // Animation variants for the text content
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div id="home">
//       {/* Hero Section With Background Video */}
//       <section
//         // Added items-center to center content vertically
//         className="relative w-full flex items-center justify-start 
//                    h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] 
//                    overflow-hidden "
//       >
//         {/* Background Video (Subdued) */}
//         {/* The video tag is correctly commented out in the user's snippet, using the image directly. */}
//         {/* We use z-0 to ensure the media is in the back */}
//         <div className="absolute inset-0 w-full h-full z-0">
//           <img src={pic} alt="Cardamom plantation in Idukki" className="w-full h-full object-cover" />
//           {/* If you uncomment the video, ensure it's here too: */}
//           {/* <video ...> <source src={gif} type="video/mp4" /> </video> */}
//         </div>
        

//         {/* Overlay (This is critical for readability and stacking context) */}
//         {/* Using a subtle, light green gradient on the left side */}
//         <div className="absolute inset-0 bg-linear-to-r from-black-50/90 via-black-50/70 to-transparent/10 z-5"></div>

//         {/* Text Section Container (This must be z-10 or higher than the overlay/media) */}
//         <motion.div
//           // Added z-10 to ensure it's above the image and overlay (z-0 and z-5)
//           className="relative z-10 w-full max-w-7xl mx-auto" 
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//             {/* Inner Content Padding/Layout */}
//             <div className="px-6 sm:px-10 md:px-16 lg:px-20 text-left max-w-4xl">
//                 <motion.h1 
//                     variants={itemVariants} 
//                     className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-emerald-950 leading-tight drop-shadow-md"
//                 >
//                     Empowering the Spice <br />
//                     <span className="text-emerald-700">Heartland of Kerala</span>
//                 </motion.h1>

//                 <motion.p 
//                     variants={itemVariants} 
//                     className="mt-4 sm:mt-6 text-lg sm:text-xl text-white font-light max-w-xl"
//                 >
//                     We connect smallholder producers to fair digital markets, 
//                     preserving traditional Idukki farming practices and ensuring 
//                     complete transparency.
//                 </motion.p>

//                 {/* Buttons */}
//                 <motion.div 
//                     variants={itemVariants} 
//                     className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-8"
//                 >
//                     {/* Primary CTA (Filled - Dark Emerald) */}
//                     <Link
//                     to="/products"
//                     className="px-8 py-3 bg-emerald-700 text-white rounded-lg 
//                                 font-bold text-lg shadow-xl hover:bg-emerald-800 
//                                 transition-all duration-300 w-full sm:w-auto text-center"
//                     >
//                     Explore Products
//                     </Link>

//                     {/* Secondary CTA (Outline - Dark Emerald) */}
//                     <Link
//                     to="/contact"
//                     className="px-8 py-3 text-emerald-700 border-2 border-emerald-700 rounded-lg 
//                                 font-semibold text-lg hover:bg-emerald-700 hover:text-white
//                                 transition-all duration-300 w-full sm:w-auto text-center"
//                     >
//                     Join as Member
//                     </Link>
//                 </motion.div>
//             </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import gif from "../assets/bg_gif.mp4";
import pic from '../assets/g1wallpaper.jpg';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants for the text content
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="home">
      {/* Hero Section With Background Video */}
      <section
        className="relative w-full flex items-center justify-start 
                   h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] 
                   overflow-hidden"
      >

        
        

        {/* Overlay (Light Green/White Overlay for readability) */}
        {/* Using a subtle, light green gradient on the left side */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white to-transparent"></div>

        {/* Text Section (Now using dark text on the light overlay) */}
        <motion.div
          className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 text-left max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-emerald-950 leading-tight drop-shadow-md"
          >
            Empowering the Spice <br />
            <span className="text-emerald-700">Heartland of Kerala</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-4 sm:mt-6 text-lg sm:text-xl text-stone-700 font-light max-w-xl"
          >
            We connect smallholder producers to fair digital markets, 
            preserving traditional Idukki farming practices and ensuring 
            complete transparency.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-8"
          >
            {/* Primary CTA (Filled - Dark Emerald) */}
            <Link
              to="/products"
              className="px-8 py-3 bg-emerald-700 text-white rounded-lg 
                         font-bold text-lg shadow-xl hover:bg-emerald-800 
                         transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Products
            </Link>

            {/* Secondary CTA (Outline - Dark Emerald) */}
            <Link
              to="/contact"
              className="px-8 py-3 text-emerald-700 border-2 border-emerald-700 rounded-lg 
                         font-semibold text-lg hover:bg-emerald-700 hover:text-white
                         transition-all duration-300 w-full sm:w-auto text-center"
            >
              Join as Member
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}