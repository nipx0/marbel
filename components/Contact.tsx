
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content['contact'];
}

const Contact: React.FC<Props> = ({ lang, t }) => {
  return (
    <div className="bg-[#050505] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-16">
            <div className="reveal space-y-6">
              <h6 className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">{lang === 'ar' ? 'تواصل معنا' : 'Concierge'}</h6>
              <h2 className={`text-5xl md:text-7xl font-bold text-white ${lang === 'ar' ? 'font-sans' : 'font-display'}`}>
                {t.title}
              </h2>
              <p className="text-gray-500 text-xl font-light font-luxury italic max-w-sm">
                {t.subtitle}
              </p>
            </div>

            <div className="reveal delay-100 space-y-12">
              <div className="group cursor-default">
                <h4 className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.4em] mb-3">
                  {lang === 'ar' ? 'المعرض الرئيسي' : 'Main Atelier'}
                </h4>
                <p className="text-white text-lg font-light leading-relaxed max-w-xs transition-colors group-hover:text-[#c5a059]">{t.address}</p>
              </div>

              <div className="group cursor-default">
                <h4 className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.4em] mb-3">
                  {lang === 'ar' ? 'الخط المباشر' : 'Direct Line'}
                </h4>
                <p className="text-white text-3xl font-display transition-colors group-hover:text-[#c5a059]" dir="ltr">013 582 9534</p>
              </div>

              <div className="group cursor-default">
                <h4 className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.4em] mb-3">
                  {lang === 'ar' ? 'ساعات العمل' : 'Hours'}
                </h4>
                <p className="text-white font-light tracking-wide">{t.hours}</p>
              </div>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/YourLocationLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reveal delay-200 block w-full h-[300px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border border-white/5"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7610444535316!2d49.567086876116484!3d25.412798822432924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e379658f8099865%3A0x7d2870199f7d4648!2z2YXYp9mE2YXYp9mG2YrZhyDZiNmE2YTYudmB2YjZhiDZgdmK2Kog2KfZhNij2K3Ys9mI2KfYoQ!5e0!3m2!1sen!2ssa!4v1711234567890!5m2!1sen!2ssa" 
                className="w-full h-full border-0 pointer-events-none"
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </a>
          </div>

          <div className="lg:col-span-7 bg-[#0c0c0c] p-10 md:p-20 border border-white/5 relative reveal shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#c5a059]/30"></div>
            <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">{t.name}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#c5a059] transition-all font-light text-xl"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">{t.phone}</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#c5a059] transition-all font-light text-xl"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">{t.projectType}</label>
                <select className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#c5a059] transition-all font-light text-xl appearance-none cursor-pointer">
                  <option className="bg-[#0c0c0c]">{lang === 'ar' ? 'فيلا خاصة' : 'Private Villa'}</option>
                  <option className="bg-[#0c0c0c]">{lang === 'ar' ? 'مجمع سكني' : 'Residential Compound'}</option>
                  <option className="bg-[#0c0c0c]">{lang === 'ar' ? 'مقر شركة' : 'Corporate HQ'}</option>
                  <option className="bg-[#0c0c0c]">{lang === 'ar' ? 'أخرى' : 'Other'}</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">{lang === 'ar' ? 'ملاحظات إضافية' : 'Bespoke Requirements'}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[#c5a059] transition-all font-light text-lg resize-none"
                ></textarea>
              </div>

              <button className="group relative w-full py-8 bg-white text-black font-bold uppercase tracking-[0.6em] text-[10px] overflow-hidden transition-all duration-700 hover:bg-[#c5a059]">
                <span className="relative z-10">{t.submit}</span>
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-bold">
                  {t.closing}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
