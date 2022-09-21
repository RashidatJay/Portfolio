let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menu.onclick = function () {
  navbar.classList.toggle("active");
};
window.onscroll = function () {
  navbar.classList.remove("active");
};
let sunmode = document.querySelector("#sun-time");

sunmode.onclick = function () {
  if (sunmode.classList.contains("bx-sun")) {
    sunmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.add("active");
    document.querySelector(".link-to-abtme").style.color = "#222";
  } else {
    sunmode.classList.replace("bx-moon", "bx-sun");
    document.querySelector(".link-to-abtme").style.color = "#fff";
    document.body.classList.remove("active");
  }
};

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 120;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
