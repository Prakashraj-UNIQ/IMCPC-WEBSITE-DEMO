import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react"; // Imported icons for contact

export default function Footer() {
  return (
    // COLOR CHANGE: Dark, premium emerald background
    <footer id="contact" className="bg-emerald-950 text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Company Logo & Mission */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Leaf size={32} className="text-emerald-400" />
            <h3 className="text-2xl font-bold font-serif text-emerald-400">IMCPC</h3>
          </div>
          <p className="text-stone-300 text-base leading-relaxed max-w-sm">
            IMCPC - Idukki Mahila Cardamom Producer Company Limited.
            <br /> Our Mission: Empowering traditional spice growers through fair trade and digital innovation.
          </p>
        </div>


        {/* Column 2: Quick Links */}
        <div>
          {/* COLOR CHANGE: Emerald accent color */}
          <h3 className="text-emerald-400 font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-stone-300 hover:text-emerald-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-stone-300 hover:text-emerald-300 transition-colors">About Us</Link></li>
            <li><Link to="/cardamom" className="text-stone-300 hover:text-emerald-300 transition-colors">Cardamom Grading</Link></li>
            <li><Link to="/auctions" className="text-stone-300 hover:text-emerald-300 transition-colors">Digital Auctions</Link></li>
            <li><Link to="/contact" className="text-stone-300 hover:text-emerald-300 transition-colors">Contact Us</Link></li>
          </ul>
        </div>


        {/* Column 3: Focus & Impact */}
        <div>
          {/* COLOR CHANGE: Emerald accent color */}
          <h3 className="text-emerald-400 font-bold text-lg mb-4">Impact</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li className="hover:text-emerald-300 cursor-pointer transition-colors">Sustainability Certifications</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors">Farmer Empowerment Programs</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors">Traceability & Purity</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors">Core Products: Cardamom</li>
          </ul>
        </div>


        {/* Column 4: Contact Information */}
        <div>
          {/* COLOR CHANGE: Emerald accent color */}
          <h3 className="text-emerald-400 font-bold text-lg mb-4">Reach Us</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-emerald-400 shrink-0"/>
              <a href="mailto:info@imcpc.com" className="hover:text-emerald-300 transition-colors">info@imcpc.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-emerald-400 shrink-0"/>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-emerald-400 shrink-0 mt-0.5"/>
              <span>Idukki, High Ranges, Kerala, India</span>
            </li>
          </ul>
        </div>
      </div>


      {/* Bottom Bar (Copyright & Policy) */}
      {/* Used darker emerald border for clear separation */}
      <div className="border-t border-emerald-800 mt-12 pt-6 text-center text-sm text-stone-400 space-y-3">
        <p className="font-medium">
          © {new Date().getFullYear()} IMCPC - Idukki Mahila Cardamom Producer Company Limited.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-stone-500">
          <span className="text-emerald-400 font-semibold tracking-wider">
            Empowering Farmers • Enhancing Transparency • Enabling Growth
          </span>
          <span className="hidden sm:inline text-stone-600">|</span>
          <Link to="/privacy" className="hover:text-emerald-300 transition-colors underline underline-offset-4">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-emerald-300 transition-colors underline underline-offset-4">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}