import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext.tsx';

export type PageView =
  | 'home'
  | 'shop'
  | 'cleansers'
  | 'serums'
  | 'moisturizers'
  | 'masks'
  | 'body'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'about'
  | 'contact'
  | 'faq'
  | 'search-results';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView, extra?: any) => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenAccount,
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Accueil', page: 'home' },
    { label: 'Boutique', page: 'shop' },
    { label: 'Nettoyants', page: 'cleansers' },
    { label: 'Sérums', page: 'serums' },
    { label: 'Hydratants', page: 'moisturizers' },
    { label: 'Masques & soins', page: 'masks' },
    { label: 'Corps & bien-être', page: 'body' },
    { label: 'Notre histoire', page: 'about' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D9]">
      {/* Announcement Bar */}
      <div className="bg-[#1A1816] text-[#FAF8F5] text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span>Livraison offerte dès 49 € d’achat en France métropolitaine</span>
        <span className="hidden sm:inline text-[#E4CBC5]">— 3 échantillons offerts dans chaque commande</span>
      </div>

      {/* Main Top Bar Contract: Brand Title — Nav Links — Action Zone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1A1816] hover:text-[#6B6661] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1816] rounded-md"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Zone */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1816] rounded-sm py-1 cursor-pointer shrink-0"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-medium text-[#1A1816] uppercase block">
            LUMÉA BEAUTY
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B6661] -mt-1 block">
            PARIS · HAUTE BOTANIQUE
          </span>
        </button>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[12px] xl:text-[13px] tracking-[0.06em] uppercase font-medium text-[#4A453F]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNavClick(link.page)}
                className={`py-1 relative transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#1A1816] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#1A1816]'
                    : 'hover:text-[#1A1816]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-[#1A1816] hover:text-[#6B6661] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1816] rounded-full cursor-pointer"
            aria-label="Rechercher un soin"
            title="Rechercher"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          <button
            type="button"
            onClick={onOpenAccount}
            className="p-2 text-[#1A1816] hover:text-[#6B6661] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1816] rounded-full cursor-pointer"
            aria-label="Espace compte client"
            title="Compte client"
          >
            <User className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-3 py-2 bg-[#1A1816] text-[#FAF8F5] rounded-full text-xs uppercase tracking-wider font-medium hover:bg-[#33302C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A1816] cursor-pointer"
            aria-label={`Panier d'achat, ${totalItems} article${totalItems > 1 ? 's' : ''}`}
            title="Voir le panier"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2]" />
            <span className="hidden sm:inline font-sans">Panier</span>
            <span className="bg-[#FAF8F5] text-[#1A1816] text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center font-mono">
              {totalItems}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNavClick(link.page)}
                className="text-left py-2.5 text-sm uppercase tracking-wider font-medium text-[#1A1816] border-b border-[#F0EAE1] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#A89F91]" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 text-sm uppercase tracking-wider font-medium text-[#1A1816] border-b border-[#F0EAE1] flex items-center justify-between"
            >
              <span>Contact & Conciergerie</span>
              <ArrowRight className="w-4 h-4 text-[#A89F91]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className="text-left py-2.5 text-sm uppercase tracking-wider font-medium text-[#1A1816] flex items-center justify-between"
            >
              <span>FAQ, Livraison & Retours</span>
              <ArrowRight className="w-4 h-4 text-[#A89F91]" />
            </button>
          </nav>
          <div className="pt-3 border-t border-[#EAE3D9] text-xs text-[#6B6661] space-y-1">
            <p>Boutique officielle LUMÉA BEAUTY PARIS</p>
            <p>Livraison 48h offerte dès 49 €</p>
          </div>
        </div>
      )}
    </header>
  );
};
