import React, { useState } from 'react';
import { ChevronDown, Truck, RotateCcw, ShieldCheck, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'livraison' | 'soins' | 'commandes';
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'livraison',
    question: 'Quels sont les délais et tarifs de livraison en France ?',
    answer: 'La livraison standard Colissimo (48h ouvrées) est offerte pour toute commande supérieure ou égale à 49,00 €. Pour les commandes inférieures à ce seuil, les frais de port sont de 4,90 €. Nous proposons également une option Chronopost Express 24h à 9,90 € (ou 5,00 € dès 49 € d’achat).'
  },
  {
    category: 'livraison',
    question: 'Comment suivre l’acheminement de mon colis ?',
    answer: 'Dès que votre commande quitte notre atelier en France, un courriel de confirmation contenant un lien de suivi sécurisé vous est immédiatement adressé. Vous pouvez suivre chaque étape de son transport en temps réel.'
  },
  {
    category: 'livraison',
    question: 'Quelle est votre politique de retours et remboursements ?',
    answer: 'Vous disposez de 30 jours à compter de la réception de votre colis pour nous retourner un soin dans son emballage d’origine intact et non descellé. Le remboursement intégral est effectué sous 5 jours ouvrés suivant la réception du retour.'
  },
  {
    category: 'soins',
    question: 'Les formules LUMÉA BEAUTY conviennent-elles aux peaux sensibles ?',
    answer: 'Absolument. Toutes nos formules sont développées selon une charte dermatologique stricte sans sulfates agressifs, sans huiles minérales et sans alcool desséchant. Elles font l’objet de tests de tolérance cutanée rigoureux.'
  },
  {
    category: 'soins',
    question: 'Vos soins sont-ils certifiés vegan et sans cruauté ?',
    answer: 'Oui, aucun produit fini ni ingrédient LUMÉA BEAUTY n’est testé sur les animaux, conformément à la réglementation européenne. Nos formules sont 100% végétales et éco-conçues.'
  },
  {
    category: 'commandes',
    question: 'Les échantillons sont-ils inclus dans chaque commande ?',
    answer: 'Oui, nous glissons 3 doses d’essai offertes dans chaque colis pour vous permettre d’explorer d’autres textures et rituels selon les saisons.'
  },
  {
    category: 'commandes',
    question: 'Ce site internet permet-il de passer de vraies commandes commerciales ?',
    answer: 'Non. LUMÉA BEAUTY est un concept d’application e-commerce moderne réalisé à des fins de démonstration technique et de design portfolio. Aucun prélèvement bancaire réel n’est effectué et aucun produit physique ne sera expédié.'
  }
];

export const FaqPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'livraison' | 'soins' | 'commandes'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaq = activeTab === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeTab);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
          Aide & Informations
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium mb-4">
          Foire aux questions & Livraisons
        </h1>
        <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed">
          Retrouvez toutes les réponses pratiques sur l’expédition de vos rituels, nos engagements de formulation et nos modalités de retour.
        </p>
      </div>

      {/* Trust Highlights Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-base font-semibold text-[#1A1816]">Livraison 48h</h2>
            <p className="text-xs text-[#8C8479]">Offerte en France dès 49 €</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-base font-semibold text-[#1A1816]">Retours 30 Jours</h2>
            <p className="text-xs text-[#8C8479]">Remboursement garanti</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] flex items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-base font-semibold text-[#1A1816]">Formules Sûres</h2>
            <p className="text-xs text-[#8C8479]">Conçues & produites en France</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
        {[
          { label: 'Toutes les questions', id: 'all' },
          { label: 'Livraison & Retours', id: 'livraison' },
          { label: 'Soins & Formulations', id: 'soins' },
          { label: 'Commandes & Démo', id: 'commandes' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id as any);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#1A1816] text-[#FAF8F5] shadow-xs'
                : 'bg-white border border-[#D9D2C7] text-[#6B6661] hover:text-[#1A1816]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="bg-white rounded-3xl border border-[#EAE3D9] shadow-xs divide-y divide-[#EAE3D9] overflow-hidden">
        {filteredFaq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5]/80 transition-colors cursor-pointer"
              >
                <span className="font-serif text-lg font-semibold text-[#1A1816] flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#8C8479] shrink-0" />
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8C8479] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1A1816]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B6661] leading-relaxed border-t border-[#F3EFEA] bg-[#FAF8F5]/40">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
