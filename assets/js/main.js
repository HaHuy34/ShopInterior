// Todo: Loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

// Todo: Search
var search = document.querySelector(".search");
var searchBtn = document.querySelector(".search-btn");
search.addEventListener("click", function (event) {
  // if (event.target == search) {
  //   searchBtn.classList.add("sebtn");
  // } else {
  //   searchBtn.style.display = "none";
  searchBtn.classList.add("sebtn");
  // }
});
// Todo: Reponsive Bars
function myFunction(x) {
  x.classList.toggle("change");
}

var close = document.querySelector(".close");
var dropDow = document.querySelector(".dropdow-menu");
close.addEventListener("click", function () {
  if (dropDow.style.display === "block") {
    dropDow.style.display = "none";
  } else {
    dropDow.style.display = "block";
  }
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

// Todo: Add To Cart Icon Header
var addToCartButtons = document.getElementsByClassName("add-to-cart");
var cartCount = document.getElementById("cart-count");

var itemsInCart = [];

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    var itemName = this.getAttribute("data-name");
    var itemPrice = parseFloat(this.getAttribute("data-price"));
    var itemExists = false;

    // Kiểm tra sản phẩm đã tồn tại trong danh sách hay chưa
    for (var j = 0; j < itemsInCart.length; j++) {
      if (itemsInCart[j].name === itemName) {
        itemExists = true;
        break;
      }
    }

    // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào danh sách
    if (!itemExists) {
      itemsInCart.push({ name: itemName, price: itemPrice });
      cartCount.innerHTML = itemsInCart.length;
      alert("Successfully added shopping carts");
    } else {
      alert("The product has existed in the cart");
    }
  });
}