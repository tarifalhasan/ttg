export interface IService {
  title: string;
  description: string;
  id: string;
  icon: string;
}

export interface Ipackages {
  icon: string;
  title: string;
  features: string[];
  otherFeatures: string[];
}

export interface IBenefit {
  title: string;
  description: string;
}

export interface ITestimonial {
  title: string;
  author: {
    name: string;
    role: string;
  };
  id?: string;
}
