function NiceScroll() {
  let offset = 0,
    speed = 0.4,
    el = document.body;

  let args = Array.from(arguments);

  if (args.length === 1) {
    if (typeof args[0] === "string") {
      el = document.querySelector(args[0]);
    } else if (typeof args[0] === "number") {
      speed = args[0];
    } else {
      throw new Error("wrong arguments");
    }
  } else if (args.length === 2) {
    el = document.querySelector(args[0]);
    speed = args[1];
  }
  if (el === undefined) {
    throw new Error("The Element is undefined");
  } else if (speed > 1 || speed <= 0) {
    throw new Error("The Speed Should Be Between .1 and 1");
  } else {
    let height = el.getBoundingClientRect().height - 1;
    el.style.height = Math.floor(height) + "px";

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * (speed / 10);
      el.style.transform = `translateY(-${offset}px) translateZ(0)`;
      requestAnimationFrame(smoothScroll);
    };
    smoothScroll();
  }
}

export default NiceScroll;
