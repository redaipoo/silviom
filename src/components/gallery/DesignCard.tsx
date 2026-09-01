import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ArrowsOut } from '@phosphor-icons/react';
import { DesignItem } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';

interface DesignCardProps {
  design: DesignItem;
  onQuickView?: (design: DesignItem) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({
  design,
  onQuickView,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(design.id);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-brand-surface/50 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl">
      {/* Visual Image Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-brand-dark/40">
        <img
          src={design.mainImage}
          alt={design.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges & Favorite Action */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-brand-dark/80 backdrop-blur-md text-brand-gold border border-brand-gold/30 shadow-md">
            {design.categoryArabic}
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(design.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isFav
                ? 'bg-brand-dark/90 text-brand-gold border border-brand-gold'
                : 'bg-brand-dark/60 text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-dark/90 border border-white/10'
            }`}
            title={isFav ? 'إزالة من المفضلة' : 'حفظ التصميم'}
            aria-label="المفضلة"
          >
            <Heart size={16} weight={isFav ? "fill" : "regular"} className={isFav ? 'text-brand-gold' : ''} />
          </button>
        </div>

        {/* Quick View Button */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(design);
            }}
            className="absolute bottom-3 left-3 p-2 rounded-xl bg-brand-dark/80 hover:bg-brand-gold text-brand-ivory hover:text-brand-dark border border-brand-gold/30 backdrop-blur-md transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg"
            title="معاينة سريعة مكبرة"
            aria-label="معاينة سريعة"
          >
            <ArrowsOut size={16} weight="bold" />
          </button>
        )}

        {/* Views Tag */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-brand-ivory/80 bg-brand-dark/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
          <Eye size={12} weight="bold" className="text-brand-gold" />
          <span>{design.views}</span>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-brand-surface/40">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-brand-champagne/80 mb-1.5">
            <span>{design.styleArabic}</span>
            <span>•</span>
            <span>{design.spaceArabic} ({design.approximateArea})</span>
          </div>

          <Link to={`/designs/${design.slug}`}>
            <h3 className="text-sm sm:text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors leading-snug line-clamp-1">
              {design.title}
            </h3>
          </Link>

          <p className="text-xs text-brand-ivory/60 mt-1.5 line-clamp-2 leading-relaxed">
            {design.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-3 mt-3 border-t border-brand-gold/10 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {design.colorsArabic.slice(0, 3).map((col, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-brand-dark/60 text-brand-ivory/70 border border-brand-gold/10">
                {col}
              </span>
            ))}
          </div>

          <Link
            to={`/designs/${design.slug}`}
            className="text-xs font-bold text-brand-gold hover:text-brand-champagne flex items-center gap-1 transition-colors"
          >
            <span>استعراض</span>
            <span className="font-serif">←</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
