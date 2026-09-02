import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    } catch {
      // Fallback
    }
  }, [pathname, search]);

  return null;
};
