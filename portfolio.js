const scrollContainer = document.querySelector(".project-slider");
const slider = document.querySelector(".project-slider");
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // stop the function from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;
    slider.scrollLeft = scrollLeft - walk;
  });
}

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}
