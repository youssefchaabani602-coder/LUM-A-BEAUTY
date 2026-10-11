import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
import { Product } from '../data/products.ts';

interface CartPageProps {
  onNavigateShop: () => void;
  onNavigateCheckout: () => void;
  onSelectProduct: (product: Product) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  onNavigateShop,
  onNavigateCheckout,
  onSelectProduct,
}) => {
  const {
    cart,
    subtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    freeShippingThreshold,
    amountNeededForFreeShipping,
  } = useCart();

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingCost = amountNeededForFreeShipping === 0 ? 0 : 4.90;
  const grandTotal = subtotal + shippingCost;

  if (cart.length === 0) {
    return (
      <div className="py-20 max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[#EAE3D9]/60 flex items-center justify-center text-[#6B6661] mx-auto mb-6">
          <ShoppingBag className="w-9 h-9 stroke-[1.5]" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1A1816] mb-3">
          Votre panier est actuellement vide
        </h1>
        <p className="text-xs sm:text-sm text-[#6B6661] max-w-md mx-auto mb-8 leading-relaxed">
          Prenez un moment pour découvrir nos soins botaniques formulés avec amour en France pour révéler l’éclat naturel de votre peau.
        </p>
        <button
          type="button"
          onClick={onNavigateShop}
          className="px-8 py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors"
        >
          Découvrir nos soins
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#EAE3D9]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-1">
            Votre Commande
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium">
            Panier d'achats
          </h1>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs text-[#8C8479] hover:text-[#9F1239] underline"
        >
          Vider le panier
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Item List & Shipping Bar (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Free Shipping Gauge */}
          <div className="bg-white p-5 rounded-2xl border border-[#EAE3D9] shadow-xs">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-xs text-[#4A453F]">
                Plus que <span className="font-semibold text-[#1A1816] font-mono">{amountNeededForFreeShipping.toFixed(2).replace('.', ',')} €</span> pour bénéficier de la <span className="font-semibold">livraison offerte</span> en France métropolitaine.
              </p>
            ) : (
              <p className="text-xs text-[#3F5E46] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Félicitations ! Vous profitez de la livraison offerte.
              </p>
            )}
            <div className="w-full bg-[#EAE3D9] h-2 rounded-full mt-2.5 overflow-hidden">
              <div
                className="bg-[#475346] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="bg-white rounded-3xl border border-[#EAE3D9] shadow-xs divide-y divide-[#EAE3D9] overflow-hidden">
            {cart.map((item) => (
              <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div
                    onClick={() => onSelectProduct(item.product)}
                    className="w-20 h-24 rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EAE3D9] cursor-pointer shrink-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C8479]">
                      {item.product.category} · {item.product.volume}
                    </span>
                    <h3
                      onClick={() => onSelectProduct(item.product)}
                      className="font-serif text-lg font-semibold text-[#1A1816] hover:underline cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[#6B6661] mt-0.5 line-clamp-1">
                      {item.product.subtitle}
                    </p>
                    <span className="font-mono text-sm font-semibold text-[#1A1816] block mt-1 sm:hidden">
                      {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#D9D2C7] rounded-xl bg-[#FAF8F5] px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 text-[#6B6661] hover:text-[#1A1816]"
                      aria-label="Diminuer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-mono font-semibold text-[#1A1816]">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 text-[#6B6661] hover:text-[#1A1816]"
                      aria-label="Augmenter"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-mono text-base font-bold text-[#1A1816] hidden sm:inline w-20 text-right">
                    {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                  </span>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-[#8C8479] hover:text-[#9F1239] transition-colors rounded-full hover:bg-[#FFF1F2]"
                    aria-label={`Supprimer ${item.product.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={onNavigateShop}
              className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] hover:underline"
            >
              ← Poursuivre mes achats
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary Card (4 cols) */}
        <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-6">
          <h2 className="font-serif text-2xl font-medium text-[#1A1816] pb-4 border-b border-[#EAE3D9]">
            Récapitulatif
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-[#6B6661]">
              <span>Sous-total articles :</span>
              <span className="font-mono text-sm font-semibold text-[#1A1816]">
                {subtotal.toFixed(2).replace('.', ',')} €
              </span>
            </div>
            <div className="flex justify-between text-[#6B6661]">
              <span>Estimation livraison :</span>
              <span className="font-medium text-[#1A1816]">
                {shippingCost === 0 ? 'Offerte (France)' : '4,90 €'}
              </span>
            </div>
            <div className="flex justify-between text-[#6B6661]">
              <span>Échantillons offerts :</span>
              <span className="text-[#3F5E46] font-medium">3 doses d’essai</span>
            </div>
            <div className="flex justify-between text-[#6B6661]">
              <span>TVA (20% incluse) :</span>
              <span className="font-mono">{(grandTotal * 0.2).toFixed(2).replace('.', ',')} €</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#1A1816] pt-4 border-t border-[#EAE3D9]">
              <span>Total :</span>
              <span className="font-mono text-xl">{grandTotal.toFixed(2).replace('.', ',')} €</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateCheckout}
            className="w-full py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Passer à la commande (Démo)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 border-t border-[#F3EFEA] space-y-2 text-[11px] text-[#8C8479]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#475346]" />
              <span>Paiement sécurisé crypté SSL</span>
            </div>
            <p>
              Ce processus est une <strong>simulation de commande portfolio</strong>. Aucune transaction financière réelle n'aura lieu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
