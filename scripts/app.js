// Ждем пока строиться DOM
window.addEventListener("DOMContentLoaded", () => {
  // Вывод индекса текущего сладйа
  /*
   ** Принимает el - элемент, где изменяем текст;
   ** slider - слайдер к которому привязываем;
   */

  const changeCounter = (el, slider) => {
    const currentSlide = slider.realIndex + 1;
    el.textContent = currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
  };

  // Секция Hero
  const heroSlideCounter = document.querySelector(".hero-slider--currentCounter"); // Счётчик
  const heroSlider = new Swiper("#header-slider", {
    loop: false,
    speed: 2500,
    init: true,
    autoplay: {
      delay: 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
  });

  heroSlider.on("beforeInit", () => changeCounter(heroSlideCounter, heroSlider));
  heroSlider.on("slideChange", () => changeCounter(heroSlideCounter, heroSlider));

  // Слайдер галлереи
  const gallerySlider = new Swiper("#gallery-slider", {
    loop: false,
    speed: 2500,
    init: true,
    parallax: true,
    spaceBetween: 5,
    autoplay: {
      delay: 5000,
    },
  });

  gallerySlider.on("beforeInit", () => changeCounter(heroSlideCounter, gallerySlider));
  gallerySlider.on("slideChange", () => changeCounter(heroSlideCounter, gallerySlider));
});
