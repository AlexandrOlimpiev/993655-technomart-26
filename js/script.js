// Карта
var mapLink = document.querySelector(".bigmap-link"); //Находим ссылку на карту
var map = document.querySelector(".bigmap"); //и разметку модальной карты
var closeMap = map.querySelector(".modal-close-btn"); //и кнопку закрытия

//По клику открываем карту
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("hidden");
});

//По нажатию клавиши или мышью - закрываем

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