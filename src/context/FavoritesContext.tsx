import React, { createContext, useContext, useState, useEffect } from 'react';
import { DesignItem } from '../types';
import { designsData } from '../data/designsData';

interface FavoritesContextType {
  favoriteIds: string[];
  favoriteItems: DesignItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  clearFavorites: () => void;
  selectedIds: string[];
  toggleSelect: (id: string) => void;
  selectAll: () => void;
  deselectAll: () => void;
  isAllSelected: boolean;
  toastMessage: string | null;
  clearToast: () => void;
}

const STORAGE_KEY = 'al_magd_favorites_v2';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['mg-k-01', 'mg-b-01', 'mg-w-01'];
    } catch {
      return ['mg-k-01', 'mg-b-01', 'mg-w-01'];
    }
  });

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favoriteIds]);

  // Keep selected IDs in sync with available favorite IDs
  useEffect(() => {
    setSelectedIds(prev => prev.filter(id => favoriteIds.includes(id)));
  }, [favoriteIds]);

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3000);
  };

  const clearToast = () => setToastMessage(null);

  const addToFavorites = (id: string) => {
    if (!favoriteIds.includes(id)) {
      setFavoriteIds(prev => [...prev, id]);
      const design = designsData.find(d => d.id === id);
      showToast(`تمت إضافة "${design?.title || 'التصميم'}" إلى المفضلة`);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteIds(prev => prev.filter(item => item !== id));
    setSelectedIds(prev => prev.filter(item => item !== id));
    const design = designsData.find(d => d.id === id);
    showToast(`تمت إزالة "${design?.title || 'التصميم'}" من المفضلة`);
  };

  const toggleFavorite = (id: string) => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  const clearFavorites = () => {
    setFavoriteIds([]);
    setSelectedIds([]);
    showToast('تم إفراغ قائمة المفضلة');
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(favoriteIds);
  };

  const deselectAll = () => {
    setSelectedIds([]);
  };

  const isAllSelected = favoriteIds.length > 0 && selectedIds.length === favoriteIds.length;

  const favoriteItems = designsData.filter(d => favoriteIds.includes(d.id));

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        favoriteItems,
        isFavorite,
        toggleFavorite,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        selectedIds,
        toggleSelect,
        selectAll,
        deselectAll,
        isAllSelected,
        toastMessage,
        clearToast
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
