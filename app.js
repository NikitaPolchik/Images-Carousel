const carouselBox = document.querySelector(".carousel-box");
const carouselImages = document.querySelectorAll(".carousel-box img");

//buttons
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size);
carouselBox.style.transform = "translateX(" + -size * counter + "px)";

//button listeners

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselBox.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselBox.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselBox.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselBox.style.transform = "translateX(" + -size * counter + "px)";
});

carouselBox.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselBox.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselBox.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselBox.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});
