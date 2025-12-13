import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import { Leaf } from "lucide-react";
import type { Metadata } from 'next';

// --- MENU DATA ---
const MENU_ITEMS = [
  {
    category: "Small Plates",
    items: [
      { name: "Whipped Ricotta", price: "$16", desc: "Local honey, fresh figs, thyme, grilled sourdough.", tags: ["V"] },
      { name: "Blistered Shishitos", price: "$12", desc: "Maldon salt, lime zest, garlic aioli.", tags: ["GF", "V"] },
      { name: "Beef Carpaccio", price: "$21", desc: "Truffle oil, parmesan, capers, arugula.", tags: ["GF"] },
      { name: "Heirloom Tomato Tart", price: "$18", desc: "Puff pastry, basil pesto, burrata.", tags: ["V"] },
    ]
  },
  {
    category: "Bowls & Greens",
    items: [
      { name: "Green Goddess", price: "$19", desc: "Kale, quinoa, avocado, chickpeas, tahini dressing.", tags: ["VG", "GF"] },
      { name: "Pacific Salmon", price: "$24", desc: "Wild sockeye, wild rice, edamame, miso glaze.", tags: ["GF"] },
      { name: "Harvest Cobb", price: "$22", desc: "Roasted chicken, squash, egg, blue cheese, apple cider vinaigrette.", tags: ["GF"] },
    ]
  },
  {
    category: "Mains",
    items: [
      { name: "Fraser Valley Duck", price: "$34", desc: "Pan seared breast, parsnip puree, blackberry reduction.", tags: ["GF"] },
      { name: "Mushroom Risotto", price: "$28", desc: "Foraged wild mushrooms, truffle butter, parmesan crisp.", tags: ["V", "GF"] },
      { name: "Steak Frites", price: "$38", desc: "6oz Flat iron, peppercorn sauce, kennebec fries.", tags: ["GF"] },
      { name: "Halibut Burger", price: "$26", desc: "Brioche bun, tartar sauce, slaw, served with fries.", tags: [] },
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Lemon Basil Tart", price: "$12", desc: "Shortbread crust, torched meringue.", tags: ["V"] },
      { name: "Dark Chocolate Mousse", price: "$14", desc: "Sea salt, olive oil, hazelnut crumble.", tags: ["GF", "V"] },
    ]
  },
];

export const metadata: Metadata = {
  title: 'Seasonal Menu | Greenhouse Bistro',
  description: 'Explore our farm-to-table menu featuring local ingredients from Vancouver and the Fraser Valley.',
};

export default function MenuPage() {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Greenhouse Bistro Seasonal Menu",
    "description": "Farm-to-table dining featuring local Vancouver ingredients.",
    "hasMenuSection": MENU_ITEMS.map(section => ({
      "@type": "MenuSection",
      "name": section.category,
      "hasMenuItem": section.items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.desc,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('$', ''),
          "priceCurrency": "CAD"
        }
      }))
    }))
  };

  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HEADER --- */}
      <div className="p-4 md:p-6 pb-0">
        <header className="relative h-[60vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
          {/* 1. Background Image */}
          <img 
            src={IMG.menuHeader} 
            alt="Chef plating fresh farm food" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] motion-reduce:transition-none group-hover:scale-105"
          />
          
          {/* 2. Green Overlay */}
          <div className="absolute inset-0 bg-[#1a2e05]/60 mix-blend-multiply" />

          {/* 3. NEW: Top Black Gradient Fade (Matches Homepage Hero) */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          {/* 4. Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-white pb-20">
              <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md">Farm to Table</span>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 drop-shadow-lg">
                Seasonal Menu.
              </h1>
            </div>
          </div>
        </header>
      </div>

      {/* --- MENU CONTENT --- */}
      <main className="px-4 md:px-6 py-6 md:py-12">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl">
          <div className="max-w-4xl mx-auto">
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mb-16 text-sm font-bold text-[#365314]/60 uppercase tracking-widest" aria-hidden="true">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#bef264]"></span> GF = Gluten Free</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#4d7c0f]"></span> V = Vegetarian</span>
            </div>

            {/* Menu Categories */}
            <div className="space-y-20">
              {MENU_ITEMS.map((section, idx) => (
                <section key={idx} aria-labelledby={`category-${idx}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <Leaf className="w-6 h-6 text-[#bef264]" aria-hidden="true" />
                    <h2 id={`category-${idx}`} className="text-3xl md:text-4xl font-black text-[#365314]">
                      {section.category}
                    </h2>
                  </div>
                  
                  <div className="grid gap-8">
                    {section.items.map((item, itemIdx) => (
                      <article key={itemIdx} className="group flex flex-col md:flex-row justify-between md:items-end border-b border-[#ecfccb] pb-6 hover:bg-[#f7fee7]/50 transition p-4 rounded-2xl">
                        <div className="md:w-3/4">
                          <div className="flex items-baseline gap-3 mb-2">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <div className="flex gap-2" aria-label="Dietary tags">
                              {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-black bg-[#ecfccb] text-[#365314] px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-[#365314]/70 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0 font-black text-xl text-[#4d7c0f]">
                          {item.price}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Dietary Note */}
            <div className="mt-20 text-center p-8 bg-[#f7fee7] rounded-3xl">
              <p className="font-bold opacity-70">
                Please inform your server of any allergies. <br/>
                An 18% gratuity will be added to parties of 6 or more.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}