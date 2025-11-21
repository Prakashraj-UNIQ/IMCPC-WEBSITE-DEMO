import React from 'react'

export default function MarketRates () {
  return (
    <div>
        
<section
  id="market-rates"
  class="bg-gray-900 dark:bg-gray-900 rounded-3xl p-8 shadow-2xl shadow-lime-900/50"
>
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    {/* Heading */}
    <div class="text-center mb-10">
      <h2
        class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-lime-400"
      >
         Global Market Rates
      </h2>

      {/* Paragraph */}
      <p class="mt-3 text-white max-w-3xl mx-auto text-lg">
        Real-time spice prices are volatile, varying by grade, quality, season,
        and auction center. Reference the structured categories below for typical
        market value insights.
      </p>
    </div>

    {/* Table Container */}
    <div class="mt-8 overflow-x-auto bg-gray-800/80 rounded-xl p-0.5 shadow-inner">
      <table
        class="w-full text-left border-collapse text-base divide-y divide-gray-700"
      >
        <thead>
          <tr class="bg-gray-700 text-gray-200 uppercase tracking-wider">
            <th class="p-4 font-semibold rounded-tl-xl">Grade</th>
            <th class="p-4 font-semibold">Average Price (₹/kg)</th>
            <th class="p-4 font-semibold rounded-tr-xl">Trend</th>
          </tr>
        </thead>

        <tbody class="text-white divide-y divide-gray-700/50">
          {/* Cardamom Data - Row 1 */}
          <tr class="hover:bg-gray-700/50 transition duration-150">
            <td class="p-4 font-medium text-teal-400">AGB</td>
            <td
              class="p-4 font-extrabold price-animation-target text-lg text-lime-300"
            >
              ₹1800 – ₹2200
            </td>
            <td class="p-4 text-lime-400 font-semibold">Stable</td>
          </tr>

          {/* Cardamom Data - Row 2 */}
          <tr class="hover:bg-gray-700/50 transition duration-150">
            <td class="p-4 font-medium text-teal-400">AGS</td>
            <td
              class="p-4 font-extrabold price-animation-target text-lg text-lime-300"
            >
              ₹1600 – ₹2000
            </td>
            <td class="p-4 text-lime-400 font-semibold">Slight Uptrend</td>
          </tr>

          {/* Cardamom Data - Row 3 */}
          <tr class="hover:bg-gray-700/50 transition duration-150">
            <td class="p-4 font-medium text-teal-400">Bulk / Mix Grades</td>
            <td
              class="p-4 font-extrabold price-animation-target text-lg text-lime-300"
            >
              ₹1100 – ₹1500
            </td>
            <td class="p-4 text-amber-500 font-semibold">Fluctuating</td>
          </tr>

          {/* Cardamom Data - Row 4 */}
          <tr class="hover:bg-gray-700/50 transition duration-150">
            <td class="p-4 font-medium text-teal-400">Split & Seeds</td>
            <td
              class="p-4 font-extrabold price-animation-target text-lg text-lime-300"
            >
              ₹700 – ₹1000
            </td>
            <td class="p-4 text-red-500 font-semibold">Lower Demand</td>
          </tr>

          {/* Cardamom Data - Row 5 - Highlighted */}
          <tr
            class="bg-lime-900/20 hover:bg-lime-900/40 transition duration-150"
          >
            <td class="p-4 font-bold text-lg text-teal-300">Export Premium</td>
            <td
              class="p-4 font-extrabold price-animation-target text-xl text-lime-200"
            >
              ₹2300 – ₹2800
            </td>
            <td class="p-4 text-lime-300 font-bold">High Demand</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Footer Note */}
    <div
      class="mt-8 p-4 bg-gray-800 rounded-lg text-white text-sm leading-relaxed border border-gray-700"
    >
      <strong class="text-teal-400">Disclaimer:</strong> Prices vary daily
      depending on auction centers, weather conditions, crop arrivals, and export
      activity. These figures are **indicative** and should be used for general
      market reference only.
    </div>

    {/* CSS for Animation (Simulating a dynamic update) - You would place this in a global CSS file or <style> block */}
    {/* This adds a pulse effect to the price column on component load */}
    <style jsx="true">{`
      @keyframes pricePulse {
        0% {
          opacity: 0.5;
          transform: translateY(3px);
        }
        50% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .price-animation-target {
        animation: pricePulse 1s ease-out;
        animation-delay: var(--delay-factor); /* Use JS/React to set this dynamically per row */
        opacity: 0; /* Starts invisible */
        animation-fill-mode: forwards;
      }

      /* Example of setting dynamic delay (Normally handled in JS/React map) */
      .price-animation-target:nth-child(2) {
        --delay-factor: 0s;
      }
      .price-animation-target:nth-child(3) {
        --delay-factor: 0.1s;
      }
      .price-animation-target:nth-child(4) {
        --delay-factor: 0.2s;
      }
      .price-animation-target:nth-child(5) {
        --delay-factor: 0.3s;
      }
      .price-animation-target:nth-child(6) {
        --delay-factor: 0.4s;
      }
    `}</style>
  </motion.div>
</section>
    </div>
  )
}
