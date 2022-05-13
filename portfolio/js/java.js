const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    //navbar
    nav.classList.toggle("nav-active");

    //animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.7s ease-out forwards ${
          index / 3 + 0.6
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
