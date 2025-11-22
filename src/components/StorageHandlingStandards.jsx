import React from 'react';
import { 
  Thermometer, 
  ShieldCheck, 
  Package, 
  Wind, 
  ScanBarcode, 
  Lock, 
  Warehouse,
  AlertCircle
} from 'lucide-react';

/**
 * StorageStandards Component
 * Focuses on the post-processing phase: Warehousing, Packaging, and Hygiene.
 * Design emphasizes "Protection," "Hygiene," and "Technology."
 */

const StorageStandards = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 py-20">
      
      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
          <ShieldCheck size={14} />
          Preservation Protocols
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight mb-6">
          The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Storage</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Cardamom loses 40% of its volatile oil within 3 months if stored incorrectly. Our "Scientific Warehousing" ensures the Idukki aroma remains locked in until it reaches your kitchen.
        </p>
      </div>

      {/* --- The Smart Warehouse Grid --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Climate Control */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <Thermometer size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Climate Stabilized</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our warehouses in the High Ranges utilize natural cool air augmented by industrial dehumidifiers to maintain optimal conditions.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Temp: &lt; 25°C Constant
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Humidity: &lt; 10% Moisture
              </li>
            </ul>
          </div>

          {/* Card 2: Elevation & Airflow */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-emerald-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <Wind size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Scientific Stacking</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Goods are never stored on the floor. We use food-grade polymer pallets with specific spacing to ensure 360° airflow around every sack.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                6-inch Floor Clearance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Rodent-Proof Barriers
              </li>
            </ul>
          </div>

          {/* Card 3: Inventory Tech */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-purple-500 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <ScanBarcode size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Tracking</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every batch is barcoded upon entry. We strictly enforce First-In-First-Out (FIFO) to guarantee no stock ages beyond its prime.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Real-time Batch Aging
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Automated QC Alerts
              </li>
            </ul>
          </div>
        </div>
      </section>




    </div>
  );
};

export default StorageStandards;