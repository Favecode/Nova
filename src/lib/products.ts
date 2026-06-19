export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  description: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  stock: number;
};

const img = (seed: string, w = 800, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
  "Books",
] as const;

export const INITIAL_PRODUCTS: Product[] = [
  { id: "p1", name: "Wireless Noise-Cancelling Headphones", price: 199, oldPrice: 259, image: img("headphones"), images: [img("headphones"), img("headphones2"), img("headphones3")], description: "Immersive sound with adaptive noise cancellation, 40h battery life, plush memory-foam earcups.", rating: 4.7, reviews: 1284, category: "Electronics", badge: "Bestseller", stock: 25 },
  { id: "p2", name: "Smart Fitness Watch Pro", price: 149, oldPrice: 199, image: img("watch"), description: "Heart-rate, SpO2, GPS, 14-day battery and 100+ workout modes.", rating: 4.5, reviews: 832, category: "Electronics", badge: "-25%", stock: 40 },
  { id: "p3", name: "Minimalist Leather Backpack", price: 89, image: img("backpack"), description: "Full-grain leather, 18L, padded laptop sleeve fits up to 16-inch.", rating: 4.6, reviews: 412, category: "Fashion", stock: 18 },
  { id: "p4", name: "Aero Running Shoes", price: 119, oldPrice: 140, image: img("shoes"), description: "Lightweight foam cushioning with breathable knit upper.", rating: 4.4, reviews: 687, category: "Sports", badge: "New", stock: 60 },
  { id: "p5", name: "Ceramic Pour-Over Coffee Set", price: 64, image: img("coffee"), description: "Hand-thrown ceramic dripper with double-wall glass server.", rating: 4.8, reviews: 219, category: "Home", stock: 32 },
  { id: "p6", name: "Hydrating Vitamin C Serum", price: 34, image: img("serum"), description: "20% Vitamin C + Hyaluronic Acid for a luminous glow.", rating: 4.3, reviews: 1023, category: "Beauty", stock: 80 },
  { id: "p7", name: "4K Action Camera X10", price: 229, oldPrice: 299, image: img("camera"), description: "4K60 video, in-body stabilization, waterproof to 30m.", rating: 4.6, reviews: 540, category: "Electronics", badge: "Hot", stock: 12 },
  { id: "p8", name: "Linen Oversized Shirt", price: 59, image: img("shirt"), description: "Breathable European linen with relaxed drape.", rating: 4.2, reviews: 198, category: "Fashion", stock: 45 },
  { id: "p9", name: "Smart LED Desk Lamp", price: 49, image: img("lamp"), description: "Tunable white + RGB, app control, USB-C charging port.", rating: 4.5, reviews: 376, category: "Home", stock: 50 },
  { id: "p10", name: "Yoga Mat Premium 6mm", price: 39, image: img("yoga"), description: "Non-slip TPE, eco-friendly, alignment lines.", rating: 4.7, reviews: 612, category: "Sports", stock: 70 },
  { id: "p11", name: "Atomic Habits — Hardcover", price: 18, image: img("book1"), description: "James Clear's modern classic on building habits that stick.", rating: 4.9, reviews: 8421, category: "Books", badge: "Top Rated", stock: 120 },
  { id: "p12", name: "Mechanical Keyboard K75", price: 129, oldPrice: 159, image: img("keyboard"), description: "Hot-swappable switches, RGB, aluminum frame, wireless.", rating: 4.6, reviews: 924, category: "Electronics", stock: 22 },
];
