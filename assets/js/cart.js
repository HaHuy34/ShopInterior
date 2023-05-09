// Todo: Loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1000);
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
// Todo: Không load lại trang khi click vào thẻ a trong delete
const links = document.querySelectorAll(".cart-item-actions");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});


// Todo: Xóa thông tin giỏ hàng
const deleteBtn = document.querySelectorAll(".cart-item-actions");
deleteBtn.forEach(i => {
  i.addEventListener("click", () => {
    const cartItemElement = i.closest(".cart-item");
    cartItemElement.remove();
    updateCartInfor(); 
    alert("Do you definitely want to delete this product?");
  });
})

// Todo: Cập nhật số lượng
const dowBtn = document.querySelectorAll(".minus-btn");
dowBtn.forEach(button => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling;
    const current = +quantityElement.textContent;
    if(current > 1) {
      quantityElement.textContent = current - 1;
      updateCartInfor();
    }
  })
})

const upBtn = document.querySelectorAll(".plus-btn");
upBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling;
    const current = +quantityElement.textContent;
      quantityElement.textContent = current + 1;
      updateCartInfor();
  });
});


// Todo: Tăng giảm số lượng và cập nhật lại giá
function updateCartInfor() {
  const emtyCart = document.querySelector(".wish-list-main");
  const cartTable = document.querySelector(".cart-table-main");
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".to-pr");
  if (cartItems.length == 0) {
    emtyCart.style.display = "block";
    cartTable.style.display = "none";
  }else{
    emtyCart.style.display = "none";
    cartTable.style.display = "block";
  }

  let totalPrice = 0;
  cartItems.forEach((cartItem) => {
    const price = +cartItem.querySelector(".amount").textContent.replace(",", "").replace("đ", "");
    const quantity = +cartItem.querySelector(".qtity").textContent;
    const total = cartItem.querySelector(".sub-amu");
    const dowBtn = document.querySelector(".minus-btn");  

    // Cập nhật giá tiền cho Item
    total.textContent = price * quantity; 
    totalPrice += price * quantity;  
  });

  totalPriceElement.textContent = totalPrice;
}

updateCartInfor();
