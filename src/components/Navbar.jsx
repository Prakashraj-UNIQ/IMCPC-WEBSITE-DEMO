// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; 
// import log from "../assets/cardmon_log.png";
// import { Link } from "react-router-dom";


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // ✅ Section names for scrolling
//   const navItems = [
//     { label: "Home", link: "/" },
//     { label: "About us", link: "/about" },
//     { label: "Cardamom", link: "/cardamom" },
//     { label: "Gallery", link: "/gallery" },
//     { label: "Contact us", link: "/contact" }
//   ];

//   // Fixed Tailwind Classes for a simple, professional white navbar
//   const navClasses = " sticky top-0 z-50 w-full";
//   const linkColorClasses = "text-stone-700";
//   const mobileIconClasses = "text-emerald-800";
//   const logoTextClasses = "text-emerald-950";
//   const logoSubTextClasses = "text-stone-600";


//   return (
//     <nav className={navClasses}>
//       <div className="px-4 sm:px-6 lg:px-20 bg-white max-w-full mx-auto">
//         <div className="flex items-center justify-between h-20"> 
          
//           {/* 🔰 Logo Section */}
//           <a
//             href="#home"
//             // smooth, duration, and offset are properties of react-scroll, 
//             // which aren't fully compatible with Link from react-router-dom. 
//             // Keeping them in comments for context, but rely on Link routing.
//             // smooth={true}
//             // duration={200}
//             // offset={-5}
//             className="flex items-center gap-3 cursor-pointer group"
//           >
//             <img
//               src={log}
//               alt="IMCPC Logo"
//               className="w-12 h-12 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div>
//               <h1 className={`text-xl font-bold font-serif ${logoTextClasses}`}>
//                 IMCPC
//               </h1>
//               <p className={`text-xs font-serif leading-tight tracking-wide ${logoSubTextClasses}`}>
//                 Idukki Mahila Cardamom Producer
//               </p>
//             </div>
//           </a>

//           {/* 💻 Desktop Menu */}
//           <ul className={`hidden md:flex items-center space-x-10  font-serif font-medium  tracking-wide ${linkColorClasses}`}>
//             {navItems.map((item, idx) => (
//               <li key={idx}>
//                 <Link
//                   to={item.link}
//                   // smooth={true}
//                   // duration={500}
//                   // offset={-80} 
//                   className="cursor-pointer transition duration-300 relative group text-lg"
//                 >
//                   {item.label}
//                   {/* Elegant underline hover effect */}
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//                 </Link>
//               </li>
//             ))}
//             {/* Call-to-action button */}
//             <li>
//               <button 
//                 className="px-5 py-2 bg-emerald-700 text-white rounded-full font-semibold shadow-md hover:bg-emerald-800 transition-colors duration-300 ml-4"
//               >
//                 Digital Auction
//               </button>
//             </li>
//           </ul>

