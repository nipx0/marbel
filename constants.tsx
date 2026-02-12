
import { Content } from './types';

export const TRANSLATIONS: Record<'ar' | 'en', Content> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'منتجاتنا',
      whyUs: 'لماذا نحن',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
    },
    hero: {
      headline: 'حيث تتحول الأرضيات إلى فخامة لا تُنسى',
      subheadline: 'حلول السيراميك والرخام والحجر الفاخرة للمنازل والمشاريع الكبرى في الأحساء.',
      ctaCall: 'اتصل الآن',
      ctaWhatsApp: 'تواصل عبر واتساب',
      ctaVisit: 'زيارة المعرض',
    },
    about: {
      title: 'بيت الأحساء: إرث من الجودة',
      description: 'نحن في مؤسسة بيت الأحساء نؤمن بأن كل مساحة تستحق أن تُروى قصتها من خلال أجود أنواع الرخام والسيراميك. بخبرة طويلة في قلب الأحساء، نجمع بين التقاليد والابتكار لنقدم لكم حلولاً تليق بتطلعاتكم.',
      point1: 'تواجد عريق في الهفوف - الأحساء',
      point2: 'تشكيلة واسعة من السيراميك والحجر الفاخر',
      point3: 'خدمة عملاء احترافية ترافقكم في كل خطوة',
      point4: 'أسعار تنافسية بجودة تضاهي المعايير العالمية',
    },
    services: {
      title: 'مجموعتنا الفاخرة',
      subtitle: 'نقدم حلولاً مخصصة لا مجرد منتجات، مختارة بعناية لتناسب أرقى الأذواق.',
      items: [
        { title: 'بلاط السيراميك', desc: 'تصاميم إيطالية وإسبانية تضفي حيوية على جدرانكم وأرضياتكم.', img: '/assets/products/ceramic-tiles.jpg' },
        { title: 'الرخام والحجر الطبيعي', desc: 'فخامة الطبيعة المستخرجة من أجود المحاجر العالمية والمحلية.', img: '/assets/products/marble-stone.jpg' },
        { title: 'كسوة الحجر', desc: 'حلول واجهات تجمع بين العزل الحراري والجمال المعماري.', img: '/assets/products/stone-cladding.jpg' },
        { title: 'البلوك الخفيف', desc: 'حلول بناء ذكية وموفرة للطاقة لمشاريعكم الإنشائية.', img: '/assets/products/lightweight-blocks.jpg' },
        { title: 'حلول الأرضيات والجدران', desc: 'تصاميم متكاملة تناسب الفلل، القصور والمساحات التجارية.', img: '/assets/products/flooring-walls.jpg' },
        { title: 'التوريد والتركيب', desc: 'فريق متخصص يضمن أعلى معايير الدقة والاحترافية في التنفيذ.', img: '/assets/products/supply-installation.jpg' },
      ]
    },
    whyUs: {
      title: 'لماذا يختار النخبة بيت الأحساء؟',
      items: [
        { title: 'تنوع لا محدود', desc: 'مئات الألوان والتصاميم التي ترضي كافة الأذواق والميزانيات.' },
        { title: 'سمعة محلية موثوقة', desc: 'اسم ارتبط بالجودة والصدق في التعامل داخل الأحساء وخارجها.' },
        { title: 'احترافية عالية', desc: 'فريق عمل مدرب على تقديم استشارات فنية دقيقة لمشروعكم.' },
        { title: 'حلول متكاملة', desc: 'مثالية للفلل السكنية، المحلات التجارية، والمشاريع الحكومية.' },
      ]
    },
    contact: {
      title: 'ابدأ مشروعك معنا',
      subtitle: 'نحن هنا لمساعدتك في اختيار الحل الأمثل لمساحتك.',
      name: 'الاسم الكريم',
      phone: 'رقم الجوال',
      projectType: 'نوع المشروع (فيلا، تجاري، أخرى)',
      submit: 'إرسال الطلب',
      address: 'الهفوف، الأحساء - وسط الأحساء، المملكة العربية السعودية',
      hours: 'السبت - الخميس: ٨:٠٠ صباحاً - ٩:٠٠ مساءً',
      closing: 'ابدأ مشروعك معنا بثقة وجودة تدوم.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      whyUs: 'Why Us',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      headline: 'Where Floors Transform Into Timeless Luxury',
      subheadline: 'Premium ceramic, marble, and stone solutions for elite homes and projects in Al-Ahsa.',
      ctaCall: 'Call Now',
      ctaWhatsApp: 'WhatsApp Us',
      ctaVisit: 'Visit Showroom',
    },
    about: {
      title: 'Bait Al-Ahsa: A Legacy of Quality',
      description: 'At Bait Al-Ahsa, we believe every space deserves its story told through the finest marble and ceramics. With deep roots in Al-Ahsa, we blend tradition with innovation.',
      point1: 'Established Presence in Al-Hofuf, Al-Ahsa',
      point2: 'Extensive Selection of Luxury Ceramics & Stone',
      point3: 'Professional Customer Service at Every Step',
      point4: 'Competitive Pricing with Global Standards',
    },
    services: {
      title: 'Our Premium Collection',
      subtitle: 'We offer custom solutions, not mass products, carefully curated for refined tastes.',
      items: [
        { title: 'Ceramic Tiles', desc: 'Italian and Spanish designs that bring life to your walls and floors.', img: '/assets/products/ceramic-tiles.jpg' },
        { title: 'Marble & Natural Stone', desc: 'Natural luxury extracted from the finest local and global quarries.', img: '/assets/products/marble-stone.jpg' },
        { title: 'Stone Cladding', desc: 'Facade solutions combining thermal insulation and architectural beauty.', img: '/assets/products/stone-cladding.jpg' },
        { title: 'Lightweight Blocks', desc: 'Smart and energy-efficient building solutions for your construction.', img: '/assets/products/lightweight-blocks.jpg' },
        { title: 'Flooring & Walls', desc: 'Integrated designs suitable for villas, palaces, and commercial spaces.', img: '/assets/products/flooring-walls.jpg' },
        { title: 'Supply & Installation', desc: 'A specialized team ensuring the highest standards of precision.', img: '/assets/products/supply-installation.jpg' },
      ]
    },
    whyUs: {
      title: 'Why Elite Clients Choose Us?',
      items: [
        { title: 'Unlimited Variety', desc: 'Hundreds of colors and designs for all tastes and budgets.' },
        { title: 'Trusted Reputation', desc: 'A name synonymous with quality and honesty in Al-Ahsa.' },
        { title: 'High Professionalism', desc: 'A team trained to provide precise technical consultations.' },
        { title: 'Integrated Solutions', desc: 'Perfect for residential villas, shops, and government projects.' },
      ]
    },
    contact: {
      title: 'Start Your Project With Us',
      subtitle: 'We are here to help you choose the perfect solution for your space.',
      name: 'Name',
      phone: 'Phone Number',
      projectType: 'Project Type (Villa, Commercial, etc.)',
      submit: 'Submit Request',
      address: 'Al-Hofuf, Al-Ahsa - Central Al-Ahsa, Saudi Arabia',
      hours: 'Sat - Thu: 8:00 AM - 9:00 PM',
      closing: 'Start your project with us with confidence and lasting quality.',
    }
  }
};
