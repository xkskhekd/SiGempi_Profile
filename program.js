document.addEventListener('DOMContentLoaded', () => {
  // --- Logika untuk Animasi Stagger Berita ---
  const newsItems = document.querySelectorAll('.news-item');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  newsItems.forEach((item) => {
    observer.observe(item);
  });

  // --- Logika untuk Video Lightbox ---
  const videoCard = document.querySelector('.video-card');
  const lightbox = document.querySelector('.lightbox-modal');
  const lightboxVideo = lightbox.querySelector('video');
  const closeBtn = lightbox.querySelector('.close-btn');

  videoCard.addEventListener('click', () => {
    const videoSrc = videoCard.dataset.videoSrc;
    lightboxVideo.src = videoSrc;
    lightboxVideo.play();
    lightbox.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightbox.classList.remove('show');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightbox.classList.remove('show');
    }
  });
});
