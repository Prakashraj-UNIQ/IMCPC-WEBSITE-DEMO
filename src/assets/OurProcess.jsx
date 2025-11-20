
import  farmer from '../assets/farmer_registration1.jpg';
import  quantity from '../assets/quantity_assessment1.jpg';
import digital from '../assets/digital_auction1.jpg';
import settlement from '../assets/transparent_settlement.png';

export default function OurProcess() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 h-230">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="text-left lg:sticky lg:top-60">
          <h3 className="text-lime-600 uppercase tracking-wide font-semibold text-sm">
            Our Process
          </h3>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            How We Work
          </h2>

          <p className="text-black max-w-xl mt-4 text-sm sm:text-base">
           Our approach blends proven agricultural expertise with next-generation digital technology.
           From seamless farmer onboarding to real-time crop tracking, every process is streamlined for efficiency.
           Smart analytics help farmers and buyers make better, data-driven decisions.
           Online bidding ensures open, competitive, and corruption-free transactions.
           Fast, transparent digital payments bring trust and financial security to every stakeholder.
           Together, we deliver a modern marketplace built on fairness, speed, and complete accountability.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          {/* CARD 1 — UP from sm devices */}
                  <div className="sm:-translate-y-6">
  <div className="group relative bg-lime-600 rounded-lg  p-6 h-72  flex flex-col justify-center hover:shadow-lg transition-all overflow-hidden border-l-4 border-green-500">
    
    {/* Hover Image */}
    <img
      src={farmer}
      alt="Preview"
      className="absolute inset-0 opacity-0 group-hover:opacity-100 
             translate-y-5 group-hover:translate-y-0
             transition-all duration-500 ease-out h-72
             object-cover "
/>

    {/* Content (fades out on hover) */}
    <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
      <div className="text-black font-bold text-xl bg-white w-12 h-12 flex justify-center items-center rounded-full">
        01
      </div>
      <h4 className="text-white text-2xl font-bold my-2">Farmer Registration</h4>
      <p className="text-white text-lg ">Verified onboarding of local producers.</p>
    </div>

  </div>
</div>


{/* CARD 2 — DOWN from sm devices */}
<div className="sm:translate-y-14">
  <div className="group relative bg-lime-600 rounded-lg
                  p-6 h-72  flex flex-col justify-center  
                  hover:shadow-lg transition-all overflow-hidden">
    
    {/* Hover Image */}
    <img
      src={quantity}
      alt="Preview"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 
             translate-y-5 group-hover:translate-y-0
             transition-all duration-500 ease-out h-72
             object-cover "

    />

    {/* Content */}
    <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
      <div className="text-black font-bold text-lg bg-white w-12 h-12 flex justify-center items-center rounded-full">
        02
      </div>
      <h4 className="text-white text-2xl font-bold my-2">Quantity Assessment</h4>
      <p className="text-white text-lg">Cardamom is graded for auction.</p>
    </div>

  </div>
</div>


{/* CARD 3 — UP from sm devices */}
<div className="sm:-translate-y-2">
  <div className="group relative bg-lime-600 rounded-lg
                  p-6 h-72  flex flex-col justify-center 
                  hover:shadow-lg transition-all overflow-hidden">
    
    {/* Hover Image */}
    <img
      src={digital}
      alt="Preview"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 
             translate-y-5 group-hover:translate-y-0
             transition-all duration-500 ease-out h-72
             object-cover "
    />

    {/* Content */}
    <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
      <div className="text-black font-bold text-lg bg-white w-12 h-12 flex justify-center items-center rounded-full">
        03
      </div>
      <h4 className="text-white  text-2xl font-bold my-2">Digital Auction</h4>
      <p className="text-white text-lg">
        Real-time online bidding ensures competitive pricing.
      </p>
    </div>

  </div>
</div>



{/* CARD 4 — DOWN from sm devices */}
<div className="sm:translate-y-23">
  <div className="group relative bg-lime-600 rounded-lg 
                  p-6 h-72  flex flex-col justify-center 
                  hover:shadow-lg transition-all overflow-hidden">

    {/* Hover Image */}
    <img
      src={ settlement }
      alt="Preview"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 
             translate-y-5 group-hover:translate-y-0
             transition-all duration-500 ease-out h-72
             object-cover "
    />

    {/* Content */}
    <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
      <div className="text-black font-bold text-lg bg-white w-12 h-12 flex justify-center items-center rounded-full">
        04
      </div>
      <h4 className="text-white text-2xl font-bold my-2">Transparent Settlement</h4>
      <p className="text-white text-lg">
        Instant and accurate payment settlements.
      </p>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
