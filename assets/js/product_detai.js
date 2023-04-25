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


//Todo: PRODUCT IMAGE DETAIL
/*Box*/
function changeBorder(box) {
  var boxes = document.querySelectorAll(".muli");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("selected");
  }
  box.classList.add("selected");
}
/*BackGroundImage*/
function changeImage(image) {
  var mainImage = document.getElementById("main-image");
  mainImage.src = image.src;
}

/* HoverScaleImagemain */
const imgContainer = document.querySelector(".product-img-main");
const img = imgContainer.querySelector(".img");

imgContainer.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(1.5)";
});

imgContainer.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center center";
  img.style.transform = "scale(1)";
});

// Todo: NumberOfAddedShopping

function decrease() {
  var quantity = document.getElementById("quantity");
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function increase() {
  var quantity = document.getElementById("quantity");
  if (quantity.value < 10) {
    quantity.value++;
  }
}

// Todo: WishLishIcon
var iconWishLish = document.getElementById("icon");
var count = 0;
iconWishLish.addEventListener("click", function(){
  // alert("Added products to the favorite list");
  // Nếu người dùng click lần đầu tiên, chuyển màu của icon sang màu đỏ
  if (count % 2 !== 0) {
    iconWishLish.style.color = "#b1b6bf";
  }
  // Nếu người dùng click lần thứ hai, chuyển màu của icon trở lại màu ban đầu
  else {
    iconWishLish.style.color = "red";
    alert("Added products to the favorite list");
  }
  count++;
})

// Todo: AddToCard
var addToCart = document.querySelector(".custom-btn");
addToCart.addEventListener("click", function(){
  alert("Successfully added shopping carts");
})


// Todo: SlideRelatedProducts
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 300,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});