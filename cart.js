const cart = document.querySelector("#cart-items-wrapper");
const co_sbtotal_el = document.querySelector("#co_sbtotal");
const co_scharges_el = document.querySelector("#co_scharges");
const co_grandtotal_el = document.querySelector("#co_grandtotal");

const updateTotalCheckout = () => {
  const shippingCharges = 10;
  const allItems = getCartData();
  const totalAmount = Object.entries(allItems)
    .map(([prodId, count]) => getSubTotalItemPrice(prodId, count))
    .reduce((prev, next) => prev + next, 0);
  co_sbtotal_el.innerHTML = upto2DecimalPlaces(totalAmount);
  co_scharges_el.innerHTML = shippingCharges;
  co_grandtotal_el.innerHTML = upto2DecimalPlaces(
    totalAmount + shippingCharges
  );
};

const renderCartItems = () => {
  const totalCount = getNavTotalCount();

  totalCount == 0
    ? (cart.innerHTML = `<h1 class="cart-heading" style="text-align:center; font-size:30px">Nothing is present in the cart<h1>`)
    : (cart.innerHTML = "");
  const cartInfoLocalStorage = JSON.parse(localStorage.getItem(CART_INFO));
  if (cartInfoLocalStorage == null) return;
  Object.entries(cartInfoLocalStorage).map(([prodId, count]) => {
    cart.innerHTML += getCartDetailItem(prodId, count);
  });

  document.querySelectorAll(".del-btn-class").forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      deleteFromCart(e.target.dataset.prodId);
      const cartDetailsNode = e.target.parentNode.parentNode;
      cartDetailsNode.parentNode.removeChild(cartDetailsNode);
      updateCounter();
      updateTotalCheckout();
      renderCartItems();
    });
  });

  const handleItemCountUpdate = (event, newCount) => {
    const prodId = event.target.dataset.prodId;
    const cartItem = getCartItem(prodId);

    if (cartItem != null && prodId in cartItem) {
      const count = cartItem[prodId];
      let calculatedCount = count + newCount;
      if (calculatedCount <= 0) calculatedCount = 1;
      const currCountEl = event.target.parentNode.querySelector("p");
      currCountEl.innerHTML = calculatedCount;
      addToCart(prodId, calculatedCount);

      const totItemPrice =
        getProductCalculatedPrice(getProduct(prodId)) * calculatedCount;
      document.getElementById(prodId + "__totalparaId").innerHTML =
        upto2DecimalPlaces(totItemPrice);

      updateCounter();
      updateTotalCheckout();
    }
  };

  document.querySelectorAll(".sub-btn-class").forEach((subBtn) => {
    subBtn.addEventListener("click", (e) => {
      handleItemCountUpdate(e, -1);
    });
  });

  document.querySelectorAll(".add-btn-class").forEach((addBtn) => {
    addBtn.addEventListener("click", (e) => {
      handleItemCountUpdate(e, 1);
    });
  });

  updateCounter();
  updateTotalCheckout();
};

renderCartItems();

document.getElementById("checkOut").addEventListener("click", () => {
  window.location.href = "./delivery.html";
});
