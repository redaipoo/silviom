import React, { useState } from 'react';
import { X, Check, Copy, WhatsappLogo, ShareNetwork } from '@phosphor-icons/react';
import { DesignItem } from '../../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: DesignItem;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, design }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/#/designs/${design.slug}`
    : `https://redaipoo.github.io/silviom/#/designs/${design.slug}`;

  const shareText = `شاهد هذا التصميم الرائع "${design.title}" من شركة المجد للمطابخ والديكورات: ${currentUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: design.title,
          text: `تصميم ${design.title} - شركة المجد`,
          url: currentUrl,
        });
      } catch {
        // Cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity duration-200"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-brand-dark/95 border border-brand-gold/30 rounded-2xl shadow-2xl p-6 z-10 overflow-hidden animate-fade-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-gold/15">
          <div className="flex items-center gap-2 text-brand-ivory font-bold text-sm sm:text-base">
            <ShareNetwork size={18} weight="bold" className="text-brand-gold" />
            <span>مشاركة التصميم</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-brand-ivory/60 hover:text-brand-gold hover:bg-brand-surface"
          >
            <X size={18} />
          </button>
        </div>

        {/* Snapshot */}
        <div className="my-4 p-3 bg-brand-surface/60 rounded-xl flex items-center gap-3 border border-brand-gold/15">
          <img
            src={design.mainImage}
            alt={design.title}
            className="w-14 h-14 object-cover rounded-lg shrink-0 border border-brand-gold/20"
          />
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-brand-ivory truncate">{design.title}</h4>
            <p className="text-[11px] text-brand-champagne/80 mt-0.5">{design.categoryArabic} • {design.styleArabic}</p>
          </div>
        </div>

        {/* Share Channels */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs sm:text-sm font-bold transition-all"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>واتساب</span>
          </button>

          <button
            onClick={handleFacebookShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2]/30 text-xs sm:text-sm font-bold transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>فيسبوك</span>
          </button>
        </div>

        {/* Copy Link */}
        <div className="flex items-center gap-2 p-2 bg-brand-surface/90 rounded-xl border border-brand-gold/25">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent text-xs text-brand-ivory/80 px-2 outline-none select-all truncate font-mono"
          />
          <button
            onClick={handleCopy}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-gold text-brand-dark hover:bg-brand-champagne'
            }`}
          >
            {copied ? (
              <>
                <Check size={14} weight="bold" />
                <span>تم النسخ</span>
              </>
            ) : (
              <>
                <Copy size={14} weight="bold" />
                <span>نسخ</span>
              </>
            )}
          </button>
        </div>

        {/* Native Share */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="w-full mt-3 py-2 text-xs font-medium text-brand-ivory/70 hover:text-brand-champagne transition-colors text-center"
          >
            خيارات مشاركة إضافية على هاتفك
          </button>
        )}
      </div>
    </div>
  );
};
