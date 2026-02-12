
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['whyUs'];
}

const WhyUs: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="bg-[#0c0c0c] border border-white/5 p-16 md:p-24 relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 reveal">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 ${lang === 'ar' ? 'font-sans' : 'font-display'}`}>
              {t.title}
            </h2>
            <p className="text-gray-500 font-light leading-relaxed font-luxury italic text-lg">
              {lang === 'ar' ? 'نلتزم بمعايير لا تقبل المساومة لضمان رضاكم الدائم.' : 'Uncompromising standards of excellence for those who demand the absolute best.'}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {t.items.map((item, idx) => (
              <div key={idx} className="reveal group space-y-4">
                <div className="text-[10px] font-bold text-[#c5a059] tracking-[0.5em] flex items-center gap-4">
                  VAL. 0{idx + 1}
                  <div className="h-px w-6 bg-[#c5a059]/30 group-hover:w-10 group-hover:bg-[#c5a059] transition-all"></div>
                </div>
                <h4 className={`text-2xl font-bold text-white tracking-wide ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
                  {item.title}
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
