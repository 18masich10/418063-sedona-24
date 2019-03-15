var link = document.querySelector(".button-apointment");

var popup = document.querySelector(".modal-apointment");

var close = popup.querySelector(".button-apointment");

var form = document.querySelector("form");

var date = popup.querySelector("[name=text]");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!date.value || !number.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("date", date.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


