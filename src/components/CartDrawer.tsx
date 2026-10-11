import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';
import { Product } from '../data/products.ts';

interface CartDrawerProps {
  onOpenProduct: (product: Product) => void;
  onNavigateCart: () => void;
  onNavigateCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onOpenProduct,
  onNavigateCart,
  onNavigateCheckout,
}) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Panier d'achats">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1816]/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#EAE3D9]">
          {/* Header */}
          <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-white/70">
            <div>
              <h2 className="font-serif text-2xl font-medium text-[#1A1816]">Votre Panier</h2>
              <p className="text-xs text-[#6B6661] mt-0.5">
                {cart.length === 0 ? 'Votre panier est vide' : `${cart.length} formule(s) sélectionnée(s)`}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#6B6661] hover:text-[#1A1816] rounded-full hover:bg-[#F3EFEA] transition-colors cursor-pointer"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Gauge */}
          <div className="bg-[#F3EFEA] px-6 py-3 border-b border-[#EAE3D9] text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-[#4A453F]">
                Plus que <span className="font-semibold text-[#1A1816] font-mono">{amountNeededForFreeShipping.toFixed(2).replace('.', ',')} €</span> pour la <span className="font-semibold">livraison offerte</span>.
              </p>
            ) : (
              <p className="text-[#3F5E46] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Félicitations ! Livraison offerte en France métropolitaine.
              </p>
            )}
            <div className="w-full bg-[#E0D7CC] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#475346] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EAE3D9]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EAE3D9]/60 flex items-center justify-center text-[#6B6661] mb-4">
                  <Sparkles className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A1816] mb-1">Votre rituel est encore vide</h3>
                <p className="text-xs text-[#6B6661] max-w-xs mb-6">
                  Découvrez nos sérums et crèmes pour composer votre routine sur-mesure.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium rounded-full hover:bg-[#33302C] cursor-pointer"
                >
                  Explorer la collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <div
                    onClick={() => {
                      onOpenProduct(item.product);
                      setIsCartOpen(false);
                    }}
                    className="w-20 h-24 bg-[#F3EFEA] rounded-lg overflow-hidden shrink-0 border border-[#EAE3D9] group cursor-pointer"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            onOpenProduct(item.product);
                            setIsCartOpen(false);
                          }}
                          className="text-left font-serif text-base font-semibold text-[#1A1816] hover:underline cursor-pointer"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#8C8479] hover:text-[#B91C1C] p-1 transition-colors cursor-pointer"
                          aria-label={`Supprimer ${item.product.name} du panier`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8C8479] mt-0.5">{item.product.volume}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#D9D2C7] rounded-md bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#6B6661] hover:text-[#1A1816] hover:bg-[#F3EFEA] transition-colors rounded-l-md cursor-pointer"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-medium text-[#1A1816]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#6B6661] hover:text-[#1A1816] hover:bg-[#F3EFEA] transition-colors rounded-r-md cursor-pointer"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Price */}
                      <span className="font-mono text-sm font-semibold text-[#1A1816]">
                        {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#EAE3D9] bg-white/70 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6B6661]">
                  <span>Sous-total estimé :</span>
                  <span className="font-mono text-sm font-semibold text-[#1A1816]">
                    {subtotal.toFixed(2).replace('.', ',')} €
                  </span>
                </div>
                <div className="flex justify-between text-[#6B6661]">
                  <span>Frais de livraison :</span>
                  <span className="font-medium text-[#1A1816]">
                    {amountNeededForFreeShipping === 0 ? 'Offerts' : '4,90 €'}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigateCart();
                  }}
                  className="flex-1 py-3 bg-transparent border border-[#1A1816] text-[#1A1816] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#F3EFEA] transition-colors cursor-pointer"
                >
                  Voir le panier
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigateCheckout();
                  }}
                  className="flex-1 py-3 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#33302C] transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Commander</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#8C8479] pt-1">
                <ShieldCheck className="w-3 h-3 text-[#475346]" />
                <span>Simulation de commande démo</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
