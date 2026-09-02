import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, ShieldCheck, WhatsappLogo } from '@phosphor-icons/react';
import logoImg from '../../assets/logo.png';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { getProjectImage } from '../../utils/assetHelper';

export const CompanyIntro: React.FC = () => {
  const whatsAppUrl = getWhatsAppUrl('السلام عليكم شركة المجد، أود التعرف أكثر على خدماتكم في تصميم المطابخ وغرف النوم والديكورات الداخلية.');

  return (
    <section id="company-intro" className="py-16 sm:py-24 bg-brand-surface/20 border-t border-brand-gold/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Image Column (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl group">
              <img
                src={getProjectImage('p21.jpg')}
                alt="شركة المجد للمطابخ الحديثة وغرف النوم والديكور الداخلي و PVC"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/20" />
              
              {/* Location badge on image */}
              <div className="absolute bottom-4 right-4 left-4 p-3 rounded-2xl bg-brand-dark/90 backdrop-blur-md border border-brand-gold/30 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-ivory">
                  <MapPin size={16} weight="duotone" className="text-brand-gold" />
                  <span>البيضاء — شارع القهاوي (بالقرب من قرطاسية بغداد)</span>
                </div>
                <span className="text-[10px] text-brand-champagne font-bold px-2 py-0.5 rounded-md bg-brand-surface border border-brand-gold/20">
                  PVC | MDF
                </span>
              </div>
            </div>
          </div>

          {/* Text & Brand Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Logo + Identity Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-brand-gold/40 p-1 bg-brand-dark shadow-luxury shrink-0">
                <img
                  src={logoImg}
                  alt="شركة المجد للمطابخ الحديثة و PVC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-ivory tracking-wide font-arabic">المجد</span>
                  <span className="text-xs font-light text-brand-gold font-serif tracking-widest">AL MĀGD</span>
                </div>
                <p className="text-xs text-brand-champagne font-medium">
                  Modern Kitchens, Bedrooms & PVC Decor
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-ivory leading-tight font-arabic">
              الريادة في صناعة <span className="text-gold-gradient">المطابخ والديكورات الداخلية</span> بمدينة البيضاء
            </h2>

            <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
              شركة المجد متخصصة في صناعة وتفصيل المطابخ العصرية، غرف النوم الفاخرة، خزائن الملابس ودريسنج روم، والأبواب والنوافذ والديكورات الداخلية المتكاملة (PVC | MDF). نجمع بين الفخامة المعمارية، المتانة الفائقة، والالتزام بأدق التفاصيل الهندسية لتحصل على مساحة استثنائية تدوم لسنوات.
            </p>

            {/* Quick trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-brand-surface/40 border border-brand-gold/15 flex items-center gap-2.5">
                <ShieldCheck size={20} weight="duotone" className="text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-brand-ivory">خامات أصلية وضمان تشطيب معتمد</span>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-surface/40 border border-brand-gold/15 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-bold text-brand-ivory">استشارات هندسية ومعاينات ميدانية</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-gold/30 hover:border-brand-gold text-brand-ivory text-xs font-bold transition-all shadow-md"
              >
                <span>عن الشركة وفلسفتنا</span>
                <ArrowLeft size={14} weight="bold" />
              </Link>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>تواصل معنا مباشرة</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
