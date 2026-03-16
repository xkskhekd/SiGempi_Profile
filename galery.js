// Swiper initialization
document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical', // Set direction to vertical for desktop
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      loadOnTransitionStart: true,
      watchSlidesProgress: true,
    },
    speed: 800,
    effect: 'slide',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      769: {
        direction: 'vertical',
        slidesPerView: '3',
        spaceBetween: 25,
      },
      320: {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: true,
      },
    },
  });
});
