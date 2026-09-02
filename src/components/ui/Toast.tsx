import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { CheckCircle, X } from '@phosphor-icons/react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useFavorites();

  if (!toastMessage) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-brand-surface border border-brand-gold/40 text-brand-ivory px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md max-w-md animate-fade-in"
    >
      <CheckCircle size={20} weight="fill" className="text-brand-gold shrink-0" />
      <p className="text-xs font-semibold text-brand-ivory leading-relaxed">{toastMessage}</p>
      <button
        onClick={clearToast}
        className="text-brand-ivory/60 hover:text-brand-ivory transition-colors p-1"
        aria-label="إغلاق الإشعار"
      >
        <X size={14} />
      </button>
    </div>
  );
};
