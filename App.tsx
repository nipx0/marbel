
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-[#d4af37] selection:text-black stone-texture">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <section id="home">
          <Hero lang={lang} t={t.hero} />
        </section>
        
        <section id="about" className="pt-20">
          <About lang={lang} t={t.about} />
        </section>

        <section id="products" className="pt-20">
          <Services lang={lang} t={t.services} />
        </section>

        <section id="whyUs" className="pt-20">
          <WhyUs lang={lang} t={t.whyUs} />
        </section>

        <section id="gallery" className="pt-20">
          <Gallery lang={lang} />
        </section>

        <section id="testimonials" className="pt-20">
          <Testimonials lang={lang} />
        </section>

        <section id="contact" className="pt-20">
          <Contact lang={lang} t={t.contact} />
        </section>
      </main>

      <Footer lang={lang} t={t} />
      <StickyButtons lang={lang} t={t.hero} />
    </div>
  );
};

export default App;
