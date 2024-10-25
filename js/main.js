/* Slider buttons */

const slider = document.querySelector('.projects-list');
const sliderItem = document.querySelector('.projects-item')
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

scrollLeftButton.addEventListener('click', () => {
  slider.scrollLeft -= (1.5 * sliderItem.offsetWidth);
});

scrollRightButton.addEventListener('click', () => {
  slider.scrollLeft += (1.5 * sliderItem.offsetWidth);
});