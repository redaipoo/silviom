import React from 'react';
import { Link } from 'react-router-dom';
import { designsData } from '../../data/designsData';
import { DesignCard } from '../gallery/DesignCard';
import { DesignItem } from '../../types';
import { ArrowLeft, Eye } from '@phosphor-icons/react';

interface FeaturedDesignsProps {
  onQuickView: (design: DesignItem) => void;
}

export const FeaturedDesigns: React.FC<FeaturedDesignsProps> = ({ onQuickView }) => {
  const featured = designsData.filter(d => d.isFeatured).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight">
              تصاميم <span className="text-gold-gradient">مختارة</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2">
              باقة حصرية من أرقى مشاريع المطابخ والأجنحة والديكورات المنفذة بأعلى درجات الفخامة
            </p>
          </div>

          <Link
            to="/designs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-champagne transition-colors self-start md:self-auto group"
          >
            <span>مشاهدة جميع التصاميم</span>
            <ArrowLeft size={14} weight="bold" className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map(design => (
            <DesignCard
              key={design.id}
              design={design}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom CTA to full gallery */}
        <div className="mt-12 text-center">
          <Link
            to="/designs"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-surface border border-brand-gold/40 hover:border-brand-gold text-brand-ivory hover:text-brand-gold shadow-luxury transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Eye size={18} weight="bold" className="text-brand-gold" />
            <span>مشاهدة جميع التصاميم ({designsData.length}+ تصميم)</span>
            <ArrowLeft size={14} weight="bold" className="text-brand-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
};
