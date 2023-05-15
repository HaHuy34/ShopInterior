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
// Todo: Sort Price 
// // Click ẩn hiện sắp xếp giá
const titleBtn = document.querySelector(".title-price-name");
const sortPrice = document.querySelector(".sort-price");
document.addEventListener("click", function(e) {
  if ((e.target == titleBtn) || (e.target == sortPrice)){
    sortPrice.style.display = "block";
  }
  else{
    sortPrice.style.display = "none";
  }
})
//Nhận các nút sắp xếp và danh sách sản phẩm
const sortHighButton = document.getElementById("sort-high");
const sortLowButton = document.getElementById("sort-low");
// const productList = document.getElementById("pr-rlisst");

// Sort products by price (high to low)
function sortProductsHighToLow() {
  // Chuyển đổi danh sách các sản phẩm thành một mảng và sắp xếp theo giá(cao sang thấp)
  const products = Array.from(productList.children);
  products.sort((a, b) => parseFloat(b.querySelector(".price").innerText.slice(1)) - parseFloat(a.querySelector(".price").innerText.slice(1)));
  // Làm trống danh sách sản phẩm và thêm vào các sản phẩm được sắp xếp
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }
  products.forEach((product) => {
    productList.appendChild(product);
  });
}

// Sort products by price (low to high)
function sortProductsLowToHigh() {
  // Convert the list of products to an array and sort by price (low to high)
  const products = Array.from(productList.children);
  products.sort((a, b) => parseFloat(a.querySelector(".price").innerText.slice(1)) - parseFloat(b.querySelector(".price").innerText.slice(1)));
  // Empty the product list and re-add the sorted products
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }
  products.forEach((product) => {
    productList.appendChild(product);
  });
}

// Add event listeners to the sort buttons
sortHighButton.addEventListener("click", sortProductsHighToLow);
sortLowButton.addEventListener("click", sortProductsLowToHigh);

// Todo: Phân trang

const productMain = [
  {
    name: "Enim Expedita Sed",
    price: 45,
    image: "./assets/images/ImagesFigma/furniture_img3.jpg",
    del: "$55.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 47,
    image: "./assets/images/ImagesFigma/furniture_img1.jpg",
    del: "$59.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 25,
    image: "./assets/images/ImagesFigma/furniture_img2.jpg",
    del: "$37.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 95,
    image: "./assets/images/ImagesFigma/furniture5_3.jpg",
    del: "$100.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 25,
    image: "./assets/images/ImagesFigma/furniture_img4.jpg",
    del: "$50.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 95,
    image: "./assets/images/ImagesFigma/furniture_img5.jpg",
    del: "$105.00",
  },
  {
    name: "Enim Expedita Sed",
    price: 12,
    image: "./assets/images/ImagesFigma/furniture_img6.jpg",
    del: "$24.00",
  },
  {
    name: "enim expedita sed",
    price: 80,
    image: "./assets/images/ImagesFigma/furniture_img7.jpg",
    del: "$24.00",
  },
  {
    name: "enim expedita sed",
    price: 22,
    image: "./assets/images/ImagesFigma/furniture_img8.jpg",
    del: "$24.00",
  },
  {
    name: "Eames Plastic Side Chair",
    price: 70,
    image: "./assets/images/ImagesFigma/product-furniture1.jpg",
    del: "$84.00",
  },
  {
    name: "Scelerisque pulvinar ligula",
    price: 65,
    image: "./assets/images/ImagesFigma/furniture5_5.jpg",
    del: "$74.00",
  },
  {
    name: "Vivant janus charles",
    price: 37,
    image: "./assets/images/ImagesFigma/product-accessories-9-2.jpg",
    del: "$44.00",
  },
  {
    name: "Classic wooden chair",
    price: 40,
    image: "./assets/images/ImagesFigma/furniture10.jpg",
    del: "$75.00",
  },
  {
    name: "Product 14",
    price: 140,
    image: "./assets/images/ImagesFigma/product-furniture-1.jpg",
    del: "$150.00",
  },
  {
    name: "Panton tunior chair",
    price: 110,
    image: "./assets/images/ImagesFigma/product-furniture-19.jpg",
    del: "$124.00",
  },
  {
    name: "Eames lounge chair",
    price: 190,
    image: "./assets/images/ImagesFigma/product-furniture-8.jpg",
    del: "$255.00",
  },
  {
    name: "Ornare auctor",
    price: 70,
    image: "./assets/images/ImagesFigma/light10_4.jpg",
    del: "$85.00",
  },
  {
    name: "Senectus nisi a imperdiet",
    price: 72,
    image: "./assets/images/ImagesFigma/furniture39.jpg",
    del: "$87.00",
  },
  {
    name: "Char with Magazine",
    price: 92,
    image: "./assets/images/ImagesFigma/product-furniture-5.jpg",
    del: "$107.00",
  },
  {
    name: "Ullamcorper nisl",
    price: 38,
    image: "./assets/images/ImagesFigma/furniture8.jpg",
    del: "$58.00",
  },
  {
    name: "Feelgood designs",
    price: 148,
    image: "./assets/images/ImagesFigma/product-accessories-12.jpg",
    del: "$198.00",
  },
  {
    name: "Gravida condimentum",
    price: 128,
    image: "./assets/images/ImagesFigma/furniture7-430.jpg",
    del: "$150.00",
  },
];

const productsPerPage = 8;
let currentPage = 1;
const productList = document.getElementById("pr-rlisst");
const pagination = document.querySelector(".pagination");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


prev.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayProducts();
  }
});

function numPages() {
  return Math.ceil(productMain.length / productsPerPage);
}

function displayProducts() {
  productList.innerHTML = "";
  let startIndex = (currentPage - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let pageProducts = productMain.slice(startIndex, endIndex);
  pageProducts.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("col-6", "col-md-4", "col-lg-3");
    productDiv.innerHTML = `
      <div class="card-item">
              <div class="product-img">
                  <a href="#">
                    <img src="${product.image}" alt="">
                  </a>
                  <div class="product-action-box">
                    <div class="pr-dc">
                      <a href="#" class="detail-product" onclick="redirect()">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              <div class="product-info">
                <h6 class="pro-title">${product.name}</h6>
                <div class="product-price">
                  <span class="price">$${product.price}</span>
                  <del>${product.del}</del>
                </div>
                <div class="rating-wrap">
                  <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star-half-stroke"></i>
                  </div>
                  <span class="rating-num">(21)</span>
                </div>
                <div class="add-to-cart">
                  <a href="#" class="btn-radius"">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="adtoca">Add To Cart</span>
                  </a>
                </div>
              </div>
            </div>
    `;
    productList.appendChild(productDiv);
  });
  updatePagination();
}

function updatePagination() {
  pagination.innerHTML = "";
  let totalPages = numPages();
  let startPage, endPage;
  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    let pageLink = document.createElement("a");
    pageLink.style.cursor = "pointer";
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageLink.addEventListener("click", function () {
      currentPage = i;
      displayProducts();
    });
    pagination.appendChild(pageLink);
  }
  if (currentPage > 1) {
    prev.style.display = "inline-block";
  } else {
    prev.style.display = "none";
  }
  if (currentPage < numPages()) {
    next.style.display = "inline-block";
  } else {
    next.style.display = "none";
  }
}

displayProducts();

function retTo() {
  window.location.href = "./blog.html";
}

function reTo() {
  window.location.href = "./contact.html";
}