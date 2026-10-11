import React from 'react';
import { Star, Eye, Plus, AlertCircle } from 'lucide-react';
import { Product } from '../data/products.ts';
import { useCart } from '../context/CartContext.tsx';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white border border-[#EAE3D9] rounded-2xl overflow-hidden hover:border-[#D9D2C7] hover:shadow-md transition-all duration-300">
      {/* Visual Carrier: 65-75% height on neutral backdrop */}
      <div
        className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Subtle Badge Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#1A1816] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Stock Out Overlay if not in stock */}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-[#FFF1F2] border border-[#FECDD3] text-[#9F1239] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm">
            Rupture
          </div>
        )}

        {/* Quick View Button on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex-1 py-2 bg-white/95 backdrop-blur-xs text-[#1A1816] text-[11px] font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:bg-white flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Fiche détaillée</span>
          </button>
        </div>
      </div>

      {/* Information Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata: Category · Volume */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#8C8479] mb-1.5 font-medium">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.volume}</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelect(product)}
            className="font-serif text-lg font-semibold text-[#1A1816] group-hover:text-[#475346] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6B6661] mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating and Price / CTA Strip */}
        <div className="mt-4 pt-3 border-t border-[#F3EFEA] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-3.5 h-3.5 fill-[#D99A45] text-[#D99A45]" />
              <span className="text-xs font-semibold text-[#1A1816] font-mono">{product.rating.toFixed(1)}</span>
              <span className="text-[10px] text-[#8C8479]">({product.reviewCount})</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-[#1A1816]">
                {product.price.toFixed(2).replace('.', ',')} €
              </span>
              {product.originalPrice && (
                <span className="font-mono text-xs text-[#8C8479] line-through">
                  {product.originalPrice.toFixed(2).replace('.', ',')} €
                </span>
              )}
            </div>
          </div>

          {product.inStock ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              className="p-2.5 bg-[#FAF8F5] border border-[#D9D2C7] text-[#1A1816] hover:bg-[#1A1816] hover:text-[#FAF8F5] hover:border-[#1A1816] rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1816]"
              aria-label={`Ajouter ${product.name} au panier`}
              title="Ajouter au panier"
            >
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="p-2.5 bg-[#F3EFEA] border border-[#EAE3D9] text-[#A89F91] cursor-not-allowed rounded-xl"
              title="Produit temporairement épuisé"
              aria-label="Produit épuisé"
            >
              <AlertCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
