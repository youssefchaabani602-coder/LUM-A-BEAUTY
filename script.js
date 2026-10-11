/**
 * ==========================================================================
 * LUMÉA BEAUTY — SCRIPT.JS
 * Vanilla JavaScript E-Commerce Engine:
 * 1. 12 Skincare Products Catalog with full data (INCI, images, stock, etc.)
 * 2. Persistent Shopping Cart (localStorage, free shipping gauge at 49€)
 * 3. Multi-View Router (Home, Shop, Category pages, PDP, Cart, Checkout, About, Contact, FAQ, Search)
 * 4. Multi-Filter System (Category, Price range, Availability, Sorters)
 * 5. Dynamic Search Modal & Search Results View
 * 6. Interactive PDP gallery with thumbnails, tabs, and quantity controls
 * 7. Multi-step Checkout simulation with validation & demo order receipt
 * 8. FAQ Accordion & Contact Form validation
 * ==========================================================================
 */

// 1. DATA SOURCE: 12 Fictional French Skincare Products
const PRODUCTS_DATA = [
  {
    id: 'serum-eclat-vitamine-c',
    name: 'Sérum Éclat Vitamine C',
    subtitle: 'Complexe Antioxydant Botanique & Fleur d’Oranger',
    price: 29.90,
    originalPrice: 34.90,
    rating: 4.9,
    reviewCount: 142,
    category: 'Sérums',
    categorySlug: 'serums',
    badge: 'Coup de cœur',
    isBestSeller: true,
    inStock: true,
    dateAdded: '2026-03-01',
    image: '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
    gallery: [
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
      '/src/assets/images/lumea_hero_editorial_1791728662064.jpg',
      '/src/assets/images/lumea_brand_story_1791728712197.jpg'
    ],
    volume: '30 ml',
    shortDescription: 'Un concentré d’éclat soyeux formulé pour illuminer le teint, unifier le grain de peau et apporter un éclat immédiat sans fini gras.',
    description: 'Le Sérum Éclat Vitamine C de LUMÉA BEAUTY associe une forme stable de vitamine C végétale à des extraits d’argousier et d’hydrolat de néroli. Sa texture fluide pénètre instantanément pour réveiller les teints fatigués et préserver la vitalité naturelle de l’épiderme.',
    benefits: [
      'Illumine le teint dès la première application',
      'Action antioxydante protectrice face aux agressions extérieures',
      'Texture fluide non collante au fini velouté',
      'Parfum délicat 100% naturel aux notes d’agrumes doux'
    ],
    ingredientsList: 'Aqua (Water), Citrus Aurantium Amara Flower Water*, Ascorbyl Glucoside, Glycerin, Hippophae Rhamnoides Fruit Oil*, Sodium Hyaluronate, Tocopherol, Xanthan Gum, Benzyl Alcohol, Dehydroacetic Acid. (*Ingrédients d’origine biologique - Démo).',
    fictionalNote: 'Formulation cosmétique fictive créée pour la démonstration de l’univers LUMÉA BEAUTY. Aucun effet thérapeutique ou médical n’est garanti.',
    usageTips: 'Appliquez 3 à 4 gouttes matin et soir sur visage et cou préalablement nettoyés, avant votre crème hydratante.'
  },
  {
    id: 'creme-hydratante-nuage',
    name: 'Crème Hydratante Nuage',
    subtitle: 'Émulsion Fondante au Beurre de Karité & Céramides Végétaux',
    price: 24.90,
    rating: 4.8,
    reviewCount: 98,
    category: 'Hydratants',
    categorySlug: 'hydratants',
    badge: 'Best-Seller',
    isBestSeller: true,
    inStock: true,
    dateAdded: '2026-02-15',
    image: '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
    gallery: [
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
      '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg'
    ],
    volume: '50 ml',
    shortDescription: 'Une crème enveloppante à la texture aérienne qui réconforte intensément la peau et préserve sa barrière d’hydratation toute la journée.',
    description: 'Inspirée de la douceur d’un nuage, cette crème hydrate en continu sans surcharger la peau. Formulée avec des acides gras essentiels et de l’avoine colloïdale apaisante, elle laisse la peau souple, douce et naturellement lumineuse.',
    benefits: [
      'Hydratation longue durée et confort immédiat',
      'Renforce la barrière cutanée contre le froid et la déshydratation',
      'Fini mat satiné, excellente base de maquillage',
      'Convient à tous les types de peaux, y compris les plus sensibles'
    ],
    ingredientsList: 'Aqua, Butyrospermum Parkii Butter*, Caprylic/Capric Triglyceride, Avena Sativa Kernel Extract*, Cetearyl Alcohol, Phytosterols, Sodium Hyaluronate, Squalane, Parfum (Naturel), Potassium Sorbate.',
    fictionalNote: 'Formule de démonstration - Les résultats réels dépendent des caractéristiques individuelles de chaque peau.',
    usageTips: 'Masser une noisette sur l’ensemble du visage et du décolleté par mouvements circulaires ascendants.'
  },
  {
    id: 'gel-nettoyant-douceur',
    name: 'Gel Nettoyant Douceur',
    subtitle: 'Mousse Botanique à la Camomille & Thé Vert Purifiant',
    price: 18.90,
    rating: 4.7,
    reviewCount: 76,
    category: 'Nettoyants',
    categorySlug: 'nettoyants',
    isBestSeller: true,
    inStock: true,
    dateAdded: '2026-01-20',
    image: '/src/assets/images/lumea_brand_story_1791728712197.jpg',
    gallery: [
      '/src/assets/images/lumea_brand_story_1791728712197.jpg',
      '/src/assets/images/lumea_hero_editorial_1791728662064.jpg'
    ],
    volume: '150 ml',
    shortDescription: 'Un nettoyant doux sans sulfates qui élimine les impuretés et traces de maquillage tout en respectant le pH naturel de l’épiderme.',
    description: 'Une gelée cristalline qui se transforme en mousse soyeuse au contact de l’eau. Enrichie en extrait de camomille romaine et en jus d’aloe vera frais, elle purifie sans tirailler et laisse une sensation immédiate de fraîcheur propre.',
    benefits: [
      'Nettoie efficacement sans altérer le film hydrolipidique',
      'Tensioactifs ultra-doux dérivés d’acides aminés de pomme',
      'Sensation de confort absolu sans sensation de tiraillement',
      'Flacon recyclable avec pompe doseuse précise'
    ],
    ingredientsList: 'Aqua, Aloe Barbadensis Leaf Juice*, Cocamidopropyl Betaine, Sodium Cocoyl Apple Amino Acids, Chamomilla Recutita Flower Water*, Camellia Sinensis Leaf Extract, Glycerin, Citric Acid.',
    fictionalNote: 'Concept de soin cosmétique fictif pour portfolio agence.',
    usageTips: 'Faire mousser une pression sur peau humide, masser délicatement puis rincer à l’eau tiède.'
  },
  {
    id: 'coffret-rituel-eclat',
    name: 'Coffret Rituel Éclat',
    subtitle: 'Trio Signature : Gelée, Sérum Botanique & Crème Velours',
    price: 59.90,
    originalPrice: 73.70,
    rating: 5.0,
    reviewCount: 63,
    category: 'Masques & soins',
    categorySlug: 'masques',
    badge: 'Édition Spéciale -15%',
    isBestSeller: true,
    inStock: true,
    dateAdded: '2026-03-10',
    image: '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg',
    gallery: [
      '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg',
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg'
    ],
    volume: '3 produits + lingette',
    shortDescription: 'Le protocole complet en 3 gestes essentiels pour réveiller l’éclat de la peau au quotidien. Présenté dans un coffret cadeau éco-conçu.',
    description: 'Réunissant le Gel Nettoyant Douceur (150ml), le Sérum Éclat Vitamine C (30ml) et la Crème Hydratante Nuage (50ml), ce coffret rituel constitue la routine parfaite pour retrouver une peau radieuse et saine en toute simplicité.',
    benefits: [
      'Routine complète du matin et du soir prête à l’emploi',
      'Économie de 13,80 € par rapport aux produits achetés séparément',
      'Livré avec une lingette démaquillante lavable en coton biologique',
      'Idéal à offrir ou pour démarrer une nouvelle routine'
    ],
    ingredientsList: 'Contient les formulations complètes de nos 3 soins signature certifiés doux pour la peau.',
    fictionalNote: 'Coffret de démonstration. Produits fictifs à titre de présentation de design.',
    usageTips: 'Étape 1 : Nettoyer. Étape 2 : Cibler avec le Sérum. Étape 3 : Sceller l’hydratation avec la Crème.'
  },
  {
    id: 'serum-hydratation-intense',
    name: 'Sérum Hydratation Intense',
    subtitle: 'Acide Hyaluronique Multi-Poids & Eau Florale de Rose',
    price: 27.90,
    rating: 4.8,
    reviewCount: 52,
    category: 'Sérums',
    categorySlug: 'serums',
    badge: 'Peaux Assoiffées',
    inStock: true,
    dateAdded: '2026-02-01',
    image: '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
    gallery: [
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
      '/src/assets/images/lumea_lotion_tonique_1791729582628.jpg'
    ],
    volume: '30 ml',
    shortDescription: 'Véritable bain d’hydratation pour les peaux déshydratées, associant 3 poids moléculaires d’acide hyaluronique pur.',
    description: 'Une formule désaltérante qui repulpe visiblement les ridules de déshydratation et restaure l’élasticité de l’épiderme. Sa texture gélifiée fond comme de l’eau sur le visage.',
    benefits: [
      'Repulpe et lisse le grain de peau',
      'Retient l’eau dans les couches superficielles de l’épiderme',
      'Fini frais non collant',
      'Parfum d’eau de rose de Damas subtil et apaisant'
    ],
    ingredientsList: 'Aqua, Rosa Damascena Flower Water*, Sodium Hyaluronate (Tri-Molecular), Glycerin, Biosaccharide Gum-1, Leuconostoc/Radish Root Ferment Filtrate.',
    fictionalNote: 'Produit fictif conçu pour le portfolio e-commerce.',
    usageTips: 'Appliquer sur peau légèrement humide avant la crème de jour.'
  },
  {
    id: 'masque-visage-eclat',
    name: 'Masque Visage Éclat',
    subtitle: 'Enzymes Douces de Fruits & Argile Rose Pure de France',
    price: 19.90,
    rating: 4.9,
    reviewCount: 44,
    category: 'Masques & soins',
    categorySlug: 'masques',
    inStock: true,
    dateAdded: '2026-01-10',
    image: '/src/assets/images/lumea_masque_argile_1791729562588.jpg',
    gallery: [
      '/src/assets/images/lumea_masque_argile_1791729562588.jpg',
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg'
    ],
    volume: '75 ml',
    shortDescription: 'Un masque crème exfoliant enzymatique qui libère la peau des cellules mortes sans grain agressif en 10 minutes seulement.',
    description: 'L’argile rose de France absorbe les impuretés tout en préservant le confort cutané, tandis que les extraits de grenade et de papaye exfolient en douceur pour un teint radieux comme après un soin en institut.',
    benefits: [
      'Exfoliation enzymatique sans frottement agressif',
      'Teint visiblement plus lumineux et pores resserrés',
      'Texture onctueuse qui ne sèche pas et ne tiraille pas',
      'Usage hebdomadaire doux'
    ],
    ingredientsList: 'Kaolin (Pink Clay), Aqua, Prunus Amygdalus Dulcis Oil*, Lactobacillus/Punica Granatum Fruit Ferment Extract, Zinc PCA, Helianthus Annuus Seed Oil, Tocopherol.',
    fictionalNote: 'Contenu fictif de démonstration - Ne constitue pas une ordonnance dermatologique.',
    usageTips: 'Laisser poser 10 à 15 minutes en couche généreuse sur peau propre, puis rincer abondamment.'
  },
  {
    id: 'huile-seche-sublime',
    name: 'Huile Sèche Sublime',
    subtitle: '7 Huiles Végétales Précieuses : Jojoba, Rose Musquée & Noisette',
    price: 22.90,
    rating: 4.7,
    reviewCount: 38,
    category: 'Corps & bien-être',
    categorySlug: 'corps',
    badge: 'Visage, Corps & Cheveux',
    inStock: true,
    dateAdded: '2026-02-20',
    image: '/src/assets/images/lumea_huile_corps_1791729572516.jpg',
    gallery: [
      '/src/assets/images/lumea_huile_corps_1791729572516.jpg',
      '/src/assets/images/lumea_brand_story_1791728712197.jpg'
    ],
    volume: '100 ml',
    shortDescription: 'Une huile multifonction satinée au toucher sec qui nourrit et illumine le corps, le visage et les pointes des cheveux.',
    description: 'Formulée sans silicones ni huiles minérales, cette huile sèche pénètre en quelques secondes sans laisser de trace sur les vêtements. Elle délivre un éclat doré naturel et un parfum solaire réconfortant.',
    benefits: [
      'Toucher sec immédiat, pénétration ultra-rapide',
      'Nourrit intensément les zones sèches du corps et du visage',
      'Apporte souplesse et brillance à la chevelure',
      'Flacon en verre recyclable'
    ],
    ingredientsList: 'Coco-Caprylate/Caprate, Simmondsia Chinensis Seed Oil*, Corylus Avellana Seed Oil*, Rosa Canina Seed Oil*, Macadamia Integrifolia Seed Oil*, Tocopherol, Parfum.',
    fictionalNote: 'Exemple fictif de produit cosmétique.',
    usageTips: 'Chauffer quelques gouttes dans le creux des mains puis appliquer sur les zones souhaitées.'
  },
  {
    id: 'baume-reparateur',
    name: 'Baume Réparateur Confort',
    subtitle: 'Soin Ciblé Cica-Botanique aux Extraits de Calendula',
    price: 16.90,
    rating: 4.8,
    reviewCount: 31,
    category: 'Masques & soins',
    categorySlug: 'masques',
    inStock: true,
    dateAdded: '2026-01-25',
    image: '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
    gallery: [
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
      '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg'
    ],
    volume: '40 ml',
    shortDescription: 'Le baume SOS pour les lèvres gercées, zones rugueuses et peaux exposées au vent ou au froid.',
    description: 'Enrichi en macérât de calendula récolté en France et en cire de carnauba végétale, ce baume pansement restaure la douceur des zones les plus fragiles en formant un bouclier respirant protecteur.',
    benefits: [
      'Apaisement immédiat des sensations d’échauffement',
      'Texture riche protectrice non collante',
      'Format tube nomade pratique à emporter partout',
      'Idéal en retouche tout au long de la journée'
    ],
    ingredientsList: 'Ricinus Communis Seed Oil, Butyrospermum Parkii Butter*, Copernicia Cerifera Cera*, Calendula Officinalis Flower Extract*, Bisabolol, Tocopherol.',
    fictionalNote: 'Fiche descriptive fictive pour concept cosmétique.',
    usageTips: 'Appliquer localement en couche fine dès que nécessaire sur les lèvres, les ailes du nez ou les coudes.'
  },
  {
    id: 'lotion-tonique-apaisante',
    name: 'Brume Botanique Apaisante',
    subtitle: 'Hydrolat Pur de Rose de Grasse & Camomille Sauvage',
    price: 15.90,
    rating: 4.9,
    reviewCount: 47,
    category: 'Nettoyants',
    categorySlug: 'nettoyants',
    badge: 'Nouveauté',
    inStock: true,
    dateAdded: '2026-03-15',
    image: '/src/assets/images/lumea_lotion_tonique_1791729582628.jpg',
    gallery: [
      '/src/assets/images/lumea_lotion_tonique_1791729582628.jpg',
      '/src/assets/images/lumea_hero_editorial_1791728662064.jpg'
    ],
    volume: '100 ml',
    shortDescription: 'Une brume micro-diffusée qui neutralise les effets du calcaire, apaise les rougeurs et prépare la peau à recevoir son sérum.',
    description: 'Distillée artisanalement à partir de roses fraîches, cette eau florale vivifiante tonifie l’épiderme au réveil et fixe le maquillage avec légèreté. Un geste rafraîchissant incontournable de votre routine beauté.',
    benefits: [
      'Neutralise le calcaire de l’eau du robinet',
      'Apaise instantanément les sensations d’échauffement',
      'Diffusion ultra-fine en nuage aérien',
      '100% pure sans parfum de synthèse ajouté'
    ],
    ingredientsList: 'Rosa Damascena Flower Water*, Chamomilla Recutita Flower Water*, Pentylene Glycol, Citric Acid, Potassium Sorbate.',
    fictionalNote: 'Produit fictif à visée de présentation.',
    usageTips: 'Vaporiser à 20 cm du visage yeux fermés après le nettoyage ou à tout moment de la journée pour désaltérer la peau.'
  },
  {
    id: 'creme-regard-defatigante',
    name: 'Crème Regard Défatigante',
    subtitle: 'Caféine Botanique, Bleuet & Peptides Végétaux',
    price: 26.50,
    rating: 4.6,
    reviewCount: 29,
    category: 'Hydratants',
    categorySlug: 'hydratants',
    inStock: true,
    dateAdded: '2026-02-28',
    image: '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
    gallery: [
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg'
    ],
    volume: '15 ml',
    shortDescription: 'Un soin ciblé pour le contour des yeux qui estompe visiblement cernes et poches tout en hydratant intensément cette zone délicate.',
    description: 'Spécifiquement formulé sans parfum pour la zone ultra-fine du regard, ce contour des yeux associe l’eau florale de bleuet décongestionnante à un extrait de caféine verte pour un regard instantanément réveillé.',
    benefits: [
      'Estompe la pigmentation des cernes bleutés et bruns',
      'Décongestionne le contour de l’œil dès l’application',
      'Texture gel-crème qui ne migre pas dans les yeux',
      'Tolérance testée sous contrôle ophtalmologique (démo)'
    ],
    ingredientsList: 'Aqua, Centaurea Cyanus Flower Water*, Glycerin, Caffeine, Palmitoyl Tripeptide-5, Escin, Sodium Hyaluronate, Tocopherol.',
    fictionalNote: 'Formule cosmétique de concept portfolio.',
    usageTips: 'Tapoter délicatement une tête d’épingle matin et soir de l’angle interne vers les tempes.'
  },
  {
    id: 'lait-corps-nourrissant',
    name: 'Lait Corps Satiné',
    subtitle: 'Infusion d’Amande Douce & Fleur de Coton',
    price: 21.00,
    rating: 4.8,
    reviewCount: 35,
    category: 'Corps & bien-être',
    categorySlug: 'corps',
    inStock: false, // out of stock demo
    badge: 'Victime de son succès',
    dateAdded: '2026-01-15',
    image: '/src/assets/images/lumea_huile_corps_1791729572516.jpg',
    gallery: [
      '/src/assets/images/lumea_huile_corps_1791729572516.jpg',
      '/src/assets/images/lumea_brand_story_1791728712197.jpg'
    ],
    volume: '200 ml',
    shortDescription: 'Un lait fondant qui pénètre en un clin d’œil pour habiller le corps d’un voile de confort hydratant et soyeux.',
    description: 'L’alliance de l’huile d’amande douce pressée à froid et de l’extrait de fleur de coton protège la peau de la déshydratation sans aucun fini collant. Permet de s’habiller immédiatement après l’application.',
    benefits: [
      'Hydratation 24h et apaisement durable',
      'Habillage immédiat sans effet gras',
      'Flacon pompe généreux pour un usage quotidien familial',
      'Parfum réconfortant de coton poudré'
    ],
    ingredientsList: 'Aqua, Prunus Amygdalus Dulcis Oil*, Gossypium Herbaceum Extract, Caprylic/Capric Triglyceride, Glyceryl Stearate, Glycerin, Parfum, Xanthan Gum.',
    fictionalNote: 'Exemple fictif de produit cosmétique de soin corporel.',
    usageTips: 'Appliquer généreusement sur l’ensemble du corps après la douche en insistant sur les jambes et les coudes.'
  },
  {
    id: 'gommage-corps-fondant',
    name: 'Gommage Corps Botanique',
    subtitle: 'Grains Fins de Sucre de Canne & Huile de Rosier Sauvage',
    price: 23.50,
    rating: 4.9,
    reviewCount: 41,
    category: 'Corps & bien-être',
    categorySlug: 'corps',
    inStock: true,
    dateAdded: '2026-03-05',
    image: '/src/assets/images/lumea_masque_argile_1791729562588.jpg',
    gallery: [
      '/src/assets/images/lumea_masque_argile_1791729562588.jpg',
      '/src/assets/images/lumea_huile_corps_1791729572516.jpg'
    ],
    volume: '200 ml',
    shortDescription: 'Une pâte exfoliante divine qui se métamorphose en lait soyeux au contact de l’eau pour une peau satinée et infiniment douce.',
    description: 'Enrichi en cristaux de sucre brut et en huile de graines de rosier musqué, ce gommage élimine les cellules mortes en douceur et stimule la microcirculation tout en nourrissant intensément l’épiderme.',
    benefits: [
      'Exfoliation mécanique douce non desséchante',
      'Transformation magique de texture huile en émulsion lactée',
      'Laisse la peau divinement douce et nourrie',
      'Parfum subtil de roses sauvages'
    ],
    ingredientsList: 'Sucrose*, Helianthus Annuus Seed Oil*, Rosa Canina Seed Oil*, Polyglyceryl-4 Oleate, Silica, Tocopherol, Parfum.',
    fictionalNote: 'Produit fictif pour la démonstration de l’expérience boutique en ligne.',
    usageTips: 'Masser sur peau sèche pour une exfoliation plus intense ou sur peau humide pour un gommage doux, puis rincer.'
  }
];

