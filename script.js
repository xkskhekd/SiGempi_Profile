// Clone Scroll Content

const scrollContents = document.querySelectorAll('.scroll-content');

scrollContents.forEach((scrollContent) => {
  const items = Array.from(scrollContent.children);

  // Gandakan semua item untuk animasi infinite
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    scrollContent.appendChild(clone);
  });
});

//Inisialisasi SwiperJS

if (window.innerWidth <= 768) {
  new Swiper('.swiper-container', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
  });
}

// Auto duplicate isi grid agar scroll tidak berhenti
const grid = document.getElementById('scrollGrid');
const items = Array.from(grid.children);
items.forEach((item) => {
  const clone = item.cloneNode(true);
  grid.appendChild(clone);
});

//Pagination Program
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
