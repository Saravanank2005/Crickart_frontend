import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.jpg";

const all_product = [
  {
    id: 1,
    name: "MRF Genius Cricket Bat",
    category: "bats",
    image: p9_img,
    new_price: 15999,
    old_price: 19999,
    description: `The MRF Genius Cricket Bat is designed for professional players seeking unmatched performance. Crafted from premium English Willow, it offers excellent power and precision.`,
    specifications: {
      "Material": "English Willow",
      "Weight Range": "1150-1250g",
      "Handle": "Premium Cane Handle",
      "Edge": "38mm",
      "Spine Height": "62mm",
      "Playing Level": "Professional",
      "Sweet Spot": "Mid to Low",
      "Grip": "MRF Grip",
      "Cover": "Premium Bat Cover Included"
    },
    features: [
      "Premium English Willow",
      "Mid to low sweet spot",
      "Exceptional power and balance",
      "Professional grade construction",
      "MRF brand quality",
      "Pre-knocked and ready to play",
      "Includes premium bat cover"
    ],
    brand: "MRF",
    stockQuantity: 15
  },
  {
    id: 2,
    name: "SS Ravindra Jadeja Kashmir Willow Cricket Bat",
    category: "bats",
    image: p2_img,
    new_price: 4250,
    old_price: 5000,
    description: `The SS Ravindra Jadeja Kashmir Willow Cricket Bat is designed for aspiring cricketers. Made from high-quality Kashmir Willow, it provides excellent power and control.`,
    specifications: {
      "Material": "Kashmir Willow",
      "Weight Range": "1150-1250g",
      "Handle": "Sarawak Cane Handle",
      "Edge": "35mm",
      "Spine Height": "58mm",
      "Playing Level": "Intermediate",
      "Sweet Spot": "Mid",
      "Grip": "SS Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "High-quality Kashmir Willow",
      "Mid sweet spot",
      "Good balance and pickup",
      "Durable construction",
      "Ideal for intermediate players",
      "Pre-knocked in",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 20
  },
  {
    id: 3,
    name: "SG RP 17 English Willow Cricket Bat with SG",
    category: "bats",
    image: p3_img,
    new_price: 89999.00,
    old_price: 94999.00,
    description: `The SG RP 17 English Willow Cricket Bat is a top-of-the-line bat for professional players. Crafted from the finest Grade A English Willow, it offers unmatched performance and durability.`,
    specifications: {
      "Material": "Grade A English Willow",
      "Weight Range": "1150-1200g",
      "Handle": "Sarawak Cane Handle",
      "Edge": "40mm",
      "Spine Height": "64mm",
      "Playing Level": "Professional",
      "Sweet Spot": "Mid to Low",
      "Grip": "SG Grip",
      "Cover": "Premium Bat Cover Included"
    },
    features: [
      "Finest Grade A English Willow",
      "Mid to low sweet spot",
      "Exceptional power and balance",
      "Professional grade construction",
      "SG brand quality",
      "Pre-knocked and ready to play",
      "Includes premium bat cover"
    ],
    brand: "SG",
    stockQuantity: 10
  },
  {
    id: 4,
    name: "Gray-Nicolls Shockwave 2.0 Thunder Junior Cricket Bat",
    category: "bats",
    image: p4_img,
    new_price: 4207.00,
    old_price: 6799.00,
    description: `The Gray-Nicolls Shockwave 2.0 Thunder Junior Cricket Bat is ideal for young aspiring cricketers. Made from durable willow, it provides great balance and control.`,
    specifications: {
      "Material": "Willow",
      "Weight Range": "1000-1100g",
      "Handle": "Cane Handle",
      "Edge": "30mm",
      "Spine Height": "50mm",
      "Playing Level": "Junior",
      "Sweet Spot": "Mid",
      "Grip": "Gray-Nicolls Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "Durable willow",
      "Mid sweet spot",
      "Good balance and control",
      "Ideal for junior players",
      "Gray-Nicolls quality",
      "Pre-knocked in",
      "Includes bat cover"
    ],
    brand: "Gray-Nicolls",
    stockQuantity: 30
  },
  {
    id: 5,
    name: "SG Sunny Tonny Icon Black English Willow Cricket Bat",
    category: "bats",
    image: p5_img,
    new_price: 19999.00,
    old_price: 24999.00,
    description: `The SG Sunny Tonny Icon Black is a premium English Willow cricket bat designed for professional cricketers. This bat features a massive sweet spot and perfect weight distribution for explosive stroke play.`,
    specifications: {
      "Material": "Grade 1 English Willow",
      "Weight Range": "1180-1220g",
      "Handle": "Premium Sarawak Cane Handle",
      "Edge": "40mm",
      "Spine Height": "62mm",
      "Playing Level": "Professional",
      "Sweet Spot": "Mid to Low",
      "Grip": "Premium SG Icon Grip",
      "Cover": "Premium Bat Cover Included"
    },
    features: [
      "Premium Grade 1 English Willow",
      "Massive edges for better power",
      "Perfect weight distribution",
      "Professional grade finish",
      "Premium Sarawak cane handle",
      "Iconic black design",
      "Pre-knocked and ready to play",
      "Enhanced sweet spot",
      "Superior pick-up",
      "Includes premium bat cover"
    ],
    brand: "SG",
    stockQuantity: 15
  },
  {
    id: 6,
    name: "Gray-Nicolls Tempesta 1.0 English Willow Cricket Bat",
    category: "bats",
    image: p6_img,
    new_price: 21081.00,
    old_price: 27999.00,
    description: `The Gray-Nicolls Tempesta 1.0 English Willow Cricket Bat is crafted for serious cricketers seeking superior performance. Made from high-quality English Willow, it delivers great power and control.`,
    specifications: {
      "Material": "English Willow",
      "Weight Range": "1160-1220g",
      "Handle": "Cane Handle",
      "Edge": "38mm",
      "Spine Height": "60mm",
      "Playing Level": "Advanced",
      "Sweet Spot": "Mid",
      "Grip": "Gray-Nicolls Grip",
      "Cover": "Premium Bat Cover Included"
    },
    features: [
      "High-quality English Willow",
      "Mid sweet spot",
      "Great power and control",
      "Advanced level performance",
      "Gray-Nicolls quality",
      "Pre-knocked and ready to play",
      "Includes premium bat cover"
    ],
    brand: "Gray-Nicolls",
    stockQuantity: 12
  },
  {
    id: 7,
    name: "GM Mana Bullet English Willow Cricket Bat",
    category: "bats",
    image: p7_img,
    new_price: 6098.00,
    old_price: 6419.00,
    description: `The GM Mana Bullet English Willow Cricket Bat is perfect for club-level cricketers. Made from durable English Willow, it offers excellent performance and a comfortable grip.`,
    specifications: {
      "Material": "English Willow",
      "Weight Range": "1180-1250g",
      "Handle": "Cane Handle",
      "Edge": "35mm",
      "Spine Height": "58mm",
      "Playing Level": "Club",
      "Sweet Spot": "Mid to Low",
      "Grip": "GM Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "Durable English Willow",
      "Mid to low sweet spot",
      "Comfortable grip",
      "Club level performance",
      "GM brand quality",
      "Pre-knocked in",
      "Includes bat cover"
    ],
    brand: "GM",
    stockQuantity: 18
  },
  {
    id: 8,
    name: "GM Maxi English Willow Cricket Bat",
    category: "bats",
    image: p8_img,
    new_price: 7172.00,
    old_price: 7549.00,
    description: `The GM Maxi English Willow Cricket Bat is designed for all-round performance. Made from high-quality English Willow, it offers excellent balance and power for club-level players.`,
    specifications: {
      "Material": "English Willow",
      "Weight Range": "1150-1200g",
      "Handle": "Cane Handle",
      "Edge": "35mm",
      "Spine Height": "58mm",
      "Playing Level": "Club",
      "Sweet Spot": "Mid to Low",
      "Grip": "GM Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "Durable English Willow",
      "Mid to low sweet spot",
      "Comfortable grip",
      "Club level performance",
      "GM brand quality",
      "Pre-knocked in",
      "Includes bat cover"
    ],
    brand: "GM",
    stockQuantity: 18
  },
  
  {
    id: 10,
    name: "SS Dre Russ Kashmir Willow Cricket Bat",
    category: "bats",
    image: p10_img,
    new_price: 1836.00,
    old_price: 2160.00,
    description: `The SS Dre Russ Kashmir Willow Cricket Bat is designed for power hitters. Made from high-quality Kashmir Willow, it offers excellent performance for aggressive stroke play.`,
    specifications: {
      "Material": "Kashmir Willow",
      "Weight Range": "1150-1250g",
      "Handle": "Sarawak Cane Handle",
      "Edge": "35mm",
      "Spine Height": "58mm",
      "Playing Level": "Intermediate",
      "Sweet Spot": "Mid to Low",
      "Grip": "SS Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "High-quality Kashmir Willow",
      "Mid to low sweet spot",
      "Good balance and pickup",
      "Durable construction",
      "Ideal for aggressive players",
      "Pre-knocked in",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 15
  },
  {
    id: 11,
    name: "SS Ton Super Leather Cricket Ball",
    category: "balls",
    image: p11_img,
    new_price: 450.00,
    old_price: 600.00,
    description: `The SS Ton Super Leather Cricket Ball is perfect for practice sessions and matches. Made from premium leather, it offers excellent durability and performance.`,
    specifications: {
      "Material": "Premium Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Club & Amateur",
      "Cover": "Hand-stitched",
      "Color": "Red"
    },
    features: [
      "Premium leather construction",
      "Hand-stitched for durability",
      "Ideal for practice and matches",
      "Excellent bounce and swing",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 50
  },
  {
    id: 12,
    name: "Kookaburra Pace Cricket Ball",
    category: "balls",
    image: p12_img,
    new_price: 1278.0,
    old_price: 1789.5,
    description: `The Kookaburra Pace Cricket Ball is designed for fast bowlers. Made from premium leather, it offers excellent swing and durability.`,
    specifications: {
      "Material": "Premium Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Professional",
      "Cover": "Machine-stitched",
      "Color": "Red"
    },
    features: [
      "Premium leather construction",
      "Machine-stitched for durability",
      "Ideal for fast bowlers",
      "Excellent swing and bounce",
      "Kookaburra brand quality"
    ],
    brand: "Kookaburra",
    stockQuantity: 30
  },
  {
    id: 13,
    name: "Turf Cricket Ball",
    category: "balls",
    image: p13_img,
    new_price: 99.0,
    old_price: 120.5,
    description: `The Turf Cricket Ball is perfect for practice sessions on turf pitches. Made from durable materials, it offers consistent performance.`,
    specifications: {
      "Material": "Synthetic Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Practice",
      "Cover": "Machine-stitched",
      "Color": "Red"
    },
    features: [
      "Synthetic leather construction",
      "Machine-stitched for durability",
      "Ideal for practice sessions",
      "Consistent bounce and swing",
      "Affordable and durable"
    ],
    brand: "Generic",
    stockQuantity: 100
  },
  {
    id: 14,
    name: "SS Cricket Training Ball",
    category: "balls",
    image: p14_img,
    new_price: 170.00,
    old_price: 280.00,
    description: `The SS Cricket Training Ball is designed for practice sessions. Made from durable materials, it offers excellent performance for training purposes.`,
    specifications: {
      "Material": "Synthetic Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Training",
      "Cover": "Machine-stitched",
      "Color": "Red"
    },
    features: [
      "Synthetic leather construction",
      "Machine-stitched for durability",
      "Ideal for training sessions",
      "Consistent bounce and swing",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 80
  },
  {
    id: 15,
    name: "GM Cricket Tennis Ball Green",
    category: "balls",
    image: p15_img,
    new_price: 150.00,
    old_price: 199.00,
    description: `The GM Cricket Tennis Ball is perfect for casual games and practice sessions. Made from durable rubber, it offers excellent bounce and performance.`,
    specifications: {
      "Material": "Rubber",
      "Weight": "50g",
      "Circumference": "20cm",
      "Playing Level": "Casual",
      "Color": "Green"
    },
    features: [
      "Durable rubber construction",
      "Ideal for casual games",
      "Excellent bounce and performance",
      "GM brand quality"
    ],
    brand: "GM",
    stockQuantity: 120
  },
  {
    id: 16,
    name: "SS County Pink Cricket Ball",
    category: "balls",
    image: p16_img,
    new_price: 649.00,
    old_price: 999.00,
    description: `The SS County Pink Cricket Ball is designed for day-night matches. Made from premium leather, it offers excellent visibility and performance.`,
    specifications: {
      "Material": "Premium Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Professional",
      "Cover": "Hand-stitched",
      "Color": "Pink"
    },
    features: [
      "Premium leather construction",
      "Hand-stitched for durability",
      "Ideal for day-night matches",
      "Excellent visibility and performance",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 25
  },
  {
    id: 17,
    name: "SS Multi Reaction Ball Cricket - Blue",
    category: "balls",
    image: p17_img,
    new_price: 179.00,
    old_price: 240.00,
    description: `The SS Multi Reaction Ball is designed for training purposes. Its unique shape helps improve reflexes and hand-eye coordination.`,
    specifications: {
      "Material": "Rubber",
      "Weight": "100g",
      "Circumference": "15cm",
      "Playing Level": "Training",
      "Color": "Blue"
    },
    features: [
      "Rubber construction",
      "Unique shape for unpredictable bounce",
      "Improves reflexes and coordination",
      "Ideal for training sessions",
      "SS brand quality"
    ],
    brand: "SS",
    stockQuantity: 60
  },
  {
    id: 18,
    name: "SG True Test Cricket Ball",
    category: "balls",
    image: p18_img,
    new_price: 3399.00,
    old_price: 4000.00,
    description: `The SG True Test Cricket Ball is designed for professional matches. Made from premium leather, it offers excellent swing and durability.`,
    specifications: {
      "Material": "Premium Leather",
      "Weight": "156g",
      "Circumference": "22.4cm",
      "Playing Level": "Professional",
      "Cover": "Hand-stitched",
      "Color": "Red"
    },
    features: [
      "Premium leather construction",
      "Hand-stitched for durability",
      "Ideal for professional matches",
      "Excellent swing and bounce",
      "SG brand quality"
    ],
    brand: "SG",
    stockQuantity: 20
  },
  {
    id: 19,
    name: "DSC Economy English Willow Cricket Kit",
    category: "kits",
    image: p19_img,
    new_price: 15066.0,
    old_price: 17899.00,
    description: `The DSC Economy English Willow Cricket Kit is perfect for aspiring cricketers. It includes a bat, gloves, pads, and a bag for a complete cricket experience.`,
    specifications: {
      "Material": "English Willow",
      "Weight Range": "1150-1250g",
      "Handle": "Cane Handle",
      "Edge": "35mm",
      "Spine Height": "58mm",
      "Playing Level": "Intermediate",
      "Sweet Spot": "Mid",
      "Grip": "DSC Grip",
      "Cover": "Basic Bat Cover Included"
    },
    features: [
      "English Willow bat",
      "Includes gloves, pads",
      "Ideal for professional matches",
      "Excellent swing and bounce",
      "SG brand quality"
    ],
    brand: "SG",
    stockQuantity: 20
  },
  {
    id: 20,
    name: "SS Sky English Willow Full Cricket Kit",
    category: "kits",
    image: p20_img,
    new_price: 14237.00,
    old_price: 16750.00,
  },
  {
    id: 21,
    name: "SG Kashmir Eco Cricket Kit",
    category: "kits",
    image: p21_img,
    new_price: 7859.00,
    old_price: 9799.5,
  },
  {
    id: 22,
    name: "Puma Cricket Square Men Shoes",
    category: "kits",
    image: p22_img,
    new_price: 2749.00,
    old_price: 4999,
  },
  {
    id: 23,
    name: "SG Club Cricket Batting Gloves E-LITE",
    category: "kits",
    image: p23_img,
    new_price: 1281.00,
    old_price: 1349.00,
  },
  {
    id: 29,
    name: "SG Savage Stud Shoe: Dynamic Royal Blue & Lime Cricket",
    category: "kits",
    image: p29_img,
    new_price: 1799.00,
    old_price: 1999.00,
  },
  {
    id: 24,
    name: "SG Cricket Kit Bag PRODIGY 1.0 Duffle",
    category: "kits",
    image: p24_img,
    new_price: 1185.00,
    old_price: 1199.00,
  },
  {
    id: 25,
    name: "SG Cricket Helmet",
    category: "kits",
    image: p25_img,
    new_price: 1350.00,
    old_price: 1499.00,
  },
  {
    id: 26,
    name: "Gray-Nicolls Limited Edition Wicket Keeping Gloves",
    category: "kits",
    image: p26_img,
    new_price: 5199.00,
    old_price: 5999.00,
  },
  {
    id: 27,
    name: "GM Shock Absorbing Cricket Grip (White)",
    category: "kits",
    image: p27_img,
    new_price: 182.0,
    old_price: 259.0,
  },
  {
    id: 28,
    name: "PUMA Spike 24.2 Cricket Shoes",
    category: "kits",
    image: p28_img,
    new_price: 5799.00,
    old_price: 7999.00,
  },
  {
    id: 31,
    name: "DSC Intense English Willow Bat David Warner Edition",
    category: "bats",
    image: p31_img,
    new_price: 15199.00,
    old_price: 17999.00,
  },
 

];

export default all_product;
