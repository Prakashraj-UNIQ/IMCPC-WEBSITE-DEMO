import { motion } from "framer-motion";

function GradeCard({ title, subtitle, children }) {
  return (
    <div
      className="
        relative p-6 rounded-2xl border border-lime-200 shadow-sm 
        overflow-hidden cursor-pointer group transition-all
      "
    >
      {/* Left→Right Hover Background */}
      <div
        className="
          absolute inset-0 bg-linear-to-r from-lime-200 to-lime-100
          translate-x-[-100%] group-hover:translate-x-0 
          transition-transform duration-500 ease-out
        "
      />

      {/* Card Content (on top of animation) */}
      <div className="relative z-10">
        <h3 className="font-bold text-lime-600">{title}</h3>

        {subtitle && (
          <p className="text-sm text-lime-700 mb-2">{subtitle}</p>
        )}

        <p className="text-black text-sm">{children}</p>
      </div>
    </div>
  );
}

export default function CardamomPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-green-300 p-6 md:p-10">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-lime-500">
          Cardamom
        </h1>
        <p className="mt-2 ps-2 text-lime-500 font-bold">Grades & Quality</p>

        <nav className="mt-4 flex gap-3 text-sm" aria-label="sections">
          <a href="#grades" className="px-3 py-1 rounded-full bg-green-100 text-green-800">Grades</a>
          <a href="#quality" className="px-3 py-1 rounded-full bg-white text-green-800 border border-green-100">Quality</a>
        </nav>
      </motion.header>

      <main className="max-w-6xl mx-auto mt-8 grid gap-8">
        {/* Grades Section */}
        <section id="grades" className="bg-transparent rounded-2xl  p-6 ">
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
			
          >
            <h2 className="text-2xl font-bold text-lime-500">Primary Grades</h2>
            <p className="mt-2 text-black max-w-2xl">
              IMCPC follows strict grading norms — each grade reflects a
              combination of colour, size, purity and moisture levels. Below are the
              primary grades used for assessment and trade.
            </p>

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



		
<section
  id="quality"
  className="bg-transparent  p-10  border-green-100"
>
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-lime-500 tracking-tight">
      Quality Parameters
    </h2>

    <p className="mt-3 text-black max-w-2xl leading-relaxed">
      Our quality assessment ensures consistency, purity, and value by
      examining key measurable parameters used across the industry.
    </p>

    {/* Parameter Grid */}
    <div className="mt-10 grid gap-10 sm:grid-cols-2">
      {/* Item 1 */}
      <div>
        <h4 className="text-lg font-semibold text-lime-500">
          Uniform Size & Colour
        </h4>
        <p className="text-sm text-black mt-1 leading-relaxed">
          Evenly sized pods help maintain consistent flavour, aroma, and pricing.
        </p>
      </div>

      {/* Item 2 */}
      <div>
        <h4 className="text-lg font-semibold text-lime-500">
          Moisture & Drying
        </h4>
        <p className="text-sm text-black mt-1 leading-relaxed">
          Target moisture: <strong className="text-black">&lt; 12%</strong>.
          Proper drying prevents mold and preserves natural aroma.
        </p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-lime-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 rounded-full bg-linear-to-r from-lime-300 to-lime-600"
              style={{ width: "10%" }}
            ></div>
          </div>
          <p className="text-xs text-black mt-1">
            Example: well-dried sample — <strong>10% moisture</strong>
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div>
        <h4 className="text-lg font-semibold text-lime-500">Aroma & Flavour</h4>
        <p className="text-sm text-black mt-1 leading-relaxed">
          A strong fresh aroma indicates healthy volatile oil content.
        </p>
      </div>

      {/* Item 4 */}
      <div>
        <h4 className="text-lg font-semibold text-lime-500">
          Cleanliness & Purity
        </h4>
        <p className="text-sm text-black mt-1 leading-relaxed">
          Free from dust, stones, broken pods, or external contaminants.
        </p>
      </div>

      {/* Item 5 - Full Width */}
      <div className="sm:col-span-2">
        <h4 className="text-lg font-semibold text-lime-500">
          Properly Dried & Cured
        </h4>
        <p className="text-sm text-black mt-1 leading-relaxed">
          Controlled curing enhances shelf-life and stabilises flavour.
        </p>
      </div>
    </div>

    {/* Note Box */}
    <div className="mt-10 p-4 bg-lime-50 border border-lime-200 rounded-xl text-black text-sm leading-relaxed">
      <strong className="text-lime-500">Note:</strong> Grading is performed by
      trained specialists using moisture meters and visual inspection to unlock
      maximum value.
    </div>
  </motion.div>
</section>


