"use string";
import "./style.css";

let viewport = document.getElementById("viewport").offsetWidth;
let slider = document.querySelector("div.slider");

const btn = document.getElementsByClassName("material-icons");

let btnView = 0;
btn[0].style.color = "blue";

const clickBtn = (e) => {
  if (e.target.tagName == "I") {
    for (let el of btn) {
      el.style.color = "black";
    }

    e.target.style.color = "blue";

    switch (e.target.id) {
      case "home":
        btnView = 0;
        break;
      case "store":
        btnView = 1;
        break;
      case "cart":
        btnView = 2;
        break;

      default:
        btnView = 0;
        break;
    }
    slider.style.left = -btnView * viewport + "px";
  }
};

document.addEventListener("click", clickBtn);
