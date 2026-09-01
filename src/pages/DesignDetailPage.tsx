import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { designsData } from '../data/designsData';
import { useFavorites } from '../context/FavoritesContext';
import { getWhatsAppUrl, getDesignInquiryMessage, getSimilarDesignInquiryMessage } from '../utils/whatsapp';
import { SimilarDesigns } from '../components/gallery/SimilarDesigns';
import { FullscreenViewer } from '../components/viewer/FullscreenViewer';
import { ShareModal } from '../components/viewer/ShareModal';
import { 
  Heart, 
  ShareNetwork, 
  WhatsappLogo, 
  Sparkle, 
  ArrowsOut, 
  CheckCircle, 
  Ruler, 
  Eye, 
  CalendarBlank,
  Compass
} from '@phosphor-icons/react';

export const DesignDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const design = designsData.find(d => d.slug === slug);

  if (!design) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center bg-brand-dark px-4">
        <h2 className="text-xl font-bold text-brand-ivory mb-2">التصميم غير موجود</h2>
        <p className="text-xs text-brand-ivory/60 mb-6">قد يكون تم تغيير الرابط أو نقل التصميم إلى قسم آخر</p>
        <Link
          to="/designs"
          className="px-6 py-2.5 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs shadow-luxury-gold hover:bg-brand-champagne transition-all"
        >
          العودة لمعرض التصاميم
        </Link>
      </div>
    );
  }

  const isFav = isFavorite(design.id);
  const gallery = design.galleryImages && design.galleryImages.length > 0 ? design.galleryImages : [design.mainImage];

  return (
    <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-ivory/60 mb-8 overflow-x-auto pb-1">
          <Link to="/" className="hover:text-brand-gold transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to="/designs" className="hover:text-brand-gold transition-colors">التصاميم</Link>
          <span>/</span>
          <Link to={`/designs?category=${design.category}`} className="hover:text-brand-gold transition-colors">
            {design.categoryArabic}
          </Link>
          <span>/</span>
          <span className="text-brand-gold truncate max-w-xs font-semibold">{design.title}</span>
        </div>

        {/* Visuals Gallery (7 cols) + Meta (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Visual Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onClick={() => setIsViewerOpen(true)}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl cursor-pointer group bg-brand-surface/40"
            >
              <img
                src={gallery[activeImageIndex]}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Badges */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-brand-dark/80 backdrop-blur-md text-brand-gold border border-brand-gold/30">
                  {design.categoryArabic}
                </span>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-brand-dark/80 backdrop-blur-md text-brand-champagne border border-brand-gold/20">
                  {design.styleArabic}
                </span>
              </div>

              {/* Fullscreen Hint */}
              <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-brand-dark/80 hover:bg-brand-gold text-brand-ivory hover:text-brand-dark backdrop-blur-md border border-brand-gold/30 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-lg">
                <ArrowsOut size={14} weight="bold" />
                <span>معاينة بالحجم الكامل</span>
              </div>

              {/* View counter */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-brand-ivory/80 bg-brand-dark/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10">
                <Eye size={13} weight="bold" className="text-brand-gold" />
                <span>{design.views} مشاهدة</span>
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-brand-gold scale-105 shadow-luxury-gold'
                        : 'border-brand-gold/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Design Info & CTAs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-serif text-brand-gold tracking-widest uppercase">
                  {design.titleEn || 'AL MAGD SIGNATURE DESIGN'}
                </span>
                <span className="text-[11px] text-brand-ivory/50 flex items-center gap-1">
                  <CalendarBlank size={13} className="text-brand-gold" />
                  <span>{design.dateAdded}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-ivory leading-snug font-arabic">
                {design.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
              {design.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-brand-surface/50 border border-brand-gold/20">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-brand-gold">
                  <Ruler size={13} weight="duotone" />
                  <span>المساحة التقريبية</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-brand-ivory">{design.approximateArea} ({design.spaceArabic})</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-brand-gold">
                  <Compass size={13} weight="duotone" />
                  <span>الأسلوب المعماري</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-brand-ivory">{design.styleArabic}</p>
              </div>
            </div>

            {/* Colors */}
            <div>
              <p className="text-xs font-bold text-brand-gold mb-1.5">باليت الألوان:</p>
              <div className="flex items-center gap-1.5">
                {design.colorsArabic.map((col, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] bg-brand-surface border border-brand-gold/20 text-brand-ivory/90 font-medium"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <p className="text-xs font-bold text-brand-gold mb-2">الخامات والمواد الأساسية:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {design.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-brand-ivory/80">
                    <CheckCircle size={14} weight="fill" className="text-brand-gold shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-2.5">
              <a
                href={getWhatsAppUrl(getDesignInquiryMessage(design))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark font-extrabold text-xs sm:text-sm shadow-luxury-gold hover:opacity-95 transition-all whitespace-nowrap"
              >
                <Sparkle size={15} weight="fill" className="text-brand-dark" />
                <span>أريد تنفيذ هذا التصميم</span>
              </a>

              <a
                href={getWhatsAppUrl(getSimilarDesignInquiryMessage(design))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs transition-all whitespace-nowrap"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>طلب استشارة أو تصميم مشابه لمساحتي</span>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => toggleFavorite(design.id)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                    isFav
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold'
                      : 'bg-brand-surface border-brand-gold/20 text-brand-ivory hover:text-brand-gold'
                  }`}
                >
                  <Heart size={15} weight={isFav ? "fill" : "regular"} className={isFav ? 'text-brand-gold' : ''} />
                  <span>{isFav ? 'محفوظ في المفضلة' : 'حفظ التصميم'}</span>
                </button>

                <button
                  onClick={() => setIsShareOpen(true)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-surface border border-brand-gold/20 text-brand-ivory hover:text-brand-gold text-xs font-semibold transition-all"
                >
                  <ShareNetwork size={15} />
                  <span>مشاركة</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Similar Designs */}
        <SimilarDesigns
          currentDesign={design}
          onQuickView={(d) => {
            navigate(`/designs/${d.slug}`);
          }}
        />

      </div>

      <FullscreenViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        design={design}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        design={design}
      />
    </div>
  );
};
