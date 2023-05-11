
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

// Todo: Pay
const contentBow = document.querySelector(".ct-box");
const payBoxCheck = document.querySelector(".content-bow-row");
const checkInput = document.querySelector(".paymentMethod");
const transportCotent = document.querySelector(".money-transport-content");
checkInput.addEventListener("click", () => {
  contentBow.textContent = "You only pay when receiving the goods";
})

transportCotent.addEventListener("click", () => {
  contentBow.textContent = "You only pay when receiving the goods";
  checkInput.checked = true;
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
// Todo: Không load lại trang khi click vào thẻ a trong delete
const links = document.querySelectorAll(".cart-item-actions");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});


// Todo: Check input sale
const inputSale = document.querySelector(".input-sale");
const btnSale = document.querySelector(".btn-sale");
const messSale = document.querySelector(".mess-sale");
btnSale.addEventListener("click", () => {
  if(inputSale.value === ''){
    messSale.textContent = "Please enter the discount code";
  }else{
    messSale.textContent = "Successfully pounded reducing codes";
  }
})

// Todo: Check input value click order
document.querySelector(".btn-order").addEventListener("click", () => {
  var inputEmail = document.querySelector(".input-email");
  var inputName = document.querySelector(".input-name");
  var inputNumber = document.querySelector(".input-number");
  var inputAddr = document.querySelector(".input-addr");
  var inputDistrict = document.querySelector(".input-district");
  var inputWard = document.querySelector(".input-ward");
  if (!inputEmail.value) {
    alert("Please enter your message.");
    inputEmail.focus();
    return false;
  }
  if (!inputName.value) {
    alert("Please enter your message.");
    inputName.focus();
    return false;
  }
  if (!inputNumber.value) {
    alert("Please enter your message.");
    inputNumber.focus();
    return false;
  }
  if (!inputAddr.value) {
    alert("Please enter your message.");
    inputAddr.focus();
    return false;
  }
  if (!inputDistrict.value) {
    alert("Please enter your message.");
    inputDistrict.focus();
    return false;
  }
  if (!inputWard.value) {
    alert("Please enter your message.");
    inputWard.focus();
    return false;
  }
  alert("Thank you for your message!");
  window.location.href = "./payment_success.html";
  return true;
});

// Todo: Input option value click order
const selectName = document.querySelector("#select-phone");
const inputSelect = document.getElementById("ip-select");
selectName.addEventListener("change", () => {
  const selectedOption = selectName.options[selectName.selectedIndex];
  inputSelect.value = selectedOption.value;
})

