import React, { useState } from 'react';
import { Search, X, ArrowUpDown, AlertCircle } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';
import { ProductCard } from '../components/ProductCard.tsx';

interface SearchResultsPageProps {
  initialQuery?: string;
  onSelectProduct: (product: Product) => void;
  onNavigateShop: () => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  initialQuery = '',
  onSelectProduct,
  onNavigateShop,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc'>('popularity');

  const categories = ['Tous', 'Nettoyants', 'Sérums', 'Hydratants', 'Masques & soins', 'Corps & bien-être'];

  // Match products
  const matchingProducts = PRODUCTS.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.ingredientsList.toLowerCase().includes(q);

    const matchesCat = selectedCategory === 'Tous' || p.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  const sortedProducts = [...matchingProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
          Résultats de recherche
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium mb-6">
          {query.trim() ? `Recherche : « ${query} »` : 'Explorer le catalogue'}
        </h1>

        {/* Live Search Input Box */}
        <div className="relative flex items-center bg-white border border-[#D9D2C7] rounded-full p-2 shadow-xs focus-within:border-[#1A1816]">
          <Search className="w-5 h-5 text-[#8C8479] ml-3 mr-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par soin, formule, vitamine..."
            className="flex-1 bg-transparent text-sm text-[#1A1816] focus:outline-none placeholder-[#8C8479]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1.5 text-[#8C8479] hover:text-[#1A1816] mr-2"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Query Suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
          <span className="text-[#8C8479]">Recherches fréquentes :</span>
          {['Sérum', 'Vitamine C', 'Hydratation', 'Rose', 'Argile', 'Corps'].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQuery(s)}
              className="px-2.5 py-1 bg-white border border-[#EAE3D9] rounded-full text-[#4A453F] hover:border-[#1A1816] transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#EAE3D9] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-[#F3EFEA] rounded-full max-w-full">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                selectedCategory === c
                  ? 'bg-[#1A1816] text-[#FAF8F5]'
                  : 'text-[#6B6661] hover:text-[#1A1816]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sorter & Count */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          <span className="font-mono text-[#8C8479]">
            {sortedProducts.length} résultat{sortedProducts.length > 1 ? 's' : ''}
          </span>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C8479]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg px-2.5 py-1 text-[#1A1816] focus:outline-none"
            >
              <option value="popularity">Popularité</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid or Empty State */}
      {sortedProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#EAE3D9] p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center mx-auto text-[#8C8479]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
            Aucun résultat trouvé pour « {query} »
          </h3>
          <p className="text-xs text-[#6B6661] leading-relaxed">
            Vérifiez l’orthographe ou découvrez nos sérums et crèmes phares dans la boutique.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedCategory('Tous');
              }}
              className="px-5 py-2.5 border border-[#1A1816] text-[#1A1816] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#F3EFEA]"
            >
              Effacer la recherche
            </button>
            <button
              type="button"
              onClick={onNavigateShop}
              className="px-5 py-2.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#33302C]"
            >
              Voir la boutique
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} onSelect={onSelectProduct} />
          ))}
        </div>
      )}
    </div>
  );
};
