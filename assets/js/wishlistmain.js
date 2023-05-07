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


// Todo: Wish List
const wishlist = document.getElementById("wishlist");
function addProductToWishlist(name, price, image, intro) {
  const li = document.createElement("li");
  li.classList.add("wishlist-item"); // Thêm class cho phần tử li

  const img = document.createElement("img");
  img.src = image;
  img.classList.add("wishlist-image"); // Thêm class cho phần tử img

  const spanName = document.createElement("span");
  spanName.classList.add("wishlist-name"); // Thêm class cho phần tử span
  spanName.textContent = name;

  const spanPrice = document.createElement("span");
  spanPrice.classList.add("wishlist-price"); // Thêm class cho phần tử span
  spanPrice.textContent = price + "₫";

  const spanIntro = document.createElement("span");
  spanIntro.classList.add("wishlist-intro"); // Thêm class cho phần tử span
  spanIntro.textContent = intro;

  const btn = document.createElement("button");
  btn.classList.add("wishlist-btn"); // Thêm class cho phần tử span
  btn.textContent = "Add to cart";
  btn.addEventListener("click", function(){
    alert("Added products to the cart");
  })

  const button = document.createElement("button");
  button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  button.classList.add("wishlist-remove-button"); // Thêm class cho nút xóa
  button.addEventListener("click", () => {
    wishlist.removeChild(li);
  });

  li.appendChild(img);
  li.appendChild(spanName);
  li.appendChild(spanPrice);
  li.appendChild(spanIntro);
  li.appendChild(btn);
  li.appendChild(button);

  wishlist.appendChild(li);
}

addProductToWishlist(
  "Enim Expedita Sed",
  "400.000",
  "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img1.jpg",
  "IN STOCK"
);

addProductToWishlist(
  "Internet Tend To Repeat",
  "500.000",
  "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img5.jpg",
  "IN STOCK"
);
addProductToWishlist(
  "Adipisci Officia Libero",
  "800.000",
  "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img7.jpg",
  "IN STOCK"
);
addProductToWishlist(
  "Itaque Earum Rerum",
  "200.000",
  "https://bestwebcreator.com/shopwise/demo/assets/images/furniture_img4.jpg",
  "IN STOCK"
);


