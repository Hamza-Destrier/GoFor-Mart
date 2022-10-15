const upto2DecimalPlaces = (price) => {
  return Math.round((price + Number.EPSILON) * 100) / 100;
};

const getProductCalculatedPrice = (prod) => {
  return prod.unitPrice - prod.unitPrice * (prod.discount / 100);
};

const getSubTotalItemPrice = (prodId, count) => {
  return getProductCalculatedPrice(getProduct(prodId)) * count;
};

const getProduct = (id) => {
  return products.find((e) => e.sku == id);
};

const getSalesProducts = () => {
  return products.filter((e) => e.discount > 0);
};

const getReducedInnerHTML = (arr) => {
  return arr.reduce((prev, next) => prev + "\n" + next, "");
};

const getHTMLFor = (arr, fn) => {
  return getReducedInnerHTML(arr.map(fn));
};

const getnewArrivalsProducts = () => {
  return [118, 78, 19, 79, 43, 21, 106, 76].map((e) => products[e]);
};

const getbestSellerProducts = () => {
  return [109, 93, 7, 27, 17, 90, 61, 83].map((e) => products[e]);
};

const getCartData = () => {
  return JSON.parse(localStorage.getItem(CART_INFO)) || {};
};

const getCartItem = (prodId) => {
  const allData = getCartData();
  if (prodId in allData) {
    return { [prodId]: allData[prodId] };
  } else {
    return null;
  }
};

const addToCart = (prodId, count) => {
  localStorage.setItem(
    CART_INFO,
    JSON.stringify({ ...getCartData(), [prodId]: count })
  );
};

const deleteFromCart = (prodId) => {
  const temp = getCartData();
  delete temp[prodId];
  localStorage.setItem(CART_INFO, JSON.stringify(temp));
};

const emptyCart = () => {
  localStorage.removeItem(CART_INFO);
};

const getNavTotalCount = () => {
  return Object.entries(getCartData())
    .map((e) => e[1])
    .reduce((prev, next) => prev + next, 0);
};

const updateCounter = () => {
  const navCounterEl = document.getElementById("cartCounterNavItemID");
  const totalCount = getNavTotalCount();
  if (totalCount > 0) {
    navCounterEl.style.display = "flex";
    navCounterEl.innerHTML = totalCount > 100 ? "99+" : totalCount;
    navCounterEl.style.background = "#ffffff";
  } else if (totalCount == 0) {
    navCounterEl.style.background = "transparent";
    navCounterEl.style.display = "none";
  }
};

const isProdInCart = (prodId) => {
  return getCartItem(prodId) != null;
};

const getWishListData = () => {
  return JSON.parse(localStorage.getItem(WISH_LIST)) || [];
};

const addToWishList = (prodId) => {
  const tempData = Array.from(new Set([...getWishListData(), prodId]));
  localStorage.setItem(WISH_LIST, JSON.stringify(tempData));
};

const removeFromWishList = (prodId) => {
  const tempData = getWishListData()?.filter((e) => e != prodId) || [];

  localStorage.setItem(WISH_LIST, JSON.stringify(tempData));
};

const getProductIndex = (prodID) => {
  return products.findIndex((e) => e.sku == prodID);
};

const getReviews = (number, prodID = undefined) => {
  if (number == reviewsSlides.length) {
    return getReducedInnerHTML(reviewsSlides);
  }
  if (typeof prodID != "undefined" && number > 0) {
    const pindex = getProductIndex(prodID);

    if (typeof pindex == "number" && !isNaN(pindex)) {
      const sindex = pindex % (reviewsSlides.length - number);
      const eindex = sindex + number;

      const prodReviews = reviewsSlides.slice(sindex, eindex);
      return getReducedInnerHTML(prodReviews);
    }
  }
};

// NOTE HELPERS - NAV CODE

const getDropDownLinks = () => {
  const nav = Object.entries(allCategories);
  const params = new URLSearchParams(window.location.search);
  const getNavItem = (e) => {
    return `
      <a 
        class="items ${params.get("cat") == e[0] ? "active" : ""}" 
        href="./category.html?cat=${e[0]}">
        ${e[1]}
      </a>
    `;
  };
  return getHTMLFor(nav, getNavItem);
};

const dropDownContainer = document.querySelector(".dropDown");
const footerCategory = document.getElementById("dropDownCategory");

dropDownContainer.innerHTML = getDropDownLinks();
footerCategory.innerHTML = getDropDownLinks();

let navLinks = document.getElementById("navLinks");
let navBar = document.getElementById("navbar");
function hideMenu() {
  if (window.innerWidth < 992) {
    navLinks.style.right = "-500px";
    navLinks.style.transition = "0.5s ease-in-out";
  }
}
function showMenu() {
  if (window.innerWidth < 992) {
    navLinks.style.right = "0px";
    navLinks.style.transition = "0.5s ease-in-out";
  }
}
