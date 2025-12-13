"use client";

import { ArrowRight } from "lucide-react";
import { IMG } from "../lib/constants";
import Link from "next/link"; // Import Next.js Link

export default function MenuSection() {
  const items = [
    {
      title: "Green Goddess Bowl",
      desc: "Quinoa, avocado, roasted chickpeas, kale, and our signature tahini dressing.",
      price: "$18",
      img: IMG.bowl,
    },
    {
      title: "Ricotta & Fig Toast",
      desc: "Nelson the Seagull sourdough, whipped ricotta, local honey, and fresh figs.",
      price: "$16",
      img: IMG.toast,
    },
    {
      title: "The Wine List",
      desc: "Featuring exclusively BC VQA wines from the Okanagan Valley.",
      price: "3pm - 6pm",
      img: IMG.wine,
      isHappyHour: true,
    },
  ];

  return (
    <section id="menu" className="px-4 md:px-6 pb-6 md:py-12">
      <div className="max-w-7xl mx-auto pt-12">
        
        {/* HEADER */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-16">
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-4">Lunch Favorites</h2>
              <p className="text-lg opacity-70 font-medium">Served daily from 11am - 3pm.</p>
           </div>
           
           {/* Desktop Link -> Updated to use Link and /menu */}
           <Link href="/menu" className="hidden md:flex items-center gap-2 font-bold hover:gap-4 transition-all text-[#4d7c0f]">
             View Full Menu <ArrowRight className="w-5 h-5" />
           </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {items.map((item, i) => (
             <div key={i} className="group cursor-pointer">
                {/* ... existing card code ... */}
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                   <div className={`absolute top-4 right-4 px-4 py-1 rounded-full font-bold text-sm shadow-sm ${item.isHappyHour ? "bg-[#bef264] text-[#365314]" : "bg-white text-[#365314]"}`}>
                     {item.price}
                   </div>
                   {item.isHappyHour && (
                     <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e05]/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white text-left">
                         <h3 className="text-2xl font-bold">Happy Hour</h3>
                         <p className="font-medium opacity-90">$8 Wines & Bites</p>
                      </div>
                     </>
                   )}
                </div>
                <div className="text-center md:text-left px-4 md:px-0">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4d7c0f] transition">{item.title}</h3>
                  <p className="opacity-70 leading-relaxed font-medium">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
        
        {/* MOBILE BUTTON -> Updated to use Link and /menu */}
        <div className="mt-12 text-center md:hidden relative z-10">
           <Link href="/menu">
             <button className="bg-[#bef264] text-[#365314] w-full py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer">
               View Full Menu <ArrowRight className="w-6 h-6" />
             </button>
           </Link>
        </div>
      </div>
    </section>
  );
}