import React from 'react';
import { 
  Gavel, 
  CalendarRange, 
  TrendingUp, 
  Scale, 
  Users, 
  Globe2,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

/**
 * MarketRatesInfo Component
 * Displays the sources and methodology behind the price updates.
 * Focuses on the text content provided: Auction rates, Trends, Insights.
 */

const MarketRatesInfo = () => {
  
  const updateSources = [
    {
      title: "Daily Auction Rates",
      icon: Gavel,
      color: "text-red-600",
      bg: "bg-red-50",
      desc: "Real-time closing prices from major auction centers."
    },
    {
      title: "Weekly Average Prices",
      icon: CalendarRange,
      color: "text-blue-600",
      bg: "bg-blue-50",
      desc: "Consolidated averages to smooth out daily volatility."
    },
    {
      title: "Seasonal Trends",
      icon: TrendingUp,
      color: "text-amber-600",
      bg: "bg-amber-50",
      desc: "Analysis of harvest cycles and weather impacts."
    },
    {
      title: "Demand & Supply Insights",
      icon: Scale,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      desc: "Inventory levels vs. current market consumption."
    },
    {
      title: "Buyer Requirements",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50",
      desc: "Specific grade preferences from domestic bulk buyers."
    },
    {
      title: "Export Market Trends",
      icon: Globe2,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      desc: "International demand signals from the Middle East & Europe."
    }
  ];

  return (
    <section className="bg-white py-24 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
            <BarChart3 size={14} />
            Market Intelligence
          </div>
          <h2 className="text-4xl font-serif font-extrabold text-slate-900 mb-6">
            Authentic Price Updates
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            In a volatile spice market, accurate data is power. We publish authentic cardamom price updates derived from six critical data points.
          </p>
        </div>

        {/* --- Grid of Sources --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {updateSources.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <item.icon size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm font-medium">
                {item.desc}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default MarketRatesInfo;