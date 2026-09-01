import React from 'react';
import { processSteps } from '../../data/beforeAfterData';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const DesignProcess: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-dark border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            رحلة التصميم مع <span className="text-gold-gradient">المجد</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2.5 leading-relaxed font-light">
            7 خطوات هندسية مدروسة تضمن لك تجربة سلسة وتحقيق النتيجة التي تحلم بها دون أي مفاجآت
          </p>
        </div>

        {/* 7-Step Timeline Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`p-5 rounded-2xl bg-brand-surface/40 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-3 group ${
                index === 6 ? 'lg:col-span-2 bg-gradient-to-br from-brand-surface/70 to-brand-dark border-brand-gold/40' : ''
              }`}
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-serif font-bold text-brand-gold">
                    الخطوة {step.step}
                  </span>
                  <span className="text-[10px] font-serif text-brand-champagne/60 tracking-wider">
                    {step.titleEn}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors font-arabic">
                  {step.titleArabic}
                </h3>

                <p className="text-xs text-brand-ivory/70 mt-1.5 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Highlight Note */}
              <div className="pt-2.5 border-t border-brand-gold/10">
                <span className="text-[10px] font-medium text-brand-champagne/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span>{step.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-10 text-center">
          <Link
            to="/request"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-champagne transition-colors"
          >
            <span>جاهز لبدء الخطوة الأولى لمشروعك؟</span>
            <ArrowLeft size={14} weight="bold" />
          </Link>
        </div>

      </div>
    </section>
  );
};
