import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { CheckCircle, X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useFavorites();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-brand-surface border border-brand-gold/40 text-brand-ivory px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md max-w-md"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
