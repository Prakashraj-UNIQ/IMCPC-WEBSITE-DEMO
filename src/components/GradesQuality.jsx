import { motion } from "framer-motion";
import cardamombg from "../assets/Cardamom-Hills-of-Kerala.jpg";
import cardq from "../assets/g1wallpaper.jpg";

/**
 * Reusable Card component for displaying Grade information.
 * @param {object} props
 * @param {string} props.title - Main title of the card (e.g., Grade name).
 * @param {string} [props.subtitle] - Subtitle for the card (e.g., full name of the grade).
 * @param {React.ReactNode} props.children - Description content for the card.
 */
function GradeCard({ title, subtitle, children }) {
  return (
    <div
      className="
        relative p-6 rounded-2xl border border-lime-200 shadow-sm 
        overflow-hidden cursor-pointer group transition-all 
      "
    >
      {/* Left→Right Hover Background Animation */}
      <div
        className="
          absolute inset-0 bg-linear-to-r from-lime-200 to-lime-100
          translate-x-[-100%] group-hover:translate-x-0 
          transition-transform duration-500 ease-out
        "
      />

      {/* Card Content (on top of animation) */}
      <div className="relative z-10">
        <h3 className="font-bold text-green-600">{title}</h3>

        {subtitle && (
          <p className="text-sm text-lime-700 mb-2">{subtitle}</p>
        )}

        <p className="text-black text-sm">{children}</p>
      </div>
    </div>
  );
}

/**
 * Main Page component for Cardamom grades and information.
 */
