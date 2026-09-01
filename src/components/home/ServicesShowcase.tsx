import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { CheckCircle, ArrowLeft } from '@phosphor-icons/react';

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-dark border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            خدمات <span className="text-gold-gradient">المجد</span> الفاخرة
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2.5 leading-relaxed font-light">
            نرافقك من الفكرة الأولى والمخططات ثلاثية الأبعاد وحتى استلام المساحة المنفذة بأعلى مستويات الإتقان والدقة
          </p>
        </div>

        {/* Services Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 8).map(service => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-brand-surface/40 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              {/* Service Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.titleArabic}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent" />
                
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-brand-dark/80 text-brand-gold border border-brand-gold/30 backdrop-blur-md">
                  {service.titleEn}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors">
                    {service.titleArabic}
                  </h3>
                  
                  <p className="text-xs text-brand-ivory/70 mt-2 line-clamp-3 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-brand-champagne/90">
                        <CheckCircle size={14} weight="fill" className="text-brand-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA */}
                <div className="pt-3 border-t border-brand-gold/10 flex items-center justify-between">
                  <Link
                    to="/request"
                    className="text-xs font-bold text-brand-gold hover:text-brand-champagne flex items-center gap-1 transition-colors"
                  >
                    <span>طلب استشارة</span>
                    <ArrowLeft size={13} weight="bold" />
                  </Link>

                  <Link
                    to="/services"
                    className="text-[11px] text-brand-ivory/50 hover:text-brand-ivory transition-colors"
                  >
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-surface/60 border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="text-center sm:text-right">
            <h4 className="text-sm sm:text-base font-bold text-brand-ivory">هل لديك مشروع بمواصفات خاصة؟</h4>
            <p className="text-xs text-brand-ivory/70 mt-0.5">مهندسونا مستعدون لتحويل رؤيتك المعمارية إلى واقع ملموس بدقة فائقة</p>
          </div>

          <Link
            to="/request"
            className="shrink-0 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark font-bold text-xs shadow-luxury-gold hover:opacity-95 transition-all"
          >
            ابدأ مناقشة مشروعك
          </Link>
        </div>

      </div>
    </section>
  );
};
