import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../../data/categoriesData';
import { ArrowLeft } from '@phosphor-icons/react';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface/20 border-y border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight">
              اكتشف <span className="text-gold-gradient">تصاميمنا</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2">
              اختر المساحة التي تبحث عنها واستلهم أفكاراً مبتكرة لمنزلك أو مشروعك
            </p>
          </div>

          <Link
            to="/designs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-champagne transition-colors self-start md:self-auto group"
          >
            <span>استعراض جميع الأقسام</span>
            <ArrowLeft size={14} weight="bold" className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* 8 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map(category => (
            <Link
              key={category.id}
              to={`/designs?category=${category.id}`}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-brand-gold/20 hover:border-brand-gold/70 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={category.image}
                  alt={category.nameArabic}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Count Badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-brand-dark/75 text-brand-champagne border border-brand-gold/20 backdrop-blur-sm">
                {category.count} تصميم
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-brand-ivory group-hover:text-brand-gold transition-colors font-arabic">
                  {category.nameArabic}
                </h3>
                
                <p className="text-[11px] text-brand-ivory/70 line-clamp-2 leading-relaxed font-light">
                  {category.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-brand-gold">
                  <span>تصفح التصاميم</span>
                  <div className="w-7 h-7 rounded-full bg-brand-surface/80 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all">
                    <ArrowLeft size={13} weight="bold" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
