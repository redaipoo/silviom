import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChatCircleDots, 
  Ruler, 
  Cube, 
  Wrench, 
  PaintBrush, 
  SquaresFour, 
  Eye, 
  ShieldCheck,
  ArrowLeft 
} from '@phosphor-icons/react';

export const DesignProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'الاستشارة ومناقشة الفكرة',
      titleEn: 'Consultation',
      desc: 'جلسة استماع لفهم متطلباتك واقتراح الأفكار والطراز الأنسب.',
      icon: <ChatCircleDots size={24} weight="duotone" />
    },
    {
      num: '02',
      title: 'رفع المقاسات الميدانية',
      titleEn: 'Measurements',
      desc: 'زيارة موقعك بالبيضاء وتحديد الأبعاد بدقة مليمترية كاملة.',
      icon: <Ruler size={24} weight="duotone" />
    },
    {
      num: '03',
      title: 'التصميم والرندر 3D',
      titleEn: '3D Design',
      desc: 'محاكاة بصرية ثلاثية الأبعاد لرؤية مطبخك قبل بدء التصنيع.',
      icon: <Cube size={24} weight="duotone" />
    },
    {
      num: '04',
      title: 'التصنيع والتركيب المتقن',
      titleEn: 'Execution',
      desc: 'تنفيذ في ورشنا وتركيب احترافي مع شهادة الضمان المعتمدة.',
      icon: <Wrench size={24} weight="duotone" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'تصميم مخصص لمساحتك',
      titleEn: 'Custom Design',
      desc: 'تفصيل دقيق يناسب أبعاد منزلك وذوقك الخاص.',
      icon: <PaintBrush size={24} weight="duotone" className="text-brand-gold" />
    },
    {
      title: 'استغلال ذكي للمساحات',
      titleEn: 'Perfect Space Planning',
      desc: 'توزيع هندسي عملي يضاعف سعة التخزين وسلاسة الحركة.',
      icon: <SquaresFour size={24} weight="duotone" className="text-brand-champagne" />
    },
    {
      title: 'معاينة ثلاثية الأبعاد (3D)',
      titleEn: '3D Visualization',
      desc: 'رؤية واقعية تفصيلية ومطابقة تامة قبل البدء بالتنفيذ.',
      icon: <Eye size={24} weight="duotone" className="text-brand-gold" />
    },
    {
      title: 'تشطيب احترافي وضمان',
      titleEn: 'Professional Finishing',
      desc: 'خامات PVC و MDF أصلية مقاومة للرطوبة مع ضمان حقيقي.',
      icon: <ShieldCheck size={24} weight="duotone" className="text-brand-champagne" />
    }
  ];

  return (
    <div className="space-y-20 py-16 sm:py-24 bg-brand-dark border-t border-brand-gold/15">
      
      {/* 11. WHY CHOOSE US (4 Short Points with Icons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            لماذا تختار <span className="text-gold-gradient">المجد</span>؟
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2 font-light">
            معايير احترافية تجعلنا الخيار الأول لأهلنا في مدينة البيضاء وليبيا
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-surface/30 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-surface/80 border border-brand-gold/30 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors font-arabic">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-ivory/70 mt-1.5 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. OUR PROCESS (Simple 4-Step Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            خطوات <span className="text-gold-gradient">العمل</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2 font-light">
            4 خطوات بسيطة ومنظمة من الاستشارة الأولى حتى الاستلام
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-4 group relative"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-dark/80 border border-brand-gold/30 flex items-center justify-center text-brand-gold shadow-md">
                  {step.icon}
                </div>
                <span className="text-xl font-serif font-black text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                  {step.num}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors font-arabic">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-ivory/70 mt-1.5 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-10 text-center">
          <Link
            to="/request"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-gold hover:text-brand-champagne transition-colors"
          >
            <span>جاهز لبدء مشروعك معنا؟ اطلب مقاساتك الآن</span>
            <ArrowLeft size={16} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
};
