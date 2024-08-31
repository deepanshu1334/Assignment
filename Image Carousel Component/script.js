// getting  carousel elements
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const indicators = document.querySelectorAll('.indicator');


let slideIndex = 0;

// Show current slide and update indicators
function showSlide(index) {
  // Calculate the translateX value to shift slides
  const offset = -index * 100;
  document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;

  // Updating  the indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Showing  the next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Show the previous slide
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Set up event listeners
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

// Initialize carousel
showSlide(slideIndex);
