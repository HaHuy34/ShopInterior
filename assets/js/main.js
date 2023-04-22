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

//slide Trending Items
$('.trending-items').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.trending-items').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.trending-items').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
