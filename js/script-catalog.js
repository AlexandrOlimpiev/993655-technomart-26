//Модальное окно добавления товара
var basketLink = document.querySelector(".buy-btn");
var basketWindow = document.querySelector(".modal-basket");
var closeBasketWindow = basketWindow.querySelector(".modal-close-btn"); 

basketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketWindow.classList.remove("hidden");
});

closeBasketWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketWindow.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!basketWindow.classList.contains("hidden")) {
      basketWindow.classList.add("hidden");
    }
  }
});