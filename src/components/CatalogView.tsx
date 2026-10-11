import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';
import { ProductCard } from './ProductCard.tsx';

interface CatalogViewProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  initialCategory = 'Tous',
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc'>('popularity');

  const categories = ['Tous', 'Sérums', 'Hydratants', 'Nettoyants', 'Masques & soins'];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'Tous') return true;
    return p.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return b.reviewCount - a.reviewCount; // Popularity
  });

  return (
    <section id="boutique" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
          Le Catalogue Complet
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium">
          Toutes nos formulations botaniques
        </h2>
        <p className="text-xs text-[#6B6661] mt-2">
          {sortedProducts.length} soins d’exception conçus pour sublimer et équilibrer l’épiderme.
        </p>
      </div>

      {/* Interactive Filter Bar & Sorter (Segmented buttons) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-[#EAE3D9]">
        {/* Category Pills/Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F3EFEA] rounded-full overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1A1816] text-[#FAF8F5] shadow-xs'
                  : 'text-[#6B6661] hover:text-[#1A1816]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#6B6661]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C8479]" />
          <span>Trier par :</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#D9D2C7] rounded-lg px-3 py-1.5 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none cursor-pointer"
          >
            <option value="popularity">Popularité & Avis</option>
            <option value="price-asc">Prix croissant (€)</option>
            <option value="price-desc">Prix décroissant (€)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};
