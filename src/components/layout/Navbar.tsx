import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, List, Sparkle } from '@phosphor-icons/react';
import { useFavorites } from '../../context/FavoritesContext';
import { MobileMenu } from './MobileMenu';
import logoImg from '../../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { favoriteIds } = useFavorites();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'التصاميم', path: '/designs' },
    { name: 'الخدمات', path: '/services' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] flex items-center transition-all duration-400 ${
          isScrolled || !isHome
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/20 shadow-luxury'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-brand-gold/40 p-0.5 bg-black shadow-luxury-gold group-hover:border-brand-gold transition-all shrink-0">
              <img
                src={logoImg}
                alt="شركة المجد للمطابخ الحديثة و PVC"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wide text-brand-ivory group-hover:text-brand-champagne transition-colors font-arabic">
                  المجد
                </span>
                <span className="text-[10px] font-semibold text-brand-gold tracking-widest font-serif hidden sm:inline">
                  AL MĀGD
                </span>
              </div>
              <span className="text-[10px] text-brand-champagne/80 tracking-wider font-light">
                Modern Kitchens & P V C
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map(link => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-all rounded-xl ${
                    active
                      ? 'text-brand-gold bg-brand-surface/70'
                      : 'text-brand-ivory/80 hover:text-brand-champagne hover:bg-brand-surface/40'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Favorites Link with Counter */}
            <Link
              to="/favorites"
              className="relative p-2 rounded-xl text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-surface/80 border border-transparent hover:border-brand-gold/20 transition-all flex items-center gap-1.5"
              aria-label="المفضلة"
              title="تصاميمي المفضلة"
            >
              <Heart
                size={20}
                weight={favoriteIds.length > 0 ? "fill" : "regular"}
                className={favoriteIds.length > 0 ? "text-brand-gold" : ""}
              />
              {favoriteIds.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-brand-gold text-brand-dark text-[10px] font-bold flex items-center justify-center">
                  {favoriteIds.length}
                </span>
              )}
            </Link>

            {/* Prominent CTA Button ("Start Your Project") */}
            <Link
              to="/request"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark shadow-luxury-gold hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <Sparkle size={14} weight="fill" className="text-brand-dark" />
              <span>ابدأ مشروعك</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-brand-ivory hover:text-brand-gold hover:bg-brand-surface/80 border border-brand-gold/20 transition-all"
              aria-label="القائمة الرئيسية"
            >
              <List size={22} weight="bold" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        favoriteCount={favoriteIds.length}
      />
    </>
  );
};
