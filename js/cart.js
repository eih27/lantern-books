// Shopping cart, saved in the browser's localStorage so it survives page changes.
// The cart is stored as { productId: quantity }.
const CART_KEY = "lantern-books-cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
}

function setQuantity(id, qty) {
  const cart = getCart();
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart(cart);
}

function clearCart() {
  saveCart({});
}

// Turns the cart into a list of { product, qty, lineTotal } rows.
function cartItems() {
  const cart = getCart();
  return Object.entries(cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return product ? { product, qty, lineTotal: product.price * qty } : null;
    })
    .filter(Boolean);
}

function cartTotal() {
  return cartItems().reduce((sum, item) => sum + item.lineTotal, 0);
}

function cartCount() {
  return Object.values(getCart()).reduce((sum, q) => sum + q, 0);
}

// Formats an amount in Indian rupees, e.g. 1649 -> "₹1,649".
function money(n) {
  return "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

// Updates the little number next to "Cart" in the header.
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = cartCount();
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
