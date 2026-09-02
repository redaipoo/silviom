import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo, ArrowLeft } from '@phosphor-icons/react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const HeroSection: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl('السلام عليكم شركة المجد، أود الاستفسار عن تفصيل وتصميم مطبخ عصري.');

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* High-Resolution Photorealistic Modern Kitchen Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=90"
          alt="مطبخ عصري فاخر من تصميم شركة المجد"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle Dark Luxury Overlay for High Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/40" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
      </div>

      {/* Content Container (Minimal, Spacious, Impactful) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        
        {/* Short Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/80 border border-brand-gold/30 text-brand-champagne text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-luxury">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span>شركة المجد للمطابخ الحديثة و P V C — البيضاء</span>
        </div>

        {/* Short Powerful Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] font-arabic max-w-4xl">
          مطابخ عصرية.<br className="hidden sm:inline" />
          <span className="text-gold-gradient">صُممت لأجلك.</span>
        </h1>

        {/* Short Subtitle */}
        <p className="text-sm sm:text-lg text-brand-ivory/80 max-w-xl mx-auto mt-5 font-light leading-relaxed">
          نصمم وننفذ أرقى المطابخ والديكورات الداخلية بخامات PVC و MDF عالية الجودة ومطابقة تامة لأعلى معايير الإتقان.
        </p>

        {/* Two Clear Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary View Designs Button */}
          <Link
            to="/designs"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark font-extrabold text-sm sm:text-base shadow-luxury-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 whitespace-nowrap"
          >
            <span>تصفح التصاميم</span>
            <ArrowLeft size={18} weight="bold" />
          </Link>

          {/* Prominent WhatsApp CTA */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm sm:text-base shadow-luxury hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 whitespace-nowrap"
          >
            <WhatsappLogo size={20} weight="fill" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>

      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
};
