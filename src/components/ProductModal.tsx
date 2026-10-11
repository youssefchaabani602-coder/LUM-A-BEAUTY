import React, { useState } from 'react';
import { X, Star, Plus, Minus, Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { Product } from '../data/products.ts';
import { useCart } from '../context/CartContext.tsx';
import { ProductCard } from './ProductCard.tsx';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  relatedProducts: Product[];
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectProduct,
  relatedProducts,
}) => {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage'>('benefits');

  if (!product) return null;

  const currentImage = product.gallery[selectedImageIndex] || product.image;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1816]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#EAE3D9] overflow-hidden my-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 rounded-full text-[#1A1816] hover:bg-white shadow-sm transition-colors"
            aria-label="Fermer la vue produit"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Left */}
            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE3D9]">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE3D9] relative mb-4">
                <img
                  src={currentImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#1A1816] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-3">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx ? 'border-[#1A1816] scale-102' : 'border-[#EAE3D9] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-[#F3EFEA] grid grid-cols-3 gap-2 text-center text-[11px] text-[#6B6661]">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-[#475346]" />
                  <span>Livraison 48h</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-4 h-4 text-[#475346]" />
                  <span>Actifs testés</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-[#475346]" />
                  <span>Retour 30j</span>
                </div>
              </div>
            </div>

            {/* Product Purchase Module Right */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C8479] font-medium mb-1">
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.volume}</span>
                </div>

                <h1 className="font-serif text-3xl font-medium text-[#1A1816] mb-1">
                  {product.name}
                </h1>
                <p className="text-xs text-[#8C8479] mb-3">{product.subtitle}</p>

                {/* Rating & Price */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D9] mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-[#D99A45]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#1A1816]">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-[11px] text-[#8C8479]">
                      ({product.reviewCount} avis certifiés démo)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold text-[#1A1816]">
                      {product.price.toFixed(2).replace('.', ',')} €
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-sm text-[#8C8479] line-through">
                        {product.originalPrice.toFixed(2).replace('.', ',')} €
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#4A453F] leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Tabs: Bénéfices / Ingrédients / Application */}
                <div className="mb-6">
                  <div className="flex border-b border-[#EAE3D9] gap-4 text-xs font-medium uppercase tracking-wider">
                    <button
                      type="button"
                      onClick={() => setActiveTab('benefits')}
                      className={`pb-2 border-b-2 transition-colors ${
                        activeTab === 'benefits'
                          ? 'border-[#1A1816] text-[#1A1816]'
                          : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                      }`}
                    >
                      Bénéfices
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ingredients')}
                      className={`pb-2 border-b-2 transition-colors ${
                        activeTab === 'ingredients'
                          ? 'border-[#1A1816] text-[#1A1816]'
                          : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                      }`}
                    >
                      Ingrédients (Démo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('usage')}
                      className={`pb-2 border-b-2 transition-colors ${
                        activeTab === 'usage'
                          ? 'border-[#1A1816] text-[#1A1816]'
                          : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                      }`}
                    >
                      Rituel
                    </button>
                  </div>

                  <div className="py-3 text-xs text-[#6B6661]">
                    {activeTab === 'benefits' && (
                      <ul className="space-y-1.5 list-disc list-inside">
                        {product.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {activeTab === 'ingredients' && (
                      <div className="space-y-2">
                        <p className="font-mono text-[11px] leading-relaxed bg-[#F3EFEA] p-2.5 rounded-lg border border-[#EAE3D9]">
                          {product.ingredientsList}
                        </p>
                        <p className="text-[10px] text-[#8C8479] italic">
                          {product.fictionalNote}
                        </p>
                      </div>
                    )}
                    {activeTab === 'usage' && (
                      <p className="leading-relaxed">{product.usageTips}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions & Quantity */}
              <div className="pt-4 border-t border-[#EAE3D9] space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#D9D2C7] rounded-xl bg-white px-2 py-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#6B6661] hover:text-[#1A1816]"
                      aria-label="Diminuer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-semibold text-[#1A1816]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#6B6661] hover:text-[#1A1816]"
                      aria-label="Augmenter"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold rounded-xl hover:bg-[#33302C] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-[#E4CBC5]" />
                    <span>Ajouter au panier · {(product.price * quantity).toFixed(2).replace('.', ',')} €</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products strip inside modal */}
          {relatedProducts.length > 0 && (
            <div className="p-6 sm:p-8 bg-[#F3EFEA]/70 border-t border-[#EAE3D9]">
              <h3 className="font-serif text-lg font-semibold text-[#1A1816] mb-4">
                Complétez votre rituel
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedProducts.slice(0, 3).map((rel) => (
                  <ProductCard
                    key={rel.id}
                    product={rel}
                    onSelect={(p) => {
                      onSelectProduct(p);
                      setSelectedImageIndex(0);
                      setQuantity(1);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
