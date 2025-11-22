import React from "react";
import { ArrowRight } from "lucide-react"; 
import cardamomPremium from "../assets/cardamom_premium.jpg"; // Assuming these paths are correct
import cardamomDeluxe from "../assets/caradom_deluxe.jpg";
import cardamomOrganic from "../assets/caradom_organic.png";

export default function FeatureProduct() {
  const products = [
    {
      id: "cardamom-1",
      name: "Royal Premium",
      tagline: "The Aromatic Classic",
      summary: "Sourced from the high-ranges of Idukki, offering a balanced aroma perfect for culinary mastery.",
      grades: ["Grade A", "Grade B"],
      image: cardamomPremium,
      price: "$$$",
    },
    {
      id: "cardamom-2",
      name: "Idukki Deluxe",
      tagline: "Export Quality",
      summary: "Hand-picked, bold green pods with an intense fragrance. The choice for luxury confectionery.",
      grades: ["Grade A+", "Bold"],
      image: cardamomDeluxe,
      price: "$$$$",
    },
    {
      id: "cardamom-3",
      name: "Pure Organic",
      tagline: "Earth Friendly",
      summary: "Cultivated in chemical-free soil. Preserves the raw, untouched essence of nature.",
      grades: ["Organic", "Certified"],
      image: cardamomOrganic,
      price: "$$$",
    },
  ];

  return (
    // Updated background to a very light, soft green (off-white)
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-12 bg-emerald-50"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20"> {/* Increased bottom margin */}
          <span className="text-emerald-700 font-bold tracking-widest text-sm uppercase">
            🌱 Exclusive Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-stone-900"> {/* Stronger header font */}
            The Cardamom Selection
          </h1>
          <p className="text-stone-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Discover varieties sourced directly from the lush hills of Idukki. Graded for size, color, 
            and the distinct aroma that defines luxury. Each pod tells a story of the high-range climate.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 px-4 sm:px-0">
          {products.map((p) => (
            <div
              key={p.id}
              // TRENDY CARD STYLE: Increased padding, white background, larger shadow on hover
              className="group relative flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden" 
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  // Smoother, subtler hover effect on image
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" 
                />
                
                {/* Floating Grade Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {p.grades.map((grade, i) => (
                    <span
                      key={i}
                      // Pill shape, strong background/border for visibility
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white border border-emerald-300 text-emerald-800 rounded-full shadow-md" 
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-7"> {/* Slightly more internal padding */}
                <div className="mb-4">
                  <p className="text-sm text-emerald-600 font-semibold mb-1">
                    {p.tagline}
                  </p>
                  <h3 className="text-2xl font-serif font-extrabold text-stone-900 transition-colors">
                    {p.name}
                  </h3>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {p.summary}
                </p>

                {/* Footer Actions */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                  <span className="text-xl font-bold text-emerald-700 font-serif"> {/* Price is more prominent */}
                    {p.price}
                  </span>
                  
                  <button className="group/btn flex items-center gap-2 text-base font-semibold text-emerald-700 transition-all hover:gap-3">
                    Enquire Now
                    <span className="bg-emerald-100 p-2 rounded-full transition-all duration-300 group-hover/btn:bg-emerald-700 group-hover/btn:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}