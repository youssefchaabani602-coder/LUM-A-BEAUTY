import React from 'react';
import { PageView } from './Header.tsx';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, extra?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1A1816] text-[#FAF8F5] pt-16 pb-12 border-t border-[#33302C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#33302C]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer"
            >
              <span className="font-serif text-2xl tracking-[0.18em] font-medium uppercase text-white block">
                LUMÉA BEAUTY
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A89F91] block">
                PARIS · HAUTE BOTANIQUE
              </span>
            </button>
            <p className="text-xs text-[#D9D2C7] max-w-sm leading-relaxed">
              Maison de haute cosmétique botanique française. Formulations pures, sensorialité délicate et respect absolu de l’équilibre cutané.
            </p>
            <div className="text-[11px] text-[#A89F91] space-y-1">
              <p>Atelier parisien : 18 Rue de Richelieu, 75001 Paris (Démo)</p>
              <p>Courriel : conciergerie@lumea-beauty.demo</p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E4CBC5]">
              <ShieldCheck className="w-4 h-4 text-[#D9DFD6]" />
              <span>Projet de concept pour portfolio agence web</span>
            </div>
          </div>

          {/* Nav Col 1: Boutique Categories */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">
              Boutique
            </h4>
            <ul className="space-y-2 text-[#D9D2C7]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cleansers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nettoyants botaniques
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('serums')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sérums ciblés
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('moisturizers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Crèmes & Émulsions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('masks')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Masques & Rituels
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('body')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corps & Bien-être
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer font-semibold text-white pt-1 block"
                >
                  Voir toute la collection →
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Service Client & FAQ */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">
              Service Client
            </h4>
            <ul className="space-y-2 text-[#D9D2C7]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Livraison & Délais (48h offerts dès 49€)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Politique de retours (30 jours)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Conciergerie & Conseil de soin
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Foire aux questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('cart')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accéder à mon panier
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Maison */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-white font-medium">
              La Maison
            </h4>
            <ul className="space-y-2 text-[#D9D2C7]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Notre histoire & Manifeste
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Charte de formulation propre
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nous contacter
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mentions légales & Confidentialité
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A89F91]">
          <p>
            © 2026 LUMÉA BEAUTY PARIS. Marque et produits fictifs créés à titre de démonstration. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span>Devise : EUR (€)</span>
            <span>·</span>
            <span>France / International</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
