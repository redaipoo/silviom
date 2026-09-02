import { CategoryInfo } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'kitchens',
    nameArabic: 'مطابخ حديثة فاخرة',
    nameEn: 'Modern Luxury Kitchens',
    description: 'مطابخ عصرية مخصصة تجمع بين الفخامة والوظيفة العملية بخامات PVC و MDF مع أسطح رخام وكوارتز وأجهزة مدمجة.',
    image: getProjectImage('p1.jpg'),
    count: 18
  },
  {
    id: '3d-designs',
    nameArabic: 'تصاميم 3D ورندر معماري',
    nameEn: '3D Spatial Design & Renders',
    description: 'معاينة واقعية ثلاثية الأبعاد لمشروعك قبل البدء في التنفيذ لتختار الألوان، الخامات، وتوزيع الإضاءة بدقة تامة.',
    image: getProjectImage('p31.jpg'),
    count: 6
  },
  {
    id: 'interior-design',
    nameArabic: 'ديكور وصالات طعام مدمجة',
    nameEn: 'Interior Decor & Dining Spaces',
    description: 'تنسيق داخلي متكامل يدمج المطبخ مع منطقة تناول الطعام، جزر بكراسي بار فاخرة، وإضاءات معلقة راقية.',
    image: getProjectImage('p29.jpg'),
    count: 5
  },
  {
    id: 'rendering',
    nameArabic: 'مشاريع منفذة على أرض الواقع',
    nameEn: 'Real Executed Projects',
    description: 'صور حقيقية لمشاريع تم تصنيعها وتركيبها وتسليمها على أرض الواقع بجودة وإتقان شركة المجد داخل ليبيا.',
    image: getProjectImage('p28.jpg'),
    count: 2
  }
];
