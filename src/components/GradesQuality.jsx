import React from 'react';
import { 
  CheckCircle2, 
  Award, 
  Droplets, 
  Scale, 
  Sparkles, 
  Leaf,
  Layers
} from 'lucide-react';

/**
 * QualityGrades Component
 * A concise overview of IMCPC's grading standards and quality parameters.
 * Features a clean, split layout for easy reading.
 */

const QualityGrades = () => {
  
  const primaryGrades = [
    { name: "AGB (Alleppey Green Bold)", icon: Award },
    { name: "AGS (Alleppey Green Superior)", icon: Leaf },
    { name: "Export Premium Grade", icon: Sparkles },
    { name: "Bulk / Mix Grades", icon: Layers },
    { name: "Split & Seeds Grade", icon: Scale },
  ];

  const qualityParams = [
    "Uniform size & colour",
    "<12% moisture content",
    "Fresh aroma & flavour",
    "Clean and impurity-free",
    "Properly dried & cured"
  ];

  return (
    <div className="bg-white py-20 font-sans text-slate-800 mt-20">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-extrabold text-emerald-950 mb-6">
            Grades & Quality
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            IMCPC follows strict grading norms based on colour, size, purity, and moisture content to ensure every pod meets global standards.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Primary Grades */}
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
                <Layers size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Primary Grades</h3>
            </div>
            
            <div className="space-y-4">
              {primaryGrades.map((grade, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
                >
                  <grade.icon size={20} className="text-emerald-600 shrink-0" />
                  <span className="font-semibold text-emerald-950">{grade.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quality Parameters */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Quality Parameters</h3>
            </div>

            <ul className="space-y-5">
              {qualityParams.map((param, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{param}</span>
                </li>
              ))}
            </ul>

            {/* Visual Decoration for Moisture */}
            <div className="mt-10 p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-4 opacity-80">
              <Droplets className="text-blue-500" />
              <div className="text-sm text-slate-500">
                Strict moisture control prevents fungal growth and preserves essential oils.
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default QualityGrades;