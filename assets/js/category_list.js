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

const sanPham = [
  { ten: "Sản phẩm 1", price: 45, image: "./assets/images/ImagesFigma/furniture_img1.jpg" },
  { ten: "Sản phẩm 2", price: 20, image: "./assets/images/ImagesFigma/furniture_img2.jpg" },
  { ten: "Sản phẩm 3", price: 2, image: "./assets/images/ImagesFigma/furniture_img3.jpg" },
  { ten: "Sản phẩm 4", price: 99, image: "./assets/images/ImagesFigma/furniture_img4.jpg" },
  { ten: "Sản phẩm 5", price: 30, image: "./assets/images/ImagesFigma/furniture_img5.jpg" },
  { ten: "Sản phẩm 6", price: 40, image: "./assets/images/ImagesFigma/furniture_img6.jpg" },
  { ten: "Sản phẩm 7", price: 5, image: "./assets/images/ImagesFigma/furniture_img7.jpg" },
  { ten: "Sản phẩm 8", price: 8, image: "./assets/images/ImagesFigma/furniture_img8.jpg" },
  { ten: "Sản phẩm 9", price: 11, image: "./assets/images/ImagesFigma/furniture_img1.jpg" },
  { ten: "Sản phẩm 10", price: 15, image: "./assets/images/ImagesFigma/furniture_img5.jpg" },
];

function hienThiSanPham() {
  const danhSachSanPham = document.querySelector(".products-list");
  danhSachSanPham.innerHTML = "";
  sanPham.forEach((sp) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <div class="row products-list">
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="card-item">
                    <div class="product-img">
                        <a href="#">
                          <img src="${sp.image}" alt="">
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
                      <h6 class="pro-title">${sp.ten}</h6>
                      <div class="product-price">
                        <span class="price">$${sp.price}</span>
                        <del>$55.00</del>
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
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="card-item">
                    <div class="product-img">
                        <a href="#">
                          <img src="${sp.image}" alt="">
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
                      <h6 class="pro-title">${sp.ten}</h6>
                      <div class="product-price">
                        <span class="price">$${sp.price}</span>
                        <del>$55.00</del>
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
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="card-item">
                    <div class="product-img">
                        <a href="#">
                          <img src="${sp.image}" alt="">
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
                      <h6 class="pro-title">${sp.ten}</h6>
                      <div class="product-price">
                        <span class="price">$${sp.price}</span>
                        <del>$55.00</del>
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
                </div>
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="card-item">
                    <div class="product-img">
                        <a href="#">
                          <img src="${sp.image}" alt="">
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
                      <h6 class="pro-title">${sp.ten}</h6>
                      <div class="product-price">
                        <span class="price">$${sp.price}</span>
                        <del>$55.00</del>
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
                </div>     
        </div>`;
    danhSachSanPham.append(cartItem);
  });
}


function sapXepSanPham(price) {
  if (price === "thap") {
    sanPham.sort((a, b) => a.price - b.price);
  } else if (price === "cao") {
    sanPham.sort((a, b) => b.price - a.price);
  }
  hienThiSanPham();
}

const selectGia = document.getElementById("gia");
selectGia.addEventListener("change", function () {
  sapXepSanPham(this.value);
});


