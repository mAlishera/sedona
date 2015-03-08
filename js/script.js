var find = document.querySelector(".find");
var main = document.querySelector(".main-form");
var close = document.querySelector(".link-author");
var form = main.querySelector("form");
var check = form.querySelector("[name='check-in-date']");

find.addEventListener("click", function(event) {
  event.preventDefault();
  main.classList.add("main-form-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    main.classList.remove("main-form-show");
  });

  check.focus();

  form.addEventListener("submit", function(event) {
    if (!(check.value)) {
      event.preventDefault();
      main.classList.remove("modal-error");
      main.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (main.classList.contains("main-form-show")) {
        main.classList.remove("main-form-show");
      }
    }
  });