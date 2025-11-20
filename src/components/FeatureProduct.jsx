


// import cardamomPremium from "../assets/cardamom_premium.jpg";
// import cardamomDeluxe from "../assets/caradom_deluxe.jpg";
// import cardamomOrganic from "../assets/caradom_organic.png";

// export default function FeatureProduct() {
//   const products = [
//     {
//       id: "cardamom-1",
//       name: "Cardamom - Premium",
//       summary:
//         "Aromatic green cardamom from Idukki hills, carefully processed.",
//       grades: ["A", "B"],
//       image: cardamomPremium,
//     },
//     {
//       id: "cardamom-2",
//       name: "Cardamom - Deluxe",
//       summary:
//         "Hand-picked cardamom pods offering a strong aroma and bold flavor, ideal for premium export.",
//       grades: ["A+", "A"],
//       image: cardamomDeluxe,
//     },
//     {
//       id: "cardamom-3",
//       name: "Cardamom - Organic",
//       summary:
//         "Cultivated using sustainable and chemical-free methods, preserving natural aroma and purity.",
//       grades: ["Organic", "Premium"],
//       image: cardamomOrganic,
//     },
//   ];

//   return (
//     <section id="products" className=" px-4 h-140 my-auto mx-auto sm:px-6 md:px-10 lg:px-20 bg-lime-200">
//       {/* Heading */}
//       <h1 className="pt-10 text-center  text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-lime-800">
//         Our Featured Cardamom Selection
//       </h1>

//       {/* Paragraph */}
//       <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
//         Discover our finest cardamom varieties, sourced from the lush plantations of Idukki. 
//         Each batch is carefully graded, quality-tested, and auctioned through our 
//         transparent and farmer-centric processing system.
//       </p>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="relative group  overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
//           >
//             {/* Image */}
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm "
//             />

   

//             {/* Text Overlay Appears on Hover */}
//             <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
//               <h3
//   className={`text-xl font-semibold 
//     ${p.id === "cardamom-1" ? "text-yellow-300" : "text-white"} 
//     ${p.id === "cardamom-2" ? "text-yellow-300" : "text-white"} 
//     ${p.id === "cardamom-3" ? "text-yellow-300" : "text-white"} 
//   `}
// >
//   {p.name}
// </h3>

//               <p className="text-gray-200 text-sm mt-1">{p.summary}</p>

//               <div className="mt-3 flex items-center justify-between">
//                 <div className="text-xs text-white font-medium">
//                   Grades: {p.grades.join(", ")}
//                 </div>

//                 <button className="px-3 py-1 bg-lime-500 hover:bg-lime-600 text-white rounded-lg text-sm transition">
//                   Enquire
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//         <div className="border-t border-yellow-500 mt-10 pt-6 text-center text-sm text-white">
//           <br className="sm:hidden" />
//         </div>
//     </section>
//   );
// }


import cardamomPremium from "../assets/cardamom_premium.jpg";
import cardamomDeluxe from "../assets/caradom_deluxe.jpg";
import cardamomOrganic from "../assets/caradom_organic.png";

export default function FeatureProduct() {
  const products = [
    {
      id: "cardamom-1",
      name: "Cardamom - Premium",
      summary:
        "Aromatic green cardamom from Idukki hills, carefully processed.",
      grades: ["A", "B"],
      image: cardamomPremium,
    },
    {
      id: "cardamom-2",
      name: "Cardamom - Deluxe",
      summary:
        "Hand-picked cardamom pods offering a strong aroma and bold flavor, ideal for premium export.",
      grades: ["A+", "A"],
      image: cardamomDeluxe,
    },
    {
      id: "cardamom-3",
      name: "Cardamom - Organic",
      summary:
        "Cultivated using sustainable and chemical-free methods, preserving natural aroma and purity.",
      grades: ["Organic", "Premium"],
      image: cardamomOrganic,
    },
  ];

  return (
    <section
      id="products"
      className="px-4 py-14 mx-auto sm:px-6 md:px-10 lg:px-20 bg-lime-200"
    >
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-lime-800">
        Our Featured Cardamom Selection
      </h1>

      {/* Paragraph */}
      <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
        Discover our finest cardamom varieties, sourced from the lush plantations of Idukki.
        Each batch is carefully graded, quality-tested, and auctioned through our
        transparent and farmer-centric processing system.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl bg-white transition-all duration-500"
          >
            {/* Image */}
            <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
              <h3
                className={`text-xl font-semibold text-yellow-300`}
              >
                {p.name}
              </h3>

              <p className="text-gray-200 text-sm mt-1">{p.summary}</p>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-white font-medium">
                  Grades: {p.grades.join(", ")}
                </div>

                <button className="px-3 py-1 bg-lime-500 hover:bg-lime-600 text-white rounded-lg text-sm transition">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-yellow-500 mt-10 pt-6 text-center text-sm text-gray-700"></div>
    </section>
  );
}
