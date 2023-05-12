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

// Todo: Quantity
// const minusButton = document.querySelector(".minus-btn");
// const plusButton = document.querySelector(".plus-btn");
// const inputField = document.querySelector(".quantity-input");

// minusButton.addEventListener("click", decreaseQuantity);
// plusButton.addEventListener("click", increaseQuantity);

// function decreaseQuantity() {
//   let currentValue = parseInt(inputField.value);
//   if (currentValue > 0) {
//     inputField.value = currentValue - 1;
//   }
// }

// function increaseQuantity() {
//   let currentValue = parseInt(inputField.value);
//   inputField.value = currentValue + 1;
// }

// Todo: Tăng giảm số lượng và cập nhật lại giá
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantityInput = document.querySelector(".quantity-input");
const subAmu = document.querySelector(".sub-amu");
const amount = document.querySelector(".amount");

function updateSubtotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    const quantityInput = item.querySelector(".quantity-input");
    const quantityValue = parseInt(quantityInput.value);
    const priceValue = parseInt(
      item.querySelector(".amount").textContent.replace(/\./g, "")
    );
    const subtotal = quantityValue * priceValue * 1000000;
    item.querySelector(".sub-amu").textContent = formatMoney(subtotal);
  });
}

function formatMoney(value) {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
plusBtn.addEventListener("click", function () {
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
  let price = parseInt(amount.textContent.replace(/,/g, ""));
  let subPrice = price * quantity;
  subAmu.textContent = subPrice.toLocaleString("en-US") + "đ";
  updateSubtotal();
});

minusBtn.addEventListener("click", () => {
  const quantityInput = minusBtn.parentElement.querySelector(".quantity-input");
  let quantityValue = parseInt(quantityInput.value);
  if (quantityValue > 0) {
    quantityValue--;
    quantityInput.value = quantityValue;
    updateSubtotal();
  }
});

// Todo: Xóa Cart Item
const cartItem = document.querySelector(".cart-item");
const del = document.querySelector(".fa-trash-can");
del.addEventListener("click", function () {
  cartItem.remove();
});
