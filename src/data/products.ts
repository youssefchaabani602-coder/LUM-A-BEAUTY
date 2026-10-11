export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: 'Nettoyants' | 'Sérums' | 'Hydratants' | 'Masques & soins' | 'Corps & bien-être';
  categorySlug: 'nettoyants' | 'serums' | 'hydratants' | 'masques' | 'corps';
  badge?: string;
  isBestSeller?: boolean;
  inStock: boolean;
  dateAdded: string; // for sorting newest
  image: string;
  gallery: string[];
  volume: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredientsList: string;
  fictionalNote: string;
  usageTips: string;
}

export const PRODUCTS: Product[] = [
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
      '/src/assets/images/lumea_brand_story_1791728712197.jpg',
    ],
    volume: '30 ml',
    shortDescription: 'Un concentré d’éclat soyeux formulé pour illuminer le teint, unifier le grain de peau et apporter un coup d’éclat immédiat sans effet gras.',
    description: 'Le Sérum Éclat Vitamine C de LUMÉA BEAUTY associe une forme stable de vitamine C végétale à des extraits d’argousier et d’hydrolat de néroli. Sa texture légère pénètre instantanément pour réveiller les teints fatigués et préserver la vitalité naturelle de l’épiderme.',
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
      '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg',
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
      '/src/assets/images/lumea_hero_editorial_1791728662064.jpg',
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
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
    ],
    volume: '3 produits + lingette offerte',
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
      '/src/assets/images/lumea_lotion_tonique_1791729582628.jpg',
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
      '/src/assets/images/lumea_creme_nuage_1791728686618.jpg',
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
      '/src/assets/images/lumea_brand_story_1791728712197.jpg',
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
      '/src/assets/images/lumea_coffret_rituel_1791728702187.jpg',
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
      '/src/assets/images/lumea_hero_editorial_1791728662064.jpg',
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
      '/src/assets/images/lumea_serum_vitamine_c_1791728674227.jpg',
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
      '/src/assets/images/lumea_brand_story_1791728712197.jpg',
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
      '/src/assets/images/lumea_huile_corps_1791729572516.jpg',
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

export interface CartItem {
  product: Product;
  quantity: number;
}
