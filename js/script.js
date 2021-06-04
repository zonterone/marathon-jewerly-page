window.onload = function () {
  document
    .querySelector(".menu__burger")
    .addEventListener("click", function () {
      document.querySelector(".menu__burger").classList.toggle("open");
        document.querySelector(".hidden-menu").classList.toggle("hidden-menu-active");
document.querySelector("body").classList.toggle("scroll-off");
document.querySelector(".header__logo a").classList.toggle("header__logo--white");
document.querySelector(".header__wrap").classList.toggle("header-open");
      });
    }