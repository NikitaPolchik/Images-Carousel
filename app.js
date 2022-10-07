const carouselBox = document.querySelector(".carousel-box");
const carouselImages = document.querySelectorAll(".carousel-box img");

//buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselBox.style.transform = "translateX(" + -size * counter + "px)";

//button listeners

nextBtn.addEventListener("click", () => {
  carouselBox.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselBox.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  carouselBox.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselBox.style.transform = "translateX(" + -size * counter + "px)";
});
// !!!
carouselBox.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselBox.style.transition = "none";
    counter = carouselBox.lenght - 2;
  }
});
//!!!
