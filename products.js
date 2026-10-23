// All snack products for the shop.
// Fake brand names only — no real snack brands.

const PRODUCTS = [
  {
    id: "bbq-chips",
    brand: "Ashridge Ridge",
    name: "BBQ Crisps",
    description: "These are thick-cut potato crisps with smoked paprika and black pepper.",
    price: 48,
    image: "images/bbq-chips.png",
  },
  {
    id: "plain-chips",
    brand: "Plainfield Atelier",
    name: "Original Crisps",
    description: "These are lightly salted potato crisps.",
    price: 42,
    image: "images/original-chips.png",
  },
  {
    id: "popcorn",
    brand: "Midnight Kernel Co.",
    name: "Hand-Fired Popcorn",
    description: "This is popcorn seasoned with sea salt and butter.",
    price: 36,
    image: "images/popcorn.png",
  },
  {
    id: "beef-jerky",
    brand: "Ironbark Provisions",
    name: "Beef Jerky",
    description: "These are air-dried and seasoned strips of beef.",
    price: 78,
    image: "images/beef-jerky.png",
  },
  {
    id: "beef-stick",
    brand: "Ironbark Provisions",
    name: "Beef Stick",
    description: "This is a dense cured beef stick.",
    price: 54,
    image: "images/beef-stick.png",
  },
  {
    id: "chocolate",
    brand: "Velour Cacao",
    name: "Dark Chocolate Bar",
    description: "This is a dark chocolate bar with seventy-two percent cacao.",
    price: 62,
  },
  {
    id: "gummy-worms",
    brand: "Helix Soft Candy",
    name: "Gummy Worms",
    description: "These are long gelatin worms coated with tart sugar.",
    price: 44,
  },
  {
    id: "gummy-bears",
    brand: "Helix Soft Candy",
    name: "Gummy Bears",
    description: "These are firm fruit-shaped candies in five flavors.",
    price: 44,
  },
  {
    id: "gummy-macbook",
    brand: "Helix Soft Candy",
    name: "Gummy MacBook",
    description: "This is a full-scale gelatin laptop replica.",
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
