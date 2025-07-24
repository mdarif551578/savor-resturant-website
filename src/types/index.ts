
export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Career {
  title: string;
  description: string;
  requirements: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
