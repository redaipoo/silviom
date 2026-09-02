import { CategoryInfo } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const categoriesData: CategoryInfo[] = [
  {
    id: 'kitchens',
    nameArabic: 'مطابخ زاوية (حرف L)',
    nameEn: 'L-Shaped Corner Kitchens',
    description: 'مطابخ زاوية عملية على شكل حرف L تستغل أركان المطبخ بأناقة مع أرفف مفتوحة وأجهزة مدمجة.',
    image: getProjectImage('p1.jpg'),
    count: 14,
    link: '/designs?q=L'
  },
  {
    id: 'kitchens',
    nameArabic: 'مطابخ متوازية (حرف U)',
    nameEn: 'U-Shaped Kitchen Layouts',
    description: 'مطابخ حرف U توفر مساحات عمل واسعة على ثلاثة جدران مع كاونترات متصلة وأسقف جبسية بإضاءة LED.',
    image: getProjectImage('p2.jpg'),
    count: 8,
    link: '/designs?q=U'
  },
  {
    id: 'kitchens',
    nameArabic: 'مطابخ مفتوحة بجزيرة كاونتر',
    nameEn: 'Open Concept Island Kitchens',
    description: 'مطابخ أمريكية مفتوحة تتوسطها جزيرة تحضير رخامية فخمة مع كراسي بار وثريات ديكورية معلقة.',
    image: getProjectImage('p13.jpg'),
    count: 6,
    link: '/designs?q=جزيرة'
  },
  {
    id: 'kitchens',
    nameArabic: 'مشاريع واقعية منفذة في البيضاء',
    nameEn: 'Real Executed Projects in El-Bayda',
    description: 'صور فوتوغرافية من مواقع العمل لمطابخ حقيقية تم تصنيعها وتركيبها وتسليمها بدقة وإتقان شركة المجد.',
    image: getProjectImage('p28.jpg'),
    count: 2,
    link: '/designs?q=منفذ'
  }
];
