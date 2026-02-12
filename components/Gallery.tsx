
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Gallery: React.FC<Props> = ({ lang }) => {
  const images = [
    '/assets/gallery/1.jpg',
    '/assets/gallery/2.jpg',
    '/assets/gallery/3.jpg',
    '/assets/gallery/4.jpg',
    '/assets/gallery/5.jpg',
    '/assets/gallery/6.jpg',
  ];

  return (
    <div className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h6 className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Portefeuille</h6>
            <h2 className={`text-5xl md:text-7xl font-bold text-white mb-6 ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
              {lang === 'ar' ? 'المعرض الرقمي' : 'Digital Gallery'}
            </h2>
            <p className="text-gray-500 font-light italic text-lg font-luxury">
              {lang === 'ar' ? 'استكشف مساحات صُممت بعناية لتكون أيقونة من الجمال.' : 'Explore spaces crafted with meticulous attention to detail.'}
            </p>
          </div>
          <button className="group flex items-center gap-6 px-10 py-5 bg-[#c5a059] text-black text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-white">
             {lang === 'ar' ? 'تصفح الكل' : 'View Collection'}
             <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <div key={i} className="reveal relative group overflow-hidden bg-white/5 cursor-crosshair">
              <img 
                src={img} 
                alt="Project Exhibition" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-10 text-center">
                 <div className="w-16 h-px bg-[#c5a059] mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700"></div>
                 <span className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-2">Private Villa</span>
                 <span className="text-[#c5a059] font-luxury italic text-xl">Riyadh, 2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
