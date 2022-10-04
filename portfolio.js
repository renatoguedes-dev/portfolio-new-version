const slider = document.querySelector(".project-slider");

if (window.innerWidth > 650) {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    grabCursor: true,
  });
}

if (window.innerWidth <= 650) {
  let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


if (slider && window.innerWidth > 650) {
  slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
}
