
import React, { useState, useEffect } from 'react';
import { Language, Content } from '../types';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
  t: Content['nav'];
}

const Navbar: React.FC<Props> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.products, href: '#products' },
    { name: t.whyUs, href: '#whyUs' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass py-5 border-b border-[#c5a059]/20 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-[0.1em] gold-gradient leading-none ${lang === 'ar' ? 'font-sans' : 'font-luxury uppercase'}`}>
              {lang === 'ar' ? 'بيت الأحساء' : 'House of Ahsa'}
            </span>
            <span className="text-[8px] uppercase tracking-[0.6em] text-gray-500 font-bold mt-1">Atelier of Stone</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-12 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[10px] font-bold hover:text-[#c5a059] transition-colors duration-500 tracking-[0.3em] uppercase text-white/70">
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10"></div>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-[10px] tracking-[0.2em] font-bold text-[#c5a059] hover:text-white transition-all uppercase"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>

        <div className="md:hidden">
           <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="w-10 h-10 border border-[#c5a059]/30 flex items-center justify-center text-[10px] font-bold text-[#c5a059] rounded-none"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
