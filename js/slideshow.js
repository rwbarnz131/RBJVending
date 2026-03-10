let slideIndex = 0;
let slideTimer;

// initialize to first slide when page loads
window.addEventListener('load', () => {
  showSlides(1);
});

function plusSlides(n) {
  // manual navigation should reset timer and advance relative
  clearTimeout(slideTimer);
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // determine new index
  if (typeof n === 'number') {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove active class from dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // show current slide and highlight dot if present
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].className += " active";
  }

  // restart timer for automatic advance
  slideTimer = setTimeout(showSlides, 4000);
}