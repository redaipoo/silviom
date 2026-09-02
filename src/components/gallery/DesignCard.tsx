import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, WhatsappLogo, Eye, ArrowsOut } from '@phosphor-icons/react';
import { DesignItem } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';
import { getWhatsAppUrl, getDesignInquiryMessage } from '../../utils/whatsapp';

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
  const whatsAppUrl = getWhatsAppUrl(getDesignInquiryMessage(design));

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-brand-surface/40 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-400 flex flex-col shadow-lg hover:shadow-2xl">
      {/* Visual Image Container */}
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-brand-dark cursor-pointer"
        onClick={() => onQuickView ? onQuickView(design) : null}
      >
        <img
          src={design.mainImage}
          alt={design.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

        {/* Top Tag & Favorite Button */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-dark/85 backdrop-blur-md text-brand-champagne border border-brand-gold/30 shadow-md">
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
                ? 'bg-brand-dark text-brand-gold border border-brand-gold'
                : 'bg-brand-dark/70 text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-dark border border-white/10'
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
            className="absolute bottom-3 left-3 p-2 rounded-xl bg-brand-dark/80 hover:bg-brand-gold text-brand-ivory hover:text-brand-dark border border-brand-gold/30 backdrop-blur-md transition-all shadow-md"
            title="معاينة تفصيلية"
            aria-label="معاينة"
          >
            <ArrowsOut size={16} weight="bold" />
          </button>
        )}
      </div>

      {/* Content Info (Minimal & Clean) */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-brand-surface/20">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-brand-champagne/70 mb-1.5">
            <span>{design.styleArabic}</span>
            <span>•</span>
            <span>المساحة: {design.approximateArea}</span>
          </div>

          <Link to={`/designs/${design.slug}`}>
            <h3 className="text-sm sm:text-base font-bold text-brand-ivory group-hover:text-brand-gold transition-colors leading-snug line-clamp-1">
              {design.title}
            </h3>
          </Link>
        </div>

        {/* Card Actions: View Design + WhatsApp Inquiry */}
        <div className="pt-3.5 mt-3.5 border-t border-brand-gold/15 flex items-center justify-between gap-2">
          <Link
            to={`/designs/${design.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-ivory hover:text-brand-gold bg-brand-surface/80 hover:bg-brand-surface border border-brand-gold/20 transition-colors"
          >
            <Eye size={14} weight="bold" className="text-brand-gold" />
            <span>عرض التصميم</span>
          </Link>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 transition-colors whitespace-nowrap"
            title="طلب هذا التصميم عبر واتساب"
          >
            <WhatsappLogo size={14} weight="fill" />
            <span>طلب عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
};
