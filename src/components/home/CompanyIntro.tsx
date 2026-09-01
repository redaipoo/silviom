import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Diamond, ShieldCheck, ArrowLeft } from '@phosphor-icons/react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="company-intro" className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Image Column (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85"
                alt="AL MĀGD Interior Craftsmanship"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              
              {/* Quality Stamp */}
              <div className="absolute bottom-5 right-5 left-5 p-3.5 rounded-xl bg-brand-dark/85 backdrop-blur-md border border-brand-gold/25 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                    <Diamond size={20} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-ivory">معايير التصنيع الفاخرة</h4>
                    <p className="text-[10px] text-brand-champagne/80 mt-0.5">أجود أنواع الأخشاب والرخام الطبيعي والأنظمة الذكية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pitch Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory leading-tight font-arabic">
              أهلاً بكم في <span className="text-gold-gradient">المجد</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-ivory/80 leading-relaxed font-light">
              نقدّم حلولاً متكاملة في تصميم المطابخ والديكورات الداخلية، مع اهتمام بالتفاصيل، جودة التصميم، واستغلال المساحات بأفضل صورة.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-surface/50 border border-brand-gold/15 space-y-1.5">
                <Compass size={22} weight="duotone" className="text-brand-gold" />
                <h4 className="text-xs font-bold text-brand-ivory">تصميم معماري مدروس</h4>
                <p className="text-[11px] text-brand-ivory/60 leading-relaxed">استغلال هندسي ذكي لكل زاوية ومسار حركة</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface/50 border border-brand-gold/15 space-y-1.5">
                <Diamond size={22} weight="duotone" className="text-brand-champagne" />
                <h4 className="text-xs font-bold text-brand-ivory">أعلى معايير المواد</h4>
                <p className="text-[11px] text-brand-ivory/60 leading-relaxed">خامات عالمية مقاومة للرطوبة وخدوش الاستخدام</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface/50 border border-brand-gold/15 space-y-1.5">
                <ShieldCheck size={22} weight="duotone" className="text-brand-gold" />
                <h4 className="text-xs font-bold text-brand-ivory">دقة والتزام بالموعد</h4>
                <p className="text-[11px] text-brand-ivory/60 leading-relaxed">إشراف هندسي صارم وضمانات طويلة الأجل</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-champagne group transition-colors"
              >
                <span>تعرف علينا واكتشف فلسفتنا</span>
                <ArrowLeft size={14} weight="bold" className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
