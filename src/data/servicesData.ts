import { ServiceItem } from '../types';
import { getProjectImage } from '../utils/assetHelper';

export const servicesData: ServiceItem[] = [
  {
    id: 'kitchen-design',
    titleArabic: 'تصميم وتفصيل المطابخ الحديثة',
    titleEn: 'Modern Kitchens Crafting',
    description: 'تفصيل مطابخ عصرية فاخرة بخامات PVC و MDF ورخام طبيعي بأنظمة تخزين ذكية وأجهزة بلت إن.',
    image: getProjectImage('p1.jpg'),
    features: ['مقاومة تامة للرطوبة والمياه', 'أجهزة Built-in مدمجة', 'مفصلات هيدروليك إيطالية'],
    icon: 'CookingPot'
  },
  {
    id: 'bedroom-design',
    titleArabic: 'غرف النوم والأجنحة الفندقية',
    titleEn: 'Luxury Bedroom Suites',
    description: 'تصميم وتصنيع أجنحة نوم ماستر وغرف شبابية بتكسيات خشبية جدارية وأسرّة مدمجة وإضاءات محيطية.',
    image: getProjectImage('p11.jpg'),
    features: ['خلفيات سرير منجدة فاخرة', 'تسريحات وكمودينو مخصص', 'إضاءات LED دافئة'],
    icon: 'Bed'
  },
  {
    id: 'wardrobes',
    titleArabic: 'الخزائن ودواليب الملابس (Dressing Rooms)',
    titleEn: 'Custom Wardrobes & Closets',
    description: 'تفصيل خزائن ملابس مدمجة ودريسنج روم بأنظمة أبواب زجاجية شفافة وعاكسة وإضاءات ذكية.',
    image: getProjectImage('p16.jpg'),
    features: ['أبواب زجاج سيكوريت عسلي', 'إضاءات داخلية تلقائية', 'تقسيمات ذكية للأحذية والإكسسوارات'],
    icon: 'CoatHanger'
  },
  {
    id: 'interior-design',
    titleArabic: 'الديكور والتصميم الداخلي للصالات',
    titleEn: 'Interior Architecture & Decor',
    description: 'تنسيق داخلي متكامل للصالات والمجالس والمداخل بتكسيات بديل رخام وبديل خشب وأركان كوفي كورنر.',
    image: getProjectImage('p21.jpg'),
    features: ['ديكورات شاشات وبديل رخام UV', 'بديل خشب كوري عازل', 'مداخل واستقبال فخم'],
    icon: 'HouseLine'
  },
  {
    id: '3d-design',
    titleArabic: 'التصميم ثلاثي الأبعاد 3D والمعاينة',
    titleEn: '3D Spatial Planning',
    description: 'مخططات وتصاميم هندسية ثلاثية الأبعاد لرؤية المساحة وتوزيعها واختيار الألوان قبل البدء في التنفيذ.',
    image: getProjectImage('p26.jpg'),
    features: ['مقاسات وأبعاد دقيقة', 'محاكاة واقعية للخامات', 'تعديل مرن حسب الرغبة'],
    icon: 'Cube'
  },
  {
    id: 'pvc-doors',
    titleArabic: 'أبواب ونوافذ PVC وأبواب MDF',
    titleEn: 'PVC Doors, Windows & CNC Works',
    description: 'تصنيع أبواب ونوافذ PVC عازلة للصوت والحرارة، وأبواب غرف MDF محفورة بأحدث ماكينات CNC.',
    image: getProjectImage('p29.jpg'),
    features: ['عزل صوتي وحراري فائق', 'حفر ليزر CNC بدقة عالية', 'مقاومة تامة للعوامل الجوية'],
    icon: 'Door'
  }
];
