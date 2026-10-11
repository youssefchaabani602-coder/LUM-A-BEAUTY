import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, clearCart, amountNeededForFreeShipping } = useCart();
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Camille',
    lastName: 'Laurent',
    email: 'camille.laurent@exemple.fr',
    address: '14 Rue de la Paix',
    postalCode: '75002',
    city: 'Paris',
    paymentMethod: 'card',
  });

  if (!isOpen) return null;

  const shippingCost = amountNeededForFreeShipping === 0 ? 0 : 4.90;
  const grandTotal = subtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-[#1A1816]/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#EAE3D9] overflow-hidden my-8 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D9] mb-6">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-widest text-[#1A1816] uppercase">
                LUMÉA BEAUTY
              </span>
              <span className="text-xs bg-[#EAE3D9] text-[#1A1816] px-2 py-0.5 rounded font-mono font-medium">
                Simulation Démo
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#8C8479] hover:text-[#1A1816] rounded-full hover:bg-[#F3EFEA]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isCompleted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#D9DFD6] text-[#475346] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="font-serif text-3xl font-medium text-[#1A1816]">
                Commande de démonstration confirmée
              </h2>
              <p className="text-xs text-[#6B6661] max-w-md mx-auto leading-relaxed">
                Merci Camille ! Il s’agit d’une <strong>démonstration de portfolio</strong> : aucune somme n’a été prélevée sur votre carte et aucun colis ne sera expédié. Votre commande fictive <strong>#LUMEA-2026-8941</strong> a été enregistrée localement avec succès.
              </p>

              <div className="bg-white p-4 rounded-xl border border-[#EAE3D9] max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#8C8479]">Total réglé (démo) :</span>
                  <span className="font-mono font-bold text-[#1A1816]">{grandTotal.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8479]">Adresse de livraison :</span>
                  <span className="text-[#1A1816]">{formData.address}, {formData.postalCode} {formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8479]">Email de confirmation :</span>
                  <span className="text-[#1A1816]">{formData.email}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsCompleted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#33302C]"
                >
                  Retourner à la boutique
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-[#FFF8F0] border border-[#F3DFC1] text-[#7A5016] text-xs p-3.5 rounded-xl flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  <strong>Environnement de démonstration :</strong> Ce formulaire simule le tunnel de commande d’un e-commerce haut de gamme. Les champs ci-dessous sont préremplis pour faciliter vos tests sans risque.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-white border border-[#D9D2C7] rounded-lg px-3 py-2 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-white border border-[#D9D2C7] rounded-lg px-3 py-2 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                  E-mail de confirmation
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#D9D2C7] rounded-lg px-3 py-2 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Adresse postale
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white border border-[#D9D2C7] rounded-lg px-3 py-2 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-white border border-[#D9D2C7] rounded-lg px-3 py-2 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
              </div>

              {/* Order Recap */}
              <div className="bg-white p-4 rounded-xl border border-[#EAE3D9] space-y-2 text-xs">
                <div className="flex justify-between text-[#6B6661]">
                  <span>Articles ({cart.length}) :</span>
                  <span className="font-mono">{subtotal.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div className="flex justify-between text-[#6B6661]">
                  <span>Frais de livraison :</span>
                  <span>{shippingCost === 0 ? 'Offerts' : '4,90 €'}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1A1816] pt-2 border-t border-[#F3EFEA]">
                  <span>Total à payer :</span>
                  <span className="font-mono">{grandTotal.toFixed(2).replace('.', ',')} €</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 border border-[#D9D2C7] rounded-full text-xs uppercase tracking-wider font-semibold text-[#6B6661] hover:bg-[#F3EFEA] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Panier</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-[#33302C] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Lock className="w-4 h-4" />
                  <span>Valider la commande (Simulation démo)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
