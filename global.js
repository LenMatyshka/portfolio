// Слайдер
document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.getElementById('sliderContainer');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  // Функция для обновления позиции слайдера
  function updateSlider() {
    const slideWidth = 100; // 100% на слайд
    const translateX = -currentSlide * slideWidth;
    sliderContainer.style.transform = `translateX(${translateX}%)`;
    
    // Обновляем активный слайд (опционально)
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
        slide.classList.add('active');
      }
    });
  }
  
  // Перейти к следующему слайду
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }
  
  // Перейти к предыдущему слайду
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }
  
  // Назначить обработчики событий на кнопки
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    prevSlide();
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    nextSlide();
  });
  
  // Добавляем поддержку клавиатуры
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      e.preventDefault();
    }
  });
  
  // Добавляем поддержку тач-свайпов для мобильных устройств
  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  sliderContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50; // Минимальное расстояние свайпа
    
    if (touchStartX - touchEndX > swipeThreshold) {
      // Свайп влево - следующий слайд
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Свайп вправо - предыдущий слайд
      prevSlide();
    }
  }
  
  // Инициализация слайдера
  updateSlider();
  
  // Добавляем класс active первому слайду
  slides[0].classList.add('active');
});
// Позиционирование WEB UI UX над SVG
function positionWebUIUX() {
  const svgElement = document.querySelector('img[src*="23_35.svg"]');
  const textContainer = document.getElementById('web-ui-ux-container');
  
  if (svgElement && textContainer) {
    const svgRect = svgElement.getBoundingClientRect();
    const containerRect = document.querySelector('#hero .relative').getBoundingClientRect();
    
    // Позиционируем текст над SVG
    const top = svgRect.top - containerRect.top + svgRect.height / 4;
    const left = svgRect.left - containerRect.left + svgRect.width / 3;
    
    textContainer.style.position = 'absolute';
    textContainer.style.top = `${top}px`;
    textContainer.style.left = `${left}px`;
    textContainer.style.zIndex = '20';
  }
}

// Вызываем при загрузке и изменении размера окна
document.addEventListener('DOMContentLoaded', function() {
  positionWebUIUX();
  window.addEventListener('resize', positionWebUIUX);
});