export default function CardamomPage() {
  return (
    <div className="min-h-screen   bg-white">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-green-500">
          Cardamom
        </h1>

        {/* Navigation/Anchor Links */}
        <nav className="mt-4 justify-center flex gap-3 text-sm ms-30" aria-label="sections">
          <a href="#grades" className="px-3 py-1 rounded-full border-2 bg-green-100 text-green-800 ">Grades</a>
          <a href="#quality" className="px-3 py-1 rounded-full border-2 bg-white text-green-800 border-green-500 ">Quality</a>
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <main className="max-full   grid gap-8">
        {/* GRADES Section */}
        <section id="grades" className="bg-transparent rounded-2xl p-6 mx-15 ">
          <img
            src={cardamombg}
            alt="Cardamom Hills background"
            className="w-full h-50 object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-bold text-green-500 mt-5">Primary Grades</h2>
            <p className="mt-2 text-black max-w-2xl">
              IMCPC follows strict grading norms — each grade reflects a
              combination of colour, size, purity and moisture levels. Below are the
              primary grades used for assessment and trade.
            </p>

            {/* Grid of Grade Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <GradeCard title="AGB" subtitle="Alleppey Green Bold">
                Bold-sized pods with deep green colour — prized for aroma and
                market preference. Ideal for export and premium domestic use.
              </GradeCard>

              <GradeCard title="AGS" subtitle="Alleppey Green Superior">
                Slightly smaller than AGB but with uniform colour and excellent
                flavour retention. Popular choice for high-quality blends.
              </GradeCard>

              <GradeCard title="Bulk / Mix Grades">
                Mixed lots containing multiple size ranges. Used in bulk shipments
                where consistent flavour is the priority over uniform appearance.
              </GradeCard>

              <GradeCard title="Split & Seeds Grade">
                Contain split pods and seeds — used where pod integrity is less
                critical (e.g., oil extraction or ground spice preparations).
              </GradeCard>

              <GradeCard title="Export Premium Grade">
                Highest selection after sorting and curing. Meets top export
                standards for moisture, purity and visual appeal.
              </GradeCard>
            </div>
          </motion.div>
        </section>

        {/* --- MERGED QUALITY Section --- */}
        <section
          id="quality"
          className="relative   p-8 sm:p-12 lg:p-20 overflow-hidden"
          style={{
            backgroundImage: `url(${cardq})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
          {/* Professional Overlay: Soft dark tone with slight opacity */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-brightness-75"></div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-white tracking-wide drop-shadow-lg"
              >
                Comprehensive Quality Parameters
              </h2>

              <p
                className="mt-4 text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed font-light"
              >
                Our comprehensive quality assessment ensures consistency, purity, and
                premium value by rigorously examining key measurable standards trusted
                across the global spice industry.
              </p>
            </div>

            {/* Parameter Grid - Enhanced Staggered Layout */}
            <div
              className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
            >
              {/* 1. Moisture & Drying (Prominent position, spans two columns on tablet) */}
              <div
                className="group p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-lime-400/40 hover:scale-[1.01] bg-white/10 backdrop-filter backdrop-blur-md border border-gray-100/30 sm:col-span-2 lg:col-span-2"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-teal-400 mr-3">1.</span>
                  <h4 className="text-2xl font-semibold text-white drop-shadow-sm group-hover:text-lime-300 transition-colors">
                    Moisture & Drying
                  </h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  The target moisture level is **less than 12%** (&lt; 12%). Proper drying is
                  essential to **prevent mold** and fully **preserve** the natural
                  volatile oils and color integrity.
                </p>

                {/* Moisture Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-lime-400 to-lime-200 shadow-inner"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 font-medium">
                    Industry Standard Target: **10% moisture**
                  </p>
                </div>
              </div>

              {/* 2. Aroma & Flavour (Stands alone next to Moisture) */}
              <div
                className="group p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-lime-400/40 hover:scale-[1.01] bg-white/10 backdrop-filter backdrop-blur-md border border-gray-100/30 lg:col-span-2"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-green-400 mr-3">2.</span>
                  <h4 className="text-2xl font-semibold text-white drop-shadow-sm group-hover:text-lime-300 transition-colors">
                    Aroma & Flavour Integrity
                  </h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  A strong, vibrant, and **fresh aroma** is a direct indicator of high
                  quality and a healthy concentration of essential **volatile oil
                  content**. This is tested by expert graders.
                </p>
              </div>

              {/* 3. Uniform Size & Colour (Start of the secondary row) */}
              <div
                className="group p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-lime-400/40 hover:scale-[1.01] bg-white/10 backdrop-filter backdrop-blur-md border border-gray-100/30"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-lime-400 mr-3">3.</span>
                  <h4 className="text-xl font-semibold text-white drop-shadow-sm group-hover:text-lime-300 transition-colors">
                    Uniform Size & Colour
                  </h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  Evenly sized, consistently green pods are crucial for maintaining a
                  uniform **flavour profile**, **aroma**, and **fair pricing** across
                  the entire batch.
                </p>
              </div>

              {/* 4. Cleanliness & Purity (Next card) */}
              <div
                className="group p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-lime-400/40 hover:scale-[1.01] bg-white/10 backdrop-filter backdrop-blur-md border border-gray-100/30"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-lime-400 mr-3">4.</span>
                  <h4 className="text-xl font-semibold text-white drop-shadow-sm group-hover:text-lime-300 transition-colors">
                    Cleanliness & Purity
                  </h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  The product must be absolutely **free from foreign matter**, including
                  dust, stones, unwanted chaff, broken pods, or any external
                  contaminants.
                </p>
              </div>
              
              {/* 5. Properly Dried & Cured (Spans two columns to balance the bottom row) */}
              <div
                className="group p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-lime-400/40 hover:scale-[1.01] bg-white/10 backdrop-filter backdrop-blur-md border border-gray-100/30 sm:col-span-2"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-teal-400 mr-3">5.</span>
                  <h4 className="text-xl font-semibold text-white drop-shadow-sm group-hover:text-lime-300 transition-colors">
                    Properly Dried & Cured
                  </h4>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  Controlled **curing** processes are implemented to enhance the overall
                  **shelf-life** of the product, stabilize the complex flavour profile,
                  and maximize retention of natural properties.
                </p>
              </div>
            </div>
            
            {/* Footer Note / Callout - Decent and clear */}
            <div
              className="mt-16 p-6 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-l-4 border-lime-400 rounded-xl text-gray-100 text-base leading-relaxed shadow-lg shadow-gray-900/50"
            >
              <strong className="font-semibold text-lime-300 mr-2">
                Expert Grading Protocol:
              </strong>
              All product grading is performed by **trained quality specialists** who
              utilize specialized tools like **moisture meters** and meticulous visual
              inspection to ensure every batch meets premium standards and unlocks
              maximum market value.
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}