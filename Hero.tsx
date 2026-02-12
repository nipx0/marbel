
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['hero'];
}

const Hero: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl px-6 flex flex-col items-center">
        <div className="reveal mb-6 flex items-center gap-4">
          <div className="h-px w-8 bg-[#c5a059]"></div>
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase">
            {lang === 'ar' ? 'الرياض • الأحساء • الخبر' : 'Riyadh • Al-Ahsa • Al-Khobar'}
          </span>
          <div className="h-px w-8 bg-[#c5a059]"></div>
        </div>
        
        <h1 className={`reveal delay-100 text-5xl md:text-8xl font-bold mb-10 leading-[1.1] text-white ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
          <span className="block text-white/90 font-light italic mb-2 text-2xl md:text-3xl tracking-widest uppercase">
            {lang === 'ar' ? 'فن التجسيد' : 'The Art of Living'}
          </span>
          <span className="gold-gradient">{t.headline}</span>
        </h1>
        
        <p className="reveal delay-200 text-base md:text-lg text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          {t.subheadline}
        </p>
        
        <div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-10">
          <a 
            href="tel:0135829534"
            className="group relative px-12 py-5 border border-[#c5a059] text-[#c5a059] font-bold uppercase text-[11px] tracking-[0.3em] overflow-hidden transition-all duration-700 hover:text-black"
          >
            <span className="relative z-10">{t.ctaCall}</span>
            <div className="absolute inset-0 bg-[#c5a059] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
          </a>
          
          <a 
            href="#gallery"
            className="group flex items-center gap-4 text-white font-bold uppercase text-[11px] tracking-[0.3em] transition-all duration-300"
          >
            <span className="group-hover:text-[#c5a059] transition-colors">{t.ctaVisit}</span>
            <span className="w-12 h-px bg-white/30 group-hover:w-16 group-hover:bg-[#c5a059] transition-all"></span>
          </a>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-10 bottom-24 hidden lg:block origin-left -rotate-90 text-[10px] tracking-[0.8em] text-white/20 uppercase font-bold">
        Established MMIV
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">{lang === 'ar' ? 'اكتشف' : 'Discover'}</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
