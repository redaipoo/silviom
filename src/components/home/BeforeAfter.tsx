import React, { useState, useRef, useCallback, useEffect } from 'react';
import { beforeAfterData } from '../../data/beforeAfterData';
import { ArrowsHorizontal, MapPin, Clock } from '@phosphor-icons/react';

export const BeforeAfter: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = beforeAfterData[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-20 lg:py-28 bg-brand-surface/20 border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            قبل و بعد <span className="text-gold-gradient">التنفيذ</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2">
            اسحب المؤشر لترى كيف نحوّل المساحات القديمة إلى تحف فنية متكاملة
          </p>

          {/* Project Switcher Tabs */}
          {beforeAfterData.length > 1 && (
            <div className="flex items-center justify-center gap-2.5 mt-5">
              {beforeAfterData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItemIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeItemIndex === idx
                      ? 'bg-brand-gold text-brand-dark shadow-luxury-gold'
                      : 'bg-brand-surface text-brand-ivory/70 border border-brand-gold/20 hover:text-brand-champagne'
                  }`}
                >
                  {item.categoryArabic}: {item.location}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Draggable Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[320px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-brand-gold/40 shadow-2xl"
          >
            {/* After Image */}
            <img
              src={currentItem.afterImage}
              alt="بعد التنفيذ"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* After Label */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-brand-dark/85 backdrop-blur-md text-brand-gold border border-brand-gold/30 text-[11px] font-bold shadow-lg">
              بعد التنفيذ (المجد)
            </div>

            {/* Before Image */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.beforeImage}
                alt="قبل التنفيذ"
                className="absolute inset-y-0 left-0 h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>

            {/* Before Label */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white/90 border border-white/20 text-[11px] font-bold shadow-lg">
              قبل التجديد
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute inset-y-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-gradient-to-b from-brand-gold via-white to-brand-gold shadow-[0_0_12px_rgba(223,202,167,0.8)]" />

              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-brand-dark/95 border-2 border-brand-gold text-brand-gold flex items-center justify-center shadow-2xl backdrop-blur-md pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <ArrowsHorizontal size={18} weight="bold" />
              </div>
            </div>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/20 text-[10px] text-brand-ivory/80 flex items-center gap-1.5 pointer-events-none">
              <ArrowsHorizontal size={12} weight="bold" className="text-brand-gold" />
              <span>اسحب يميناً ويساراً للمقارنة</span>
            </div>
          </div>

          {/* Project Details Below */}
          <div className="mt-5 p-5 rounded-2xl bg-brand-surface/50 border border-brand-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-brand-ivory">{currentItem.titleArabic}</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed max-w-xl">{currentItem.description}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0 text-xs text-brand-champagne/90 pt-1 sm:pt-0">
              <div className="flex items-center gap-1">
                <MapPin size={14} weight="duotone" className="text-brand-gold" />
                <span>{currentItem.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} weight="duotone" className="text-brand-gold" />
                <span>مدة التنفيذ: {currentItem.duration}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
