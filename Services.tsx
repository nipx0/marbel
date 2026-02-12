
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['services'];
}

const Services: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="bg-[#050505] py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-32 space-y-6">
          <h2 className={`text-6xl md:text-8xl font-bold text-white/10 select-none absolute left-0 right-0 -mt-10 uppercase tracking-[0.2em] font-luxury`}>
            {lang === 'ar' ? 'المجموعات' : 'Collections'}
          </h2>
          <h3 className={`relative z-10 text-4xl md:text-6xl font-bold text-white ${lang === 'ar' ? 'font-sans' : 'font-display'}`}>
            {t.title}
          </h3>
          <p className="relative z-10 text-gray-500 max-w-xl mx-auto font-light text-lg italic font-luxury">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-20">
          {t.items.map((item, idx) => (
            <div key={idx} className="reveal group px-6">
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700"></div>
                <div className="absolute top-6 right-6 text-[10px] font-bold text-white tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                  REF. {100 + idx}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold tracking-tight text-white ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
                <div className="pt-4 flex items-center gap-4 group/btn cursor-pointer">
                  <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#c5a059]">
                    {lang === 'ar' ? 'عرض المجموعة' : 'Exhibition Details'}
                  </span>
                  <div className="h-px flex-grow bg-white/10 group-hover/btn:bg-[#c5a059] transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
