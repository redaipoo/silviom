import React from 'react';
import { Diamond, ShieldCheck, Medal, Users } from '@phosphor-icons/react';
import { DesignProcess } from '../components/home/DesignProcess';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            من نحن في <span className="text-gold-gradient">المجد</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-3 leading-relaxed font-light">
            شركة رائدة في مدينة البيضاء متخصصة في صناعة وتصميم المطابخ العصرية الفاخرة وأعمال الـ PVC و MDF، نجمع بين جودة المواد وجمال التصميم الهندسي.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-xl sm:text-3xl font-bold text-brand-ivory font-arabic">
              فلسفتنا: التوازن بين <span className="text-brand-gold">الفخامة العصرية</span> ومتانة الخامات
            </h2>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
              تأسست <strong className="text-brand-champagne">شركة المجد للمطابخ الحديثة و PVC</strong> في مدينة البيضاء لتكون الوجهة الأولى للباحثين عن التميز في تفصيل المطابخ، الأبواب، النوافذ، وغرف النوم والديكورات الداخلية. نعتمد على أجود خامات الـ PVC و MDF المقاومة للرطوبة والمصممة لتدوم طويلاً.
            </p>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
              نمتلك ورش عمل متطورة وفريقاً من الفنيين والمهندسين ذوي الخبرة العالية لتحويل مساحة منزلك إلى لوحة معمارية تجمع بين استغلال المساحات بأعلى كفاءة والمظهر الجمالي الفاخر.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-gold/20">
                <p className="text-xl font-serif font-bold text-brand-gold">البيضاء - ليبيا</p>
                <p className="text-[11px] text-brand-ivory/70 mt-0.5">شارع القهاوي (بالقرب من قرطاسية بغداد)</p>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-gold/20">
                <p className="text-xl font-serif font-bold text-brand-champagne">100%</p>
                <p className="text-[11px] text-brand-ivory/70 mt-0.5">مطابقة تامة بين التصميم والتنفيذ</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="شركة المجد للمطابخ الحديثة و PVC"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-brand-ivory font-arabic">
              لماذا يختار عملاؤنا <span className="text-gold-gradient">المجد</span>؟
            </h2>
            <p className="text-xs text-brand-ivory/60 mt-1.5">
              التزامنا بتقديم الأفضل لأهلنا في مدينة البيضاء وكافة المدن المجاورة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Diamond size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">خامات PVC و MDF معتمدة</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed font-light">
                خامات أصلية مقاومة للرطوبة والحرارة وعوامل الاستخدام اليومي.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-champagne">
                <ShieldCheck size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">ضمان حقيقي وموثوق</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed font-light">
                ضمان على جودة التصنيع وسلامة التركيب ومفصلات الهيدروليك والإكسسوارات.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Medal size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">دقة أخذ المقاسات والتركيب</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed font-light">
                فريق فني محترف يضمن لك تركيباً نظيفاً ودقيقاً حتى أصغر التفاصيل.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-champagne">
                <Users size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">تسهيلات في الدفع</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed font-light">
                خيارات دفع مرنة تشمل النقد، البطاقات المصرفية، وإمكانية التقسيط الميسر.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Step Process */}
        <DesignProcess />

      </div>
    </div>
  );
};
