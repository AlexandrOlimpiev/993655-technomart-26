// Карта
var mapLink = document.querySelector(".bigmap-link");
var map = document.querySelector(".bigmap");

if (mapLink) {
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
}

//Модальное окно добавления товара
var basketLinks = Array.prototype.slice.call(document.querySelectorAll(".buy-btn"));
var basketWindow = document.querySelector(".modal-basket");
var closeBasketWindow = basketWindow.querySelector(".modal-close-btn");

basketLinks.forEach(function (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketWindow.classList.remove("hidden");
  });
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
var isStorageSupport = true;
var storage1 = "";
var storage2 = "";

if (contactLink) {
  var closeСontactWindow = contactWindow.querySelector(".modal-close-btn")
  var nameField = contactWindow.querySelector("[name=name]");
  var emailField = contactWindow.querySelector("[name=email]");
  var messageField = contactWindow.querySelector("[name=message]");
  var form = contactWindow.querySelector("form");

  try {
    storage1 = localStorage.getItem("name");
    storage2 = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactWindow.classList.remove("hidden");
    if (storage1 && storage2) {
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
      contactWindow.classList.remove("modal-error");
      contactWindow.offsetWidth = contactWindow.offsetWidth;
      contactWindow.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", nameField.value);
        localStorage.setItem("email", emailField.value);
      }
    }
  });
}

// Рекламный слайдер
var slider = document.querySelector(".promo-slider");

if (slider) {
  var firstSlider = slider.querySelector(".slider-first");
  var secondSlider = slider.querySelector(".slider-second");
  var firstButton = slider.querySelector(".first-bottom-btn");
  var secondButton = slider.querySelector(".second-bottom-btn");
  var reightButton = slider.querySelector(".reight-side-btn");
  var leftButton = slider.querySelector(".left-side-btn");

  firstButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (firstSlider.classList.contains("hidden")) {
      secondButton.classList.remove("active");
      firstButton.classList.add("active");
      firstSlider.classList.remove("hidden");
      secondSlider.classList.add("hidden");
    }
  });

  secondButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (secondSlider.classList.contains("hidden")) {
      firstButton.classList.remove("active");
      secondButton.classList.add("active");
      secondSlider.classList.remove("hidden");
      firstSlider.classList.add("hidden");
    }
  });

  leftButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (firstSlider.classList.contains("hidden")) {
      secondButton.classList.remove("active");
      firstButton.classList.add("active");
      firstSlider.classList.remove("hidden");
      secondSlider.classList.add("hidden");
    }
  });

  reightButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (secondSlider.classList.contains("hidden")) {
      firstButton.classList.remove("active");
      secondButton.classList.add("active");
      secondSlider.classList.remove("hidden");
      firstSlider.classList.add("hidden");
    }
  });
}

// Слайдер сервисов
var services = document.querySelector(".services");

if (services) {
  var deliveryButton = services.querySelector(".slider-delivery-btn");
  var guaranteeButton = services.querySelector(".slider-guarantee-btn");
  var creditButton = services.querySelector(".slider-credit-btn");
  var deliverySlider = services.querySelector(".slider-delivery");
  var guaranteeSlider = services.querySelector(".slider-guarantee");
  var creditSlider = services.querySelector(".slider-credit");

  deliveryButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!deliveryButton.classList.contains("active")) {
      if (guaranteeButton.classList.contains("active")) {
        guaranteeButton.classList.remove("active");
        guaranteeSlider.classList.add("hidden");
      };
      if (creditButton.classList.contains("active")) {
        creditButton.classList.remove("active");
        creditSlider.classList.add("hidden");
      };
      deliveryButton.classList.add("active");
      deliverySlider.classList.remove("hidden");
    };
  });

  guaranteeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!guaranteeButton.classList.contains("active")) {
      if (deliveryButton.classList.contains("active")) {
        deliveryButton.classList.remove("active");
        deliverySlider.classList.add("hidden");
      };
      if (creditButton.classList.contains("active")) {
        creditButton.classList.remove("active");
        creditSlider.classList.add("hidden");
      };
      guaranteeButton.classList.add("active");
      guaranteeSlider.classList.remove("hidden");
    };
  });

  creditButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!creditButton.classList.contains("active")) {
      if (guaranteeButton.classList.contains("active")) {
        guaranteeButton.classList.remove("active");
        guaranteeSlider.classList.add("hidden");
      };
      if (deliveryButton.classList.contains("active")) {
        deliveryButton.classList.remove("active");
        deliverySlider.classList.add("hidden");
      };
      creditButton.classList.add("active");
      creditSlider.classList.remove("hidden");
    };
  });
}
