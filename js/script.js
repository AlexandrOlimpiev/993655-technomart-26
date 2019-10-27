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
var closeСontactWindow = contactWindow.querySelector(".modal-close-btn")
var nameField = contactWindow.querySelector("[name=name]");
var emailField = contactWindow.querySelector("[name=email]");
var messageField = contactWindow.querySelector("[name=message]");
var form = contactWindow.querySelector("form");
var isStorageSupport = true;
var storage1 = "";
var storage2 = "";
  
try {
  storage1 = localStorage.getItem("name");
  storage2 = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactWindow.classList.remove("hidden");
  if (storage1&&storage2) {
    nameField.value = storage1;
    emailField.value = storage2;
    messageField.focus();
  } else {
    nameField.focus();
  }  
});

closeСontactWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactWindow.classList.add("hidden");
  contactWindow.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!contactWindow.classList.contains("hidden")) {
      contactWindow.classList.add("hidden");
      contactWindow.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    contactWindow.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

