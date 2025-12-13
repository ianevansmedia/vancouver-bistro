import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import { Leaf, MapPin, Sun, Droplets } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Farm & Suppliers | Greenhouse Bistro',
  description: 'Meet the local producers from the Fraser Valley and Okanagan who supply our organic ingredients.',
};

export default function FarmPage() {
  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      {/* --- HERO SECTION --- */}
      <div className="p-4 md:p-6 pb-0">
        <header className="relative h-[60vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
          {/* 1. Background Image */}
          <img 
            src={IMG.field} 
            alt="Fraser Valley Farm Field" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] group-hover:scale-105"
          />
          
          {/* 2. Green Overlay */}
          <div className="absolute inset-0 bg-[#1a2e05]/40 mix-blend-multiply" />

          {/* 3. NEW: Top Black Gradient Fade (Matches Home & Menu) */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          {/* 4. Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-white pb-20">
              <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md">Sourcing</span>
              <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 drop-shadow-lg">
                Dirty Hands,<br/>Clean Food.
              </h1>
            </div>
          </div>
        </header>
      </div>

      <main className="space-y-6 md:space-y-12 py-6 md:py-12">

        {/* --- INTRODUCTION --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto bg-[#365314] text-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center shadow-xl">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight max-w-3xl mx-auto text-white">
              "We don&apos;t write the menu. <br/>
              <span className="text-[#bef264]">The weather does.</span>"
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-80 max-w-2xl mx-auto">
              Our kitchen operates on a 24-hour cycle. What is harvested in Abbotsford this morning is on your plate in Kitsilano tonight. No warehouses, no long-haul trucks. Just fresh, honest food.
            </p>
          </div>
        </section>

        {/* --- SUPPLIER GRID --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Vegetables */}
              <div className="group bg-[#ecfccb] text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.hands} alt="Crate of Vegetables" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Leaf className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2">Valley Greens</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Abbotsford, BC
                </p>
                <p className="opacity-80 leading-relaxed font-medium">
                  Supplying our kale, heirloom tomatoes, and root vegetables. Certified organic since 1998.
                </p>
              </div>

              {/* Card 2: Wine */}
              <div className="group bg-[#ecfccb] text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.vineyard} alt="Vineyard" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Sun className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2">Okanagan Crush</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Oliver, BC
                </p>
                <p className="opacity-80 leading-relaxed font-medium">
                  A curated selection of natural wines. Low intervention, high flavor, straight from the desert.
                </p>
              </div>

              {/* Card 3: Seafood */}
              <div className="group bg-[#ecfccb] text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.seafood} alt="Seafood Dish" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Droplets className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2">Pacific Wild</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Tofino, BC
                </p>
                <p className="opacity-80 leading-relaxed font-medium">
                  Line-caught halibut and spot prawns. We only serve what is in season and Ocean Wise recommended.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- MEET THE CHEF --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="relative h-[500px] md:h-auto">
                  <img src={IMG.chef} alt="Chef Headshot" className="absolute inset-0 w-full h-full object-cover" />
               </div>
               <div className="p-12 md:p-24 flex flex-col justify-center">
                  <span className="text-[#4d7c0f] font-bold uppercase tracking-widest text-sm mb-4">The Kitchen</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#365314]">Chef Michael Chen</h2>
                  <p className="text-lg font-medium opacity-70 leading-relaxed mb-8">
                    "I want to taste the rain in the mushrooms and the sun in the tomatoes. My job isn&apos;t to cook the food, it&apos;s to not mess up what nature has already perfected."
                  </p>
                  <div className="flex gap-4">
                     <span className="bg-[#f7fee7] px-4 py-2 rounded-full font-bold text-sm">Michelin Alum</span>
                     <span className="bg-[#f7fee7] px-4 py-2 rounded-full font-bold text-sm">Born in BC</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}