// Shopping cart saved in the browser (localStorage).
// Works across shop.html and checkout.html.

const CART_KEY = "express-snacks-cart";

function loadCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  const cart = loadCart();
  let total = 0;

  for (const productId in cart) {
    // Skip unknown keys (for example old free-catch leftovers).
    if (!findProduct(productId)) {
      continue;
    }
    total = total + cart[productId];
  }

  return total;
}

function addToCart(productId) {
  const cart = loadCart();

  if (cart[productId]) {
    cart[productId] = cart[productId] + 1;
  } else {
    cart[productId] = 1;
  }

  saveCart(cart);
  updateCartBadge();
}

function setCartQuantity(productId, quantity) {
  const cart = loadCart();

  if (quantity <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = quantity;
  }

  saveCart(cart);
  updateCartBadge();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartLines() {
  const cart = loadCart();
  const lines = [];

  for (const productId in cart) {
    const product = findProduct(productId);
    if (!product) {
      continue;
    }

    const quantity = cart[productId];
    lines.push({
      product: product,
      quantity: quantity,
      lineTotal: product.price * quantity,
    });
  }

  return lines;
}

function getCartTotal() {
  const lines = getCartLines();
  let total = 0;

  for (let i = 0; i < lines.length; i++) {
    total = total + lines[i].lineTotal;
  }

  return total;
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) {
    return;
  }

  badge.textContent = String(getCartCount());
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
});
