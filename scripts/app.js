window.addEventListener("DOMContentLoaded", () => {
  // Отключение скролла на странице
  const scrollOff = () => (document.body.style.overflow = "hidden");

  // Включение скролла на странице
  const scrollOn = () => (document.body.style.overflow = "");

  const showModalWindow = (el) => {
    el.classList.add("active");
    scrollOff();
  };

  const hideModalWindow = (el) => {
    el.classList.remove("active");
    scrollOn();
  };

  const modalWindow = (el, hideSelector, showSelector) => {
    const modalWindow = document.querySelector(el),
      modalHideElements = document.querySelectorAll(hideSelector),
      modalShowElements = document.querySelectorAll(showSelector);

    modalWindow.addEventListener("click", (event) => event.target === modalWindow && hideModalWindow(modalWindow));
    modalHideElements.forEach((el) => el.addEventListener("click", () => hideModalWindow(modalWindow)));
    modalShowElements.forEach((el) => el.addEventListener("click", () => showModalWindow(modalWindow)));
  };
  modalWindow("#modal", ".js-closeWindow", ".js-showWindow");
});
