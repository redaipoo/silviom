import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-kitchens',
    titleArabic: 'تصميم وتصنيع المطابخ الحديثة',
    titleEn: 'Custom Modern Kitchens',
    description: 'نبتكر مطابخ تجمع بين أعلى معايير الجمال والوظيفة، باستخدام خامات مقاومة للرطوبة والحرارة مع أحدث أنظمة الفتح السلسة وأسطح الكوارتز والرخام الطبيعي.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    features: ['دراسة الحركة والمثلث الوظيفي للمطبخ', 'خامات ألمانية وإيطالية عالية المتانة', 'إكسسوارات بلوم النمساوية بضمان مدى الحياة', 'إضاءات ليد مخفية وأنظمة استشعار'],
    icon: 'Utensils'
  },
  {
    id: 'luxury-bedrooms',
    titleArabic: 'تصميم غرف النوم والأجنحة الفندقية',
    titleEn: 'Luxury Suites & Bedrooms',
    description: 'تحويل غرف النوم إلى ملاذات هادئة تشعرك بالراحة، مع بانوهات جدارية مخصصة، إضاءات دافئة مدروسة، وتنسيق ألوان يعزز الاسترخاء.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    features: ['تكسيات جدارية خشبية وتنجيد مبطن', 'حلول عزل صوتي متطورة للأبواب والأسقف', 'تصاميم تسريحات عائمة ومرايا ذكية', 'توزيع إضاءة ليلي هادئ غير مباشر'],
    icon: 'BedDouble'
  },
  {
    id: 'living-lounges',
    titleArabic: 'تصميم المجالس وصالات الاستقبال',
    titleEn: 'Grand Lounges & Living Spaces',
    description: 'صياغة مساحات استقبال فخمة ترحب بضيوفك بأسلوب يعكس كرم الضيافة وأناقة الطابع المعماري المعاصر، مع دمج المدافئ والمكتبات الرخامية.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    features: ['مخططات توزيع الأثاث لسهولة الحركة', 'جدران رخامية مميزة ومدافئ ديكورية', 'أسقف جبسية معلقة بتفريغات إنارة عصرية', 'اختيار أقمشة وسجاد فاخر متناسق'],
    icon: 'Armchair'
  },
  {
    id: 'walkin-closets',
    titleArabic: 'تفصيل الخزائن وغرف الملابس (Walk-in Closets)',
    titleEn: 'Bespoke Closets & Wardrobes',
    description: 'استغلال أمثل للمساحات بتصاميم خزائن ملابس زجاجية وخشبية متطورة مع أقسام مخصصة للساعات، الحقائب، والمجوهرات بإضاءات داخلية مدمجة.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85',
    features: ['أبواب زجاجية شفافة أو مدخنة مع إطارات سليم', 'أدراج مقسمة بإكسسوارات جلدية ناعمة', 'حساسات حركة لإضاءة الرفوف أوتوماتيكياً', 'مصاعد هيدروليكية لتعليق الملابس العالية'],
    icon: 'Layers'
  },
  {
    id: 'commercial-spaces',
    titleArabic: 'ديكورات المحلات والمعارض التجارية',
    titleEn: 'Commercial & Retail Spaces',
    description: 'ابتكار هويات بصرية مكانية تزيد من مبيعاتك وتجذب العملاء، عبر تصميم واجهات جذابة ومسارات حركة مدروسة وإبراز منتجاتك بأحدث أساليب العرض.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    features: ['تصميم واجهات معمارية مميزة', 'دراسة تجربة العميل داخل المحل (Customer Flow)', 'فاترينات عرض زجاجية بإضاءة تركيزية', 'توافق كامل مع متطلبات التراخيص والبلدية'],
    icon: 'Store'
  },
  {
    id: 'executive-offices',
    titleArabic: 'تصميم المكاتب وبيئات العمل الإبداعية',
    titleEn: 'Executive & Workspace Design',
    description: 'تصميم مقرات شركات ومكاتب إدارية ملهمة تعكس هوية علامتك التجارية وتعزز إنتاجية فريق العمل مع مراعاة العزل الصوتي وتناغم الإضاءة.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    features: ['مكاتب تنفيذية للمدراء وقاعات اجتماعات', 'حلول تقسيم ذكية بزجاج مزدوج عازل للصوت', 'كافيهات ومساحات استراحة داخلية راقية', 'إدارة الكابلات والتمديدات التقنية بصورة مخفية'],
    icon: 'Building2'
  },
  {
    id: '3d-visualization',
    titleArabic: 'المحاكاة والتصميم ثلاثي الأبعاد (3D Rendering)',
    titleEn: '3D Photorealistic Rendering',
    description: 'معاينة مشروعك بالكامل قبل وضع مسمار واحد عبر لقطات رندر سينمائية فائقة الواقعية وجولات افتراضية 360 درجة تمكنك من اتخاذ قراراتك بثقة.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    features: ['رندرات بدقة 4K تبرز أدق تفاصيل المواد', 'فيديوهات أنيميشن وجولات افتراضية', 'مخططات أبعاد تنفيذية وجداول كميات', 'إمكانية تعديل الألوان والخامات قبل الاعتماد'],
    icon: 'Glasses'
  },
  {
    id: 'turnkey-solutions',
    titleArabic: 'التنفيذ والإشراف الهندسي المتكامل',
    titleEn: 'Turnkey Execution & Supervision',
    description: 'تسليم مفتاح بدون أي عناء من مرحلة المخططات وحتى اللمسة الأخيرة، بإشراف مهندسين مختصين ومطابقة دقيقة لأعلى معايير الجودة والجدول الزمني.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    features: ['إشراف دوري وتقارير مرحلية بالصور', 'فريق فني وحرفي محترف ومدرب', 'ضمانات معتمدة على كافة الأعمال والخامات', 'التزام تام بمواعيد التسليم والميزانية المتفق عليها'],
    icon: 'ShieldCheck'
  }
];
