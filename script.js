const saleContainer = document.querySelector(".Sales");
const newArrivalsContainer = document.querySelector(".newArrivals");
const bestSellerContainer = document.querySelector(".best-seller");

const tempSaleCards = gethomepageSectionCards(getSalesProducts().slice(0, 8));
const tempNewArrivalCards = gethomepageSectionCards(getnewArrivalsProducts());
const tempBestSellerCards = gethomepageSectionCards(getbestSellerProducts());

saleContainer.innerHTML = tempSaleCards;
newArrivalsContainer.innerHTML = tempNewArrivalCards;
bestSellerContainer.innerHTML = tempBestSellerCards;

updateCounter();

document.getElementById("homePageReviewsId").innerHTML = getReviews(
  reviewsSlides.length
);
