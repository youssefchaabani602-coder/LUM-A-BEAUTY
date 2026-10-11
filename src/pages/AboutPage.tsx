import React from 'react';
import { ArrowRight, HeartHandshake, ShieldCheck, Leaf } from 'lucide-react';

interface AboutPageProps {
  onNavigateShop: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateShop }) => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Editorial Hero */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8479] block">
          Notre Philosophie
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1816] font-medium leading-[1.1]">
          La beauté pure, inspirée par la flore française.
        </h1>
        <p className="text-sm sm:text-base text-[#6B6661] leading-relaxed pt-2">
          LUMÉA BEAUTY est née d’une conviction intime : les rituels de soin les plus efficaces sont ceux qui respectent les mécanismes biologiques profonds de l’épiderme, sans artifices ni surenchère chimique.
        </p>
      </div>

      {/* Visual Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#EAE3D9] aspect-[4/3]">
          <img
            src="/src/assets/images/lumea_brand_story_1791728712197.jpg"
            alt="Laboratoire cosmétique LUMÉA avec essences botaniques et sauge fraîche"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#475346] block">
            L’Atelier Botanique
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium leading-snug">
            De la graine au flacon, une traçabilité sans compromis.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed">
            Chaque formule est imaginée dans notre laboratoire partenaire en France. Nous travaillons main dans la main avec des producteurs de plantes aromatiques et médicinales de Provence, de la Drôme et de Bretagne.
          </p>
          <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed">
            Nos macérats huileux et hydrolats sont obtenus par distillation lente à la vapeur d’eau pour préserver l’intégrité des molécules actives.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAE3D9] text-xs">
            <div>
              <p className="font-serif text-2xl font-bold text-[#475346]">100%</p>
              <p className="text-[#6B6661] mt-0.5">Formulations transparentes sans parfum de synthèse.</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#475346]">0%</p>
              <p className="text-[#6B6661] mt-0.5">Ingrédients controversés ou perturbateurs cutanés.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE3D9] shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
            Nos Engagements
          </span>
          <h2 className="font-serif text-3xl text-[#1A1816] font-medium">
            Trois piliers fondamentaux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346]">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1A1816]">
              Éco-Conception Radicale
            </h3>
            <p className="text-xs text-[#6B6661] leading-relaxed">
              Flacons en verre lourd recyclable, étuis imprimés avec des encres végétales sur carton certifié FSC et suppression totale des notices superflues.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1A1816]">
              Tolérance Cutanée Maximale
            </h3>
            <p className="text-xs text-[#6B6661] leading-relaxed">
              Chaque lot est soumis à des contrôles dermatologiques stricts pour garantir une compatibilité optimale avec les peaux réactives ou fragilisées.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1A1816]">
              Commerce Éthique & Local
            </h3>
            <p className="text-xs text-[#6B6661] leading-relaxed">
              Rémunération juste de nos cueilleurs partenaires en France et soutien aux filières d’agriculture biologique régénérative.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center py-8">
        <h2 className="font-serif text-3xl text-[#1A1816] font-medium mb-3">
          Envie d’expérimenter notre rituel ?
        </h2>
        <p className="text-xs text-[#6B6661] mb-6">
          Découvrez la collection complète pour composer votre protocole sur-mesure.
        </p>
        <button
          type="button"
          onClick={onNavigateShop}
          className="px-8 py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-colors inline-flex items-center gap-2"
        >
          <span>Explorer les soins</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
