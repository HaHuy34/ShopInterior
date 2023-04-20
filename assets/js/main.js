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
