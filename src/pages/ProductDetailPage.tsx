import React, { useState } from 'react';
import { Star, Plus, Minus, ShieldCheck, Truck, RotateCcw, Sparkles, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';
import { useCart } from '../context/CartContext.tsx';
import { ProductCard } from '../components/ProductCard.tsx';

interface ProductDetailPageProps {
  product: Product;
  onNavigateHome: () => void;
  onNavigateShop: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigateHome,
  onNavigateShop,
  onSelectProduct,
}) => {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage' | 'reviews'>('benefits');
  const [addedToast, setAddedToast] = useState(false);

  const currentImage = product.gallery[selectedImageIndex] || product.image;

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const fallbackRelated = relatedProducts.length > 0 ? relatedProducts : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-[#8C8479] mb-8">
        <button type="button" onClick={onNavigateHome} className="hover:text-[#1A1816] transition-colors">
          Accueil
        </button>
        <ChevronRight className="w-3 h-3 text-[#C4BCB0]" />
        <button type="button" onClick={onNavigateShop} className="hover:text-[#1A1816] transition-colors">
          Boutique
        </button>
        <ChevronRight className="w-3 h-3 text-[#C4BCB0]" />
        <span className="text-[#8C8479]">{product.category}</span>
        <ChevronRight className="w-3 h-3 text-[#C4BCB0]" />
        <span className="text-[#1A1816] font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main PDP Grid: Gallery Left / Sticky Purchase Module Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Gallery Left (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#EAE3D9] shadow-sm relative">
            <img
              src={currentImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#1A1816] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-sm shadow-xs">
                {product.badge}
              </span>
            )}
            {!product.inStock && (
              <span className="absolute top-4 right-4 bg-[#FFF1F2] border border-[#FECDD3] text-[#9F1239] text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-sm">
                Rupture temporaire
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    selectedImageIndex === idx
                      ? 'border-[#1A1816] scale-102 shadow-xs'
                      : 'border-[#EAE3D9] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Reassurance Grid */}
          <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#6B6661]">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#475346] shrink-0" />
              <div>
                <p className="font-semibold text-[#1A1816]">Livraison 48h</p>
                <p className="text-[11px] text-[#8C8479]">Offerte dès 49 € d’achat</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#475346] shrink-0" />
              <div>
                <p className="font-semibold text-[#1A1816]">Formule Sûre</p>
                <p className="text-[11px] text-[#8C8479]">Testée sous contrôle cutané</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-[#475346] shrink-0" />
              <div>
                <p className="font-semibold text-[#1A1816]">Retours Sérénité</p>
                <p className="text-[11px] text-[#8C8479]">30 jours pour changer d’avis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Module Right (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#8C8479] font-medium mb-1">
              <span>{product.category}</span>
              <span className="font-mono">{product.volume}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1816] mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs text-[#8C8479] mb-4">{product.subtitle}</p>

            {/* Rating and Price */}
            <div className="flex items-center justify-between pb-5 border-b border-[#EAE3D9]">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-[#D99A45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-mono text-sm font-semibold text-[#1A1816]">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#8C8479]">
                  ({product.reviewCount} avis démo)
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
          </div>

          {/* Short Description & Stock Indicator */}
          <div className="space-y-3">
            <p className="text-xs text-[#4A453F] leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-2 text-xs">
              {product.inStock ? (
                <span className="text-[#3F5E46] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  En stock · Expédié sous 24h ouvrées
                </span>
              ) : (
                <span className="text-[#9F1239] font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Temporairement en rupture de stock
                </span>
              )}
            </div>
          </div>

          {/* Action Zone: Quantity Stepper & Add to cart */}
          <div className="pt-4 border-t border-[#EAE3D9] space-y-3">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#D9D2C7] rounded-xl bg-[#FAF8F5] px-2 py-1.5">
                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-[#6B6661] hover:text-[#1A1816] disabled:opacity-40"
                  aria-label="Diminuer la quantité"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-mono font-semibold text-[#1A1816]">
                  {quantity}
                </span>
                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-[#6B6661] hover:text-[#1A1816] disabled:opacity-40"
                  aria-label="Augmenter la quantité"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                type="button"
                disabled={!product.inStock}
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold rounded-xl hover:bg-[#33302C] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:bg-[#D9D2C7] disabled:text-[#8C8479] disabled:cursor-not-allowed cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E4CBC5]" />
                <span>
                  {product.inStock
                    ? `Ajouter au panier · ${(product.price * quantity).toFixed(2).replace('.', ',')} €`
                    : 'Produit épuisé'}
                </span>
              </button>
            </div>

            {addedToast && (
              <div className="bg-[#D9DFD6] text-[#475346] text-xs p-2.5 rounded-lg flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Article ajouté au panier avec succès !</span>
              </div>
            )}
          </div>

          {/* Interactive Info Tabs */}
          <div className="pt-6 border-t border-[#EAE3D9]">
            <div className="flex border-b border-[#EAE3D9] gap-4 text-xs font-medium uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveTab('benefits')}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
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
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'ingredients'
                    ? 'border-[#1A1816] text-[#1A1816]'
                    : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                }`}
              >
                Ingrédients INCI
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('usage')}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'usage'
                    ? 'border-[#1A1816] text-[#1A1816]'
                    : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                }`}
              >
                Rituel de soin
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('reviews')}
                className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'border-[#1A1816] text-[#1A1816]'
                    : 'border-transparent text-[#8C8479] hover:text-[#1A1816]'
                }`}
              >
                Avis ({product.reviewCount})
              </button>
            </div>

            <div className="py-4 text-xs text-[#6B6661] leading-relaxed">
              {activeTab === 'benefits' && (
                <ul className="space-y-2 list-disc list-inside">
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-2">
                  <p className="font-mono text-[11px] leading-relaxed bg-[#FAF8F5] p-3 rounded-lg border border-[#EAE3D9]">
                    {product.ingredientsList}
                  </p>
                  <p className="text-[10px] text-[#8C8479] italic">
                    {product.fictionalNote}
                  </p>
                </div>
              )}

              {activeTab === 'usage' && <p>{product.usageTips}</p>}

              {activeTab === 'reviews' && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE3D9]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[#1A1816]">Clémence R. (Vérifié démo)</span>
                      <span className="text-[10px] text-[#8C8479]">Il y a 2 semaines</span>
                    </div>
                    <div className="flex text-[#D99A45] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-[11px] text-[#4A453F]">
                      « Formule adoptée dès la première semaine. La texture pénètre immédiatement et respecte parfaitement ma peau réactive. »
                    </p>
                  </div>
                  <p className="text-[10px] text-[#8C8479] italic text-center">
                    Avis clients fictifs pour la démonstration de portfolio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="pt-12 border-t border-[#EAE3D9]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-1">
              Synergie Botanique
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1816] font-medium">
              Produits complémentaires conseillés
            </h2>
          </div>
          <button
            type="button"
            onClick={onNavigateShop}
            className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] hover:underline"
          >
            Voir toute la collection
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fallbackRelated.slice(0, 4).map((rel) => (
            <ProductCard
              key={rel.id}
              product={rel}
              onSelect={(p) => {
                onSelectProduct(p);
                setSelectedImageIndex(0);
                setQuantity(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
