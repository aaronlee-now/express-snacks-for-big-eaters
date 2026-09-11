// All snack products for the shop.
// Fake brand names only — no real snack brands.

const PRODUCTS = [
  {
    id: "bbq-chips",
    brand: "Ashridge Ridge",
    name: "BBQ Crisps",
    description: "Thick-cut potato crisps finished with smoked paprika and black pepper.",
    price: 48,
    image: "images/bbq-chips.png",
  },
  {
    id: "plain-chips",
    brand: "Plainfield Atelier",
    name: "Original Crisps",
    description: "Lightly salted crisps made for a clean, simple late-night bite.",
    price: 42,
    image: "images/original-chips.png",
  },
  {
    id: "popcorn",
    brand: "Midnight Kernel Co.",
    name: "Hand-Fired Popcorn",
    description: "Slow-popped kernels with sea salt and a quiet butter finish.",
    price: 36,
    image: "images/popcorn.png",
  },
  {
    id: "beef-jerky",
    brand: "Ironbark Provisions",
    name: "Beef Jerky",
    description: "Air-dried strips of beef, seasoned and aged overnight.",
    price: 78,
    image: "images/beef-jerky.png",
  },
  {
    id: "beef-stick",
    brand: "Ironbark Provisions",
    name: "Beef Stick",
    description: "A dense cured stick meant for one serious sitting.",
    price: 54,
    image: "images/beef-stick.png",
  },
  {
    id: "chocolate",
    brand: "Velour Cacao",
    name: "Dark Chocolate Bar",
    description: "Seventy-two percent cacao with a firm snap and long finish.",
    price: 62,
  },
  {
    id: "gummy-worms",
    brand: "Helix Soft Candy",
    name: "Gummy Worms",
    description: "Long gelatin worms with a tart sugar dusting.",
    price: 44,
  },
  {
    id: "gummy-bears",
    brand: "Helix Soft Candy",
    name: "Gummy Bears",
    description: "Firm fruit-shaped candies in a restrained five-flavor set.",
    price: 44,
  },
  {
    id: "gummy-macbook",
    brand: "Helix Soft Candy",
    name: "Gummy MacBook",
    description: "A full-scale gelatin replica, cast in one piece and finished by hand.",
    price: 100000000000,
    image: "images/gummy-macbook.png",
  },
];

function formatPrice(amount) {
  return "$" + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function findProduct(productId) {
  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === productId) {
      return PRODUCTS[i];
    }
  }
  return null;
}
