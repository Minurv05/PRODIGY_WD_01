let nav1 = document.querySelector(".nav1 a");
let nav2 = document.querySelector(".nav2 a");
let nav3 = document.querySelector(".nav3 a");
let nav = document.querySelector(".nav");
nav1.classList.add("navAfter");
nav2.classList.add("navAfter");
nav3.classList.add("navAfter");

let header = document.querySelector(".header");
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.style.backgroundColor = "rgb(183, 189, 197)";

    }
    else {
        header.style.backgroundColor = "rgb(185, 208, 247)";
    }
});

let i = document.querySelector("#bar");
let nb = document.querySelector(".nb");

const toggle = () => {
    i.addEventListener("click", () => {
        if (nb.style.display === "block") {
            nb.style.display = "none";
        } else {
            nb.style.display = "block";
        }
    });
};

toggle();