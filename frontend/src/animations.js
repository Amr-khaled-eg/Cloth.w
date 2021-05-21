const addSlideIn = () => {
  document.querySelector(".animation").classList.add("animate");
};
const removeSlideIn = () => {
  setTimeout(() => {
    document.querySelector(".animation").classList.remove("animate");
  }, 1500);
};
export { addSlideIn, removeSlideIn };
