const getImageTag = (src, className = "", alt = "") => {
  return `<img class="${className}" src="${src}" alt="${alt} img" />`;
};

const getDiv = (className, child) => {
  return `<div class="${className}">${child}</div>`;
};

const getProductCard = (prod) => {
  const discountPrice = getProductCalculatedPrice(prod);
  const isInCart = isProdInCart(prod.sku);

  return `
    <div class="card">

      <div class="card-image">
        <img src="${prod.coverImage}" alt="">
      </div>
    
      <div class="card__header">
        <h2> 
          <a href="./product.html?sku=${prod.sku}">
          ${
            prod.productName.length > 50
              ? prod.productName.substring(0, 50) + "..."
              : prod.productName
          }
          </a>
        </h2>
      </div>
    
      <div class="card__body">
        <p>
          ${
            prod.spcifications.length > 150
              ? prod.spcifications.substring(0, 150) + "..."
              : prod.spcifications
          }
        </p>
        <div class="card-bottom">

            <div class="price">
              ${
                prod.discount > 0
                  ? `<p>$${discountPrice} <span>$${prod.unitPrice}</span></p>`
                  : `<p class="actualPrice">$${prod.unitPrice}</p>`
              }
            </div>

            <div class="${isInCart ? "cta success-cta" : "cta"}">
              <a href="./product.html?sku=${prod.sku}">
                <i class="bi bi-cart4"></i> ${
                  isInCart ? "Already In Cart" : "Add to Cart"
                }
              </a>
            </div>

        </div>
      </div>
      
    </div>
  `;
};

const getProductDetailsContent = (id) => {
  const prod = getProduct(id);
  const discountPrice = getProductCalculatedPrice(prod);

  const maxImages = 10;
  const prodImages = [prod.coverImage];

  for (let i = 1; i <= maxImages; i++) {
    if (typeof prod["productImage" + i] != "undefined") {
      prodImages.push(prod["productImage" + i]);
    }
  }

  const getSideImage = (imgSrc) => {
    return `
    <div class="productImages__img__con">
      <img src="${imgSrc}" alt="" />
    </div>`;
  };

  let cartItem = getCartItem(id);
  const prodCount = cartItem != null && id in cartItem ? cartItem[id] : 1;
  const isInWishList =
    getWishListData().filter((e) => e == currentProdcutId).length > 0;

  return `
  <div class="products">

    <div class="productImages">
      ${getHTMLFor(prodImages, getSideImage)}
    </div>

    <div class="productDesc">
      <div class="filler">
        <h3>${prod.productName}</h3>
        <p>$${discountPrice}</p>
        <div class="review">
          <div class="star">
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star-fill"></i>
            <i class="bi-star-half"></i>
          </div>
          </div>
          <p> ${prod.spcifications} </p>
        <p><i id="wishlistBtnId" class="bi ${
          isInWishList ? "bi-heart-fill" : "bi-heart"
        }"></i> &nbsp; Add to wish list</p>
        <p class="quantity">
          Quantity: 
          <input 
            id="product_count" 
            type="number" 
            min=1 
            placeholder="1" 
            value=${prodCount}
          >
        </p>
        <button id="addToCartBtnID" class="cart"><i class="bi bi-cart4"></i> Add to Cart</button>
        <div class="details">${prod.descriptionAsHTML}</div>
        <div class="tags-container">
            <span class="tags-heading">Tags:</span>
            <div class="badge-container">
              ${getHTMLFor(
                prod.tags,
                (tag) => `<span class="tagBadge">${tag}</span>`
              )}
            </div>
        </div>
      </div>
    </div>
  </div>
`;
};

const getRelatedItems = (id) => {
  const prod = getProduct(id);
  const relatedProducts = products
    .filter((e) => e.category == prod.category)
    .sort(() => Math.random() - 0.5)
    .filter((e) => e.sku != prod.sku)
    .slice(0, 3);
  return `
    <h3>You May Also Like</h3>
    <div class="cards-container">
      ${getHTMLFor(relatedProducts, getProductCard)}
    </div>


  
  `;
};

const getCategoryDetailsContent = (catId) => {
  if (catId == "sale") {
    const prods = getSalesProducts();
    return `
      <div class="cards-container">
        ${getHTMLFor(prods, getProductCard)}
      </div>
    `;
  } else if (params.get("cat") == "wishlist") {
    const prods = getWishListData().map((e) => getProduct(e));
    return `
      <div class="cards-container">
        ${getHTMLFor(prods, getProductCard)}
      </div>
    `;
  } else if (allCategories[catId]) {
    const prods = products.filter((e) => e.category == allCategories[catId]);
    return `
      <div class="cards-container">
        ${getHTMLFor(prods, getProductCard)}
      </div>
    `;
  } else {
    const prods = products;
    return `
      <div class="cards-container">
        ${getHTMLFor(prods, getProductCard)}
      </div>
    `;
  }
};

const gethomepageSectionCards = (list) => {
  return `
          <div class="cards-container" data-aos="fade-up">
            ${getHTMLFor(list, getProductCard)}
          </div>
          `;
};

const getCartDetailItem = (prodId, count) => {
  const prod = getProduct(prodId);
  return `
  <div class="cartDetails">
    <div class="delbtn">
      <button data-prod-id=${prodId} class="del-btn-class" id="del">x</button>
    </div>
    <div class="card">
        <span>Product</span>
        <div class="card-details">  
          <div class="card-img"><img src="${prod.coverImage}" alt=""></div>
          <p>${prod.productName} <span>(${prod.category})</span></p>
        </div>
    </div>
    <div class="price">
        <span>Price</span>
        <p>$ &nbsp; ${prod.unitPrice}</p>
    </div>
    <div class="quantity">
        <span>Quantity</span>
        <div>
            <button data-prod-id=${prodId} class="sub-btn-class" id ="sub">-</button>
            <p id="itemCount">${count}</p>
            <button data-prod-id=${prodId} class="add-btn-class" id="add">+</button>
        </div>
    </div>
    <div class="subTotal">
        <span>Sub Total</span>
        <p>$ <span id="${prod.sku}__totalparaId">${upto2DecimalPlaces(
    count * getProductCalculatedPrice(prod)
  )}</span></p>
    </div>
  </div>`;
};

const getCartDetailItemCheckout = (prodId, count) => {
  const prod = getProduct(prodId);
  return `
  <div class="cartDetails">

    <div class="card">
        <span>Product</span>
        <div class="card-details">  
          <div class="card-img"><img src="${prod.coverImage}" alt=""></div>
          <p>${prod.productName} <span>(${prod.category})</span></p>
        </div>
    </div>

    <div class="subTotal">
        <span>Sub Total</span>
        <p>$ <span id="${prod.sku}__totalparaId">${upto2DecimalPlaces(
    count * getProductCalculatedPrice(prod)
  )}</span></p>
    </div>
</div>`;
};
