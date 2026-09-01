import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 pt-16 pb-10 text-brand-ivory relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-surface/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-gold/15">
          
          {/* Column 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-brand-gold/40 p-1 bg-brand-surface shadow-luxury">
                <img
                  src="/brand/logo.png"
                  alt="المجد - AL MĀGD"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-ivory tracking-wide">المجد</span>
                  <span className="text-sm font-light text-brand-gold font-serif tracking-widest">AL MĀGD</span>
                </div>
                <p className="text-xs text-brand-champagne font-medium tracking-wide">
                  Modern Kitchens & Bespoke Interiors
                </p>
              </div>
            </Link>

            <p className="text-sm text-brand-ivory/70 leading-relaxed max-w-md">
              شركة رائدة متخصصة في تصميم وتنفيذ المطابخ العصرية الفاخرة والديكورات الداخلية المتكاملة. نصمم المساحات التي تشبهك وفق أعلى معايير الجودة والاهتمام بأدق التفاصيل.
            </p>

            {/* Direct WhatsApp Badge */}
            <a
              href={getWhatsAppUrl('السلام عليكم، أود التواصل مع فريق شركة المجد للاستفسار عن التصاميم.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-surface/80 border border-brand-gold/30 hover:border-brand-gold text-brand-ivory hover:text-brand-champagne transition-all text-xs font-semibold shadow-inner-luxury group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>متاحون الآن للمحادثة والاستشارة عبر واتساب</span>
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
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
                <Link to="/designs?category=shops" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  ديكورات محلات ومعارض
                </Link>
              </li>
              <li>
                <Link to="/designs?category=3d-designs" className="text-brand-ivory/70 hover:text-brand-champagne transition-colors">
                  تصاميم ورندر 3D
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
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>المملكة العربية السعودية - صالات العرض والمعارض الرئيسية</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span dir="ltr" className="text-left font-mono text-xs">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@almagd-kitchens.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-brand-gold/80 mb-2">تابعنا للمزيد من الإلهام اليومي:</p>
              <div className="flex items-center gap-2">
                {/* Instagram SVG */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-gold/20 flex items-center justify-center text-brand-ivory/80 hover:text-brand-gold hover:border-brand-gold transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook SVG */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-gold/20 flex items-center justify-center text-brand-ivory/80 hover:text-brand-gold hover:border-brand-gold transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl('السلام عليكم، أود التواصل مع شركة المجد')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-ivory/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} شركة المجد (AL MĀGD). جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-brand-champagne/70">نصمم المساحات التي تشبهك</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-brand-gold hover:text-brand-champagne transition-colors"
              aria-label="العودة لأعلى الصفحة"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
