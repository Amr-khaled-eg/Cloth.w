export const startObserver = (
  cb,
  options = {
    threshold: 0.25,
    rootMargin: "0px",
  }
) => {
  const observer = new IntersectionObserver((entries, observer) => {
    for (let i = 1; i < entries.length; i++) {
      cb(entries[i], observer);
    }
  }, options);
  return {
    observe: (element) => {
      element && observer.observe(element);
    },
    unObserve: (element) => {
      element && observer.unObserve(element);
    },
  };
};
