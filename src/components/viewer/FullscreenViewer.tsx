import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  CaretRight, 
  CaretLeft, 
  MagnifyingGlassPlus, 
  MagnifyingGlassMinus, 
  ArrowCounterClockwise, 
  Heart, 
  ShareNetwork, 
  WhatsappLogo, 
  ArrowsOut,
  ArrowsIn
} from '@phosphor-icons/react';
import { DesignItem } from '../../types';
import { useFavorites } from '../../context/FavoritesContext';
import { getWhatsAppUrl, getDesignInquiryMessage } from '../../utils/whatsapp';
import { ShareModal } from './ShareModal';

interface FullscreenViewerProps {
  isOpen: boolean;
  onClose: () => void;
  design: DesignItem | null;
  onSelectDesign?: (design: DesignItem) => void;
  allDesigns?: DesignItem[];
}

export const FullscreenViewer: React.FC<FullscreenViewerProps> = ({
  isOpen,
  onClose,
  design,
  onSelectDesign,
  allDesigns = [],
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    setActiveImageIndex(0);
    setZoomLevel(1);
  }, [design]);

  const images = design
    ? (design.galleryImages && design.galleryImages.length > 0 ? design.galleryImages : [design.mainImage])
    : [];

  const handleNextImage = useCallback(() => {
    if (images.length > 1) {
      setActiveImageIndex(prev => (prev + 1) % images.length);
      setZoomLevel(1);
    }
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    if (images.length > 1) {
      setActiveImageIndex(prev => (prev - 1 + images.length) % images.length);
      setZoomLevel(1);
    }
  }, [images.length]);

  const handleNextDesign = useCallback(() => {
    if (!design || allDesigns.length === 0 || !onSelectDesign) return;
    const currentIndex = allDesigns.findIndex(d => d.id === design.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % allDesigns.length;
      onSelectDesign(allDesigns[nextIndex]);
    }
  }, [design, allDesigns, onSelectDesign]);

  const handlePrevDesign = useCallback(() => {
    if (!design || allDesigns.length === 0 || !onSelectDesign) return;
    const currentIndex = allDesigns.findIndex(d => d.id === design.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + allDesigns.length) % allDesigns.length;
      onSelectDesign(allDesigns[prevIndex]);
    }
  }, [design, allDesigns, onSelectDesign]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handleNextImage();
      } else if (e.key === 'ArrowRight') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNextImage, handlePrevImage]);

  const toggleBrowserFullscreen = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
        setIsFullscreen(true);
      } else {
        document.exitFullscreen?.().catch(() => {});
        setIsFullscreen(false);
      }
    } catch {
      // Fallback
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.4, 2.8));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.4, 1));
  const handleZoomReset = () => setZoomLevel(1);

  if (!isOpen || !design) return null;

  const isFav = isFavorite(design.id);
  const whatsAppUrl = getWhatsAppUrl(getDesignInquiryMessage(design));

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-brand-dark/95 backdrop-blur-xl text-brand-ivory select-none overflow-hidden animate-fade-in">
      {/* Top Control Bar */}
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-brand-gold/15 bg-brand-dark/80 backdrop-blur-md">
        {/* Design Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-surface border border-brand-gold/30 text-brand-gold shrink-0">
            {design.categoryArabic}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-brand-ivory truncate max-w-xs sm:max-w-md">
            {design.title}
          </h3>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom controls */}
          <div className="hidden md:flex items-center bg-brand-surface/60 rounded-xl p-1 border border-brand-gold/20 mr-2">
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg hover:text-brand-gold hover:bg-brand-surface transition-colors"
              title="تكبير الصورة"
              aria-label="تكبير"
            >
              <MagnifyingGlassPlus size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-1.5 rounded-lg hover:text-brand-gold hover:bg-brand-surface transition-colors disabled:opacity-30"
              title="تصغير الصورة"
              aria-label="تصغير"
            >
              <MagnifyingGlassMinus size={16} />
            </button>
            <button
              onClick={handleZoomReset}
              disabled={zoomLevel === 1}
              className="p-1.5 rounded-lg hover:text-brand-gold hover:bg-brand-surface transition-colors disabled:opacity-30"
              title="إعادة ضبط الحجم"
              aria-label="إعادة ضبط"
            >
              <ArrowCounterClockwise size={16} />
            </button>
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleBrowserFullscreen}
            className="hidden sm:flex p-2 rounded-xl text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-surface/80 border border-brand-gold/15 transition-all"
            title="ملء الشاشة"
            aria-label="ملء الشاشة"
          >
            {isFullscreen ? <ArrowsIn size={16} /> : <ArrowsOut size={16} />}
          </button>

          {/* Favorite toggle */}
          <button
            onClick={() => toggleFavorite(design.id)}
            className={`p-2 rounded-xl border transition-all ${
              isFav
                ? 'bg-brand-gold/20 border-brand-gold text-brand-gold'
                : 'text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-surface/80 border-brand-gold/15'
            }`}
            title={isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
            aria-label="المفضلة"
          >
            <Heart size={16} weight={isFav ? "fill" : "regular"} className={isFav ? 'text-brand-gold' : ''} />
          </button>

          {/* Share button */}
          <button
            onClick={() => setIsShareOpen(true)}
            className="p-2 rounded-xl text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-surface/80 border border-brand-gold/15 transition-all"
            title="مشاركة التصميم"
            aria-label="مشاركة"
          >
            <ShareNetwork size={16} />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-brand-surface/80 text-brand-ivory hover:text-brand-gold hover:bg-brand-surface border border-brand-gold/30 transition-all mr-1"
            aria-label="إغلاق العارض"
            title="إغلاق (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Stage Image Area */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-5 overflow-hidden">
        <div
          className="relative max-w-full max-h-full flex items-center justify-center overflow-auto transition-opacity duration-300"
        >
          <img
            src={images[activeImageIndex] || design.mainImage}
            alt={design.title}
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: zoomLevel > 1 ? 'grab' : 'zoom-in',
            }}
            onClick={() => (zoomLevel === 1 ? handleZoomIn() : handleZoomReset())}
            className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-brand-gold/20"
          />
        </div>

        {/* Navigation Arrows for Multiple Images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-brand-dark/80 hover:bg-brand-gold hover:text-brand-dark border border-brand-gold/30 text-brand-ivory transition-all backdrop-blur-md shadow-2xl z-20"
              aria-label="الصورة السابقة"
            >
              <CaretRight size={20} weight="bold" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-brand-dark/80 hover:bg-brand-gold hover:text-brand-dark border border-brand-gold/30 text-brand-ivory transition-all backdrop-blur-md shadow-2xl z-20"
              aria-label="الصورة التالية"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
          </>
        )}

        {/* Navigation Arrows for Next/Prev Design in Gallery */}
        {allDesigns.length > 1 && (
          <div className="hidden lg:flex items-center gap-3 absolute top-5 left-5 z-20">
            <button
              onClick={handlePrevDesign}
              className="px-3 py-1.5 rounded-lg bg-brand-surface/80 border border-brand-gold/20 text-xs text-brand-ivory hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              <CaretRight size={14} weight="bold" />
              <span>التصميم السابق</span>
            </button>
            <button
              onClick={handleNextDesign}
              className="px-3 py-1.5 rounded-lg bg-brand-surface/80 border border-brand-gold/20 text-xs text-brand-ivory hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              <span>التصميم التالي</span>
              <CaretLeft size={14} weight="bold" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Bar: Large WhatsApp CTA Button & Short Info */}
      <div className="relative z-20 border-t border-brand-gold/15 bg-brand-dark/95 backdrop-blur-md p-3 sm:p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Short Project Info & Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto max-w-full">
            {images.length > 1 && (
              <div className="flex items-center gap-1.5 shrink-0">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`relative w-11 h-11 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
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

            <div className="text-xs text-brand-ivory/70 hidden md:flex items-center gap-2">
              <span>المساحة: {design.approximateArea}</span>
              <span>•</span>
              <span>المواد: {design.materials.slice(0, 2).join('، ')}</span>
            </div>
          </div>

          {/* Prominent WhatsApp CTA Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-[#25D366] text-white shadow-luxury hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>اطلب هذا التصميم عبر واتساب</span>
          </a>

        </div>
      </div>

      {/* Share Dialog */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        design={design}
      />
    </div>
  );
};
