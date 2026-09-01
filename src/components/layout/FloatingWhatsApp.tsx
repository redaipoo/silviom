import React, { useState } from 'react';
import { WhatsappLogo, Sparkle } from '@phosphor-icons/react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-2 pointer-events-none'
        } hidden sm:flex items-center gap-1.5 bg-brand-surface/95 border border-brand-gold/30 text-brand-ivory text-xs px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md`}
      >
        <Sparkle size={13} weight="fill" className="text-brand-gold shrink-0" />
        <span>تحدث مباشرة مع مستشار التصميم</span>
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl('السلام عليكم، أود الاستفسار عن تصاميم شركة المجد وخيارات التنفيذ.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
        aria-label="تواصل عبر واتساب"
        title="محادثة واتساب مباشرة"
      >
        <WhatsappLogo size={26} weight="fill" className="text-white drop-shadow-sm" />
      </a>
    </div>
  );
};
