// Todo: Search
var search = document.querySelector(".search");
var searchBtn = document.querySelector(".search-btn");
document.addEventListener("click", function(event) {
     if (event.target == search) {
       searchBtn.classList.add("sebtn");
     } else {
       searchBtn.style.display = "none";
     }
 });
// Todo: Reponsive Bars
 function myFunction(x) {
   x.classList.toggle("change");
 }

 var close = document.querySelector(".close");
 var dropDow = document.querySelector(".dropdow-menu");
 close.addEventListener("click", function(){
  if(dropDow.style.display === "block"){
    dropDow.style.display = "none";
  }else{
    dropDow.style.display = "block";
  }
 })

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

//Todo: Slide Trending Items
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

// Todo: SLIDE IMAGE COOPERATE
$(".cooperate-main").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

function redirect() {
  window.location.href = "product_detail.html";
}
