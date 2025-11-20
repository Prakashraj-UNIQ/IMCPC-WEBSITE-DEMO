import { Link } from "react-router-dom";


export default function Footer() {
return (
<footer id="contact" className="bg-[#3d5513] text-white py-12 px-6 sm:px-10 lg:px-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
{/* Company */}
<div>
<h3 className="text-lime-500 font-semibold text-lg mb-3">Company</h3>
<p className="text-white text-sm leading-relaxed">
IMCPC - Idukki Mahila Cardamom Producer Company Limited
<br /> Empowering traditional spice growers through fair trade and
innovation.
</p>
</div>


{/* Links */}
<div>
<h3 className="text-lime-500 font-semibold text-lg mb-3">Links</h3>
<ul className="space-y-2 text-sm">
<li><a href="/" className="hover:text-lime-300">Home</a></li>
<li><a href="#about" className="hover:text-lime-300">About</a></li>
<li><a href="#products" className="hover:text-lime-300">Products</a></li>
<li><a href="#auctions" className="hover:text-lime-300">Auctions</a></li>
<li><a href="#contact" className="hover:text-lime-300">Contact</a></li>
</ul>
</div>


{/* Products */}
<div>
<h3 className="text-lime-500 font-semibold text-lg mb-3">Our Products</h3>
<ul className="space-y-2 text-sm">
<li className="hover:text-lime-300 cursor-pointer">Cardamom</li>
</ul>
</div>


{/* Community Impact */}
<div>
<h3 className="text-lime-500 font-semibold text-lg mb-3">Community Impact</h3>
<ul className="space-y-2 text-sm">
<li className="hover:text-lime-300 cursor-pointer">Sustainability</li>
<li className="hover:text-lime-300 cursor-pointer">Farmer Empowerment</li>
</ul>
</div>


{/* Contact */}
<div>
<h3 className="text-lime-500 font-semibold text-lg mb-3">Contact</h3>
<ul className="space-y-2 text-sm text-white">
<li>
Email: <a href="mailto:info@imcpc.com" className="hover:text-lime-300">info@imcpc.com</a>
</li>
<li>Phone: <span>+91 98765 43210</span></li>
<li>Location: <span>Idukki, Kerala, India</span></li>
</ul>
</div>
</div>


{/* Bottom Bar */}
<div className="border-t border-lime-700 mt-10 pt-6 text-center text-sm text-white space-y-2">
<p>© 2025 IMCPC - Idukki Mahila Cardamom Producer Company Limited.</p>
<p className="flex flex-col sm:flex-row items-center justify-center gap-2">
<span>Empowering Farmers • Enhancing Transparency • Enabling Growth</span>
<Link to="/privacy" className="hover:text-lime-300">Privacy Policy</Link>
</p>
</div>
</footer>
);
}