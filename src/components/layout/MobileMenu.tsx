import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Heart, Sparkle, WhatsappLogo, House, Image, SquaresFour, Info, PaperPlaneTilt } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
  favoriteCount: number;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  favoriteCount,
}) => {
  const location = useLocation();

  const getLinkIcon = (path: string) => {
    switch (path) {
      case '/': return <House size={20} />;
      case '/designs': return <Image size={20} />;
      case '/services': return <SquaresFour size={20} />;
      case '/about': return <Info size={20} />;
      case '/contact': return <PaperPlaneTilt size={20} />;
      default: return <House size={20} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-xs h-full bg-brand-dark border-r border-brand-gold/20 shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-4 border-b border-brand-gold/15 flex items-center justify-between bg-brand-surface/60">
              <div className="flex items-center gap-3">
                <img
                  src="/brand/logo.png"
                  alt="المجد"
                  className="w-9 h-9 object-contain rounded-lg border border-brand-gold/30 p-0.5 bg-brand-dark"
                />
                <div>
                  <h3 className="font-bold text-brand-ivory text-sm">المجد</h3>
                  <p className="text-[10px] text-brand-gold font-serif">AL MĀGD</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-brand-ivory/70 hover:text-brand-gold"
                aria-label="إغلاق القائمة"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="p-4 flex-1 space-y-1">
              <p className="text-[10px] font-bold text-brand-gold/70 tracking-wider uppercase mb-2 px-3">
                التنقل
              </p>
              {navLinks.map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-surface text-brand-gold border border-brand-gold/30'
                        : 'text-brand-ivory/80 hover:bg-brand-surface/40 hover:text-brand-champagne'
                    }`}
                  >
                    <span className={isActive ? 'text-brand-gold' : 'text-brand-ivory/50'}>
                      {getLinkIcon(link.path)}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              {/* Favorites */}
              <Link
                to="/favorites"
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                  location.pathname === '/favorites'
                    ? 'bg-brand-surface text-brand-gold border border-brand-gold/30'
                    : 'text-brand-ivory/80 hover:bg-brand-surface/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Heart size={20} weight={favoriteCount > 0 ? "fill" : "regular"} className={favoriteCount > 0 ? 'text-brand-gold' : 'text-brand-ivory/50'} />
                  <span>المفضلة</span>
                </div>
                {favoriteCount > 0 && (
                  <span className="bg-brand-gold text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {favoriteCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Bottom CTAs */}
            <div className="p-4 border-t border-brand-gold/15 space-y-2.5 bg-brand-surface/40">
              <Link
                to="/request"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark shadow-luxury-gold hover:opacity-95 transition-all"
              >
                <Sparkle size={14} weight="fill" className="text-brand-dark" />
                <span>اطلب تصميمك</span>
              </Link>

              <a
                href={getWhatsAppUrl('السلام عليكم، أود التواصل مع فريق شركة المجد للاستفسار عن التصاميم.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
