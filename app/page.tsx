"use client";

import { useState } from "react";
import { Menu, X, MapPin, Clock, Instagram, Facebook, ArrowRight, Leaf, Phone } from "lucide-react";

// --- ASSETS (Guaranteed Stable Unsplash Links) ---
const IMG = {
  // Hero: Greenhouse interior
  hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2500",
  // Farm: Basket of fresh vegetables
  farm: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200",
  // Menu 1: Salad Bowl
  bowl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200",
  // Menu 2: Toast (Avocado/Ricotta style)
  toast: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1200",
  // Menu 3: Wine
  wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200",
  // Location: Interior vibe
  interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      {/* ==================================================================
          HEADER & HERO SECTION
          ================================================================== */}
      <div className="p-4 md:p-6 pb-0">
        <header className="relative h-[85vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
          
          {/* Background Image */}
          <img 
            src={IMG.hero} 
            alt="Greenhouse dining interior with natural light" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2e05]/40 mix-blend-multiply" />

          {/* INNER CONTAINER: Content Constrained */}
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-between">
            
            {/* Navigation Bar */}
            <nav className="flex justify-between items-center p-6 md:p-10 text-white" aria-label="Main Navigation">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-[#bef264]" />
                <span className="font-bold text-2xl tracking-tight">Greenhouse.</span>
              </div>

              {/* Desktop Links */}
              <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest items-center">
                <a href="#menu" className="hover:text-[#bef264] transition-colors">Menu</a>
                <a href="#farm" className="hover:text-[#bef264] transition-colors">Our Farm</a>
                <a href="#visit" className="hover:text-[#bef264] transition-colors">Visit</a>
                <button className="bg-[#bef264] text-[#365314] px-6 py-2.5 rounded-full font-bold hover:bg-white hover:scale-105 transition-all focus:ring-2 focus:ring-white focus:outline-none">
                  Book Table
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white hover:text-[#bef264] transition p-2"
                aria-label="Open Menu"
              >
                <Menu className="w-8 h-8" />
              </button>
            </nav>

            {/* Hero Content */}
            <div className="p-6 md:p-10 md:pb-16 text-white w-full">
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
                Fresh &<br />
                Locally Grown.
              </h1>
              <p className="text-lg md:text-2xl font-medium max-w-lg mb-8 text-[#ecfccb]">
                A Kitsilano bistro sourcing ingredients directly from the Fraser Valley. From soil to plate in under 24 hours.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#menu" className="bg-white text-[#365314] px-8 py-4 rounded-full font-bold text-center hover:bg-[#ecfccb] transition">
                  View Seasonal Menu
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ==================================================================
          MOBILE MENU OVERLAY
          ================================================================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#365314] text-[#ecfccb] p-6 flex flex-col animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#bef264]" />
              <span className="font-bold text-2xl">Greenhouse.</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-3xl font-bold">
            <a href="#menu" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#farm" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Our Farm</a>
            <a href="#visit" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Locations</a>
            <a href="#contact" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
          <div className="mt-auto">
             <button className="w-full bg-[#bef264] text-[#365314] py-4 rounded-full font-bold text-lg">
               Book a Table
             </button>
          </div>
        </div>
      )}

      <main className="space-y-6 md:space-y-12 py-6 md:py-12">
        
        {/* ==================================================================
            SECTION 1: PHILOSOPHY (Wide Card, Constrained Content)
            ================================================================== */}
        <section id="farm" className="px-4 md:px-6">
          {/* Outer Card: Wide */}
          <div className="w-full bg-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20">
             {/* Inner Content: Constrained */}
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#4d7c0f] font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    Rooted in<br/>Vancouver Soil.
                  </h2>
                  <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 mb-8">
                    We believe that good food starts with good dirt. We partner exclusively with sustainable farms in Abbotsford and Langley to bring you produce that hasn't spent weeks on a truck.
                  </p>
                  <ul className="space-y-4 font-bold text-[#4d7c0f]">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#4d7c0f]" /> 100% Organic Produce
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#4d7c0f]" /> Ocean Wise Seafood
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#4d7c0f]" /> BC VQA Wines
                    </li>
                  </ul>
                </div>
                {/* Fixed Farm Image */}
                <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg group">
                  <img 
                    src={IMG.farm} 
                    alt="Crate of fresh vegetables" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                  />
                </div>
             </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 2: MENU PREVIEW (Constrained Grid)
            ================================================================== */}
        <section id="menu" className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto py-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black mb-4">Lunch Favorites</h2>
                  <p className="text-lg opacity-70 font-medium">Served daily from 11am - 3pm.</p>
               </div>
               <a href="#" className="hidden md:flex items-center gap-2 font-bold hover:gap-4 transition-all text-[#4d7c0f]">
                 View Full Menu <ArrowRight className="w-5 h-5" />
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* Item 1 */}
               <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                     <img 
                       src={IMG.bowl} 
                       alt="Green Goddess Bowl" 
                       className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                     />
                     <div className="absolute top-4 right-4 bg-white text-[#365314] px-4 py-1 rounded-full font-bold text-sm shadow-sm">
                       $18
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4d7c0f] transition">Green Goddess Bowl</h3>
                  <p className="opacity-70 leading-relaxed font-medium">Quinoa, avocado, roasted chickpeas, kale, and our signature tahini dressing.</p>
               </div>

               {/* Item 2 (Fixed Ricotta Image) */}
               <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                     <img 
                       src={IMG.toast} 
                       alt="Sourdough Toast with toppings" 
                       className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                     />
                     <div className="absolute top-4 right-4 bg-white text-[#365314] px-4 py-1 rounded-full font-bold text-sm shadow-sm">
                       $16
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4d7c0f] transition">Ricotta & Fig Toast</h3>
                  <p className="opacity-70 leading-relaxed font-medium">Nelson the Seagull sourdough, whipped ricotta, local honey, and fresh figs.</p>
               </div>

               {/* Item 3 */}
               <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                      <img 
                        src={IMG.wine} 
                        alt="Glass of red wine" 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      />
                      <div className="absolute top-4 right-4 bg-[#bef264] text-[#365314] px-4 py-1 rounded-full font-bold text-sm shadow-sm">
                       3pm - 6pm
                     </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e05]/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                         <h3 className="text-2xl font-bold">Happy Hour</h3>
                         <p className="font-medium opacity-90">$8 Wines & Bites</p>
                      </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4d7c0f] transition">The Wine List</h3>
                  <p className="opacity-70 leading-relaxed font-medium">Featuring exclusively BC VQA wines from the Okanagan Valley.</p>
               </div>
            </div>
            
            <div className="mt-12 text-center md:hidden">
               <button className="bg-[#365314] text-white px-8 py-3 rounded-full font-bold w-full">View Full Menu</button>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION 3: LOCATION (Wide Card, Constrained Content)
            ================================================================== */}
        <section id="visit" className="px-4 md:px-6">
          {/* Outer Card: Wide */}
          <div className="w-full bg-[#365314] text-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20">
             {/* Inner Content: Constrained */}
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                
                {/* Text Content */}
                <div>
                   <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">Visit Us.</h2>
                   
                   <div className="space-y-12">
                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                            <MapPin className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white mb-2">Kitsilano</h3>
                            <p className="text-lg opacity-80 leading-relaxed">
                               2284 West 4th Avenue<br/>
                               Vancouver, BC V6K 1N8
                            </p>
                            <a href="#" className="inline-block mt-4 underline decoration-[#bef264] underline-offset-4 hover:text-white text-[#bef264] font-bold">Get Directions</a>
                         </div>
                      </div>

                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                            <Clock className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg opacity-80">
                               <span>Mon - Thu</span> <span>11am - 10pm</span>
                               <span>Fri - Sat</span> <span>11am - 11pm</span>
                               <span>Sunday</span> <span>10am - 9pm</span>
                            </div>
                         </div>
                      </div>

                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                            <Phone className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                            <p className="text-lg opacity-80 mb-2">
                               (604) 555-0199
                            </p>
                            <p className="text-lg opacity-80">
                               hello@greenhousebistro.ca
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Map/Image Placeholder */}
                <div className="h-80 md:h-auto bg-[#1a2e05] rounded-[2rem] overflow-hidden relative border-4 border-[#4d7c0f]/30 shadow-2xl group">
                   <img 
                     src={IMG.interior} 
                     className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition duration-700" 
                     alt="Interior Map View" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white text-[#365314] px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Open Maps
                      </button>
                   </div>
                </div>

             </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          FOOTER (Constrained Content)
          ================================================================== */}
      <footer className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#365314]/10 pb-12 mb-12">
           <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#4d7c0f]" />
              <span className="font-bold text-2xl tracking-tight">Greenhouse.</span>
           </div>
           <div className="flex gap-6">
              <a href="#" aria-label="Instagram" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
                 <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
                 <Facebook className="w-5 h-5" />
              </a>
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-[#365314]/60 gap-4">
           <p>&copy; 2025 Greenhouse Bistro Ltd.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-[#365314]">Privacy Policy</a>
              <a href="#" className="hover:text-[#365314]">Careers</a>
              <a href="#" className="hover:text-[#365314]">Press</a>
           </div>
        </div>
      </footer>

    </div>
  );
}