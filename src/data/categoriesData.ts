import { CategoryInfo } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'kitchens',
    nameArabic: 'مطابخ حديثة فاخرة',
    nameEn: 'Modern Luxury Kitchens',
    description: 'مطابخ عصرية مخصصة تجمع بين الفخامة والوظيفة العملية بخامات PVC و MDF مع أسطح رخام وكوارتز وأجهزة مدمجة.',
    image: getProjectImage('p1.jpg'),
    count: 31
  },
  {
    id: 'bedrooms',
    nameArabic: 'غرف نوم وأجنحة فندقية',
    nameEn: 'Luxury Bedroom Suites',
    description: 'تصميم وتصنيع غرف نوم رئيسية ماستر بتكسيات خشبية جدارية، خلفيات سرير منجدة، تسريحات، ودواليب ملابس مدمجة.',
    image: getProjectImage('b5.jpg'),
    count: 14
  },
  {
    id: 'wardrobes',
    nameArabic: 'خزائن ودواليب وغرف غسيل',
    nameEn: 'Custom Wardrobes, Closets & Laundry Units',
    description: 'تفصيل دواليب ملابس مدمجة ودريسنج روم زجاجي بتقسيمات ذكية، ووحدات خزائن غسيل مدمجة متطورة.',
    image: getProjectImage('w3.jpg'),
    count: 10
  },
  {
    id: 'interior-design',
    nameArabic: 'ديكور وتصميم داخلي للصالات',
    nameEn: 'Interior Architecture & Decor',
    description: 'تنسيق متكامل للصالات والمجالس، ديكورات شاشات بتكسيات بديل رخام وخشب، وأركان كوفي كورنر بتشطيبات راقية.',
    image: getProjectImage('p29.jpg'),
    count: 0
  },
  {
    id: 'pvc-doors',
    nameArabic: 'أعمال PVC وأبواب عصرية',
    nameEn: 'PVC Doors & CNC Custom Works',
    description: 'تصنيع أبواب ونوافذ PVC عازلة للصوت والحرارة، وأبواب غرف ومداخل MDF محفورة بأحدث ماكينات CNC الدقيقة.',
    image: getProjectImage('p28.jpg'),
    count: 0
  }
];
