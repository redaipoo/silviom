import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkle, ArrowLeft } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-brand-dark">
      {/* Cinematic Background Image with Dark Teal Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="AL MĀGD Luxury Modern Kitchens"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-transparent to-brand-dark/65" />
      </div>

      {/* Hero Content (Strict max 4 text elements) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* 1. Eyebrow Badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-surface/80 border border-brand-gold/35 text-xs font-semibold text-brand-champagne mb-5 backdrop-blur-md"
        >
          <Sparkle size={13} weight="fill" className="text-brand-gold" />
          <span>المجد للمطابخ الحديثة والتصميم الداخلي</span>
        </motion.div>

        {/* 2. Headline (Max 2 lines) */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-ivory tracking-tight leading-[1.2] max-w-3xl font-arabic drop-shadow-md"
        >
          نصمم المساحات <br className="hidden sm:block" />
          <span className="text-gold-gradient">التي تشبهك</span>
        </motion.h1>

        {/* 3. Subtext (Max 20 words) */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm sm:text-base md:text-lg text-brand-ivory/80 max-w-xl font-light leading-relaxed drop-shadow"
        >
          مطابخ وديكورات داخلية تجمع بين الجمال، الوظيفة، والدقة.
        </motion.p>

        {/* 4. CTAs (Max 2 actions) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <Link
            to="/designs"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark shadow-luxury-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>استكشف التصاميم</span>
            <ArrowLeft size={16} weight="bold" className="text-brand-dark transition-transform group-hover:-translate-x-1" />
          </Link>

          <Link
            to="/request"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory hover:text-brand-gold border border-brand-gold/30 hover:border-brand-gold backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>اطلب تصميمك</span>
          </Link>
        </motion.div>

        {/* Metrics Row */}
        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-brand-gold/15 max-w-lg w-full">
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold text-brand-gold font-serif">+15</p>
            <p className="text-[10px] sm:text-xs text-brand-ivory/60 mt-0.5">عاماً من الخبرة</p>
          </div>
          <div className="text-center border-x border-brand-gold/15">
            <p className="text-lg sm:text-xl font-bold text-brand-champagne font-serif">+950</p>
            <p className="text-[10px] sm:text-xs text-brand-ivory/60 mt-0.5">مشروع منجز</p>
          </div>
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold text-brand-gold font-serif">100%</p>
            <p className="text-[10px] sm:text-xs text-brand-ivory/60 mt-0.5">تصاميم مخصصة</p>
          </div>
        </div>

      </div>
    </section>
  );
};
