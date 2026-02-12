
export type Language = 'ar' | 'en';

export interface Content {
  nav: {
    home: string;
    about: string;
    products: string;
    whyUs: string;
    gallery: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaCall: string;
    ctaWhatsApp: string;
    ctaVisit: string;
  };
  about: {
    title: string;
    description: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      img: string;
    }[];
  };
  whyUs: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    projectType: string;
    submit: string;
    address: string;
    hours: string;
    closing: string;
  };
}
