export interface Product {
  id: number
  name: string
  category: string
  image: string
  price: number
  description: string
  sizes: string[]
  featured?: boolean
  new?: boolean
  bestSeller?: boolean
  videoUrl?: string
  details?: {
    specifications?: string[]
    features?: string[]
    applications?: string[]
    benefits?: string[]
  }
}

export const products: Product[] = [
  {
    id: 1,
    name: "FAST TRACK 4T 20W-40 SL GRADE",
    category: "Motorcycle",
    image: "/images/fastrack.png",
    price: 24.99,
    description:
      "CRYPTO FAST TRACK grade is a premium quality motor cycle engine oil made to cater to the highly demanding lubrication requirements of modern 4-Stroke geared bikes.",
    sizes: ["900 ML", "1L", "5L", "210L"],
    featured: true,
    bestSeller: true,
    details: {
      specifications: ["API SL", "JASO MA-2"],
      features: [
        "Superior protection for engine, clutch and gears of a motor cycle",
        "Helps you to derive the best performance from your bike all the time",
        "Ensures high engine durability",
        "Excellent seal compatibility",
      ],
      applications: [
        "Recommended for new generation geared 4-stroke bikes manufactured by all the reputed manufacturers like Hero Motocorp, Bajaj Auto, Yamaha, Honda, Suzuki, TVS, Royal Enfield etc.",
      ],
      benefits: [
        "High engine durability",
        "High fuel efficiency",
        "Low oil consumption",
        "Lower maintenance cost",
        "Longer oil and engine life",
      ],
    },
  },
  {
    id: 2,
    name: "GO GREEN 20W-50 CNG API CG",
    category: "Passenger Car",
    image: "/images/cng-new.jpg",
    price: 26.99,
    description:
      "CRYPTO CNG SPECIAL 20W-50 is a premium quality engine oil developed for CNG/LPG autos, passenger cars and minibuses running on CNG/LPG.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "3L", "3.5L", "5L", "7.5L", "10L", "15L", "20L", "26L", "50L", "210L"],
    featured: true,
    details: {
      specifications: ["API CG-4"],
      features: [
        "Made from highly paraffinic base stocks and fortified with select additives",
        "Exceptional performance under 10,000 km/hr intervals",
        "Delivers excellent protection against oxidation and nitration",
        "Balanced detergency helps to protect the engine from wear and deposits",
        "Specially formulated for longer service intervals",
      ],
      applications: [
        "Recommended for all types of autos, passenger cars and minibuses running on CNG/LPG fuel",
        "Can also be used in petrol engines",
      ],
      benefits: [
        "Suitable for use in all seasons and helps in reducing oil consumption",
        "Extended oil life due to excellent oxidation and nitration resistance",
        "Excellent high temperature stability, detergency and dispersancy",
        "Longer oil drain interval",
        "Perfectly balanced anti-corrosion, anti-rust and anti-wear properties",
      ],
    },
  },
  {
    id: 3,
    name: "NAVIGATOR 20W-40 API SF/CC",
    category: "Multigrade",
    image: "/images/navigator3.PNG",
    price: 19.99,
    description: "CRYPTO 20W-40 is a economy multigrade engine oil suitable both petrol & diesel engines.",
    sizes: ["500ML", "1L", "2L", "2.5L", "3L", "3.5L", "5L", "7.5L", "10L", "15L", "20L", "26L", "50L", "210L"],
    bestSeller: true,
    details: {
      specifications: ["API SF/CC", "SAE 20W-40"],
      features: ["Viscometrics – SAE 20W-40", "Meets API SF/CC performance levels"],
      applications: [
        "Suitable both petrol & diesel engines",
        "Recommended for all types passenger vehicles trucks tractors DG set etc.",
      ],
      benefits: [
        "Possesses improved oxidation stability",
        "Anti-rust Properties. Gives excellent protection to the engine",
      ],
    },
  },
  {
    id: 4,
    name: "VICTOR 20W-50 API SL JASO MA2",
    category: "Heavy Duty",
    image: "/images/victor.png",
    price: 22.99,
    description:
      "CRYPTO VICTOR 4T 20W50 is a high performance 4T engine oil specially developed for Bajaj range of two wheelers.",
    sizes: ["500ML", "1L", "2L", "2.5L", "3L", "3.5L", "5L", "26L", "50L", "210L"],
    details: {
      specifications: ["API SL", "JASO MA2"],
      applications: ["Recommended for high performance motor cycles of Bajaj"],
      benefits: [
        "Longer drain intervals",
        "Smooth clutch performance",
        "Reduced friction in engine",
        "Clean engine parts & longer engine life",
      ],
    },
  },
  {
    id: 5,
    name: "HULK 4T 15W-50 API SN JASO MA2",
    category: "Heavy Duty",
    image: "/images/bullet-new.jpg",
    price: 29.99,
    description:
      "CRYPTO 4T 15W-50 is high performance, synthetic technology motorcycle engine oil specially engineered for high power 4-stroke motorcycles.",
    sizes: ["2.5L"],
    featured: true,
    new: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      specifications: ["API SN", "JASO MA2", "BS-VI compatible"],
      features: [
        "BS-VI compatible",
        "Reduce heat & friction",
        "Quick cold start",
        "Superior protection from wear & rust",
        "Delivering high power",
        "Protects from friction & wear",
        "Keeps engine cool & clean",
        "Excellent seal compatibility",
        "Ultimate protection to engine, gear & clutch",
        "Catalyst compatible",
      ],
      applications: [
        "Due to its synergistic combination of premium quality base stocks and performance additive system",
        "It delivers optimum performance at elevated temperatures and harsh environmental conditions with smooth and comfortable riding experience",
      ],
    },
  },
  {
    id: 6,
    name: "ELITE 5W30 API SN PLUS",
    category: "Fully Synthetic",
    image: "/images/elite-new.jpg",
    price: 32.99,
    description:
      "CRYPTO ELITE is an super premium synthetic engine oil based on advanced Low SAPS additive technology to deliver excellent performance in modern day engines of latest generation BS-VI and above.",
    sizes: ["3L", "3.5L", "4L", "4.5L", "5L"],
    details: {
      specifications: ["API SN PLUS", "BS-VI compatible"],
      benefits: [
        "Low SAPS technology for excellent after treatment compatibility",
        "Suitable for BS VI compliant passenger Cars/SUVs",
        "Also suitable for petrol engines equipped with GDI/TGDI technology",
        "Specifically designed to help prevent LSPI in TGDI engines",
        "Enhanced fuel efficiency",
        "Exceptional soot dispersancy to control oil thickening",
        "Superior engine cleanliness",
        "Superior control on wear",
        "Longer engine life",
      ],
      applications: [
        "Recommended for various models of BS VI compliant passenger cars of Tata Motors, Maruti-Suzuki, Hyundai Motors, Renault, Nissan, Honda, Chevrolet, Skoda, BMW, GM and Ford, etc. running on Petrol or Diesel and requiring a SAE 5W-30 or 5W-40 viscosity engine oil",
      ],
    },
  },
  {
    id: 7,
    name: "GIANT 15W-40 API CI-4 PLUS",
    category: "Heavy Duty Diesel",
    image: "/images/giant.png",
    price: 24.99,
    description:
      "CRYPTO GIANT 15W-40 CI-4/SN grades are super premium quality diesel engine oil made from the finest paraffinic base stocks and state of art additive technology, specifically for the modern low emission diesel engines.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "3L", "3.5L", "5L", "7.5L", "10L", "15L", "20L", "26L", "50L", "210L"],
    details: {
      specifications: ["API CI-4 PLUS", "API SN"],
      applications: [
        "Recommended for new generation (BS VI) diesel engines in trucks, buses, construction equipment, etc.",
        "Suitable for use in EGR/SCR type After Treatment Devices",
        "The product also yields tangible benefits to engine engine oil life, better engine health in regular BS VI/BS IV/BS IV compliant engines requiring engine oil meeting API CF-4/CI-4/CI-4 Plus performance levels",
      ],
      features: [
        "Superior high temperature oxidation stability",
        "Extended drain periods",
        "Excellent TBN retention over TBN life",
        "Exceptional soot dispersancy to control oil thickening due to high soot loading",
        "Exemplary control on piston deposits",
        "Unmatched wear control & protection to engine components",
      ],
    },
  },
  {
    id: 8,
    name: "RIDER 4T 20W-40 API SM",
    category: "Motorcycle",
    image: "/images/gpt rider.png",
    price: 19.99,
    description:
      "CRYPTO 4T 20W-40 is high performance, synthetic technology 4-stroke motorcycle engine oil specially developed for new generation motorcycles.",
    sizes: ["900 ML", "1L", "20 L", "50 L", "210 L"],
    details: {
      specifications: ["API SM", "BS-VI compatible"],
      applications: [
        "It is formulated with premium quality base stocks and cutting-edge technology to high performance additive system which provides excellent performance and optimum power output",
        "Recommended for 4-stroke motorcycles of all leading OEM's recommending SAE 20W-40 grade engine oil",
      ],
      benefits: [
        "BS-VI compatible",
        "Longer Engine Life",
        "Smooth clutch operation",
        "Keeps the engine cool & clean",
        "Reduces engine noise & vibrations",
        "Superior protection from friction, wear & rust",
        "Excellent health of engine, gear & clutch",
        "Catalyst compatible",
      ],
    },
  }
 ,
  {
    id: 9,
    name: "AUTO GEAR EP 90/EP 140/EP 80W90/EP 85W140",
    category: "Gear Oil",
    image: "/images/gear.png",
    price: 21.99,
    description:
      "CRYPTO Gear Oils is a high performance gear oil designed to provide excellent lubrication in wide range of automotive and transmission and axle drives where GL-4 performance is required.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "5L", "7L", "10L", "20L", "26L", "50L", "210L"],
    new: true,
    details: {
      specifications: ["GL-4"],
      applications: [
        "Recommended for transaxles requiring GL-4 performance, passenger cars, trucks, construction mining and agricultural equipment",
        "It can be used in applications where spiral bevel gears operating under moderate to severe speeds and loads with hypoid gears",
      ],
      benefits: [
        "Excellent seal compatibility",
        "Protection against rust and corrosion",
        "Outstanding thermal and chemical stability",
        "Excellent extreme pressure and anti-wear properties",
      ],
    },
  },
  {
    id: 10,
    name: "SMOOTH WET BREAK UTTO",
    category: "Transmission",
    image: "/images/smooth-wet.png",
    price: 23.99,
    description:
      "CRYPTO WET BREAK OIL is a Universal Tractor Transmission Oil (UTTO) formulated from high quality base stocks and carefully selected additives, designed to deliver superior performance in transmission, hydraulic, final drive and PTO systems of tractors.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "5L", "7L", "10L", "20L", "26L", "50L", "210L"],
    details: {
      applications: [
        "Recommended for all tractors including Eicher, Escorts, Mahindra & Mahindra, SAME, Swaraj, Sonalika, TAFE etc.",
        "This product can also be used in other off-road/construction equipment requiring UTTO type transmission fluid",
      ],
      benefits: [
        "Single oil for wet brakes, hydraulics and transmission",
        "Noise free operation of Oil Immersed Brakes (OIB)",
        "Provides 100% protection to PTO and transmission equipment",
        "Protection against Rust and Corrosion",
        "Longer oil and equipment life",
      ],
    },
  },
  {
    id: 11,
    name: "AUTOMATOR ATF TQ DEX III",
    category: "Transmission",
    image: "/images/transmission-new.jpg",
    price: 19.99,
    description:
      "CRYPTO ATF TQ D III is premium high performance Automatic Transmission Fluid formulated by specially selected base oils and additive technology for automatic and semi-automatic transmissions, power steering units, torque converters of cars and light commercial vehicles.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "5L", "7L", "10L", "20L", "26L", "50L", "210L"],
    details: {
      applications: [
        "Recommended for all vehicles where GM Dexron and Ford Mercon fluids are required",
        "Recommended for power shift transmissions, automatic transmissions, manual gear box and torque converter units",
      ],
      benefits: [
        "Excellent gear shifting and smooth clutch action",
        "Very good corrosion protection",
        "Superior anti-wear protection and oxidation control",
        "Very low pour point to avoid surge or sudden change when starting in very cold weather",
        "Superior seal compatibility",
      ],
    },
  },
  {
    id: 12,
    name: "ULTIMATE 68",
    category: "Hydraulic",
    image: "/images/ultimate-68.png",
    price: 18.99,
    description:
      "CRYPTO HYDRAULIC OIL is blended from deep hydrofinished base stocks and select additives. The additives are designed for optimum compressor operation.",
    sizes: ["500 ML", "1L", "2L", "2.5L", "5L", "7L", "10L", "20L", "26L", "50L", "210L"],
    details: {
      features: [
        "The additives are used to enhance the oxidation stability, anti-rust characteristics, anti-wear properties of the oil",
        "The oil has natural demulsification property, low foaming tendency and quick air release property",
      ],
      benefits: [
        "Ensures better lubrication of rotors and bearings thereby reducing heat generation and lowering operating temperatures",
        "Enhanced wear protection resulting in prolonged maintenance-free equipment life",
        "Outstanding oxidation and thermal stability",
        "Excellent hydraulic stability",
        "Maintains excellent internal surface cleanliness",
        "Good protection against corrosion",
        "Good demulsifying properties",
        "Low foaming tendency",
        "Excellent seal compatibility",
      ],
    },
  },
  {
    id: 13,
    name: "RACE MAX 10W-30 API SN+ / JASO MB",
    category: "Motorcycle",
    image: "/images/race-max.png",
    price: 27.99,
    description:
      'CRYPTO RACE MAX 10W-30 is premium quality engine oil with molecules based on "ADVANCED POWER TECHNOLOGY" (APT) for high performance 4-Stroke motorcycles.',
    sizes: ["800 ML", "900 ML", "1L", "5L", "210L"],
    new: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      specifications: ["API SN+", "JASO MB"],
      features: [
        "Outstanding pick-up",
        "Lower fuel consumption",
        "High fuel efficiency",
        "Lower oil consumption",
        "Smooth clutch operation",
        "Superior engine cleanliness",
        "Excellent Gear Protection",
        "Optimum engine protection in tough conditions",
      ],
      applications: [
        "CRYPTO RACE MAX 10W-30 keeps you ahead of the crowd by delivering accelerated Power Derived & increases engine power, minimises the oil consumption with outstanding film thickness, unmatched gear protection and smooth riding experience even at elevated temperatures",
        "Recommended for new generation 4-stroke motorcycles of all leading OEM's recommending 10W-30 grade engine oil",
      ],
    },
  },
  {
    id: 14,
    name: "AVENGER 4T 10W-40 API SN+ / JASO MA2",
    category: "Motorcycle",
    image: "/images/avenger.png",
    price: 24.99,
    description:
      "CRYPTO 10W-40 is a super premium quality synthetic motorcycle engine oil made to cater to the highly demanding lubrication requirements of modern High Powered 4-Stroke geared bikes.",
    sizes: ["900 ML", "1L"],
    details: {
      specifications: ["API SN+", "JASO MA2", "BS-VI compliant"],
      features: [
        "Suitable for BS VI compliant bikes",
        "Unmatched engine protection, leading to longer engine life",
        "Negligible Viscosity loss",
        "Ensures smooth and clutch operation for better pick-up",
        "Ultimate protection to gears",
        "Better mileage & longer oil life",
      ],
      applications: [
        "It is manufactured from a synergistic blend of fully synthetic Poly Alpha Olefins (PAO) & Ester base stocks and state of art additive technology to meet the most stringent requirements of API SN and JASO MA 2",
        "CRYPTO 10W-40 is recommended for new generation BS VI compliant geared 4 stroke bikes",
        "It provides superior protection for engine, clutch and gears of the high powered motorcycles, especially those with engine displacement of 350 cc and above",
        "Available in 10W-50 viscometrics & is exclusively developed for high power bikes like Harley Davidson, Ducati, Royal Enfield, Yamaha, Kawasaki, KTM, etc.",
      ],
    },
  },
  {
    id: 15,
    name: "COOL TECH",
    category: "Coolant",
    image: "/images/coolant.png",
    price: 15.99,
    description:
      "CRYPTO Coolant prevents engine cooling system from over heating, Freezing, Scaling, Rusting Corrosion (Aluminum, Steel, High Lead Solder, Cast Iron, Copper, Brass & Low Lead Solder etc.) and Foaming. It lubricates the water pump and rubber hoses for a long life coolant.",
    sizes: ["500 ML", "1L", "3L", "5L", "50 L", "210 L"],
    details: {
      specifications: [
        "Use CRYPTO Coolant in all models of Car, LCV, HCV, Tractor, Generator and any engine/machine cooling system in factories",
      ],
      applications: [
        "Flush and clean cooling system. If any cleaning agent is used, system must be repeatedly washed with water to remove all traces of cleaning agent or else coolant will deteriorate",
        "Fill CRYPTO Coolant Ready to Use directly to the expansion bottle to a level between the LOW and FULL marks",
        "Check the level of fluid in the expansion bottle periodically and top-up with CRYPTO coolant",
      ],
    },
  },
  {
    id: 16,
    name: "TITAN 4T 20W-40 API SN+ / JASO MA2",
    category: "Motorcycle",
    image: "/images/titan.png",
    price: 22.99,
    description:
      "CRYPTO TITAN grades are premium quality motorcycle engine oils made to cater to the highly demanding lubrication requirements of modern 4-Stroke geared bikes.",
    sizes: ["900 ML", "1L", "50 L", "210 L"],
    featured: true,
    details: {
      specifications: ["API SN+", "JASO MA2"],
      features: [
        "Suitable for BS VI compliant bikes",
        "Unmatched engine protection",
        "High fuel efficiency",
        "Low oil consumption",
        "Lower maintenance cost",
        "Longer oil & engine life",
      ],
      applications: [
        "They are manufactured from finest quality paraffinic base stocks and state of the art additive technology and meet API SN+ and JASO MA 2 specifications",
        "CRYPTO TITAN grades provide superior protection for engine, clutch and gears of a motorcycle which helps you to derive the best performance from your bike at all the time, while ensuring high engine durability",
        "Recommended for new BS-VI compliant geared 4-stroke bikes manufactured by most of the reputed manufacturers like Hero Motors, Bajaj, Yamaha, Honda, Suzuki, TVS, Royal Enfield, etc.",
        "They are also recommended for use in previous engine models as well",
      ],
    },
  },
  {
    id: 17,
    name: "MASTER 2T API TC JASO FC",
    category: "2 Stroke",
    image: "/images/master-2t.png",
    price: 16.99,
    description:
      "CRYPTO 2T OIL is low smoke two stroke engine oil developed to meet the critical requirements of two stroke engines manufactured by all leading auto makers.",
    sizes: ["500 ML", "1L"],
    details: {
      specifications: ["API TC", "JASO FC"],
      applications: [
        "Recommended for lubrication of Mopeds, Scooters, Motorcycles and Auto rickshaws, operating on two stroke engines",
      ],
      benefits: [
        "Low exhaust smoke",
        "Excellent engine cleanliness",
        "Minimizes spark plug fouling",
        "Reduces port deposits and ring sticking",
        "Prevents seizure and scuffing",
        "Is easily pumpable by oil injection system",
      ],
    },
  },
  {
    id: 18,
    name: "ADVANCE 5W40 API SN PLUS",
    category: "Fully Synthetic",
    image: "/images/advance1.png",
    price: 34.99,
    description:
      "CRYPTO ADVANCE 5W-40 is a high quality synthetic engine oil specifically designed for modern cars running on Petrol (GDI/ TGDI).",
    sizes: ["2.5L"],
    bestSeller: true,
    details: {
      specifications: ["API SN PLUS", "BS-VI compatible"],
      benefits: [
        "Low SAPS technology for excellent after treatment compatibility",
        "Suitable for BS VI compliant passenger Cars/SUVs",
        "Also suitable for petrol engines equipped with GDI/TGDI technology",
        "Specifically designed to help prevent LSPI in TGDI engines",
        "Enhanced fuel efficiency",
        "Exceptional soot dispersancy to control oil thickening",
        "Superior engine cleanliness",
        "Superior control on wear",
        "Longer engine life",
      ],
      applications: [
        "Manufactured from finest API Group IV base stocks and state of the art additive technology to meet the most stringent requirements of API SN, ACEA A3/B4 thus making it suitable for cars running on petrol or diesel fuels",
        "Provides exemplary benefits in reduction of piston deposits, improved fuel economy benefits and after treatment compatibility",
      ],
    },
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getSimilarProducts(id: number, limit = 4): Product[] {
  const product = getProductById(id)
  if (!product) return []

  // Find products in the same category, excluding the current product
  return products.filter((p) => p.category === product.category && p.id !== id).slice(0, limit)
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((product) => product.featured).slice(0, limit)
}

export function getNewProducts(limit = 4): Product[] {
  return products.filter((product) => product.new).slice(0, limit)
}

export function getBestSellerProducts(limit = 4): Product[] {
  return products.filter((product) => product.bestSeller).slice(0, limit)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

export function getProductsBySize(size: string): Product[] {
  if (size === "all") return products
  return products.filter((product) => product.sizes.includes(size))
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim()
  if (!searchTerm) return products

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  )
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const productsCopy = [...products]

  switch (sortBy) {
    case "price-low":
      return productsCopy.sort((a, b) => a.price - b.price)
    case "price-high":
      return productsCopy.sort((a, b) => b.price - a.price)
    case "name-asc":
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return productsCopy
  }
}

export const productCategories = [
  { value: "all", label: "All Categories" },
  { value: "Passenger Car", label: "Passenger Car" },
  { value: "Motorcycle", label: "Motorcycle" },
  { value: "Heavy Duty", label: "Heavy Duty" },
  { value: "Heavy Duty Diesel", label: "Heavy Duty Diesel" },
  { value: "Fully Synthetic", label: "Fully Synthetic" },
  { value: "Multigrade", label: "Multigrade" },
  { value: "Transmission", label: "Transmission" },
  { value: "Gear Oil", label: "Gear Oil" },
  { value: "Hydraulic", label: "Hydraulic" },
  { value: "Coolant", label: "Coolant" },
  { value: "2 Stroke", label: "2 Stroke" },
]

export const productSizes = [
  { value: "all", label: "All Sizes" },
  { value: "500 ML", label: "500 ML" },
  { value: "800 ML", label: "800 ML" },
  { value: "900 ML", label: "900 ML" },
  { value: "1L", label: "1L" },
  { value: "2L", label: "2L" },
  { value: "2.5L", label: "2.5L" },
  { value: "3L", label: "3L" },
  { value: "3.5L", label: "3.5L" },
  { value: "4L", label: "4L" },
  { value: "5L", label: "5L" },
  { value: "7L", label: "7L" },
  { value: "10L", label: "10L" },
  { value: "20L", label: "20L" },
  { value: "50L", label: "50L" },
  { value: "210L", label: "210L" },
]

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
]
