
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Testimonials: React.FC<Props> = ({ lang }) => {
  const reviews = [
    {
      name: 'عبدالرحمن العتيبي',
      role: 'صاحب فيلا',
      text: 'تجربة رائعة مع بيت الأحساء. تنوع الرخام لديهم لا يعلى عليه في المنطقة، والتركيب كان في غاية الدقة.',
    },
    {
      name: 'سارة السيف',
      role: 'مصممة ديكور',
      text: 'كمصممة، أجد دائماً ما أبحث عنه من تشكيلات سيراميك نادرة وعصرية تناسب عملائي المتميزين.',
    },
    {
      name: 'فهد البراهيم',
      role: 'مقاول مشاريع',
      text: 'سرعة التوريد والالتزام بالمواعيد هو ما جعلنا نعتمد عليهم في كافة مشاريعنا الكبرى في الهفوف.',
    }
  ];

  const enReviews = [
    {
      name: 'Abdulrahman Al-Otaibi',
      role: 'Villa Owner',
      text: 'An exceptional experience. Their stone diversity is unmatched in the region, and the craftsmanship is beyond words.',
    },
    {
      name: 'Sarah Al-Saif',
      role: 'Interior Designer',
      text: 'As a designer, I curate only the best. House of Ahsa consistently provides rare and avant-garde collections.',
    },
    {
      name: 'Fahad Al-Ibrahim',
      role: 'Project Lead',
      text: 'Punctuality and professional supply chains make them our primary partner for elite residential developments.',
    }
  ];

  const data = lang === 'ar' ? reviews : enReviews;

  return (
    <div className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-luxury text-white/[0.01] pointer-events-none select-none italic">
        Elegance
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-24">
           <h6 className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">{lang === 'ar' ? 'أصوات الثقة' : 'Voices of Trust'}</h6>
           <h2 className={`text-4xl md:text-6xl font-bold text-white ${lang === 'ar' ? 'font-sans' : 'font-display'}`}>
             {lang === 'ar' ? 'كلمات في حقنا' : 'Client Testimonials'}
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {data.map((r, i) => (
            <div key={i} className="reveal group p-2 relative text-center">
              <div className="mb-10 flex justify-center">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 text-4xl font-luxury group-hover:border-[#c5a059] group-hover:text-[#c5a059] transition-all duration-700 italic">
                  &ldquo;
                </div>
              </div>
              <p className="text-gray-400 italic font-light mb-10 leading-relaxed text-lg font-luxury">
                {r.text}
              </p>
              <div className="w-8 h-px bg-white/10 mx-auto mb-6 group-hover:w-12 group-hover:bg-[#c5a059] transition-all"></div>
              <h5 className="font-bold text-white tracking-widest uppercase text-xs">{r.name}</h5>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] mt-2 block font-bold">{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
