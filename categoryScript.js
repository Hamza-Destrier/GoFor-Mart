const params = new URLSearchParams(window.location.search);
const categoryDetails = document.querySelector("#catCardsContainer");
const catHeading = document.querySelector("#catHeading");
const catDDNavMenu = document.querySelector(".links.dropDownMenu");
const catDDNavMenuSaleItem = document.querySelector("#saleMenuNavItem");
const catDDNavMenuWishlistItem = document.querySelector("#wishlistMenuNavItem");

categoryDetails.innerHTML = getCategoryDetailsContent(params.get("cat"));

const getCatPageTitle = () => {
  let categoryHeadingText = "";
  if (params.get("cat") == "sale") {
    categoryHeadingText = "Products on Sale!";
  } else if(params.get("cat") == "wishlist") {
    categoryHeadingText = "Your favorite Products!";
  } 
  else if (params.get("cat") == null || allCategories[params.get("cat")] == undefined) {
    categoryHeadingText = "All Products"
  } else
    categoryHeadingText = allCategories[params.get("cat")] + " Products" || "";
  return categoryHeadingText;
}

catHeading.innerHTML = getCatPageTitle();

if (params.get("cat") == "sale") {
  catDDNavMenu.classList.remove("active");
  catDDNavMenuSaleItem.classList.add("active");
}

if (params.get("cat") == "wishlist") {
  catDDNavMenu.classList.remove("active");
  catDDNavMenuWishlistItem.classList.add("active");
}

updateCounter();