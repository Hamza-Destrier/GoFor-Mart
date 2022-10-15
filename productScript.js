const params = new URLSearchParams(window.location.search);
const currentProdcutId = params.get("sku");

const productDetails = document.querySelector(".productPage");
productDetails.innerHTML = getProductDetailsContent(currentProdcutId);

const RelatedItems = document.querySelector(".RelatedItems");
RelatedItems.innerHTML = getRelatedItems(currentProdcutId);

const heart = document.querySelector("#wishlistBtnId");
heart.addEventListener("click", () => {
  if (heart.classList.contains("bi-heart")) {
    heart.classList.remove("bi-heart");
    heart.classList.add("bi-heart-fill");
    addToWishList(currentProdcutId);
  } else {
    heart.classList.add("bi-heart");
    heart.classList.remove("bi-heart-fill");
    removeFromWishList(currentProdcutId);
  }
});

const addToCartBtn = document.getElementById("addToCartBtnID");
addToCartBtn.addEventListener("click", () => {
  let count = Number(document.getElementById("product_count").value);
  count = isNaN(count) ? 1 : count;
  count = count < 0 ? count * -1 : count;
  count = count == 0 ? 1 : count;
  addToCart(currentProdcutId, count);
  updateCounter();
});

updateCounter();
const numberofProducts = getProductIndex(currentProdcutId) % 2 == 0 ? 3 : 4;
document.getElementById("productReviewsId").innerHTML = getReviews(
  numberofProducts || 0,
  currentProdcutId
);
