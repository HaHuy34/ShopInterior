// Todo: Loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut;

// Todo: Search
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

// Thêm sự kiện "click" cho phần tử "search"
search.addEventListener("click", function () {
  searchBtn.classList.add("sebtn");
});

// Thêm sự kiện "click" cho toàn bộ tài liệu (document)
document.addEventListener("click", function (event) {
  // Kiểm tra xem phần tử được nhấp chuột có nằm trong phần tử "search" hay không
  const isClickInsideSearch = search.contains(event.target);

  // Nếu phần tử được nhấp chuột không nằm trong phần tử "search", xóa lớp CSS "sebtn" khỏi "searchBtn"
  if (!isClickInsideSearch) {
    searchBtn.classList.remove("sebtn");
  }
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
      const main = document.getElementById("toast");
      const toast = document.createElement("div");
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, 4000);

      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
      const delay = (3).toFixed(2);
      toast.classList.add("tot");
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
      toast.innerHTML = `
          <div class="toast__icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="toast__body">
            <h3 class="toast__title">Thành công!</h3>
            <p class="toast__msg">Bạn đã thêm sản phẩm vào giỏ hàng.</p>
          </div>
          <div class="toast__close">
            <i class="fas fa-times"></i>
          </div>
      `;
      main.appendChild(toast);
    } else {
      const main = document.getElementById("toast");
      const toast = document.createElement("div");
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, 9000);

      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
      toast.classList.add("tot");
      toast.innerHTML = `
          <div class="toast__icon">
            <i class="fas fa-exclamation-circle"></i>
          </div>
          <div class="toast__body">
            <h3 class="toast__title">Xin lỗi!</h3>
            <p class="toast__msg">Sản phẩm đã tồn tại trong giỏ hàng.</p>
          </div>
          <div class="toast__close">
            <i class="fas fa-times"></i>
          </div>
      `;
      main.appendChild(toast);
    }
  });
}

// Chặn load trang của thẻ a
const btnRadius = document.querySelectorAll(".btn-radius");
btnRadius.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Todo: Giỏ hàng
// Lấy icon giỏ hàng
const cartIcon = document.querySelector(".cart");

// Đính kèm sự kiện click cho icon giỏ hàng
cartIcon.addEventListener('click', () => {
  // Kiểm tra nếu giỏ hàng có sản phẩm
  if (cartCount.textContent !== '0') {
    // Chuyển hướng đến trang chứa thông tin giỏ hàng
    window.location.href = "./cart.html";
  } else {
    // Hiển thị thông báo chưa có sản phẩm trong giỏ hàng
    alert("There is no product in the cart!");
  }
});



