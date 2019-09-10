var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var map = document.querySelector(".contacts__map");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

map.classList.remove("contacts__map--nojs");


(function() {
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".overlay");
  var modalBtns = document.querySelectorAll(".top-item__order");

  if (modal && overlay && modalBtns) {
    modalBtns = Array.prototype.slice.call(modalBtns);

    var closeModal = function() {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
      if (overlay.classList.contains("overlay--show")) {
        overlay.classList.remove("overlay--show");
      }
    }

    modalBtns.forEach(function(elem) {
      elem.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
        overlay.classList.add("overlay--show");
      });
    });

    overlay.addEventListener("click", closeModal);

    modal.addEventListener("click", function(evt) {
      evt.stopPropagation();
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        closeModal();
      }
    });
  }
})();


(function() {
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".overlay");
  var modalBtns2 = document.querySelectorAll(".product__button");

  if (modal && overlay && modalBtns2) {
    modalBtns2 = Array.prototype.slice.call(modalBtns2);

    var closeModal = function() {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
      if (overlay.classList.contains("overlay--show")) {
        overlay.classList.remove("overlay--show");
      }
    }

    modalBtns2.forEach(function(elem) {
      elem.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.add("modal--show");
        overlay.classList.add("overlay--show");
      });
    });

    overlay.addEventListener("click", closeModal);

    modal.addEventListener("click", function(evt) {
      evt.stopPropagation();
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        closeModal();
      }
    });
  }
})();
