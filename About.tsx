
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['about'];
}

const About: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="reveal relative z-10">
            <img 
              src="/assets/about-image.jpg" 
              alt="Showroom Design" 
              className="w-full aspect-[4/5] object-cover shadow-[40px_40px_0px_-10px_rgba(197,160,89,0.1)]"
            />
          </div>
          <div className="absolute -top-10 -left-10 text-[12rem] font-luxury text-white/[0.02] select-none leading-none">
            01
          </div>
        </div>

        <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
          <div className="reveal space-y-6">
            <h6 className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.4em] mb-4">
              {lang === 'ar' ? 'إرث الفخامة' : 'Heritage of Luxury'}
            </h6>
            <h2 className={`text-5xl md:text-7xl font-bold leading-tight text-white ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
              {t.title}
            </h2>
            <div className="w-20 h-px bg-[#c5a059]/40"></div>
          </div>
          
          <p className="reveal delay-100 text-gray-400 text-xl leading-relaxed font-light font-luxury italic">
            {t.description}
          </p>

          <div className="reveal delay-200 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-10 border-t border-white/5">
            {[t.point1, t.point2, t.point3, t.point4].map((point, idx) => (
              <div key={idx} className="group flex flex-col gap-4">
                <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.3em]">PART {idx + 1}</span>
                <span className="text-gray-300 text-lg font-light hover:text-white transition-colors cursor-default">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
