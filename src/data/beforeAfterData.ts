import { BeforeAfterItem, ProcessStep } from '../types';

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'ba-01',
    titleArabic: 'تجديد مطبخ عصري بالكامل',
    titleEn: 'Modern Kitchen Transformation',
    category: 'kitchens',
    categoryArabic: 'مطابخ',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'تحويل مساحة المطبخ إلى تصميم مفتوح بنظام PVC مع جزيرة رخامية وإضاءة مخفية.',
    location: 'البيضاء - شارع القهاوي',
    duration: '3 أسابيع',
  },
  {
    id: 'ba-02',
    titleArabic: 'تطوير غرفة نوم لجناح رئيسي',
    titleEn: 'Master Suite Upgrade',
    category: 'bedrooms',
    categoryArabic: 'غرف نوم',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'تجديد كامل لغرفة النوم مع دمج دريسنج روم زجاجي وإضاءة دافئة.',
    location: 'البيضاء - حي الأندلس',
    duration: 'أسبوعين',
  },
  {
    id: 'ba-03',
    titleArabic: 'تحديث مجلس وصالة معيشة',
    titleEn: 'Majlis & Living Room Modernization',
    category: 'living-rooms',
    categoryArabic: 'غرف معيشة',
    beforeImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'تكسيات جدارية خشبية وتنسيق ألوان ترابية لإبراز الرحابة والفخامة.',
    location: 'البيضاء - شارع العروبة',
    duration: '18 يوماً',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    titleArabic: 'الاستشارة ومناقشة الفكرة',
    titleEn: 'Consultation',
    description: 'الاستماع لاحتياجاتك وتحديد الطراز والألوان المناسبة لذوقك.',
    highlight: 'جلسة استشارية أولية',
  },
  {
    step: 2,
    titleArabic: 'رفع المقاسات الميدانية',
    titleEn: 'Site Measurements',
    description: 'زيارة موقعك بالبيضاء وأخذ أبعاد المساحة بدقة مليمترية كاملة.',
    highlight: 'معاينة ورفع دقيق',
  },
  {
    step: 3,
    titleArabic: 'التصميم والرندر 3D',
    titleEn: '3D Visualization',
    description: 'مخطط ثلاثي الأبعاد ورندر واقعي لمشاهدة مطبخك قبل البدء بالتصنيع.',
    highlight: 'رؤية واقعية مسبقة',
  },
  {
    step: 4,
    titleArabic: 'التصنيع والتركيب النهائي',
    titleEn: 'Crafting & Installation',
    description: 'تنفيذ في ورشنا وتركيب احترافي نظيف مع تسليم شهادة الضمان.',
    highlight: 'جودة وتشطيب متقن',
  },
];
