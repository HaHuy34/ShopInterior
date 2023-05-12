// Todo: Loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut;

//todo: Close and Open Search
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
function changeImage(img) {
  var mainImage = document.getElementById("myimage");
  mainImage.src = img.src;
}

//Todo:HoverScaleImagemain
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
// Initiate zoom effect:
imageZoom("myimage", "myresult");

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
  autoplayTimeout: 3000,
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

// Todo: Click Color
const colorSpans = document.querySelectorAll(".choose-color");

colorSpans.forEach((colorSpan) => {
  colorSpan.addEventListener("click", () => {
    colorSpans.forEach((otherSpan) => {
      if (otherSpan !== colorSpan) {
        otherSpan.classList.remove("selected");
        otherSpan.innerHTML = "";
      }
    });
    colorSpan.classList.add("selected");
    colorSpan.innerHTML = "&#10003;";
  });
});