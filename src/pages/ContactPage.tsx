import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Conseil de soin personnalisé',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
          Conciergerie & Beauté
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium mb-4">
          Nous contacter
        </h1>
        <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed">
          Notre équipe d’experts botaniques est à votre écoute pour vous guider dans le choix de votre rituel ou répondre à toutes vos interrogations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-[#EAE3D9] shadow-xs space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
              Coordonnées de l’Atelier
            </h2>

            <div className="space-y-5 text-xs text-[#6B6661]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1816]">Atelier & Boutique Parisienne</p>
                  <p className="mt-0.5">18 Rue de Richelieu, 75001 Paris (Adresse démo)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1816]">Courrier électronique</p>
                  <p className="mt-0.5">conciergerie@lumea-beauty.demo</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1816]">Ligne directe</p>
                  <p className="mt-0.5">+33 (0)1 42 68 00 00 (Lundi au Vendredi)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1816]">Horaires d’ouverture</p>
                  <p className="mt-0.5">Du lundi au vendredi : 9h00 – 18h30</p>
                  <p>Samedi : 10h00 – 19h00</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F3EFEA] text-[11px] text-[#8C8479]">
              <ShieldCheck className="w-4 h-4 text-[#475346] inline mr-1.5" />
              <span>Réponse assurée sous 24h ouvrées par un conseiller dédié.</span>
            </div>
          </div>
        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE3D9] shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#D9DFD6] text-[#475346] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl font-medium text-[#1A1816]">
                Message transmis avec succès
              </h2>
              <p className="text-xs text-[#6B6661] max-w-md mx-auto leading-relaxed">
                Merci {formData.name} ! Votre demande démo concernant « {formData.subject} » a bien été enregistrée. Dans un cadre commercial réel, une réponse vous parviendrait à l'adresse <strong>{formData.email}</strong> sous 24h.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Conseil de soin personnalisé', message: '' });
                }}
                className="mt-4 px-6 py-3 border border-[#1A1816] text-[#1A1816] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#FAF8F5]"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#F3EFEA] pb-4">
                <h2 className="font-serif text-2xl font-medium text-[#1A1816]">
                  Écrivez-nous
                </h2>
                <p className="text-xs text-[#8C8479] mt-1">
                  Complétez le formulaire ci-dessous pour tester l’interaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Camille Laurent"
                    className="w-full bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl px-4 py-3 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                    Votre adresse e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: camille@domaine.fr"
                    className="w-full bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl px-4 py-3 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                  Objet de votre message
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl px-4 py-3 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none cursor-pointer"
                >
                  <option value="Conseil de soin personnalisé">Conseil de soin personnalisé</option>
                  <option value="Question sur un ingrédient ou formule">Question sur un ingrédient ou formule</option>
                  <option value="Suivi de commande démo">Suivi de commande démo</option>
                  <option value="Presse & Partenariats">Presse & Partenariats</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] uppercase tracking-wider mb-1">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre type de peau, vos besoins ou votre question..."
                  className="w-full bg-[#FAF8F5] border border-[#D9D2C7] rounded-xl px-4 py-3 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE3D9] text-[11px] text-[#8C8479]">
                Simulation de formulaire pour portfolio agence. Les messages ne sont pas stockés sur un serveur tiers.
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors cursor-pointer shadow-sm"
              >
                Envoyer le message (Simulation démo)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
