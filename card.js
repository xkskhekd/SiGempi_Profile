const isMobile = window.matchMedia('(max-width: 768px)').matches;

const cards = document.querySelectorAll('.card'); // elemen card (desktop)
const cardInners = document.querySelectorAll('.card-inner'); // elemen card-inner (mobile)

if (!isMobile) {
  // Desktop toggle class active pada .card
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  const timSection = document.querySelector('#tim');
  timSection.addEventListener('mouseleave', () => {
    cards.forEach((card) => card.classList.remove('active'));
  });
} else {
  // Mobile toggle class flipped pada .card-inner
  cardInners.forEach((cardInner) => {
    cardInner.addEventListener('click', () => {
      cardInner.classList.toggle('flipped');
    });
  });

  // Jika perlu reset saat mouse keluar, bisa juga tambahkan (tapi biasanya di mobile ga perlu)
  /*
  const timSection = document.querySelector('#tim');
  timSection.addEventListener('mouseleave', () => {
    cardInners.forEach(cardInner => cardInner.classList.remove('flipped'));
  });
  */
}
