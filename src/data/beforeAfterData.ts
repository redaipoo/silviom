import { BeforeAfterItem, ProcessStep } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'ba-01',
    titleArabic: 'تجديد وتطوير مطبخ مودرن بإضاءات مخفية',
    titleEn: 'Modern Kitchen Ambient Transformation',
    category: 'kitchens',
    categoryArabic: 'مطابخ حديثة',
    beforeImage: getProjectImage('p2.jpg'),
    afterImage: getProjectImage('p1.jpg'),
    description: 'تحويل المطبخ إلى تصميم فاخر يجمع بين الرمادي الداكن وخشب الجوز مع إضاءات بروفايل مدمجة.',
    location: 'البيضاء - شارع القهاوي',
    duration: '3 أسابيع',
  },
  {
    id: 'ba-02',
    titleArabic: 'تطوير مساحة المطبخ وإضافة جزيرة بار عائلية',
    titleEn: 'Kitchen Space Redesign with Dining Island',
    category: 'kitchens',
    categoryArabic: 'مطابخ حديثة',
    beforeImage: getProjectImage('p8.jpg'),
    afterImage: getProjectImage('p13.jpg'),
    description: 'إعادة تصميم المطبخ ليشمل جزيرة وسطية فسيحة بكراسي بار خشبية وثريات معلقة لتناول الوجبات.',
    location: 'البيضاء - حي الأندلس',
    duration: 'أسبوعين',
  },
  {
    id: 'ba-03',
    titleArabic: 'تنفيذ مطبخ فاخر بجزيرة رخام شلال وتكسيات مضلعة',
    titleEn: 'Luxury Black Marble Waterfall Kitchen Execution',
    category: 'kitchens',
    categoryArabic: 'مطابخ حديثة',
    beforeImage: getProjectImage('p24.jpg'),
    afterImage: getProjectImage('p26.jpg'),
    description: 'تنفيذ احترافي لمطبخ مفتوح بجزيرة رخام أسود فاخر وتكسيات خشبية ريفلود وكراسي بار أنيقة.',
    location: 'البيضاء - بالقرب من قرطاسية بغداد',
    duration: '18 يوماً',
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
