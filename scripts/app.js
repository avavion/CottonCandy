// Ждем пока строиться DOM
window.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<meta property="og:url" content="${location.protocol}//${location.hostname}/" />`
  );
  console.log(document.head);
});
