import { BeforeAfterItem, ProcessStep } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'ba-01',
    titleArabic: 'تجديد وتصميم مطبخ عصري متكامل',
    titleEn: 'Modern Kitchen Transformation',
    category: 'kitchens',
    categoryArabic: 'مطابخ',
    beforeImage: getProjectImage('p4.jpg'),
    afterImage: getProjectImage('p1.jpg'),
    description: 'تحويل المساحة إلى مطبخ حديث بنظام PVC و MDF مع جزيرة رخامية وإضاءة مخفية.',
    location: 'البيضاء - شارع القهاوي',
    duration: '3 أسابيع',
  },
  {
    id: 'ba-02',
    titleArabic: 'تنفيذ جناح نوم رئيسي مع غرفة ملابس',
    titleEn: 'Master Suite & Dressing Room Upgrade',
    category: 'bedrooms',
    categoryArabic: 'غرف نوم',
    beforeImage: getProjectImage('p13.jpg'),
    afterImage: getProjectImage('p11.jpg'),
    description: 'تجهيز كامل لغرفة النوم مع تكسيات خشبية ودريسنج روم زجاجي وإضاءة دافئة.',
    location: 'البيضاء - حي الأندلس',
    duration: 'أسبوعين',
  },
  {
    id: 'ba-03',
    titleArabic: 'تنسيق وديكور صالة معيشة وشاشة',
    titleEn: 'Living Room & TV Wall Modernization',
    category: 'interior-design',
    categoryArabic: 'ديكور وصالات',
    beforeImage: getProjectImage('p25.jpg'),
    afterImage: getProjectImage('p21.jpg'),
    description: 'تكسيات جدارية ببديل الرخام والخشب مع مدفأة ديكورية لتعزيز الفخامة.',
    location: 'البيضاء - بالقرب من قرطاسية بغداد',
    duration: '14 يوماً',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    titleArabic: 'الاستشارة وتحديد الرؤية',
    titleEn: 'Consultation',
    description: 'الاستماع لاحتياجاتك لكافة المساحات (مطابخ، غرف نوم، خزائن، ديكورات) وتحديد الخامات والألوان.',
    highlight: 'استشارة هندسية مخصصة',
  },
  {
    step: 2,
    titleArabic: 'رفع المقاسات الميدانية',
    titleEn: 'Site Measurements',
    description: 'زيارة موقعك داخل مدينة البيضاء وضواحيها وأخذ المقاسات والأبعاد الهندسية بدقة تامة.',
    highlight: 'معاينة ورفع هندسي دقيق',
  },
  {
    step: 3,
    titleArabic: 'التصميم الهندسي 3D',
    titleEn: '3D Spatial Design',
    description: 'رسم مخططات ثلاثية الأبعاد ورندر واقعي لمشاهدة كافة تفاصيل مساحتك واختيار الأنسب قبل التصنيع.',
    highlight: 'رؤية واقعية مسبقة للمشروع',
  },
  {
    step: 4,
    titleArabic: 'التصنيع والتركيب المتقن',
    titleEn: 'Manufacturing & Installation',
    description: 'تصنيع دقيق في ورشنا بأجود خامات PVC و MDF مع تركيب احترافي نظيف وتسليم في الموعد المحدد.',
    highlight: 'جودة وتشطيب متقن وضمان',
  },
];
