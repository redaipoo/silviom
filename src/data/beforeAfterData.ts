import { BeforeAfterItem, ProcessStep } from '../types';

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'ba-01',
    titleArabic: 'تحويل مطبخ قديم إلى تحفة عصرية مفتوحة مع جزيرة رخامية',
    categoryArabic: 'مطابخ حديثة',
    // Before: Empty / raw / older style kitchen space
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    // After: Luxury modern kitchen
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    description: 'إعادة توزيع كاملة للمساحة مع هدم الجدار الفاصل لإنشاء مساحة مفتوحة، وتركيب خزائن بلمسة الجوز الطبيعي ورخام كلكتا مضيء.',
    duration: '25 يوماً',
    location: 'فيلا خاصة - الرياض'
  },
  {
    id: 'ba-02',
    titleArabic: 'تجديد صالة معيشة رئيسية ودمج مدفأة رخامية جدارية',
    categoryArabic: 'غرف معيشة',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    description: 'تحويل مساحة استقبال تقليدية إلى مجلس معاصر بتكسيات ترافرتين طبيعية وإضاءات مدمجة غير مباشرة.',
    duration: '18 يوماً',
    location: 'بنتهاوس - جدة'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    titleArabic: 'الاستشارة وفهم الاحتياج',
    titleEn: 'Consultation & Vision',
    description: 'جلسة نقاش تفصيلية للاستماع إلى تطلعاتك وأسلوب حياتك والميزانية المحددة للمشروع.',
    highlight: 'لقاء تفاعلي لتحديد الهوية المطلوبة'
  },
  {
    step: 2,
    titleArabic: 'رفع المقاسات ودراسة الفراغ',
    titleEn: 'Space Assessment',
    description: 'زيارة موقعية بأجهزة ليزر دقيقة لدراسة الإضاءة الطبيعية، مسارات الحركة، ونقاط التغذية والصرف.',
    highlight: 'رفع هندسي رقمي دقيق بنسبة 100%'
  },
  {
    step: 3,
    titleArabic: 'المفهوم البصري ولوحة الخامات',
    titleEn: 'Moodboard & Concept',
    description: 'تقديم لوحة عينات حقيقية للأخشاب، الرخام، الأقمشة، والألوان للاتفاق على الطابع العام.',
    highlight: 'تنسيق متناغم للمواد والتشطيبات'
  },
  {
    step: 4,
    titleArabic: 'التصميم ثلاثي الأبعاد 3D',
    titleEn: '3D Photorealistic Render',
    description: 'بناء مجسم رقمي سينمائي للفرش والإضاءة ترى من خلاله مشروعك المستقبلي بكل تفاصيله.',
    highlight: 'معاينة واقعية مطابقة للتنفيذ'
  },
  {
    step: 5,
    titleArabic: 'المراجعة والتطوير',
    titleEn: 'Refinement & Approval',
    description: 'إجراء أي تعديلات مطلوبة على التصاميم والألوان حتى نصل إلى رضاك التام والاعتماد النهائي.',
    highlight: 'مرونة كاملة في ضبط التفاصيل'
  },
  {
    step: 6,
    titleArabic: 'المخططات التنفيذية والكميات',
    titleEn: 'Executive Drawings',
    description: 'إصدار كتيب الرسومات التفصيلية، المخططات الكهربائية، والسباكة، ومواصفات المواد للتصنيع.',
    highlight: 'مخططات هندسية معيارية للورش والموقع'
  },
  {
    step: 7,
    titleArabic: 'التصنيع والتنفيذ والتسليم',
    titleEn: 'Bespoke Craftsmanship',
    description: 'بدء التصنيع في مصانعنا بأحدث الماكينات ثم التركيب بالموقع تحت إشراف هندسي صارم وضمان شامل.',
    highlight: 'تسليم نظيف في الموعد المحدد'
  }
];
