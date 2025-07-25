let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000);
}

// Immediately activate the first slide on load
window.addEventListener("load", () => {
  slides[0].classList.add("active");
  showSlides();
});
