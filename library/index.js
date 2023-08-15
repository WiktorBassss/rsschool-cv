console.log("1. 22/n 2.  8/n 3. 0");

const hamburger = document.querySelector(".hamburger");

const bNavMenu = document.querySelector(".bnav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  bNavMenu.classList.toggle("active");
});

document.querySelectorAll(".bnav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    bNavMenu.classList.remove("active");
  })
);
