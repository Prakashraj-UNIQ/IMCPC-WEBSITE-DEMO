import React, { useState } from 'react';
import { 
  Scale, 
  Filter, 
  Eye, 
  PackageCheck, 
  Sun, 
  Droplets, 
  Award, 
  ChevronRight, 
  Leaf,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

/**
 * CardamomGrading Component
 * * Represents the grading section for IMCPC (Idukki Mass Cardamom Producer Company).
 * Focuses on the precision of size-based grading (mm) which is the industry standard in Kerala.
 */

const CardamomGrading = () => {
  const [activeGrade, setActiveGrade] = useState('8mm');

  // Data for the different grades of Cardamom
  const grades = {
    '8mm': {
      title: "Super Bold (8mm+)",
      label: "Export Premium",
      description: "The highest quality 'Champagne' of cardamom. Grown in the high ranges of Idukki, these pods are hand-selected for their massive size and intense oil content.",
      specs: [
        "Diameter: > 8.0 mm",
        "Weight: > 450g / liter",
        "Color: Deep Emerald Green",
        "Usage: Middle East Export, Luxury Confectionery"
      ],
      color: "bg-emerald-900"
    },
    '7mm': {
      title: "Bold (7mm - 8mm)",
      label: "Market Standard",
      description: "The gold standard for Indian households and premium masala blends. Offers the perfect balance of aroma and size.",
      specs: [
        "Diameter: 7.0 mm - 7.9 mm",
        "Weight: ~ 435g / liter",
        "Color: Mature Green",
        "Usage: Domestic Premium, Gift Packs"
      ],
      color: "bg-emerald-700"
    },
    '6mm': {
      title: "Superior (6mm - 7mm)",
      label: "Commercial Grade",
      description: "Compact pods packed with flavor. Ideal for grinding, industrial use, and daily culinary applications.",
      specs: [
        "Diameter: 6.0 mm - 6.9 mm",
        "Weight: ~ 385g / liter",
        "Color: Pale to Mixed Green",
        "Usage: Spice Powders, Tea Blends, Oil Extraction"
      ]
    }
  };

  // Process steps data
  const processSteps = [
    {
      icon: Droplets,
      title: "1. Washing & Curing",
      desc: "Fresh harvested pods from Idukki hills are washed in alkaline water to retain green color and cured at 45-50°C for 18 hours."
    },
    {
      icon: Filter,
      title: "2. Dusting & Cleaning",
      desc: "Removal of dust, stalks, and foreign particles using vibratory cleaning machines and coir mats."
    },
    {
      icon: Scale,
      title: "3. Size Grading (Sieving)",
      desc: "Pods are passed through graded meshes to separate by diameter: 6mm, 7mm, and 8mm+ categories."
    },
    {
      icon: Eye,
      title: "4. Color Sorting",
      desc: "Advanced optical sorters remove yellow, brown, or immature pods, ensuring only uniform green capsules remain."
    },
    {
      icon: PackageCheck,
      title: "5. Manual QC & Packing",
      desc: "Final hand-inspection for thrips damage before vacuum packing to lock in the 'Idukki Aroma'."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      

      {/* --- The Grading Matrix (Interactive) --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Grade Selector */}
          <div className="md:w-1/3 bg-stone-100 p-6 md:p-8 flex flex-col gap-4 border-r border-stone-200">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Select Grade Size</h3>
            <p className="text-sm text-stone-500 mb-4">Click to view specifications</p>
            
            {Object.keys(grades).map((key) => (
              <button
                key={key}
                onClick={() => setActiveGrade(key)}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  activeGrade === key 
                    ? 'bg-emerald-900 border-emerald-900 text-white shadow-lg scale-[1.02]' 
                    : 'bg-white border-stone-200 text-stone-600 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${activeGrade === key ? 'bg-emerald-700 text-white' : 'bg-stone-200 text-stone-500 group-hover:bg-emerald-200 group-hover:text-emerald-800'}
                  `}>
                    {key}
                  </div>
                  <span className="font-semibold">{grades[key].title.split(' ')[0]}</span>
                </div>
                <ChevronRight size={20} className={`transition-transform ${activeGrade === key ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>

          {/* Right: Grade Details Display */}
          <div className="md:w-2/3 p-8 md:p-12 bg-white relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-800 rounded-full">
                  {grades[activeGrade].label}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                {grades[activeGrade].title}
              </h2>
              
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                {grades[activeGrade].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {grades[activeGrade].specs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg border border-stone-100">
                    <CheckCircle2 size={20} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-stone-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="text-sm text-stone-400">
                  *Based on Alleppey Green Grading Standards
                </div>
                <button className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900 transition-colors">
                  View Pricing <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Process Flow --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">From Harvest to Home</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Our Processing Pipeline</h3>
            <p className="mt-4 text-stone-500 max-w-2xl mx-auto">
              Ensuring purity and size consistency is why IMCPC stands out. We combine traditional care with modern optical technology.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 -translate-y-1/2 z-0"></div> */}

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-2 border-emerald-100 rounded-full flex items-center justify-center shadow-sm mb-6 transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:scale-110 bg-emerald-50">
                    <step.icon size={32} className="text-emerald-700" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CardamomGrading;