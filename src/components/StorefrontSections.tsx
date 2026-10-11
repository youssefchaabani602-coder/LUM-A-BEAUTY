import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { PageView } from '../components/Header.tsx';

interface StorefrontSectionsProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageView, extra?: any) => void;
  onOpenBundleProduct: () => void;
}

export const StorefrontSections: React.FC<StorefrontSectionsProps> = ({
  onSelectProduct,
  onNavigate,
  onOpenBundleProduct,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section id="accueil" className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline & CTAs Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#475346] bg-[#D9DFD6]/60 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute formulation botanique française</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1816] font-medium leading-[1.08] tracking-tight">
              Révélez l’éclat naturel de votre peau.
            </h1>

            <p className="text-base sm:text-lg text-[#6B6661] max-w-xl font-normal leading-relaxed">
              Des soins botaniques d’exception, formulés en France avec des actifs purs et respectueux de votre barrière cutanée. Une gestuelle épurée pour un teint éclatant de santé.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('shop')}
                className="px-8 py-4 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#33302C] transition-all duration-200 flex items-center gap-2.5 shadow-sm group cursor-pointer"
              >
                <span>Découvrir la collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('best-sellers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-transparent border border-[#1A1816] text-[#1A1816] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#EAE3D9]/60 transition-all duration-200 cursor-pointer"
              >
                Nos best-sellers
              </button>
            </div>

            {/* Unboxed Micro Trust Markers */}
            <div className="pt-8 border-t border-[#EAE3D9] flex flex-wrap items-center gap-6 text-xs text-[#8C8479]">
              <div>
                <span className="font-semibold text-[#1A1816]">100%</span> Fabriqué en France
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="font-semibold text-[#1A1816]">Formules</span> Clean & Végétales
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="font-semibold text-[#1A1816]">Packaging</span> Verre Recyclable
              </div>
            </div>
          </div>

          {/* Editorial Visual Right (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D9] bg-white group">
              <img
                src="/src/assets/images/lumea_hero_editorial_1791728662064.jpg"
                alt="Mannequin LUMÉA BEAUTY révélant une peau éclatante avec un flacon de soin sérum"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#E4CBC5] block mb-1">
                  Édition Limitée
                </span>
                <p className="font-serif text-xl font-medium">
                  Le Sérum Botanique & l’Huile Sublime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED BENEFITS SECTION */}
      <section className="py-12 bg-white border-y border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF8F5] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-[#1A1816] mb-1">
                  Ingrédients sélectionnés
                </h2>
                <p className="text-xs text-[#6B6661] leading-relaxed">
                  Actifs botaniques nobles cueillis avec soin, sourcés localement auprès de producteurs engagés.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF8F5] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                <Shield className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-[#1A1816] mb-1">
                  Formules douces
                </h2>
                <p className="text-xs text-[#6B6661] leading-relaxed">
                  Testées dermatologiquement, sans sulfates agressifs, silicones ni perturbateurs endocriniens.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF8F5] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-[#1A1816] mb-1">
                  Routine simplifiée
                </h2>
                <p className="text-xs text-[#6B6661] leading-relaxed">
                  Des rituels essentiels en 3 étapes pour sublimer le teint sans accumuler dix flacons inutiles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FAF8F5] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center text-[#475346] shrink-0">
                <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-semibold text-[#1A1816] mb-1">
                  Paiement sécurisé
                </h2>
                <p className="text-xs text-[#6B6661] leading-relaxed">
                  Transactions protégées 256-bit, livraison suivie 48h et retours simplifiés sous 30 jours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEST-SELLING PRODUCTS SECTION */}
      <section id="best-sellers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
              Les Incontournables
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium">
              Nos soins best-sellers
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1A1816] hover:text-[#475346] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Voir toute la boutique</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY SECTION */}
      <section className="py-20 bg-[#F3EFEA] border-y border-[#EAE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
              Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium">
              Explorer par catégorie
            </h2>
            <p className="text-xs text-[#6B6661] mt-2">
              Une gamme pensée pour répondre à chaque étape de votre rituel bien-être.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Nettoyants',
                page: 'cleansers' as PageView,
                subtitle: 'Purifier sans agresser',
                image: '/src/assets/images/lumea_brand_story_1791728712197.jpg',
                count: 'Formules douces',
              },
              {
                title: 'Sérums',
                page: 'serums' as PageView,
                subtitle: 'Concentrés d’actifs purs',
                image: '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
                count: 'Éclat & Hydratation',
              },
              {
                title: 'Hydratants',
                page: 'moisturizers' as PageView,
                subtitle: 'Nutrition & confort quotidien',
                image: '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
                count: 'Crèmes & Émulsions',
              },
              {
                title: 'Masques & soins',
                page: 'masks' as PageView,
                subtitle: 'Rituels hebdomadaires',
                image: '/src/assets/images/lumea_masque_argile_1791729562588.jpg',
                count: 'Argiles & Gommages',
              },
            ].map((cat) => (
              <div
                key={cat.title}
                onClick={() => onNavigate(cat.page)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-[#EAE3D9] flex flex-col justify-end p-6"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/80 via-[#1A1816]/25 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E4CBC5] block mb-1">
                    {cat.count}
                  </span>
                  <h3 className="font-serif text-2xl font-medium mb-1">{cat.title}</h3>
                  <p className="text-xs text-white/80 flex items-center justify-between">
                    <span>{cat.subtitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY SECTION */}
      <section id="histoire" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#EAE3D9]">
              <img
                src="/src/assets/images/lumea_brand_story_1791728712197.jpg"
                alt="Laboratoire botanique LUMÉA BEAUTY avec flacons d'essences végétales et feuilles de sauge fraîches"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle Editorial Caption Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-lg border border-[#EAE3D9] max-w-xs hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#475346] block mb-1">
                L’Artisanat Français
              </span>
              <p className="font-serif text-sm text-[#1A1816]">
                « Moins d’ingrédients superflus, davantage de principes actifs vivants. »
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block">
              Notre Manifeste
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium leading-tight">
              La beauté, tout simplement.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6661] leading-relaxed">
              Fondée avec la volonté de réconcilier sensorialité luxueuse et respect biologique de l’épiderme, LUMÉA BEAUTY conçoit chaque soin comme un hommage à la flore française.
            </p>
            <p className="text-sm sm:text-base text-[#6B6661] leading-relaxed">
              Nous sélectionnons des huiles vierges pressées à froid, des hydrolats floraux distillés artisanalement et des actifs objectivés pour soutenir le renouvellement naturel de votre peau sans artifice.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 text-xs text-[#1A1816]">
              <div>
                <p className="font-serif text-2xl font-bold text-[#475346] font-mono">100%</p>
                <p className="text-[#6B6661] mt-0.5">Formulations transparentes et certifiées sans cruauté animale.</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#475346] font-mono">0%</p>
                <p className="text-[#6B6661] mt-0.5">Huiles minérales synthétiques, micro-plastiques et phtalates.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] hover:underline flex items-center gap-1.5"
              >
                <span>Découvrir toute notre histoire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMOTIONAL BUNDLE BANNER */}
      <section className="py-16 bg-[#1A1816] text-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4CBC5] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Offre Spéciale Découverte · -15%</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
              Le Coffret Rituel Éclat Complet
            </h2>
            <p className="text-sm text-[#D9D2C7] max-w-xl leading-relaxed">
              Réunissant la Gelée Nettoyante Douceur, le Sérum Éclat Vitamine C et la Crème Hydratante Nuage dans un coffret velours soyeux. La synergie parfaite pour réveiller la lumière naturelle de votre visage.
            </p>
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-mono text-3xl font-bold text-white">59,90 €</span>
              <span className="font-mono text-lg text-[#8C8479] line-through">73,70 €</span>
              <span className="text-xs text-[#E4CBC5] uppercase tracking-wider font-semibold">
                (Économie de 13,80 €)
              </span>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenBundleProduct}
                className="px-8 py-3.5 bg-[#FAF8F5] text-[#1A1816] text-xs uppercase tracking-[0.18em] font-bold rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                Découvrir le coffret rituel
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#4A453F] shadow-2xl">
              <img
                src="/src/assets/images/lumea_coffret_rituel_1791728702187.jpg"
                alt="Coffret Rituel Éclat LUMÉA BEAUTY avec sérum, crème et lingette en coton biologique"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS (Honest demo content) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block mb-2">
            Témoignages Démo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1816] font-medium">
            Elles & ils ont adopté LUMÉA
          </h2>
          <p className="text-xs text-[#8C8479] mt-2">
            Exemples d’avis clients à titre d’illustration pour le concept de portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              author: 'Éléonore de V.',
              location: 'Lyon',
              product: 'Sérum Éclat Vitamine C',
              quote: '« La texture est d’une finesse incroyable. En quelques jours d’utilisation matinale, mon teint a retrouvé une luminosité saine sans brillance excessive. »',
              stars: 5,
            },
            {
              author: 'Marc-Antoine B.',
              location: 'Bordeaux',
              product: 'Crème Hydratante Nuage',
              quote: '« Une formule apaisante après le rasage qui pénètre immédiatement. On sent la qualité supérieure des céramides végétaux. Un vrai coup de cœur. »',
              stars: 5,
            },
            {
              author: 'Sarah L.',
              location: 'Paris',
              product: 'Coffret Rituel Éclat',
              quote: '« Tout est pensé avec délicatesse, de l’emballage en verre lourd jusqu’aux senteurs florales discrètes. Mon rituel préféré du soir. »',
              stars: 5,
            },
          ].map((rev, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-[#EAE3D9] flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex text-[#D99A45] mb-4">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Sparkles key={idx} className="w-4 h-4 fill-current mr-0.5" />
                  ))}
                </div>
                <p className="font-serif text-base text-[#1A1816] leading-relaxed italic mb-6">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3EFEA] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#1A1816]">{rev.author}</p>
                  <p className="text-[#8C8479]">{rev.location}</p>
                </div>
                <span className="text-[11px] text-[#475346] bg-[#FAF8F5] px-2 py-1 rounded border border-[#EAE3D9]">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER SIGNUP SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#EAE3D9]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8479] block mb-2">
            La Correspondance Botanique
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1816] font-medium mb-4">
            Un moment pour vous
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed mb-8">
            Inscrivez-vous à notre lettre confidentielle pour recevoir nos rituels de saison, des conseils dermatologiques doux et <strong>-10% sur votre première commande</strong>.
          </p>

          {newsletterSubmitted ? (
            <div className="bg-[#D9DFD6]/60 border border-[#475346]/20 p-6 rounded-2xl text-center">
              <CheckCircle2 className="w-8 h-8 text-[#475346] mx-auto mb-2" />
              <h3 className="font-serif text-xl font-medium text-[#1A1816]">Bienvenue dans l’univers LUMÉA</h3>
              <p className="text-xs text-[#6B6661] mt-1">
                Votre inscription démo est confirmée pour <strong>{newsletterEmail}</strong>. Utilisez le code <strong>ECLAT10</strong> lors de votre simulation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse e-mail..."
                className="flex-1 bg-white border border-[#D9D2C7] rounded-full px-5 py-3.5 text-xs text-[#1A1816] focus:border-[#1A1816] focus:outline-none placeholder-[#8C8479]"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-[#1A1816] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-[#33302C] transition-colors shrink-0 shadow-xs cursor-pointer"
              >
                S’inscrire
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#8C8479] mt-3">
            Aucun spam. Vous pouvez vous désinscrire à tout moment d’un simple clic.
          </p>
        </div>
      </section>

      {/* 9. INSTAGRAM-INSPIRED EDITORIAL GALLERY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8479] block">
              @lumeabeauty.paris
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1816] font-medium">
              L’Art de Vivre LUMÉA
            </h2>
          </div>
          <span className="text-xs text-[#8C8479] hidden sm:inline">
            Rejoignez notre communauté bien-être
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: '/src/assets/images/lumea_hero_editorial_1791728662064.jpg', tag: '#RituelMatin' },
            { img: '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg', tag: '#HauteBotanique' },
            { img: '/src/assets/images/lumea_creme_nuage_1791728686618.jpg', tag: '#TextureNuage' },
            { img: '/src/assets/images/lumea_brand_story_1791728712197.jpg', tag: '#MadeInFrance' },
          ].map((item, idx) => (
            <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE3D9]">
              <img
                src={item.img}
                alt={item.tag}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium tracking-wider">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
