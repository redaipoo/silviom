import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { designsData } from '../data/designsData';
import { DesignItem, CategoryType, StyleType, ColorType, SpaceType, SortType } from '../types';
import { DesignCard } from '../components/gallery/DesignCard';
import { FilterBar } from '../components/gallery/FilterBar';
import { MobileFilterDrawer } from '../components/gallery/MobileFilterDrawer';
import { FullscreenViewer } from '../components/viewer/FullscreenViewer';
import { MagnifyingGlass, ImageSquare } from '@phosphor-icons/react';

export const DesignsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL State initialization
  const categoryParam = (searchParams.get('category') as CategoryType) || 'all';
  const styleParam = (searchParams.get('style') as StyleType | 'all') || 'all';
  const colorParam = (searchParams.get('color') as ColorType | 'all') || 'all';
  const spaceParam = (searchParams.get('space') as SpaceType | 'all') || 'all';
  const sortParam = (searchParams.get('sort') as SortType) || 'newest';
  const searchParam = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(categoryParam);
  const [selectedStyle, setSelectedStyle] = useState<StyleType | 'all'>(styleParam);
  const [selectedColor, setSelectedColor] = useState<ColorType | 'all'>(colorParam);
  const [selectedSpace, setSelectedSpace] = useState<SpaceType | 'all'>(spaceParam);
  const [sortBy, setSortBy] = useState<SortType>(sortParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedViewerDesign, setSelectedViewerDesign] = useState<DesignItem | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Sync state to URL params
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategory !== 'all') params.category = selectedCategory;
    if (selectedStyle !== 'all') params.style = selectedStyle;
    if (selectedColor !== 'all') params.color = selectedColor;
    if (selectedSpace !== 'all') params.space = selectedSpace;
    if (sortBy !== 'newest') params.sort = sortBy;
    if (searchQuery.trim()) params.q = searchQuery.trim();

    setSearchParams(params, { replace: true });
  }, [selectedCategory, selectedStyle, selectedColor, selectedSpace, sortBy, searchQuery, setSearchParams]);

  // Sync URL params when back/forward is used
  useEffect(() => {
    setSelectedCategory((searchParams.get('category') as CategoryType) || 'all');
    setSelectedStyle((searchParams.get('style') as StyleType | 'all') || 'all');
    setSelectedColor((searchParams.get('color') as ColorType | 'all') || 'all');
    setSelectedSpace((searchParams.get('space') as SpaceType | 'all') || 'all');
    setSortBy((searchParams.get('sort') as SortType) || 'newest');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Filter & Sort Logic
  const filteredDesigns = useMemo(() => {
    return designsData
      .filter(item => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
        if (selectedStyle !== 'all' && item.style !== selectedStyle) return false;
        if (selectedColor !== 'all' && !item.colors.includes(selectedColor)) return false;
        if (selectedSpace !== 'all' && item.space !== selectedSpace) return false;
        
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = item.title.toLowerCase().includes(q) || (item.titleEn && item.titleEn.toLowerCase().includes(q));
          const matchCategory = item.categoryArabic.toLowerCase().includes(q);
          const matchStyle = item.styleArabic.toLowerCase().includes(q);
          const matchColors = item.colorsArabic.some(c => c.toLowerCase().includes(q));
          const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
          const matchDesc = item.description.toLowerCase().includes(q);

          if (!matchTitle && !matchCategory && !matchStyle && !matchColors && !matchTags && !matchDesc) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'most-viewed') return b.views - a.views;
        if (sortBy === 'most-saved') return b.favoritesCount - a.favoritesCount;
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      });
  }, [selectedCategory, selectedStyle, selectedColor, selectedSpace, sortBy, searchQuery]);

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedStyle !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0) +
    (selectedSpace !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedStyle('all');
    setSelectedColor('all');
    setSelectedSpace('all');
    setSortBy('newest');
    setSearchQuery('');
  };

  const handleQuickView = (design: DesignItem) => {
    setSelectedViewerDesign(design);
    setIsViewerOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            التصاميم
          </h1>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2.5 leading-relaxed font-light">
            اكتشف مجموعة من تصاميمنا واختر الأسلوب الذي يناسبك.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-5 mb-10">
          {/* Real-time Search Input Box */}
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlass size={18} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم، اللون (بيج، أسود، خشبي)، الطراز، أو الخامة..."
              className="w-full bg-brand-surface/70 border border-brand-gold/25 focus:border-brand-gold rounded-2xl pr-11 pl-4 py-3 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/40 outline-none transition-all shadow-lg backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-brand-gold hover:text-brand-champagne"
              >
                مسح
              </button>
            )}
          </div>

          {/* Filter Bar */}
          <FilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedStyle={selectedStyle}
            onSelectStyle={setSelectedStyle}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            selectedSpace={selectedSpace}
            onSelectSpace={setSelectedSpace}
            sortBy={sortBy}
            onSelectSort={setSortBy}
            onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
            onResetFilters={handleResetFilters}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b border-brand-gold/15 text-xs text-brand-ivory/60">
          <div className="flex items-center gap-2">
            <span>تم العثور على</span>
            <span className="font-bold text-brand-gold text-sm">{filteredDesigns.length}</span>
            <span>تصميم</span>
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="text-brand-gold hover:text-brand-champagne transition-colors underline"
            >
              مسح جميع الفلاتر
            </button>
          )}
        </div>

        {/* Designs Gallery Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDesigns.map(design => (
              <DesignCard
                key={design.id}
                design={design}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-brand-gold/20 flex items-center justify-center text-brand-gold/60 mx-auto">
              <ImageSquare size={28} weight="duotone" />
            </div>
            <h3 className="text-base font-bold text-brand-ivory">لا توجد تصاميم مطابقة للبحث</h3>
            <p className="text-xs text-brand-ivory/60 leading-relaxed">
              جرّب تخفيف الفلاتر أو استخدام كلمات بحث أخرى لاستعراض المزيد من الخيارات
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-brand-gold text-brand-dark font-bold text-xs shadow-luxury-gold hover:bg-brand-champagne transition-all"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}

      </div>

      {/* Mobile Filters Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedStyle={selectedStyle}
        onSelectStyle={setSelectedStyle}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        selectedSpace={selectedSpace}
        onSelectSpace={setSelectedSpace}
        sortBy={sortBy}
        onSelectSort={setSortBy}
        onResetFilters={handleResetFilters}
        totalResultsCount={filteredDesigns.length}
      />

      {/* Global Fullscreen Lightbox */}
      <FullscreenViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        design={selectedViewerDesign}
        onSelectDesign={setSelectedViewerDesign}
        allDesigns={filteredDesigns}
      />
    </div>
  );
};