{/* Market Rates Section */}
<section id="market-rates" className="bg-white rounded-2xl p-6 shadow">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    {/* Heading */}
    <h2 className="text-2xl font-bold text-lime-500">Market Rates</h2>

    {/* Paragraph */}
    <p className="mt-2 text-black max-w-2xl">
      Real-time cardamom prices vary by grade, quality, season and auction
      center. Below is a structured representation of typical market rate
      categories.
    </p>

    {/* Table */}
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-lime-100 text-lime-700">
            <th className="p-3">Grade</th>
            <th className="p-3">Average Price (₹/kg)</th>
            <th className="p-3">Trend</th>
          </tr>
        </thead>

        <tbody className="text-black">
          <tr className="border-b">
            <td className="p-3">AGB</td>
            <td className="p-3">₹1800 – ₹2200</td>
            <td className="p-3 text-lime-600">Stable</td>
          </tr>

          <tr className="border-b">
            <td className="p-3">AGS</td>
            <td className="p-3">₹1600 – ₹2000</td>
            <td className="p-3 text-lime-600">Slight Uptrend</td>
          </tr>

          <tr className="border-b">
            <td className="p-3">Bulk / Mix Grades</td>
            <td className="p-3">₹1100 – ₹1500</td>
            <td className="p-3 text-yellow-600">Fluctuating</td>
          </tr>

          <tr className="border-b">
            <td className="p-3">Split & Seeds</td>
            <td className="p-3">₹700 – ₹1000</td>
            <td className="p-3 text-red-600">Lower Demand</td>
          </tr>

          <tr>
            <td className="p-3">Export Premium</td>
            <td className="p-3">₹2300 – ₹2800</td>
            <td className="p-3 text-lime-700">High Demand</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Footer Note */}
    <div className="mt-6 text-black text-sm leading-relaxed">
      <strong className="text-lime-600">Note:</strong> Prices vary daily depending on 
      auction centers, weather conditions, crop arrivals, and export activity. 
      These values are indicative and used for general market reference.
    </div>
  </motion.div>
</section>

{/* Grading Process Section */}
<section id="grading-process" className="bg-transparent rounded-2xl p-6 text-center">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    {/* Heading */}
    <h2 className="text-2xl font-bold text-lime-500 text-center">Grading Process</h2>

    {/* Paragraph */}
    <p className="text-black max-w-2xl mx-auto mt-4 text-center">
      Cardamom grading is a systematic process carried out by skilled professionals to ensure every batch meets strict quality standards.
    </p>

    {/* Circle Connector Wrapper */}
    <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">

      {/* Horizontal / Vertical Line */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-lime-300 -z-10"></div>

      {/* MOBILE vertical connectors */}
      <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-lime-300 -z-10"></div>

      {/* Circle 1 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">1. Cleaning</h3>
        <p className="text-sm text-black mt-1 px-4">Removal of dust & impurities.</p>
      </div>

      {/* Circle 2 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">2. Moisture Testing</h3>
        <p className="text-sm text-black mt-1 px-4">Moisture kept below 12%.</p>
      </div>

      {/* Circle 3 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">3. Size Sorting</h3>
        <p className="text-sm text-black mt-1 px-4">Sorted into various sizes.</p>
      </div>

      {/* Circle 4 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">4. Colour Selection</h3>
        <p className="text-sm text-black mt-1 px-4">Premium green pods selected.</p>
      </div>

      {/* Circle 5 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">5. Aroma Check</h3>
        <p className="text-sm text-black mt-1 px-4">Aroma & flavour tested.</p>
      </div>

      {/* Circle 6 */}
      <div className="relative w-48 h-48 flex flex-col justify-center items-center 
                      bg-lime-50 border-r-4 border-lime-500 rounded-full shadow">
        <h3 className="font-semibold text-lime-500">6. Final Packing</h3>
        <p className="text-sm text-black mt-1 px-4">Packed in sealed bags.</p>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-6 text-black text-sm leading-relaxed">
      <strong className="text-lime-600">Note:</strong> Each step is monitored for consistency & high-value output.
    </div>
  </motion.div>
</section>


{/* Storage & Handling Standards Section */}
<section id="storage-handling" className="bg-white rounded-2xl p-6 shadow">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    {/* Heading */}
    <h2 className="text-2xl font-bold text-lime-500">Storage & Handling Standards</h2>

    {/* Paragraph */}
    <p className="mt-2 text-black max-w-2xl">
      Proper storage and safe handling play a crucial role in preserving the aroma, colour, and shelf-life of cardamom.
    </p>

    {/* Cards */}
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">1. Ideal Temperature</h3>
        <p className="text-sm text-black mt-1">
          Maintain cool, dry conditions between 10–20°C to preserve natural oils and freshness.
        </p>
      </div>

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">2. Low Humidity</h3>
        <p className="text-sm text-black mt-1">
          Keep humidity below 60% to prevent mold formation and moisture absorption.
        </p>
      </div>

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">3. Airtight Packaging</h3>
        <p className="text-sm text-black mt-1">
          Use moisture-proof, airtight bags or containers to protect aroma and reduce flavour loss.
        </p>
      </div>

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">4. Light Protection</h3>
        <p className="text-sm text-black mt-1">
          Store away from direct sunlight as it affects colour and volatile oil content.
        </p>
      </div>

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">5. Pest-Free Storage</h3>
        <p className="text-sm text-black mt-1">
          Warehouses must be pest-controlled and routinely inspected for hygiene.
        </p>
      </div>

      <div className="p-5 border border-lime-100 rounded-2xl bg-lime-50">
        <h3 className="font-semibold text-lime-500">6. Gentle Handling</h3>
        <p className="text-sm text-black mt-1">
          Minimize drop impact and friction to avoid pod breakage and seed loss.
        </p>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-6 text-black text-sm leading-relaxed">
      <strong className="text-lime-600">Note:</strong> Adhering to proper storage and handling methods ensures extended shelf-life, maintained aroma, and consistent export quality.
    </div>
  </motion.div>
</section>


      </main>

    
    </div>
  );
}
