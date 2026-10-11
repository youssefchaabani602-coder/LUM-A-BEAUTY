import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext.tsx';
import { Header, PageView } from './components/Header.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { StorefrontSections } from './components/StorefrontSections.tsx';
import { CatalogPage } from './pages/CatalogPage.tsx';
import { ProductDetailPage } from './pages/ProductDetailPage.tsx';
import { CartPage } from './pages/CartPage.tsx';
import { CheckoutPage } from './pages/CheckoutPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { SearchResultsPage } from './pages/SearchResultsPage.tsx';
import { Footer } from './components/Footer.tsx';
import { Product, PRODUCTS } from './data/products.ts';
import { X, User, Heart, Package, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

  // Main page navigator
  const handleNavigate = (page: PageView, extra?: any) => {
    if (page === 'product-detail' && extra) {
      setSelectedProduct(extra);
    }
    if (page === 'search-results' && typeof extra === 'string') {
      setSearchQuery(extra);
    }
    setCurrentPage(page);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleOpenBundle = () => {
    const bundleProduct = PRODUCTS.find((p) => p.id === 'coffret-rituel-eclat');
    if (bundleProduct) {
      handleSelectProduct(bundleProduct);
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1816]">
        {/* Navigation Header */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenAccount={() => setAccountOpen(true)}
        />

        {/* Dynamic Page Views */}
        <main className="flex-1">
          {/* 1. HOMEPAGE */}
          {currentPage === 'home' && (
            <div>
              <StorefrontSections
                onSelectProduct={handleSelectProduct}
                onNavigate={handleNavigate}
                onOpenBundleProduct={handleOpenBundle}
              />
            </div>
          )}

          {/* 2. SHOP ALL PRODUCTS */}
          {currentPage === 'shop' && (
            <CatalogPage
              title="Toutes nos créations botaniques"
              description="Explorez les 12 soins d’exception de LUMÉA BEAUTY. Utilisez les filtres par catégorie, prix et disponibilité pour affiner votre choix."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {/* 3. CATEGORY PAGES */}
          {currentPage === 'cleansers' && (
            <CatalogPage
              categorySlug="nettoyants"
              title="Nettoyants & Brumes botaniques"
              description="Des soins doux sans sulfates agressifs qui purifient, rééquilibrent et respectent le film hydrolipidique de la peau."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentPage === 'serums' && (
            <CatalogPage
              categorySlug="serums"
              title="Sérums hautement concentrés"
              description="Des élixirs ciblés à l’acide hyaluronique pur et à la vitamine C végétale pour hydrater en profondeur et illuminer le teint."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentPage === 'moisturizers' && (
            <CatalogPage
              categorySlug="hydratants"
              title="Crèmes & Émulsions protectrices"
              description="Des textures aériennes et veloutées aux céramides et huiles nobles pour sceller l’hydratation cutanée tout au long de la journée."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentPage === 'masks' && (
            <CatalogPage
              categorySlug="masques"
              title="Masques, Baumes & Coffrets"
              description="Nos rituels hebdomadaires à l’argile rose et enzymes de fruits, ainsi que notre coffret signature en 3 étapes."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentPage === 'body' && (
            <CatalogPage
              categorySlug="corps"
              title="Corps & Bien-être sensoriel"
              description="Huiles sèches précieuses, laits satinés et gommages fondants pour prolonger l'art de vivre et le confort de la tête aux pieds."
              onSelectProduct={handleSelectProduct}
            />
          )}

          {/* 4. PRODUCT DETAIL PAGE */}
          {currentPage === 'product-detail' && selectedProduct && (
            <ProductDetailPage
              product={selectedProduct}
              onNavigateHome={() => handleNavigate('home')}
              onNavigateShop={() => handleNavigate('shop')}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {/* 5. SHOPPING CART PAGE */}
          {currentPage === 'cart' && (
            <CartPage
              onNavigateShop={() => handleNavigate('shop')}
              onNavigateCheckout={() => handleNavigate('checkout')}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {/* 6. CHECKOUT FLOW DEMO */}
          {currentPage === 'checkout' && (
            <CheckoutPage
              onBackToCart={() => handleNavigate('cart')}
              onContinueShopping={() => handleNavigate('shop')}
            />
          )}

          {/* 7. ABOUT THE BRAND */}
          {currentPage === 'about' && (
            <AboutPage onNavigateShop={() => handleNavigate('shop')} />
          )}

          {/* 8. CONTACT PAGE */}
          {currentPage === 'contact' && <ContactPage />}

          {/* 9. FAQ, SHIPPING & RETURNS */}
          {currentPage === 'faq' && <FaqPage />}

          {/* 10. DEDICATED SEARCH RESULTS PAGE */}
          {currentPage === 'search-results' && (
            <SearchResultsPage
              initialQuery={searchQuery}
              onSelectProduct={handleSelectProduct}
              onNavigateShop={() => handleNavigate('shop')}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Sliding Cart Drawer */}
        <CartDrawer
          onOpenProduct={handleSelectProduct}
          onNavigateCart={() => handleNavigate('cart')}
          onNavigateCheckout={() => handleNavigate('checkout')}
        />

        {/* Global Live Search Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectProduct={handleSelectProduct}
          onViewAllResults={(q) => handleNavigate('search-results', q)}
        />

        {/* Account Modal (Demo) */}
        {accountOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-[#1A1816]/60 backdrop-blur-xs" onClick={() => setAccountOpen(false)} />
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div className="relative w-full max-w-md bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EAE3D9] shadow-2xl">
                <button
                  type="button"
                  onClick={() => setAccountOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[#8C8479] hover:text-[#1A1816] rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-[#D9DFD6] text-[#475346] rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1816]">Espace Membre LUMÉA</h3>
                  <p className="text-xs text-[#6B6661] mt-1">
                    Connectez-vous pour suivre vos commandes et cumuler vos points privilège.
                  </p>
                </div>

                <div className="bg-[#FFF8F0] border border-[#F3DFC1] text-[#7A5016] text-xs p-3 rounded-xl mb-4">
                  <p><strong>Aperçu démo :</strong> Vous êtes connecté sous le profil invité <em>Camille Laurent (Client Privilège)</em>.</p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-[#EAE3D9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#475346]" />
                      <span>Commandes récentes</span>
                    </div>
                    <span className="font-mono font-semibold">1 en cours</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#EAE3D9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#E4CBC5]" />
                      <span>Liste d’envies</span>
                    </div>
                    <span className="font-mono font-semibold">3 soins</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#EAE3D9] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#475346]" />
                      <span>Points fidélité Éclat</span>
                    </div>
                    <span className="font-mono font-bold text-[#475346]">120 pts</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setAccountOpen(false)}
                  className="w-full mt-6 py-3 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#33302C] cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CartProvider>
  );
}
