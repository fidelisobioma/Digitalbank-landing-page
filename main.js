const wrapper = document.querySelector(".wrapper");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  close.classList.remove("hidden");
  overlay.classList.add("displayModal");
  wrapper.classList.add("fixwrapper");
});

close.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  close.classList.add("hidden");
  overlay.classList.remove("displayModal");
  wrapper.classList.remove("fixwrapper");
});
