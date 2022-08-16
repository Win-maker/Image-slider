// dom selectors
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const images = Array.from(document.querySelectorAll(".slider img"));

previous.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

let index = 0;

// Previous Slider Function
function prevSlide() {
  images[index].classList.remove("active");
  if (index === 0) {
    index = images.length - 1;
    images[index].classList.add("active");
  } else {
    index--;
    images[index].classList.add("active");
  }
}

// Next Slider Function
function nextSlide() {
  if (index === images.length - 1) {
    index = 0;
    images[index].classList.add("active");
  } else {
    index++;
    images[index].classList.add("active");
  }
}

setInterval(nextSlide, 2000);
