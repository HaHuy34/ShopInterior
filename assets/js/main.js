//todo: Close and Open Search
const search = document.querySelector(".search");
const openSearch = document.querySelector(".open-search");
const closeSearch = document.querySelector(".close-search");
search.addEventListener("click", function () {
  openSearch.style.transform = "translateX(0)";
});
closeSearch.addEventListener("click", function () {
  openSearch.style.transform = "translateX(-100%)";
});

// Todo: Slider banner header

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//slide Trending Items
$(".trending-items").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".trending-items").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".trending-items").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});

//Todo: Alert Add To Cart
// const addtoCart = document.getElementsByClassName("card-item");
// addtoCart.addEventListener("click", function(){
//   alert("Product added to cart");
// })

// Todo: SLIDE BANNER IMAGE

$(".slide-banner-image").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
