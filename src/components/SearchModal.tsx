import React, { useState } from 'react';
import { Search, X, Star, ArrowRight } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onViewAllResults: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onViewAllResults,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onViewAllResults(query.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-[#1A1816]/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative min-h-screen flex items-start justify-center p-4 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#EAE3D9] overflow-hidden">
          {/* Search Input Bar */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 border-b border-[#EAE3D9] flex items-center gap-3 bg-white">
            <Search className="w-5 h-5 text-[#8C8479]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un soin, un sérum, un ingrédient..."
              className="flex-1 bg-transparent text-[#1A1816] placeholder-[#8C8479] text-base focus:outline-none"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs text-[#8C8479] hover:text-[#1A1816] px-2 cursor-pointer"
              >
                Effacer
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#8C8479] hover:text-[#1A1816] rounded-full hover:bg-[#F3EFEA] cursor-pointer"
              aria-label="Fermer la recherche"
            >
              <X className="w-5 h-5" />
            </button>
          </form>

          {/* Quick Suggestions */}
          <div className="px-6 py-3 bg-[#F3EFEA] border-b border-[#EAE3D9] flex items-center gap-2 text-xs overflow-x-auto">
            <span className="text-[#8C8479] shrink-0">Suggestions :</span>
            {['Sérum Vitamine C', 'Hydratation', 'Nettoyant Douceur', 'Argile Rose', 'Corps'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 bg-white border border-[#D9D2C7] rounded-full text-[#4A453F] hover:border-[#1A1816] hover:text-[#1A1816] transition-colors shrink-0 cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="p-6 max-h-96 overflow-y-auto divide-y divide-[#EAE3D9]">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8C8479]">
                {query.trim() ? `${results.length} résultat(s) pour "${query}"` : 'Sélectifs les plus recherchés'}
              </p>
              {query.trim() && results.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    onViewAllResults(query.trim());
                    onClose();
                  }}
                  className="text-xs text-[#1A1816] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Voir tous les résultats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#8C8479] space-y-3">
                <p>Aucun soin ne correspond à « {query} ».</p>
                <button
                  type="button"
                  onClick={() => {
                    onViewAllResults('');
                    onClose();
                  }}
                  className="px-4 py-2 border border-[#1A1816] rounded-full text-xs font-semibold text-[#1A1816] hover:bg-white"
                >
                  Voir toute la boutique
                </button>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="py-3 flex items-center gap-4 hover:bg-white/80 p-2 rounded-xl transition-colors cursor-pointer group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-lg border border-[#EAE3D9] bg-white shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base font-semibold text-[#1A1816] group-hover:text-[#475346] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#6B6661] truncate">{product.subtitle}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#8C8479]">{product.category}</span>
                      <span className="text-[#8C8479]">·</span>
                      <div className="flex items-center text-[#D99A45] text-xs">
                        <Star className="w-3 h-3 fill-current inline mr-0.5" />
                        <span className="font-mono text-[11px] font-semibold text-[#1A1816]">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#1A1816] shrink-0">
                    {product.price.toFixed(2).replace('.', ',')} €
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