// Helper to format prices
function formatEuro(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

// 2. SHOPPING CART ENGINE (Local Storage persistence)
const CartStore = {
  getCart() {
    try {
      const saved = localStorage.getItem('lumea_beauty_vanilla_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    // Default initial cart demo item
    return [{ productId: 'serum-eclat-vitamine-c', quantity: 1 }];
  },

  saveCart(cart) {
    try {
      localStorage.setItem('lumea_beauty_vanilla_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    this.notifyUpdate();
  },

  addItem(productId, quantity = 1) {
    const product = PRODUCTS_DATA.find((p) => p.id === productId);
    if (!product || !product.inStock) return;

    const cart = this.getCart();
    const existingIndex = cart.findIndex((item) => item.productId === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    this.saveCart(cart);
    this.showToast(`${product.name} ajouté au panier !`);
    CartUI.openDrawer();
  },

  updateQuantity(productId, quantity) {
    let cart = this.getCart();
    if (quantity <= 0) {
      cart = cart.filter((item) => item.productId !== productId);
    } else {
      const item = cart.find((i) => i.productId === productId);
      if (item) item.quantity = quantity;
    }
    this.saveCart(cart);
  },

  removeItem(productId) {
    const cart = this.getCart().filter((item) => item.productId !== productId);
    this.saveCart(cart);
  },

  clearCart() {
    this.saveCart([]);
  },

  getSummary() {
    const cart = this.getCart();
    let totalItems = 0;
    let subtotal = 0;
    const items = [];

    cart.forEach((c) => {
      const p = PRODUCTS_DATA.find((prod) => prod.id === c.productId);
      if (p) {
        totalItems += c.quantity;
        subtotal += p.price * c.quantity;
        items.push({ product: p, quantity: c.quantity });
      }
    });

    const freeShippingThreshold = 49.00;
    const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
    const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 4.90;
    const grandTotal = subtotal + shipping;

    return {
      items,
      totalItems,
      subtotal,
      shipping,
      grandTotal,
      freeShippingThreshold,
      amountNeeded
    };
  },

  notifyUpdate() {
    CartUI.render();
  },

  showToast(message) {
    const toast = document.getElementById('cart-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.removeAttribute('hidden');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.setAttribute('hidden', '');
    }, 3000);
  }
};

// 3. CART UI RENDERING
const CartUI = {
  init() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    const closeBtn = document.getElementById('close-cart-drawer');
    const openBtns = document.querySelectorAll('.js-open-cart');

    openBtns.forEach((btn) => btn.addEventListener('click', () => this.openDrawer()));
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeDrawer();
      });
    }

    this.render();
  },

  openDrawer() {
    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) overlay.removeAttribute('hidden');
    this.render();
  },

  closeDrawer() {
    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) overlay.setAttribute('hidden', '');
  },

  render() {
    const summary = CartStore.getSummary();

    // 1. Update live cart counters in header & mobile
    document.querySelectorAll('.js-cart-count').forEach((el) => {
      el.textContent = summary.totalItems;
    });

    // 2. Render Drawer Content
    this.renderDrawerContent(summary);

    // 3. Render Cart Page if visible
    this.renderCartPageContent(summary);
  },

  renderDrawerContent(summary) {
    const container = document.getElementById('drawer-items-list');
    const footer = document.getElementById('drawer-footer');
    const gaugeText = document.getElementById('drawer-gauge-text');
    const gaugeFill = document.getElementById('drawer-gauge-fill');
    const subtotalEl = document.getElementById('drawer-subtotal');
    const shippingEl = document.getElementById('drawer-shipping');

    if (!container) return;

    if (summary.amountNeeded > 0) {
      gaugeText.innerHTML = `Plus que <strong>${formatEuro(summary.amountNeeded)}</strong> pour la <strong>livraison offerte</strong>.`;
      const pct = Math.min(100, (summary.subtotal / summary.freeShippingThreshold) * 100);
      gaugeFill.style.width = `${pct}%`;
    } else {
      gaugeText.innerHTML = `✨ <strong>Livraison offerte</strong> en France métropolitaine !`;
      gaugeFill.style.width = `100%`;
    }

    if (subtotalEl) subtotalEl.textContent = formatEuro(summary.subtotal);
    if (shippingEl) shippingEl.textContent = summary.shipping === 0 ? 'Offerts' : formatEuro(summary.shipping);

    if (summary.items.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <p style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Votre rituel est encore vide</p>
          <p style="font-size: 0.75rem; color: var(--color-muted); margin-bottom: 1.5rem;">Découvrez nos soins pour composer votre protocole.</p>
          <button type="button" class="btn btn-primary btn-sm" onclick="CartUI.closeDrawer(); Router.navigate('shop');">Explorer la boutique</button>
        </div>
      `;
      if (footer) footer.setAttribute('hidden', '');
    } else {
      if (footer) footer.removeAttribute('hidden');
      container.innerHTML = summary.items.map((item) => `
        <div class="cart-item-row">
          <div class="cart-item-img" onclick="CartUI.closeDrawer(); Router.navigate('pdp', '${item.product.id}');">
            <img src="${item.product.image}" alt="${item.product.name}" />
          </div>
          <div class="cart-item-info">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                <h4 style="font-family: var(--font-serif); font-size: 1rem; font-weight: 600; cursor: pointer;" onclick="CartUI.closeDrawer(); Router.navigate('pdp', '${item.product.id}');">${item.product.name}</h4>
                <button type="button" onclick="CartStore.removeItem('${item.product.id}')" style="color: var(--color-muted-light); padding: 0.2rem;" aria-label="Supprimer">✕</button>
              </div>
              <p style="font-size: 0.6875rem; color: var(--color-muted-light);">${item.product.volume}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
              <div class="stepper-box">
                <button type="button" class="stepper-btn" onclick="CartStore.updateQuantity('${item.product.id}', ${item.quantity - 1})">-</button>
                <span class="stepper-val">${item.quantity}</span>
                <button type="button" class="stepper-btn" onclick="CartStore.updateQuantity('${item.product.id}', ${item.quantity + 1})">+</button>
              </div>
              <span style="font-family: monospace; font-size: 0.875rem; font-weight: 700;">${formatEuro(item.product.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  },

  renderCartPageContent(summary) {
    const listWrap = document.getElementById('cart-page-items');
    const subtotalEl = document.getElementById('cart-page-subtotal');
    const shippingEl = document.getElementById('cart-page-shipping');
    const totalEl = document.getElementById('cart-page-total');
    const gaugeText = document.getElementById('cart-page-gauge-text');
    const gaugeFill = document.getElementById('cart-page-gauge-fill');
    const emptyBox = document.getElementById('cart-page-empty');
    const contentGrid = document.getElementById('cart-page-grid');

    if (!listWrap) return;

    if (summary.items.length === 0) {
      if (emptyBox) emptyBox.removeAttribute('hidden');
      if (contentGrid) contentGrid.setAttribute('hidden', '');
      return;
    }

    if (emptyBox) emptyBox.setAttribute('hidden', '');
    if (contentGrid) contentGrid.removeAttribute('hidden');

    if (gaugeText && gaugeFill) {
      if (summary.amountNeeded > 0) {
        gaugeText.innerHTML = `Plus que <strong>${formatEuro(summary.amountNeeded)}</strong> pour bénéficier de la <strong>livraison offerte</strong>.`;
        const pct = Math.min(100, (summary.subtotal / summary.freeShippingThreshold) * 100);
        gaugeFill.style.width = `${pct}%`;
      } else {
        gaugeText.innerHTML = `✨ Félicitations ! Vous profitez de la livraison offerte en France.`;
        gaugeFill.style.width = `100%`;
      }
    }

    if (subtotalEl) subtotalEl.textContent = formatEuro(summary.subtotal);
    if (shippingEl) shippingEl.textContent = summary.shipping === 0 ? 'Offerts' : formatEuro(summary.shipping);
    if (totalEl) totalEl.textContent = formatEuro(summary.grandTotal);

    listWrap.innerHTML = summary.items.map((item) => `
      <div style="padding: 1.5rem; display: flex; gap: 1.5rem; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--color-beige-sand);">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <div class="cart-item-img" style="width: 5rem; height: 6rem;" onclick="Router.navigate('pdp', '${item.product.id}')">
            <img src="${item.product.image}" alt="${item.product.name}" />
          </div>
          <div>
            <span style="font-size: 0.625rem; text-transform: uppercase; color: var(--color-muted-light);">${item.product.category} · ${item.product.volume}</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 600; cursor: pointer;" onclick="Router.navigate('pdp', '${item.product.id}')">${item.product.name}</h3>
            <p style="font-size: 0.75rem; color: var(--color-muted);">${item.product.subtitle}</p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <div class="stepper-box">
            <button type="button" class="stepper-btn" onclick="CartStore.updateQuantity('${item.product.id}', ${item.quantity - 1})">-</button>
            <span class="stepper-val">${item.quantity}</span>
            <button type="button" class="stepper-btn" onclick="CartStore.updateQuantity('${item.product.id}', ${item.quantity + 1})">+</button>
          </div>
          <span style="font-family: monospace; font-size: 1rem; font-weight: 700; width: 6rem; text-align: right;">${formatEuro(item.product.price * item.quantity)}</span>
          <button type="button" onclick="CartStore.removeItem('${item.product.id}')" style="color: var(--color-muted-light); padding: 0.5rem; font-size: 1rem;" title="Supprimer">✕</button>
        </div>
      </div>
    `).join('');
  }
};

// 4. MULTI-PAGE ROUTER (Single-page app with URL Hash support)
const Router = {
  currentRoute: 'home',
  currentParam: null,

  init() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    this.handleHashChange();
  },

  navigate(route, param = null) {
    if (param) {
      window.location.hash = `#${route}/${param}`;
    } else {
      window.location.hash = `#${route}`;
    }
  },

  handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const parts = hash.split('/');
    const route = parts[0];
    const param = parts[1] || null;

    this.currentRoute = route;
    this.currentParam = param;

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach((sec) => sec.setAttribute('hidden', ''));

    // Highlight current active nav link
    document.querySelectorAll('.nav-link').forEach((link) => {
      const targetRoute = link.getAttribute('data-route');
      if (targetRoute === route) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Switch view
    switch (route) {
      case 'home':
        this.renderHome();
        break;
      case 'shop':
        this.renderCatalog('Tous');
        break;
      case 'cleansers':
        this.renderCatalog('Nettoyants');
        break;
      case 'serums':
        this.renderCatalog('Sérums');
        break;
      case 'moisturizers':
        this.renderCatalog('Hydratants');
        break;
      case 'masks':
        this.renderCatalog('Masques & soins');
        break;
      case 'body':
        this.renderCatalog('Corps & bien-être');
        break;
      case 'pdp':
        this.renderPDP(param);
        break;
      case 'cart':
        this.renderCartPage();
        break;
      case 'checkout':
        this.renderCheckout();
        break;
      case 'about':
        this.showView('view-about');
        break;
      case 'contact':
        this.showView('view-contact');
        break;
      case 'faq':
        this.showView('view-faq');
        break;
      case 'search':
        this.renderSearchResults(param || '');
        break;
      default:
        this.renderHome();
    }
  },

  showView(viewId) {
    const el = document.getElementById(viewId);
    if (el) el.removeAttribute('hidden');
  },

  renderHome() {
    this.showView('view-home');
    HomeUI.renderBestSellers();
  },

  renderCatalog(categoryName) {
    this.showView('view-catalog');
    CatalogUI.setCategory(categoryName);
  },

  renderPDP(productId) {
    const product = PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];
    this.showView('view-pdp');
    PdpUI.render(product);
  },

  renderCartPage() {
    this.showView('view-cart-page');
    CartUI.render();
  },

  renderCheckout() {
    this.showView('view-checkout');
    CheckoutUI.init();
  },

  renderSearchResults(query) {
    this.showView('view-search-results');
    SearchPageUI.render(decodeURIComponent(query));
  }
};

// 5. HOMEPAGE UI
const HomeUI = {
  renderBestSellers() {
    const container = document.getElementById('home-bestsellers-grid');
    if (!container) return;

    const bestSellers = PRODUCTS_DATA.filter((p) => p.isBestSeller);
    container.innerHTML = bestSellers.map((p) => this.createProductCardHtml(p)).join('');
  },

  createProductCardHtml(product) {
    return `
      <article class="product-card">
        <div class="product-thumb-wrap" onclick="Router.navigate('pdp', '${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          ${!product.inStock ? `<span class="product-out-stock">Rupture</span>` : ''}
        </div>
        <div class="product-info">
          <div>
            <div class="product-meta-row">
              <span>${product.category}</span>
              <span aria-hidden="true">·</span>
              <span>${product.volume}</span>
            </div>
            <h3 class="product-card-title" onclick="Router.navigate('pdp', '${product.id}')">${product.name}</h3>
            <p class="product-card-sub">${product.shortDescription}</p>
          </div>
          <div class="product-bottom-bar">
            <div>
              <div class="product-rating">
                ★ <span>${product.rating.toFixed(1)}</span> (${product.reviewCount})
              </div>
              <div class="product-price-box">
                <span class="product-price-current">${formatEuro(product.price)}</span>
                ${product.originalPrice ? `<span class="product-price-old">${formatEuro(product.originalPrice)}</span>` : ''}
              </div>
            </div>
            ${
              product.inStock
                ? `<button type="button" class="btn-add-quick" onclick="CartStore.addItem('${product.id}', 1)" title="Ajouter au panier" aria-label="Ajouter ${product.name} au panier">+</button>`
                : `<button type="button" class="btn-add-quick" disabled title="Épuisé">✕</button>`
            }
          </div>
        </div>
      </article>
    `;
  }
};

// 6. CATALOG / SHOP UI (Multi-filters + Sorter)
const CatalogUI = {
  currentCategory: 'Tous',
  currentPrice: 'all',
  availabilityOnly: false,
  sortBy: 'popularity',

  init() {
    // Category pills
    document.querySelectorAll('.js-cat-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.setCategory(e.target.getAttribute('data-category'));
      });
    });

    // Price chips
    document.querySelectorAll('.js-price-chip').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.currentPrice = e.target.getAttribute('data-price');
        document.querySelectorAll('.js-price-chip').forEach((c) => c.classList.remove('is-active'));
        e.target.classList.add('is-active');
        this.render();
      });
    });

    // Stock check
    const stockCheck = document.getElementById('filter-stock-only');
    if (stockCheck) {
      stockCheck.addEventListener('change', (e) => {
        this.availabilityOnly = e.target.checked;
        this.render();
      });
    }

    // Sorter select
    const sorter = document.getElementById('catalog-sorter');
    if (sorter) {
      sorter.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.render();
      });
    }

    // Clear filters
    const clearBtn = document.getElementById('btn-clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAll());
    }
  },

  setCategory(categoryName) {
    this.currentCategory = categoryName;

    // Update active state on buttons
    document.querySelectorAll('.js-cat-filter').forEach((btn) => {
      if (btn.getAttribute('data-category') === categoryName) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Title & kicker updates
    const titleEl = document.getElementById('catalog-view-title');
    const kickerEl = document.getElementById('catalog-view-kicker');
    if (titleEl) {
      titleEl.textContent = categoryName === 'Tous' ? 'Toutes nos créations botaniques' : `Collection ${categoryName}`;
    }
    if (kickerEl) {
      kickerEl.textContent = categoryName === 'Tous' ? 'Haute Cosmétique Française' : `Univers ${categoryName}`;
    }

    this.render();
  },

  clearAll() {
    this.currentCategory = 'Tous';
    this.currentPrice = 'all';
    this.availabilityOnly = false;
    this.sortBy = 'popularity';

    const stockCheck = document.getElementById('filter-stock-only');
    if (stockCheck) stockCheck.checked = false;

    const sorter = document.getElementById('catalog-sorter');
    if (sorter) sorter.value = 'popularity';

    document.querySelectorAll('.js-price-chip').forEach((c) => {
      if (c.getAttribute('data-price') === 'all') c.classList.add('is-active');
      else c.classList.remove('is-active');
    });

    this.setCategory('Tous');
  },

  render() {
    const container = document.getElementById('catalog-products-grid');
    const countEl = document.getElementById('catalog-result-count');
    const emptyBox = document.getElementById('catalog-empty-box');
    const chipsBox = document.getElementById('catalog-active-chips');
    if (!container) return;

    // Filtering
    let list = PRODUCTS_DATA.filter((p) => {
      if (this.currentCategory !== 'Tous' && p.category !== this.currentCategory) return false;
      if (this.availabilityOnly && !p.inStock) return false;
      if (this.currentPrice === 'under20' && p.price >= 20) return false;
      if (this.currentPrice === '20to30' && (p.price < 20 || p.price > 30)) return false;
      if (this.currentPrice === 'over30' && p.price <= 30) return false;
      return true;
    });

    // Sorting
    if (this.sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (this.sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (this.sortBy === 'newest') list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    else list.sort((a, b) => b.reviewCount - a.reviewCount); // Popularity

    if (countEl) countEl.textContent = `${list.length} soin${list.length > 1 ? 's' : ''}`;

    // Render Active Chips
    if (chipsBox) {
      const activeTags = [];
      if (this.currentCategory !== 'Tous') activeTags.push(`Catégorie : ${this.currentCategory}`);
      if (this.currentPrice !== 'all') {
        activeTags.push(this.currentPrice === 'under20' ? '< 20 €' : this.currentPrice === '20to30' ? '20 € à 30 €' : '> 30 €');
      }
      if (this.availabilityOnly) activeTags.push('En stock uniquement');

      if (activeTags.length > 0) {
        chipsBox.removeAttribute('hidden');
        chipsBox.innerHTML = activeTags.map((t) => `<span class="filter-tag-chip">${t}</span>`).join('');
      } else {
        chipsBox.setAttribute('hidden', '');
      }
    }

    // Empty state
    if (list.length === 0) {
      container.innerHTML = '';
      if (emptyBox) emptyBox.removeAttribute('hidden');
    } else {
      if (emptyBox) emptyBox.setAttribute('hidden', '');
      container.innerHTML = list.map((p) => HomeUI.createProductCardHtml(p)).join('');
    }
  }
};

// 7. PRODUCT DETAIL PAGE UI
const PdpUI = {
  currentProduct: null,
  currentQty: 1,

  render(product) {
    this.currentProduct = product;
    this.currentQty = 1;

    // Breadcrumb
    const bcCat = document.getElementById('pdp-bc-cat');
    const bcTitle = document.getElementById('pdp-bc-title');
    if (bcCat) bcCat.textContent = product.category;
    if (bcTitle) bcTitle.textContent = product.name;

    // Main Image & Gallery
    const mainImg = document.getElementById('pdp-main-image');
    if (mainImg) mainImg.src = product.image;

    const thumbsContainer = document.getElementById('pdp-thumbs-container');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = product.gallery.map((img, idx) => `
        <button type="button" class="pdp-thumb-btn ${idx === 0 ? 'is-active' : ''}" onclick="PdpUI.setMainImage('${img}', this)">
          <img src="${img}" alt="" />
        </button>
      `).join('');
    }

    // Info
    document.getElementById('pdp-category-vol').textContent = `${product.category} · ${product.volume}`;
    document.getElementById('pdp-title').textContent = product.name;
    document.getElementById('pdp-subtitle').textContent = product.subtitle;
    document.getElementById('pdp-rating-val').textContent = product.rating.toFixed(1);
    document.getElementById('pdp-review-count').textContent = `(${product.reviewCount} avis démo)`;
    document.getElementById('pdp-price').textContent = formatEuro(product.price);

    const oldPriceEl = document.getElementById('pdp-old-price');
    if (product.originalPrice) {
      oldPriceEl.textContent = formatEuro(product.originalPrice);
      oldPriceEl.removeAttribute('hidden');
    } else {
      oldPriceEl.setAttribute('hidden', '');
    }

    document.getElementById('pdp-desc').textContent = product.description;

    // Stock state
    const stockEl = document.getElementById('pdp-stock-status');
    const addBtn = document.getElementById('pdp-add-btn');
    if (product.inStock) {
      stockEl.innerHTML = `<span style="color: #10B981;">●</span> En stock · Expédié sous 24h ouvrées`;
      addBtn.removeAttribute('disabled');
      addBtn.textContent = `Ajouter au panier · ${formatEuro(product.price)}`;
    } else {
      stockEl.innerHTML = `<span style="color: #9F1239;">●</span> Temporairement en rupture de stock`;
      addBtn.setAttribute('disabled', '');
      addBtn.textContent = `Produit épuisé`;
    }

    // Stepper
    document.getElementById('pdp-qty-val').textContent = '1';

    // Tabs content
    document.getElementById('pdp-tab-benefits').innerHTML = `
      <ul style="padding-left: 1.25rem; list-style-type: disc;">
        ${product.benefits.map((b) => `<li style="margin-bottom: 0.35rem;">${b}</li>`).join('')}
      </ul>
    `;
    document.getElementById('pdp-tab-ingredients').innerHTML = `
      <p style="font-family: monospace; font-size: 0.75rem; background: var(--color-ivory); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--color-border); margin-bottom: 0.5rem;">${product.ingredientsList}</p>
      <p style="font-size: 0.6875rem; color: var(--color-muted-light); font-style: italic;">${product.fictionalNote}</p>
    `;
    document.getElementById('pdp-tab-usage').innerHTML = `<p>${product.usageTips}</p>`;

    // Related products
    const relatedContainer = document.getElementById('pdp-related-grid');
    if (relatedContainer) {
      const related = PRODUCTS_DATA.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
      const fallback = related.length > 0 ? related : PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 4);
      relatedContainer.innerHTML = fallback.map((p) => HomeUI.createProductCardHtml(p)).join('');
    }
  },

  setMainImage(src, btn) {
    const mainImg = document.getElementById('pdp-main-image');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.pdp-thumb-btn').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  },

  changeQty(delta) {
    this.currentQty = Math.max(1, this.currentQty + delta);
    document.getElementById('pdp-qty-val').textContent = this.currentQty;
    const addBtn = document.getElementById('pdp-add-btn');
    if (this.currentProduct && this.currentProduct.inStock) {
      addBtn.textContent = `Ajouter au panier · ${formatEuro(this.currentProduct.price * this.currentQty)}`;
    }
  },

  addToCart() {
    if (!this.currentProduct || !this.currentProduct.inStock) return;
    CartStore.addItem(this.currentProduct.id, this.currentQty);
  },

  switchTab(tabId) {
    document.querySelectorAll('.pdp-tab-trigger').forEach((btn) => btn.classList.remove('is-active'));
    document.querySelectorAll('.pdp-tab-content').forEach((content) => content.setAttribute('hidden', ''));

    const activeTrigger = document.querySelector(`[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(`pdp-tab-${tabId}`);
    if (activeTrigger) activeTrigger.classList.add('is-active');
    if (activeContent) activeContent.removeAttribute('hidden');
  }
};

// 8. SEARCH MODAL & DEDICATED SEARCH PAGE
const SearchPageUI = {
  render(query = '') {
    const titleEl = document.getElementById('search-view-title');
    const inputEl = document.getElementById('search-view-input');
    const container = document.getElementById('search-products-grid');
    const emptyBox = document.getElementById('search-empty-box');
    const countEl = document.getElementById('search-count-text');

    if (inputEl) inputEl.value = query;
    if (titleEl) titleEl.textContent = query.trim() ? `Résultats pour « ${query} »` : 'Catalogue complet';

    const q = query.trim().toLowerCase();
    const matched = PRODUCTS_DATA.filter((p) => {
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.ingredientsList.toLowerCase().includes(q)
      );
    });

    if (countEl) countEl.textContent = `${matched.length} produit${matched.length > 1 ? 's' : ''}`;

    if (matched.length === 0) {
      container.innerHTML = '';
      if (emptyBox) emptyBox.removeAttribute('hidden');
    } else {
      if (emptyBox) emptyBox.setAttribute('hidden', '');
      container.innerHTML = matched.map((p) => HomeUI.createProductCardHtml(p)).join('');
    }
  }
};

const SearchModalUI = {
  init() {
    const modal = document.getElementById('search-modal');
    const openBtns = document.querySelectorAll('.js-open-search');
    const closeBtn = document.getElementById('close-search-modal');
    const input = document.getElementById('search-modal-input');
    const form = document.getElementById('search-modal-form');

    openBtns.forEach((btn) => btn.addEventListener('click', () => this.open()));
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close();
      });
    }

    if (input) {
      input.addEventListener('input', (e) => this.renderLiveResults(e.target.value));
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        this.close();
        Router.navigate('search', encodeURIComponent(q));
      });
    }
  },

  open() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-modal-input');
    if (modal) modal.removeAttribute('hidden');
    if (input) {
      input.focus();
      this.renderLiveResults(input.value);
    }
  },

  close() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.setAttribute('hidden', '');
  },

  renderLiveResults(query) {
    const resultsContainer = document.getElementById('search-modal-results');
    if (!resultsContainer) return;

    const q = query.trim().toLowerCase();
    const matches = q
      ? PRODUCTS_DATA.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      : PRODUCTS_DATA.slice(0, 4);

    resultsContainer.innerHTML = matches.map((p) => `
      <div style="display: flex; gap: 1rem; align-items: center; padding: 0.65rem 0; cursor: pointer; border-bottom: 1px solid var(--color-border);" onclick="SearchModalUI.close(); Router.navigate('pdp', '${p.id}');">
        <img src="${p.image}" alt="" style="width: 3.5rem; height: 3.5rem; object-fit: cover; border-radius: 4px; border: 1px solid var(--color-border);" />
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</h4>
          <p style="font-size: 0.6875rem; color: var(--color-muted);">${p.category} · ${p.volume}</p>
        </div>
        <span style="font-family: monospace; font-size: 0.8125rem; font-weight: 700;">${formatEuro(p.price)}</span>
      </div>
    `).join('');
  }
};

// 9. CHECKOUT UI & FORM VALIDATION
const CheckoutUI = {
  shippingMethod: 'standard',

  init() {
    const summary = CartStore.getSummary();
    const itemsList = document.getElementById('checkout-items-summary');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');
    const stepForm = document.getElementById('checkout-form-step');
    const stepSuccess = document.getElementById('checkout-success-step');

    if (stepForm) stepForm.removeAttribute('hidden');
    if (stepSuccess) stepSuccess.setAttribute('hidden', '');

    if (itemsList) {
      itemsList.innerHTML = summary.items.map((item) => `
        <div style="display: flex; gap: 0.75rem; align-items: center; padding-block: 0.5rem;">
          <img src="${item.product.image}" alt="" style="width: 3rem; height: 3.5rem; object-fit: cover; border-radius: 4px; border: 1px solid var(--color-border);" />
          <div style="flex: 1; min-width: 0;">
            <p style="font-family: var(--font-serif); font-size: 0.875rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.product.name}</p>
            <p style="font-size: 0.6875rem; color: var(--color-muted-light);">Qté : ${item.quantity}</p>
          </div>
          <span style="font-family: monospace; font-size: 0.75rem; font-weight: 600;">${formatEuro(item.product.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    this.updateTotals();

    // Radio change
    document.querySelectorAll('input[name="shipping-rate"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        this.shippingMethod = e.target.value;
        this.updateTotals();
      });
    });

    // Form submission
    const form = document.getElementById('checkout-form');
    if (form) {
      form.onsubmit = (e) => this.handleOrderSubmit(e);
    }
  },

  updateTotals() {
    const summary = CartStore.getSummary();
    let shipping = summary.amountNeeded === 0 ? 0 : 4.90;
    if (this.shippingMethod === 'express') {
      shipping = summary.amountNeeded === 0 ? 5.00 : 9.90;
    }
    const grandTotal = summary.subtotal + shipping;

    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');
    const submitBtnVal = document.getElementById('checkout-btn-total');

    if (subtotalEl) subtotalEl.textContent = formatEuro(summary.subtotal);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Offerts' : formatEuro(shipping);
    if (totalEl) totalEl.textContent = formatEuro(grandTotal);
    if (submitBtnVal) submitBtnVal.textContent = formatEuro(grandTotal);
  },

  handleOrderSubmit(e) {
    e.preventDefault();

    const firstName = document.getElementById('chk-first-name').value.trim();
    const lastName = document.getElementById('chk-last-name').value.trim();
    const email = document.getElementById('chk-email').value.trim();
    const address = document.getElementById('chk-address').value.trim();
    const postal = document.getElementById('chk-postal').value.trim();
    const city = document.getElementById('chk-city').value.trim();

    let valid = true;
    if (!firstName) valid = false;
    if (!lastName) valid = false;
    if (!email || !email.includes('@')) valid = false;
    if (!address) valid = false;
    if (!postal) valid = false;
    if (!city) valid = false;

    if (!valid) {
      CartStore.showToast('Veuillez renseigner tous les champs obligatoires.');
      return;
    }

    const orderNum = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('conf-order-num').textContent = '#' + orderNum;
    document.getElementById('conf-name').textContent = `${firstName} ${lastName}`;
    document.getElementById('conf-address').textContent = `${address}, ${postal} ${city}`;
    document.getElementById('conf-email').textContent = email;

    const summary = CartStore.getSummary();
    let shipping = summary.amountNeeded === 0 ? 0 : 4.90;
    if (this.shippingMethod === 'express') shipping = summary.amountNeeded === 0 ? 5.00 : 9.90;
    document.getElementById('conf-total').textContent = formatEuro(summary.subtotal + shipping);

    CartStore.clearCart();

    document.getElementById('checkout-form-step').setAttribute('hidden', '');
    document.getElementById('checkout-success-step').removeAttribute('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// 10. FAQ ACCORDION & CONTACT FORM
const MiscUI = {
  init() {
    // FAQ Accordion
    document.querySelectorAll('.js-faq-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const row = btn.closest('.faq-row');
        const answer = row.querySelector('.faq-answer');
        const isHidden = answer.hasAttribute('hidden');

        document.querySelectorAll('.faq-answer').forEach((a) => a.setAttribute('hidden', ''));
        if (isHidden) {
          answer.removeAttribute('hidden');
        }
      });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successBox = document.getElementById('contact-success');
        if (successBox) successBox.removeAttribute('hidden');
        contactForm.setAttribute('hidden', '');
      });
    }

    // Newsletter on Homepage
    const nlForm = document.getElementById('home-newsletter-form');
    if (nlForm) {
      nlForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successBox = document.getElementById('home-newsletter-success');
        if (successBox) successBox.removeAttribute('hidden');
        nlForm.setAttribute('hidden', '');
      });
    }

    // Account modal
    const accModal = document.getElementById('account-modal');
    const openAccBtns = document.querySelectorAll('.js-open-account');
    const closeAccBtn = document.getElementById('close-account-modal');
    openAccBtns.forEach((b) => b.addEventListener('click', () => accModal.removeAttribute('hidden')));
    if (closeAccBtn) closeAccBtn.addEventListener('click', () => accModal.setAttribute('hidden', ''));
    if (accModal) {
      accModal.addEventListener('click', (e) => {
        if (e.target === accModal) accModal.setAttribute('hidden', '');
      });
    }

    // Mobile menu toggle
    const mobToggle = document.getElementById('mobile-menu-toggle');
    const mobDrawer = document.getElementById('mobile-nav-drawer');
    if (mobToggle && mobDrawer) {
      mobToggle.addEventListener('click', () => {
        if (mobDrawer.hasAttribute('hidden')) mobDrawer.removeAttribute('hidden');
        else mobDrawer.setAttribute('hidden', '');
      });

      document.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => mobDrawer.setAttribute('hidden', ''));
      });
    }
  }
};

// Global Bootstrapping on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  CartStore.getCart(); // load initial cart
  CartUI.init();
  CatalogUI.init();
  SearchModalUI.init();
  MiscUI.init();
  Router.init();
});
