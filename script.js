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

ScrollReveal().reveal(".scroll1", { delay: 250 });
ScrollReveal().reveal(".scroll2", { delay: 500 });
ScrollReveal().reveal(".scroll3", { delay: 1000 });
ScrollReveal().reveal(".scroll4", { delay: 1250 });
ScrollReveal().reveal(".scroll5", { delay: 1500 });
ScrollReveal().reveal(".scroll6", { delay: 2000 });
ScrollReveal().reveal(".scroll7", { delay: 2250 });
ScrollReveal().reveal(".scroll8", { delay: 2500 });
ScrollReveal().reveal(".scroll9", { delay: 2750 });
ScrollReveal().reveal(".scroll10", { delay: 3000 });
ScrollReveal().reveal(".scroll11", { delay: 3250 });
ScrollReveal().reveal(".scroll12", { delay: 3500 });
