// Карта
var mapLink = document.querySelector(".bigmap-link");
var map = document.querySelector(".bigmap");
var closeMap = map.querySelector(".modal-close-btn"); 

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("hidden");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!map.classList.contains("hidden")) {
      map.classList.add("hidden");
    }
  }
});

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

//Модальное окно сообщения
var contactLink = document.querySelector(".modal-contact-btn");
var contactWindow = document.querySelector(".modal-contact");
var closeСontactWindow = contactWindow.querySelector(".modal-close-btn"); 

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactWindow.classList.remove("hidden");
});

closeСontactWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactWindow.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!contactWindow.classList.contains("hidden")) {
      contactWindow.classList.add("hidden");
    }
  }
});