let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");
menu.onclick = function () {
  navbar.classList.toggle("active");
};

let darkmode = document.querySelector("#sun-time");

darkmode.onclick = function () {
  if (darkmode.classList.contains("bx-sun")) {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.remove("active");
  }
};
