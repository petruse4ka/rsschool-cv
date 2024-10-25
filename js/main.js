/* Slider*/

const slider = document.querySelector('.projects-list');
const sliderItems = document.querySelectorAll('.projects-item');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

let currentIndex = 0;
let itemWidth = sliderItems[0].offsetWidth;

function updateItemWidth() {
  itemWidth = sliderItems[0].offsetWidth;
  slider.scrollLeft = currentIndex * itemWidth;
}

function updateButtonStates() {
  scrollLeftButton.classList.toggle('disabled', currentIndex === 0);
  scrollRightButton.classList.toggle('disabled', currentIndex >= sliderItems.length - 2);
}

scrollLeftButton.addEventListener('click', () => {
  currentIndex--;
  slider.scrollLeft = currentIndex * itemWidth;
  updateButtonStates();
});

scrollRightButton.addEventListener('click', () => {
  currentIndex++;
  slider.scrollLeft = currentIndex * itemWidth;
  updateButtonStates();
});

window.addEventListener('resize', () => {
  updateItemWidth();
});

updateButtonStates();