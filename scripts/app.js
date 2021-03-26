// Ждем пока строиться DOM
window.addEventListener("DOMContentLoaded", () => {
  const currentSlideCounter = document.querySelector(".hero-slider--currentCounter");

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

  const changeCounter = (el, slider) => {
    let currentSlide = slider.realIndex + 1;
    el.textContent = currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
  };

  heroSlider.on("beforeInit", function () {
    changeCounter(currentSlideCounter, heroSlider);
  });

  heroSlider.on("slideChange", function () {
    changeCounter(currentSlideCounter, heroSlider);
  });
});
