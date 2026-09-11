// Checkout page: show cart lines, change quantities, fake submit.

function renderCartPanel() {
  const panel = document.getElementById("cart-panel");
  if (!panel) {
    return;
  }

  const lines = getCartLines();

  if (lines.length === 0) {
    panel.innerHTML =
      '<p class="empty-cart">Your cart is empty.</p>' +
      '<a class="btn btn-secondary" href="shop.html">Browse snacks</a>';
    return;
  }

  let html = '<ul class="cart-lines">';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const product = line.product;

    let thumbHtml = "";
    if (product.image) {
      thumbHtml =
        '<img class="cart-line-image" src="' +
        product.image +
        '" alt="' +
        product.name +
        '" />';
    }

    html +=
      '<li class="cart-line">' +
      thumbHtml +
      '<div class="cart-line-info">' +
      '<span class="cart-line-brand">' +
      product.brand +
      "</span>" +
      '<span class="cart-line-name">' +
      product.name +
      "</span>" +
      '<div class="cart-line-meta">' +
      formatPrice(product.price) +
      " each" +
      '<div class="qty-controls">' +
      '<button type="button" data-action="minus" data-id="' +
      product.id +
      '" aria-label="Remove one">−</button>' +
      "<span>" +
      line.quantity +
      "</span>" +
      '<button type="button" data-action="plus" data-id="' +
      product.id +
      '" aria-label="Add one">+</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<span class="cart-line-total">' +
      formatPrice(line.lineTotal) +
      "</span>" +
      "</li>";
  }

  html += "</ul>";
  html +=
    '<div class="cart-summary">' +
    "<span>Total</span>" +
    "<span>" +
    formatPrice(getCartTotal()) +
    "</span>" +
    "</div>";

  panel.innerHTML = html;
}

function handleQuantityClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const productId = button.getAttribute("data-id");
  const action = button.getAttribute("data-action");
  const cart = loadCart();
  let quantity = cart[productId] || 0;

  if (action === "plus") {
    quantity = quantity + 1;
  } else if (action === "minus") {
    quantity = quantity - 1;
  }

  setCartQuantity(productId, quantity);
  renderCartPanel();
}

document.addEventListener("DOMContentLoaded", function () {
  renderCartPanel();

  const panel = document.getElementById("cart-panel");
  if (panel) {
    panel.addEventListener("click", handleQuantityClick);
  }

  const form = document.getElementById("checkout-form");
  const confirmBox = document.getElementById("confirm-box");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (getCartCount() === 0) {
      window.alert("Add something to your cart before placing an order.");
      return;
    }

    clearCart();
    renderCartPanel();
    form.style.display = "none";
    confirmBox.classList.add("show");
  });
});
