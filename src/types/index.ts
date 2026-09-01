export type CategoryType = 
  | 'all' 
  | 'kitchens' 
  | 'bedrooms' 
  | 'living-rooms' 
  | 'home-decor' 
  | 'shops' 
  | 'offices' 
  | 'wardrobes' 
  | '3d-designs';

export type StyleType = 
  | 'modern' 
  | 'luxury' 
  | 'minimal' 
  | 'classic' 
  | 'contemporary';

export type ColorType = 
  | 'white' 
  | 'beige' 
  | 'black' 
  | 'gray' 
  | 'wood' 
  | 'dark';

export type SpaceType = 
  | 'small' 
  | 'medium' 
  | 'large';

export type SortType = 
  | 'newest' 
  | 'most-viewed' 
  | 'most-saved';

export interface DesignItem {
  id: string;
  title: string;
  titleEn?: string;
  slug: string;
  category: CategoryType;
  categoryArabic: string;
  style: StyleType;
  styleArabic: string;
  colors: ColorType[];
  colorsArabic: string[];
  space: SpaceType;
  spaceArabic: string;
  approximateArea: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
  materials: string[];
  tags: string[];
  views: number;
  favoritesCount: number;
  dateAdded: string;
  isFeatured: boolean;
  isMostViewed: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface CategoryInfo {
  id: CategoryType;
  nameArabic: string;
  nameEn: string;
  description: string;
  image: string;
  count: number;
}

export interface ServiceItem {
  id: string;
  titleArabic: string;
  titleEn: string;
  description: string;
  image: string;
  features: string[];
  icon: string;
}

export interface ProcessStep {
  step: number;
  titleArabic: string;
  titleEn: string;
  description: string;
  highlight: string;
}

export interface BeforeAfterItem {
  id: string;
  titleArabic: string;
  titleEn?: string;
  category?: CategoryType;
  categoryArabic: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
  location: string;
}

export interface ProjectRequestFormData {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  spaceSize: string;
  preferredStyle: string;
  budgetRange: string;
  details: string;
}
