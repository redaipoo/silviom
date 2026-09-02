import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { ArrowLeft, CookingPot, Bed, CoatHanger, HouseLine, Cube, Sparkle } from '@phosphor-icons/react';

export const ServicesShowcase: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CookingPot': return <CookingPot size={22} weight="duotone" />;
      case 'Bed': return <Bed size={22} weight="duotone" />;
      case 'CoatHanger': return <CoatHanger size={22} weight="duotone" />;
      case 'HouseLine': return <HouseLine size={22} weight="duotone" />;
      case 'Cube': return <Cube size={22} weight="duotone" />;
      case 'Sparkle': return <Sparkle size={22} weight="duotone" />;
      default: return <Sparkle size={22} weight="duotone" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-dark border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            خدماتنا <span className="text-gold-gradient">المتخصصة</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2 font-light">
            حلول متكاملة في التصميم والتصنيع بأعلى معايير الإتقان في مدينة البيضاء
          </p>
        </div>

        {/* 6 Clean Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map(service => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-brand-surface/30 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-400 flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              {/* Service Visual Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.titleArabic}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent" />
                
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-brand-dark/80 backdrop-blur-md text-brand-gold border border-brand-gold/30 flex items-center justify-center shadow-md">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Body (Short Title & 1 Short Sentence Max) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors">
                    {service.titleArabic}
                  </h3>
                  
                  <p className="text-xs text-brand-ivory/70 mt-1.5 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Footer CTA */}
                <div className="pt-3 border-t border-brand-gold/10 flex items-center justify-between">
                  <Link
                    to="/request"
                    className="text-xs font-bold text-brand-gold hover:text-brand-champagne flex items-center gap-1 transition-colors"
                  >
                    <span>طلب الخدمة</span>
                    <ArrowLeft size={13} weight="bold" />
                  </Link>

                  <span className="text-[10px] text-brand-champagne/60 font-serif">
                    {service.titleEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
