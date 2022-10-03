const slider = document.querySelector(".project-slider");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  freeMode: true,
  grabCursor: true,
});

if (slider) {
  slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
}
