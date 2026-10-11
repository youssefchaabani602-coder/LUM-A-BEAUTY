import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Lock, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

interface CheckoutPageProps {
  onBackToCart: () => void;
  onContinueShopping: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  onBackToCart,
  onContinueShopping,
}) => {
  const { cart, subtotal, clearCart, amountNeededForFreeShipping } = useCart();
  const [currentStep, setCurrentStep] = useState<'details' | 'success'>('details');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [orderNumber, setOrderNumber] = useState<string>('');

  const [formData, setFormData] = useState({
    email: 'camille.laurent@exemple.fr',
    phone: '06 12 34 56 78',
    firstName: 'Camille',
    lastName: 'Laurent',
    address: '14 Rue de Richelieu',
    addressExtra: 'Bâtiment B, 3ème étage',
    postalCode: '75001',
    city: 'Paris',
    country: 'France',
    newsletterOptIn: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const shippingCost = amountNeededForFreeShipping === 0
    ? (shippingMethod === 'express' ? 5.00 : 0)
    : (shippingMethod === 'express' ? 9.90 : 4.90);

  const grandTotal = subtotal + shippingCost;

  const validateForm = () => {
    const err: Record<string, string> = {};
    if (!formData.email.trim() || !formData.email.includes('@')) {
      err.email = 'Veuillez saisir une adresse email valide.';
    }
    if (!formData.firstName.trim()) err.firstName = 'Le prénom est requis.';
    if (!formData.lastName.trim()) err.lastName = 'Le nom est requis.';
    if (!formData.address.trim()) err.address = 'L’adresse de livraison est requise.';
    if (!formData.postalCode.trim()) err.postalCode = 'Le code postal est requis.';
    if (!formData.city.trim()) err.city = 'La ville est requise.';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate random demo order number
    const num = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(num);
    setCurrentStep('success');
    clearCart();
  };

  if (currentStep === 'success') {
    return (
      <div className="py-20 max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-[#D9DFD6] text-[#475346] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#475346] block mb-2">
          Simulation Réussie
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#1A1816] mb-4">
          Merci pour votre commande démo !
        </h1>
        <p className="text-xs sm:text-sm text-[#6B6661] max-w-lg mx-auto mb-8 leading-relaxed">
          Votre commande fictive <strong>#{orderNumber}</strong> a été enregistrée avec succès dans le cadre de cette démonstration de portfolio web.
        </p>

        {/* Recap card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D9] text-left text-xs space-y-3 mb-8 shadow-xs">
          <div className="flex justify-between pb-3 border-b border-[#F3EFEA]">
            <span className="text-[#8C8479]">Numéro de commande :</span>
            <span className="font-mono font-bold text-[#1A1816]">#{orderNumber}</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#F3EFEA]">
            <span className="text-[#8C8479]">Destinataire :</span>
            <span className="font-semibold text-[#1A1816]">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#F3EFEA]">
            <span className="text-[#8C8479]">Adresse de livraison :</span>
            <span className="text-[#1A1816] text-right">{formData.address}, {formData.postalCode} {formData.city}</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-[#F3EFEA]">
            <span className="text-[#8C8479]">Confirmation envoyée à :</span>
            <span className="text-[#1A1816]">{formData.email}</span>
          </div>
          <div className="flex justify-between pt-1 text-sm font-bold text-[#1A1816]">
            <span>Montant total (simulation) :</span>
            <span className="font-mono">{grandTotal.toFixed(2).replace('.', ',')} €</span>
          </div>
        </div>

        <div className="bg-[#FFF8F0] border border-[#F3DFC1] text-[#7A5016] text-xs p-4 rounded-2xl mb-8">
          <p>
            <strong>Note de conformité portfolio :</strong> Aucun prélèvement bancaire n’a été opéré et aucun colis ne sera expédié. Ce module démontre l’intégration complète du tunnel de validation e-commerce.
          </p>
        </div>

        <button
          type="button"
          onClick={onContinueShopping}
          className="px-8 py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors"
        >
          Retourner à la boutique
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Back link */}
      <div className="flex items-center justify-between pb-6 border-b border-[#EAE3D9] mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-1">
            Tunnel de Commande
          </span>
          <h1 className="font-serif text-3xl font-medium text-[#1A1816]">
            Finaliser votre rituel
          </h1>
        </div>
        <button
          type="button"
          onClick={onBackToCart}
          className="text-xs font-semibold text-[#1A1816] hover:underline flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au panier</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Left (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <form onSubmit={handleCompleteOrder} className="space-y-8">
            {/* 1. Contact Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D9] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#1A1816]">
                1. Vos coordonnées
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                      errors.email ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Téléphone (suivi SMS)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D9D2C7] rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D9] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#1A1816]">
                2. Adresse de livraison
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                      errors.firstName ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                    }`}
                  />
                  {errors.firstName && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                      errors.lastName ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                    }`}
                  />
                  {errors.lastName && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                  Adresse postale *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                    errors.address ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                      errors.postalCode ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                    }`}
                  />
                  {errors.postalCode && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.postalCode}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Ville *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full bg-[#FAF8F5] border rounded-lg px-3.5 py-2.5 text-xs text-[#1A1816] focus:outline-none ${
                      errors.city ? 'border-[#B91C1C]' : 'border-[#D9D2C7] focus:border-[#1A1816]'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-[#B91C1C] mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Pays
                  </label>
                  <input
                    type="text"
                    disabled
                    value={formData.country}
                    className="w-full bg-[#F3EFEA] border border-[#D9D2C7] rounded-lg px-3.5 py-2.5 text-xs text-[#6B6661]"
                  />
                </div>
              </div>
            </div>

            {/* 3. Delivery Method */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D9] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#1A1816]">
                3. Mode de livraison
              </h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-xl border border-[#D9D2C7] hover:border-[#1A1816] cursor-pointer bg-[#FAF8F5]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="text-[#1A1816] focus:ring-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#1A1816]">Colissimo Domicile (48h ouvrées)</p>
                      <p className="text-[11px] text-[#8C8479]">Remise sans signature en boîte aux lettres</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#1A1816]">
                    {amountNeededForFreeShipping === 0 ? 'Offert' : '4,90 €'}
                  </span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl border border-[#D9D2C7] hover:border-[#1A1816] cursor-pointer bg-[#FAF8F5]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="text-[#1A1816] focus:ring-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#1A1816]">Chronopost Express 24h</p>
                      <p className="text-[11px] text-[#8C8479]">Livraison le lendemain avant 13h</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#1A1816]">
                    {amountNeededForFreeShipping === 0 ? '5,00 €' : '9,90 €'}
                  </span>
                </label>
              </div>
            </div>

            {/* 4. Payment method placeholder disclaimer */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D9] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#1A1816]">
                4. Paiement sécurisé (Simulation Démo)
              </h2>
              <div className="p-4 bg-[#F3EFEA] rounded-xl border border-[#EAE3D9] flex items-center gap-3 text-xs text-[#4A453F]">
                <CreditCard className="w-5 h-5 text-[#475346] shrink-0" />
                <p>
                  Dans cet environnement de démonstration, <strong>aucun numéro de carte bancaire réel n'est demandé</strong>. Cliquez directement sur le bouton ci-dessous pour simuler la validation.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Confirmer la commande démo · {grandTotal.toFixed(2).replace('.', ',')} €</span>
            </button>
          </form>
        </div>

        {/* Order Summary Right (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-6">
          <h2 className="font-serif text-xl font-medium text-[#1A1816] pb-4 border-b border-[#EAE3D9]">
            Articles ({cart.length})
          </h2>

          <div className="divide-y divide-[#F3EFEA] max-h-72 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.product.id} className="py-3 flex gap-3 items-center">
                <img
                  src={item.product.image}
                  alt=""
                  className="w-14 h-14 object-cover rounded-lg border border-[#EAE3D9] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm font-semibold text-[#1A1816] truncate">
                    {item.product.name}
                  </p>
                  <p className="text-[11px] text-[#8C8479]">Qté : {item.quantity}</p>
                </div>
                <span className="font-mono text-xs font-semibold text-[#1A1816]">
                  {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2.5 text-xs pt-4 border-t border-[#EAE3D9]">
            <div className="flex justify-between text-[#6B6661]">
              <span>Sous-total articles :</span>
              <span className="font-mono text-sm font-semibold text-[#1A1816]">
                {subtotal.toFixed(2).replace('.', ',')} €
              </span>
            </div>
            <div className="flex justify-between text-[#6B6661]">
              <span>Frais d'expédition :</span>
              <span className="font-mono">
                {shippingCost === 0 ? 'Offerts' : `${shippingCost.toFixed(2).replace('.', ',')} €`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#1A1816] pt-3 border-t border-[#EAE3D9]">
              <span>Total :</span>
              <span className="font-mono text-xl">{grandTotal.toFixed(2).replace('.', ',')} €</span>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#8C8479] space-y-1">
            <p>· Expédié depuis notre atelier en France sous 24h</p>
            <p>· Emballages recyclables sans plastique superflu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
