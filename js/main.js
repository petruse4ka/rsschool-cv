/* Slider */

const slider = document.querySelector('.projects-list');
const sliderItems = document.querySelectorAll('.projects-item');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

let currentIndex = 0;
let itemWidth = 0;

function updateItemWidth() {
  if (sliderItems.length > 0) {
    const rect = sliderItems[0].getBoundingClientRect();
    itemWidth = rect.width;
    slider.scrollLeft = currentIndex * itemWidth;
  }
}

function updateButtonStates() {
  if (scrollLeftButton && scrollRightButton) {
    const isMobile = window.innerWidth <= 1280;
    const maxIndex = isMobile ? sliderItems.length - 1 : sliderItems.length - 2;
    
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
      slider.scrollLeft = currentIndex * itemWidth;
    }
    
    scrollLeftButton.classList.toggle('disabled', currentIndex === 0);
    scrollRightButton.classList.toggle('disabled', currentIndex >= maxIndex);
  }
}

function scrollToIndex(index) {
  const isMobile = window.innerWidth <= 1280;
  const maxIndex = isMobile ? sliderItems.length - 1 : sliderItems.length - 2;

  currentIndex = Math.max(0, Math.min(index, maxIndex));
  const scrollPosition = currentIndex * itemWidth;
  slider.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
  updateButtonStates();
}

scrollLeftButton.addEventListener('click', () => {
  scrollToIndex(currentIndex - 1);
});

scrollRightButton.addEventListener('click', () => {
  scrollToIndex(currentIndex + 1);
});

window.addEventListener('load', () => {
  updateItemWidth();
  updateButtonStates();
});

window.addEventListener('resize', () => {
  updateItemWidth();
  updateButtonStates();
});

updateItemWidth();
updateButtonStates();

/* Code Examples */

const spoilers = document.querySelectorAll('.spoiler-title');

spoilers.forEach((spoiler) => {
  spoiler.addEventListener('click', () => {
    spoiler.classList.toggle('active');
    spoiler.nextElementSibling.classList.toggle('active');
  });
});

/* Experience Details */

document.querySelectorAll('.details-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const wrapper = button.closest('.details-wrapper');
    const responsibilities = wrapper.querySelector('.responsibilities');
    const toggleText = button.querySelector('.toggle-text');

    button.classList.toggle('active');
    responsibilities.classList.toggle('active');

    // Update text content
    toggleText.textContent = button.classList.contains('active')
      ? 'Hide details'
      : 'Show details';
  });
});

/* Burger Menu */

const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function openMobileMenu() {
  burgerMenu.classList.toggle('active');
  mobileMenuOverlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

function closeMobileMenu() {
  burgerMenu.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
  document.body.classList.remove('menu-open');
}

burgerMenu.addEventListener('click', openMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

mobileMenuOverlay.addEventListener('click', (e) => {
  if (e.target === mobileMenuOverlay) {
    closeMobileMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
    closeMobileMenu();
  }
});

window.addEventListener('resize', () => {
  if (
    window.innerWidth > 1280 &&
    mobileMenuOverlay.classList.contains('active')
  ) {
    closeMobileMenu();
  }
});
