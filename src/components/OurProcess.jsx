


import React from "react";
import { Zap, Handshake, DollarSign, UserCheck } from "lucide-react"; 
import { motion } from "framer-motion";
// Keep original imports for asset paths, though they aren't directly used in the current card style
// import farmer from '../assets/farmer_registration1.jpg'; 
// import quantity from '../assets/quantity_assessment1.jpg';
// import digital from '../assets/digital_auction1.jpg';
// import settlement from '../assets/transparent_settlement.png';

// Define the steps and icons
const processSteps = [
  { 
    id: 1, 
    title: "Farmer Registration", 
    text: "Verified onboarding of local producers and digital ledger creation to ensure traceability.", 
    icon: UserCheck 
  },
  { 
    id: 2, 
    title: "Quality Assessment", 
    text: "Cardamom batches are professionally graded and documented in the system for transparent auction details.", 
    icon: Zap 
  },
  { 
    id: 3, 
    title: "Digital Auction", 
    text: "Real-time online bidding provides a competitive environment, ensuring farmers receive fair market value.", 
    icon: Handshake 
  },
  { 
    id: 4, 
    title: "Transparent Settlement", 
    text: "Instant digital payment settlements are executed directly, bringing immediate financial security to the farmer.", 
    icon: DollarSign 
  },
];

// Animation variants for step cards (kept the same)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function OurProcess() {
  return (
    <section className="bg-stone-50 py-24 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start max-w-7xl mx-auto">

        {/* LEFT TEXT (Sticky) */}
        <div className="text-left lg:sticky lg:top-24">
          <span className="text-emerald-700 uppercase tracking-widest font-semibold text-sm block">
            The Digital Supply Chain
          </span>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-950 mt-3 mb-6">
            Our Transparent Process
          </h2>

          <p className="text-stone-600 max-w-xl text-base md:text-lg leading-relaxed">
            Our approach blends proven agricultural expertise with next-generation digital technology. 
            From seamless farmer onboarding to secure digital bidding, every process is streamlined for accountability.
            Online bidding ensures open, competitive, and corruption-free transactions, while fast, transparent digital payments bring trust and financial security to every stakeholder.
          </p>
        </div>

        {/* RIGHT CARDS (Process Steps) */}
        <div className="relative space-y-12 pl-6 md:pl-8 lg:pl-10">
            {/* Vertical Flow Line */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-200/50 rounded-full hidden sm:block" /> */}

            {processSteps.map((card, index) => {
                const Icon = card.icon;
                return (
                    <motion.div
                        key={card.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        className="group relative" // Make relative for line connection
                    >
                        {/* Circle Connector for flow line (Visible on SM+) */}
                        {/* <div className="absolute -left-[30px] top-0 h-full w-6 hidden sm:flex justify-center items-start">
                            <div className="w-5 h-5 bg-emerald-700 rounded-full transition-transform duration-300 group-hover:scale-125" />
                        </div> */}
                        
                        {/* Card Content */}
                        <div className="p-6 bg-white rounded-xl shadow-lg border border-stone-100 transition-all duration-300 hover:shadow-2xl hover:border-emerald-300">
                            <div className="flex items-start gap-4 mb-3">
                                {/* Step Number Badge */}
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex justify-center items-center text-white font-bold text-lg shadow-md">
                                    {card.id}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl md:text-2xl font-bold text-emerald-950 mt-0 mb-1">
                                        {card.title}
                                    </h4>
                                </div>
                            </div>
                            <p className="text-stone-600 leading-relaxed pl-14">
                                {card.text}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
}