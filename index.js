const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slider.querySelector('testimony').clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 3) {
    currentIndex++;
    showSlide(currentIndex);
  }
});
