let side = document.querySelector(".icon");
let ul = document.querySelector(".links ul");
let a = document.querySelectorAll("li a");
let div = document.querySelectorAll(".icon div");

let counter = 1;
side.onclick = () => {
  if (counter % 2 === 0) {
    ul.style.display = "none";
    counter++;
  } else {
    counter++;
    ul.style.display = "block";
  }
  if (getComputedStyle(ul).display === "block") {
    div[1].style.width = "23px";
  } else {
    div[1].style.width = "18px";
  }
};

a.forEach(function (e) {
  e.onclick = function () {
    ul.style.display = "none";
    div[1].style.width = "18px";
    counter++;
  };
});

let foot = document.querySelector("Footer p");

let datee = new Date();

let foot1 = foot.innerHTML.replace("2021", datee.getFullYear());

foot.innerHTML = foot1;
