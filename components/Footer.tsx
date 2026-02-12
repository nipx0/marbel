
import React from 'react';
import { Content, Language } from '../types';

interface Props {
  lang: Language;
  t: Content;
}

const Footer: React.FC<Props> = ({ lang, t }) => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <h3 className={`text-2xl font-bold gold-gradient ${lang === 'ar' ? 'font-sans' : 'font-luxury'}`}>
                {lang === 'ar' ? 'مؤسسة بيت الأحساء' : 'Bait Al-Ahsa Est.'}
              </h3>
            </div>
            <p className="text-gray-500 font-light max-w-sm leading-relaxed">
              {lang === 'ar' 
                ? 'الوجهة الأولى في منطقة الأحساء لأرقى أنواع السيراميك والرخام والحجر الطبيعي. نجمع الفخامة بالجودة لنبني معكم بيوت المستقبل.' 
                : 'The premier destination in Al-Ahsa for the finest ceramics, marble, and natural stone. Combining luxury with quality for future homes.'}
            </p>
            <div className="flex gap-4">
               {['Instagram', 'Snapchat', 'WhatsApp'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                    <span className="sr-only">{social}</span>
                    ●
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">{t.nav.about}</a></li>
              <li><a href="#products" className="hover:text-[#d4af37] transition-colors">{t.nav.products}</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">{lang === 'ar' ? 'تواصل معنا' : 'Connect'}</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li className="flex gap-2"><span>📞</span> <span dir="ltr">013 582 9534</span></li>
              <li className="flex gap-2"><span>📧</span> info@ahsahouse.com</li>
              <li className="flex gap-2 leading-relaxed"><span>📍</span> {t.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Bait Al-Ahsa. All Rights Reserved. Designed for Excellence.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
