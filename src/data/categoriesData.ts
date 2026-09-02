import { CategoryInfo } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'kitchens',
    nameArabic: 'مطابخ حديثة',
    nameEn: 'Modern Kitchens',
    description: 'مطابخ عصرية متكاملة تجمع بين الفخامة والوظيفة العملية بخامات PVC و MDF مع أسطح رخام وكوارتز.',
    image: getProjectImage('p1.jpg'),
    count: 10
  },
  {
    id: 'bedrooms',
    nameArabic: 'غرف نوم فاخرة',
    nameEn: 'Luxury Bedrooms',
    description: 'أجنحة نوم فندقية وتصاميم ماستر بتكسيات جدارية خشبية وأسرّة مدمجة وإضاءات محيطية ناعمة.',
    image: getProjectImage('p11.jpg'),
    count: 5
  },
  {
    id: 'wardrobes',
    nameArabic: 'خزائن ودواليب ملابس',
    nameEn: 'Custom Wardrobes',
    description: 'خزائن ملابس مخصصة ودريسنج روم فاخرة (Walk-in Closets) بأبواب زجاجية وإضاءات LED ذكية.',
    image: getProjectImage('p16.jpg'),
    count: 5
  },
  {
    id: 'interior-design',
    nameArabic: 'ديكور وتصميم داخلي',
    nameEn: 'Interior Design',
    description: 'ديكورات صالات، تكسيات شاشات، بديل خشب ورخام، وأركان كوفي كورنر بتشطيبات راقية.',
    image: getProjectImage('p21.jpg'),
    count: 5
  },
  {
    id: '3d-designs',
    nameArabic: 'تصاميم 3D ثلاثية الأبعاد',
    nameEn: '3D Concept Design',
    description: 'معاينة واقعية ثلاثية الأبعاد لمشروعك قبل البدء في التنفيذ لتختار الألوان والخامات بدقة تامة.',
    image: getProjectImage('p26.jpg'),
    count: 3
  },
  {
    id: 'rendering',
    nameArabic: 'أعمال PVC وأبواب عصرية',
    nameEn: 'PVC Doors & Custom Works',
    description: 'تصنيع أبواب ونوافذ PVC عازلة للصوت والحرارة، وأبواب غرف MDF محفورة بأحدث ماكينات CNC.',
    image: getProjectImage('p29.jpg'),
    count: 3
  }
];
