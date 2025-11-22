// import React, { useState } from 'react';
// import { 
//   Scale, 
//   Filter, 
//   Eye, 
//   PackageCheck, 
//   Sun, 
//   Droplets, 
//   Award, 
//   ChevronRight, 
//   Leaf,
//   ArrowRight,
//   CheckCircle2
// } from 'lucide-react';

// export default function Banner  () {
//   return (
//     <div>
//               {/* --- Hero / Intro Section --- */}
//       <section className="relative py-20 overflow-hidden bg-emerald-900 text-white">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute right-0 top-0 p-12 transform translate-x-1/3 -translate-y-1/3">
//             <Leaf size={400} strokeWidth={0.5} />
//           </div>
//           <div className="absolute left-0 bottom-0 p-12 transform -translate-x-1/3 translate-y-1/3">
//             <Leaf size={300} strokeWidth={0.5} />
//           </div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-200 text-sm font-medium mb-6">
//             <Award size={16} />
//             <span>Idukki Mass Cardamom Producer Company</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
//             Precision Grading: <br />
//             <span className="text-emerald-400">The Heart of Our Business</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 leading-relaxed">
//             At IMCPC, we don't just sell spices; we curate experiences. Our stringent, multi-stage grading process ensures that every pod leaving the High Ranges meets global export standards.
//           </p>
//         </div>
//       </section>
//     </div>
//   )
// }


import React from 'react';
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

// Use props for dynamic content
export default function Banner ({ eyebrowText, title, description, badgeIcon: BadgeIcon = Award }) {
  // Note: BadgeIcon is capitalized and used as a component later.
  // Award is a default icon if none is provided.
  return (
    <div>
      {/* --- Hero / Intro Section --- */}
      <section className="relative py-20 overflow-hidden bg-emerald-900 text-white">
        {/* Background Pattern (Static) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 p-12 transform translate-x-1/3 -translate-y-1/3">
            <Leaf size={400} strokeWidth={0.5} />
          </div>
          <div className="absolute left-0 bottom-0 p-12 transform -translate-x-1/3 translate-y-1/3">
            <Leaf size={300} strokeWidth={0.5} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Dynamic Eyebrow Text and Icon */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-200 text-sm font-medium mb-6">
            <BadgeIcon size={16} /> 
            <span>{eyebrowText}</span> {/* <-- Uses prop */}
          </div>
          
          {/* Dynamic Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {title} {/* <-- Uses prop */}
          </h1>
          
          {/* Dynamic Description */}
          <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 leading-relaxed">
            {description} {/* <-- Uses prop */}
          </p>
        </div>
      </section>
    </div>
  )
}