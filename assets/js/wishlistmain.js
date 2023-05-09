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

// // Todo: Add To Cart Icon Header
// const wishlistItems = document.querySelectorAll(".wishlist-item");
// var addToCartButtons = document.querySelectorAll(".wishlist-btn");
// var cartCount = document.getElementById("cart-count");
// var itemsInCart = [];
// wishlistItems.forEach((item) => {
//   const name = item.querySelector(".wishlist-name").textContent;
//   const price = item.querySelector(".wishlist-price").textContent;
//   for (var i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click", function () {
//       var itemName = name;
//       var itemPrice = price;
//       var itemExists = false;

//       // Kiểm tra sản phẩm đã tồn tại trong danh sách hay chưa
//       for (var j = 0; j < itemsInCart.length; j++) {
//         if (itemsInCart[j].name === itemName) {
//           itemExists = true;
//           break;
//         }
//       }

//       // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào danh sách
//       if (!itemExists) {
//         itemsInCart.push({ name: itemName, price: itemPrice });
//         cartCount.innerHTML = itemsInCart.length;
//       }else{
//         alert("Sản phẩm đã tồn tại");
//       }
//     });
//   }
// });


function addNumberCart() {
  const cartCount = document.getElementById("cart-count");
  let itemCount = 0;

  function addProductToCart(name, price) {
    // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng chưa
    const cartItems = document.getElementsByClassName("cart-item");
    let isAdded = false;
    for (let i = 0; i < cartItems.length; i++) {
      const itemName =
        cartItems[i].getElementsByClassName("cart-name")[0].textContent;
      const itemPrice =
        cartItems[i].getElementsByClassName("cart-price")[0].textContent;
      if (itemName === name && itemPrice === price) {
        isAdded = true;
        break;
      }
    }

    // Nếu sản phẩm chưa được thêm vào giỏ hàng thì thêm vào và tăng biến đếm
    if (!isAdded) {
      itemCount++;
      cartCount.textContent = itemCount;
      const cartList = document.getElementById("cart-list");
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart-item");

      const spanName = document.createElement("span");
      spanName.classList.add("cart-name");
      spanName.textContent = name;

      const spanPrice = document.createElement("span");
      spanPrice.classList.add("cart-price");
      spanPrice.textContent = price;

      cartItem.appendChild(spanName);
      cartItem.appendChild(spanPrice);
      cartList.appendChild(cartItem);
    }
  }

  const wishlist = document.getElementById("wishlist");
  wishlist.addEventListener("click", function (event) {
    const clickedItem = event.target;
    if (clickedItem.classList.contains("wishlist-btn")) {
      const wishlistItem = clickedItem.parentNode;
      const name =
        wishlistItem.getElementsByClassName("wishlist-name")[0].textContent;
      const price =
        wishlistItem.getElementsByClassName("wishlist-price")[0].textContent;
      addProductToCart(name, price);
    }
  });

}
