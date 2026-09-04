import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo, Phone, MapPin, ArrowUp } from '@phosphor-icons/react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const facebookUrl = 'https://www.facebook.com/p/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D8%AC%D8%AF-%D9%84%D9%84%D9%85%D8%B7%D8%A7%D8%A8%D8%AE-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9-%D9%88-P-V-C-100041790767867/';

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 pt-16 pb-10 text-brand-ivory relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-surface/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-gold/15">
          
          {/* Column 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-brand-gold/40 p-1 bg-black shadow-luxury-gold group-hover:border-brand-gold transition-all shrink-0">
                <img
                  src={logoImg}
                  alt="شركة المجد للمطابخ الحديثة و PVC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-ivory tracking-wide font-arabic">المجد</span>
                  <span className="text-sm font-light text-brand-gold font-serif tracking-widest">AL MĀGD</span>
                </div>
                <p className="text-xs text-brand-champagne font-medium tracking-wide">
                  Modern Kitchens & P V C
                </p>
              </div>
            </Link>

            <p className="text-sm text-brand-ivory/70 leading-relaxed max-w-md">
              شركة المجد لصناعة وأعمال المطابخ العصرية والأبواب والنوافذ والديكورات الداخلية (PVC | MDF). نصمم المساحات التي تلبي طموحك في مدينة البيضاء وكافة المدن الليبية بأعلى معايير الإتقان.
            </p>

            {/* Direct WhatsApp Badge */}
            <a
              href={getWhatsAppUrl('السلام عليكم، أود التواصل مع شركة المجد للمطابخ الحديثة و PVC.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-surface/80 border border-brand-gold/30 hover:border-brand-gold text-brand-ivory hover:text-brand-champagne transition-all text-xs font-semibold shadow-inner-luxury group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>تواصل مباشر واستشارة عبر واتساب</span>
              <WhatsappLogo size={16} weight="fill" className="text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-brand-gold tracking-wider uppercase font-arabic">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  معرض التصاميم
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  خدماتنا المتكاملة
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  تصاميمي المفضلة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  عن شركة المجد
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-brand-gold hover:text-brand-champagne font-medium transition-colors">
                  اطلب تصميمك الآن
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-brand-gold tracking-wider uppercase font-arabic">
              أقسام التصاميم
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/designs?category=kitchens" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  مطابخ عصرية
                </Link>
              </li>
              <li>
                <Link to="/designs?category=bedrooms" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  غرف نوم فاخرة
                </Link>
              </li>
              <li>
                <Link to="/designs?category=living-rooms" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  غرف معيشة ومجالس
                </Link>
              </li>
              <li>
                <Link to="/designs?category=wardrobes" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  خزائن ودولاب ملابس
                </Link>
              </li>
              <li>
                <Link to="/designs?category=interior-design" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  ديكور وتصميم صالات
                </Link>
              </li>
              <li>
                <Link to="/designs?category=pvc-doors" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  أبواب وأعمال PVC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-brand-gold tracking-wider uppercase font-arabic">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-sm text-brand-ivory/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} weight="duotone" className="text-brand-gold shrink-0 mt-0.5" />
                <span>ليبيا - البيضاء، شارع القهاوي (بالقرب من قرطاسية بغداد)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} weight="duotone" className="text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs text-brand-ivory/90 font-mono" dir="ltr">
                  <div>094 5919679</div>
                  <div>092 3741578</div>
                  <div>091 3769091</div>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-brand-gold/80 mb-2">تابعنا على صفحتنا الرسمية:</p>
              <div className="flex items-center gap-2">
                {/* Facebook Link to Official Page */}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2]/30 text-xs font-bold transition-all"
                  aria-label="صفحة شركة المجد على فيسبوك"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>فيسبوك (13k+ متابع)</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl('السلام عليكم شركة المجد')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsappLogo size={16} weight="fill" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-ivory/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} شركة المجد للمطابخ الحديثة و P V C - البيضاء، ليبيا. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-brand-champagne/70">نصمم المساحات التي تشبهك</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-brand-gold hover:text-brand-champagne transition-colors"
              aria-label="العودة لأعلى الصفحة"
            >
              <span>للأعلى</span>
              <ArrowUp size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
