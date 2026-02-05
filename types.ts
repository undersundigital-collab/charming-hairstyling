export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Content {
  business: {
    name: string;
    tagline: string;
    address: string;
    phone: string;
    phoneDisplay: string;
    mapsLink: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: Service[];
  testimonials: Testimonial[];
  contact: {
    title: string;
    subtitle: string;
    form: {
      namePlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      buttonText: string;
    };
  };
}