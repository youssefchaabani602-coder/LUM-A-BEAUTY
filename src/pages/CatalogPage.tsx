import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ArrowUpDown, AlertCircle } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';
import { ProductCard } from '../components/ProductCard.tsx';

interface CatalogPageProps {
  categorySlug?: string; // e.g. 'nettoyants', 'serums', 'hydratants', 'masques', 'corps', or undefined for all
  title?: string;
  description?: string;
  onSelectProduct: (product: Product) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  categorySlug,
  title,
  description,
  onSelectProduct,
}) => {
  // Category mapping
  const categoryMap: Record<string, string> = {
    nettoyants: 'Nettoyants',
    serums: 'Sérums',
    hydratants: 'Hydratants',
    masques: 'Masques & soins',
    corps: 'Corps & bien-être',
  };

  const currentCategoryName = categorySlug ? categoryMap[categorySlug] || 'Tous' : 'Tous';

  // State filters
  const [selectedCategory, setSelectedCategory] = useState<string>(currentCategoryName);
  const [priceRange, setPriceRange] = useState<'all' | 'under20' | '20to30' | 'over30'>('all');
  const [availabilityOnly, setAvailabilityOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'newest'>('popularity');

  const categories = ['Tous', 'Nettoyants', 'Sérums', 'Hydratants', 'Masques & soins', 'Corps & bien-être'];

  // Update selected category when props change
  React.useEffect(() => {
    setSelectedCategory(currentCategoryName);
  }, [categorySlug]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'Tous' && product.category !== selectedCategory) {
        return false;
      }
      // Availability filter
      if (availabilityOnly && !product.inStock) {
        return false;
      }
      // Price range filter
      if (priceRange === 'under20' && product.price >= 20) return false;
      if (priceRange === '20to30' && (product.price < 20 || product.price > 30)) return false;
      if (priceRange === 'over30' && product.price <= 30) return false;

      return true;
    });
  }, [selectedCategory, availabilityOnly, priceRange]);

  // Sorting logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-asc') {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'newest') {
      return list.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    }
    // Default: popularity
    return list.sort((a, b) => b.reviewCount - a.reviewCount);
  }, [filteredProducts, sortBy]);

  const hasActiveFilters =
    selectedCategory !== (currentCategoryName === 'Tous' ? 'Tous' : currentCategoryName) ||
    priceRange !== 'all' ||
    availabilityOnly;

  const clearAllFilters = () => {
    setSelectedCategory(currentCategoryName);
    setPriceRange('all');
    setAvailabilityOnly(false);
    setSortBy('popularity');
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
          {selectedCategory === 'Tous' ? 'Haute Cosmétique Française' : `Collection ${selectedCategory}`}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium">
          {title || (selectedCategory === 'Tous' ? 'Tous nos soins d’exception' : selectedCategory)}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B6661] mt-3 leading-relaxed">
          {description ||
            `Découvrez nos formulations botaniques actives créées pour sublimer le teint, protéger l'épiderme et enrichir votre rituel quotidien.`}
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#EAE3D9] shadow-xs mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Categories Segmented Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-[#F3EFEA] rounded-full max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1816] text-[#FAF8F5] shadow-xs'
                    : 'text-[#6B6661] hover:text-[#1A1816]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sorter */}
          <div className="flex items-center gap-3 self-end lg:self-auto text-xs text-[#6B6661]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C8479]" />
            <span>Trier par :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg px-3 py-1.5 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none cursor-pointer"
            >
              <option value="popularity">Popularité & Avis</option>
              <option value="price-asc">Prix croissant (€)</option>
              <option value="price-desc">Prix décroissant (€)</option>
              <option value="newest">Nouveautés récentes</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters: Price Range & Stock Status */}
        <div className="pt-3 border-t border-[#F3EFEA] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#8C8479] font-medium flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filtrer par prix :
            </span>

            <div className="flex gap-1.5">
              {[
                { label: 'Tous les prix', val: 'all' },
                { label: '< 20 €', val: 'under20' },
                { label: '20 € – 30 €', val: '20to30' },
                { label: '> 30 €', val: 'over30' },
              ].map((p) => (
                <button
                  key={p.val}
                  type="button"
                  onClick={() => setPriceRange(p.val as any)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                    priceRange === p.val
                      ? 'bg-[#EAE3D9] text-[#1A1816] font-semibold'
                      : 'bg-transparent text-[#6B6661] hover:bg-[#F3EFEA]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 cursor-pointer ml-2">
              <input
                type="checkbox"
                checked={availabilityOnly}
                onChange={(e) => setAvailabilityOnly(e.target.checked)}
                className="rounded border-[#D9D2C7] text-[#1A1816] focus:ring-0"
              />
              <span className="text-[#1A1816] font-medium">En stock uniquement</span>
            </label>
          </div>

          {/* Result Count and Clear Action */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#8C8479]">
              {sortedProducts.length} soin{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[#9F1239] hover:underline flex items-center gap-1 font-semibold"
              >
                <X className="w-3.5 h-3.5" />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            {selectedCategory !== 'Tous' && (
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#D9D2C7] px-2.5 py-1 rounded-md text-[#1A1816]">
                Catégorie: {selectedCategory}
                <button type="button" onClick={() => setSelectedCategory('Tous')} className="hover:text-[#9F1239]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {priceRange !== 'all' && (
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#D9D2C7] px-2.5 py-1 rounded-md text-[#1A1816]">
                Prix:{' '}
                {priceRange === 'under20'
                  ? 'Moins de 20 €'
                  : priceRange === '20to30'
                  ? '20 € à 30 €'
                  : 'Plus de 30 €'}
                <button type="button" onClick={() => setPriceRange('all')} className="hover:text-[#9F1239]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {availabilityOnly && (
              <span className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#D9D2C7] px-2.5 py-1 rounded-md text-[#1A1816]">
                En stock uniquement
                <button type="button" onClick={() => setAvailabilityOnly(false)} className="hover:text-[#9F1239]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      {sortedProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#EAE3D9] p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center mx-auto text-[#8C8479]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
            Aucun soin ne correspond à ces critères
          </h3>
          <p className="text-xs text-[#6B6661] leading-relaxed">
            Essayez d’élargir vos filtres de prix ou d’afficher tous les soins pour découvrir nos formules.
          </p>
          <button
            type="button"
            onClick={clearAllFilters}
            className="px-6 py-3 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#33302C]"
          >
            Réinitialiser tous les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};
