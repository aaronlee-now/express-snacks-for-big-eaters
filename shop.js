// Builds the shop product list and wires Add to cart buttons.

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.hideTimer);
  showToast.hideTimer = window.setTimeout(function () {
    toast.classList.remove("show");
  }, 1600);
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  for (let i = 0; i < PRODUCTS.length; i++) {
    const product = PRODUCTS[i];
    const article = document.createElement("article");
    article.className = "product";

    let imageHtml = "";
    if (product.image) {
      imageHtml =
        '<img class="product-image" src="' +
        product.image +
        '" alt="' +
        product.name +
        '" />';
    }

    article.innerHTML =
      imageHtml +
      '<p class="product-brand">' +
      product.brand +
      "</p>" +
      '<h2 class="product-name">' +
      product.name +
      "</h2>" +
      '<p class="product-desc">' +
      product.description +
      "</p>" +
      '<div class="product-foot">' +
      '<span class="product-price">' +
      formatPrice(product.price) +
      "</span>" +
      '<button class="btn btn-small" type="button" data-id="' +
      product.id +
      '">Add to cart</button>' +
      "</div>";

    grid.appendChild(article);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();

  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  grid.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-id]");
    if (!button) {
      return;
    }

    const productId = button.getAttribute("data-id");
    const product = findProduct(productId);
    addToCart(productId);

    if (product) {
      showToast("Added " + product.name + " to cart");
    }
  });
});