//           {/* 📱 Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className={`md:hidden focus:outline-none ${mobileIconClasses}`}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* 📱 Mobile Menu Dropdown */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
//       >
//         <ul className="flex flex-col items-start bg-stone-50 py-4 space-y-2 text-emerald-950 font-medium border-t border-stone-200 shadow-inner px-6">
//           {navItems.map((item, idx) => (
//             <li key={idx} className="w-full">
//               <Link
//                 to={item.link}
//                 onClick={toggleMenu} // Close menu on click
//                 className="block w-full px-3 py-2 text-lg rounded-lg transition-colors hover:bg-emerald-100 hover:text-emerald-800"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//             {/* Added Mobile CTA */}
//             <li className="w-full pt-2">
//               <button className="w-full px-5 py-2 bg-emerald-700 text-white rounded-lg font-semibold shadow-md hover:bg-emerald-800 transition-colors duration-300">
//                 Digital Auction
//               </button>
//             </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
// Import useLocation from react-router-dom to get the current URL path
import { Menu, X } from "lucide-react"; 
import log from "../assets/cardmon_log.png";
import { Link, useLocation } from "react-router-dom"; // <-- Added useLocation


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Get the current URL pathname
  const location = useLocation(); 
  const currentPath = location.pathname;

  // ✅ Section names for scrolling
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Cardamom", link: "/cardamom" },
    { label: "Gallery", link: "/gallery" },
    { label: "Contact us", link: "/contact" }
  ];

  // Fixed Tailwind Classes for a simple, professional white navbar
  const navClasses = " sticky top-0 z-50 w-full";
  // Updated text color classes for non-active links
  const linkColorClasses = "text-stone-700"; 
  const mobileIconClasses = "text-emerald-800";
  const logoTextClasses = "text-emerald-950";
  const logoSubTextClasses = "text-stone-600";
  
  // New: Active styles
  const activeLinkClasses = "text-emerald-700 font-bold";
  const inactiveLinkClasses = `hover:text-emerald-700 ${linkColorClasses}`;


  return (
    <nav className={navClasses}>
      <div className="px-4 sm:px-6 lg:px-20 bg-white max-w-full mx-auto">
        <div className="flex items-center justify-between h-20"> 
          
          {/* 🔰 Logo Section */}
          {/* NOTE: Changed a tag to Link and updated the path to '/' */}
          <Link
            to="/" 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={log}
              alt="IMCPC Logo"
              className="w-12 h-12 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h1 className={`text-xl font-bold font-serif ${logoTextClasses}`}>
                IMCPC
              </h1>
              <p className={`text-xs font-serif leading-tight tracking-wide ${logoSubTextClasses}`}>
                Idukki Mahila Cardamom Producer
              </p>
            </div>
          </Link>

          {/* 💻 Desktop Menu */}
          <ul className={`hidden md:flex items-center space-x-10 font-serif font-medium tracking-wide`}>
            {navItems.map((item, idx) => {
              // Determine if the current item is the active link
              const isActive = (
                currentPath === item.link || 
                (item.link === "/" && currentPath === "/") // Ensures exact match for home
              );

              return (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className={`
                      cursor-pointer transition duration-300 relative group text-lg
                      ${isActive ? activeLinkClasses : inactiveLinkClasses}
                    `}
                  >
                    {item.label}
                    {/* Elegant underline hover effect (always visible on active link) */}
                    <span 
                      className={`
                        absolute bottom-0 left-0 w-full h-0.5 bg-emerald-700 transform transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    ></span>
                  </Link>
                </li>
              );
            })}
            {/* Call-to-action button */}
            <li>
              <button 
                className="px-5 py-2 bg-emerald-700 text-white rounded-full font-semibold shadow-md hover:bg-emerald-800 transition-colors duration-300 ml-4"
              >
                Digital Auction
              </button>
            </li>
          </ul>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden focus:outline-none ${mobileIconClasses}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-start bg-stone-50 py-4 space-y-2 font-medium border-t border-stone-200 shadow-inner px-6">
          {navItems.map((item, idx) => {
            const isActive = (
              currentPath === item.link || 
              (item.link === "/" && currentPath === "/")
            );

            return (
              <li key={idx} className="w-full">
                <Link
                  to={item.link}
                  onClick={toggleMenu} // Close menu on click
                  className={`
                    block w-full px-3 py-2 text-lg rounded-lg transition-colors 
                    ${isActive 
                      ? "bg-emerald-100 text-emerald-800 font-bold" // Active mobile style
                      : "text-emerald-950 hover:bg-emerald-50 hover:text-emerald-800" // Inactive mobile style
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          {/* Added Mobile CTA */}
          <li className="w-full pt-2">
            <button className="w-full px-5 py-2 bg-emerald-700 text-white rounded-lg font-semibold shadow-md hover:bg-emerald-800 transition-colors duration-300">
              Digital Auction
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}