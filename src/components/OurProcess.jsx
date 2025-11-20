import farmer from '../assets/farmer_registration1.jpg';
import quantity from '../assets/quantity_assessment1.jpg';
import digital from '../assets/digital_auction1.jpg';
import settlement from '../assets/transparent_settlement.png';


export default function OurProcess() {
return (
<section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


{/* LEFT TEXT */}
<div className="text-left lg:sticky lg:top-40">
<h3 className="text-lime-600 uppercase tracking-wide font-semibold text-sm">
Our Process
</h3>


<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
How We Work
</h2>


<p className="text-black max-w-xl mt-4 text-sm sm:text-base leading-relaxed">
Our approach blends proven agricultural expertise with next-generation digital technology.
From seamless farmer onboarding to real-time crop tracking, every process is streamlined for efficiency.
Smart analytics help farmers and buyers make better, data-driven decisions.
Online bidding ensures open, competitive, and corruption-free transactions.
Fast, transparent digital payments bring trust and financial security to every stakeholder.
Together, we deliver a modern marketplace built on fairness, speed, and complete accountability.
</p>
</div>


{/* RIGHT CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6">


{/* CARD TEMPLATE */}
{[
{ id: 1, title: "Farmer Registration", text: "Verified onboarding of local producers.", img: farmer },
{ id: 2, title: "Quantity Assessment", text: "Cardamom is graded for auction.", img: quantity },
{ id: 3, title: "Digital Auction", text: "Real-time online bidding ensures competitive pricing.", img: digital },
{ id: 4, title: "Transparent Settlement", text: "Instant and accurate payment settlements.", img: settlement },
].map((card, index) => (
<div
key={card.id}
className={`group relative bg-lime-800 rounded-xl p-6 h-72 flex flex-col justify-center hover:shadow-2xl transition-all overflow-hidden border-t-4 border-lime-200
${index % 2 === 0 ? 'sm:-translate-y-4' : 'sm:translate-y-6'}
`}
>


{/* Hover Image */}
<img
src={card.img}
alt={card.title}
className="absolute inset-0 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-out h-full w-full object-cover"
/>


{/* Content */}
<div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
<div className="text-black font-bold text-xl bg-white w-12 h-12 flex justify-center items-center rounded-full border-t-4 border-lime-200">
{String(card.id).padStart(2, '0')}
</div>
<h4 className="text-white text-2xl font-bold my-2">{card.title}</h4>
<p className="text-white text-lg">{card.text}</p>
</div>


</div>
))}
</div>
</div>
</section>
);
}