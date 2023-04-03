const navToggle = document.querySelector(".nav_toggle"),
  navMenu = document.querySelector(".nav_menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show_menu");
  navToggle.classList.toggle("active");
});

var typed = new Typed(".profession_text", {
  strings: ["FrontEnd Developer", "Computer Teacher"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

let date = document.getElementById("date");
date.innerText = new Date().getFullYear();

ScrollReveal().reveal(".scroll", { delay: 1000 });
