
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['hero'];
}

const StickyButtons: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-6">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/966135829534" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-white text-black rounded-none shadow-2xl hover:bg-[#c5a059] hover:-translate-y-2 transition-all duration-500"
      >
        <span className="text-xl">💬</span>
        <span className={`absolute ${lang === 'ar' ? 'right-full mr-6' : 'left-full ml-6'} whitespace-nowrap bg-black text-white px-6 py-3 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10`}>
           {t.ctaWhatsApp}
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:0135829534"
        className="group relative flex items-center justify-center w-14 h-14 bg-black text-[#c5a059] border border-[#c5a059]/30 rounded-none shadow-2xl hover:bg-[#c5a059] hover:text-black transition-all duration-500"
      >
        <span className="text-xl">📞</span>
        <span className={`absolute ${lang === 'ar' ? 'right-full mr-6' : 'left-full ml-6'} whitespace-nowrap bg-black text-white px-6 py-3 text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10`}>
           {t.ctaCall}
        </span>
      </a>
    </div>
  );
};

export default StickyButtons;
