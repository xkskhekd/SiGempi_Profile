// ===== Efek teks "Loading..." dinamis =====
const loadingText = document.querySelector('.loading-text');
let dots = 0;
setInterval(() => {
  dots = (dots + 1) % 4;
  loadingText.textContent = 'Loading' + '.'.repeat(dots);
}, 500);

// ===== Efek partikel bintang =====
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 2;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    this.opacity = 1;
    this.fade = 0.01 + Math.random() * 0.02;
    this.color = this.randomColor();
  }

  randomColor() {
    const colors = ['#d47e27', '#ffd8a6', '#ffffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  drawStar(x, y, radius, spikes, color, opacity) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.globalAlpha = opacity;
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < spikes; i++) {
      ctx.rotate(Math.PI / spikes);
      ctx.lineTo(0, 0 - radius * 0.5);
      ctx.rotate(Math.PI / spikes);
      ctx.lineTo(0, 0 - radius);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= this.fade;
    if (this.opacity <= 0) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.opacity = 1;
    }
  }

  draw() {
    this.drawStar(this.x, this.y, this.size, 5, this.color, this.opacity);
  }
}

// Buat partikel awal
for (let i = 0; i < 50; i++) {
  particles.push(new Particle());
}

// Loop animasi
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// ===== Simulasi loading selesai =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';

    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';

      // ===== Jalankan audio setelah klik pertama =====
      if (!localStorage.getItem('visited')) {
        const audio = document.getElementById('welcome-audio');
        const playAudioOnce = () => {
          audio.volume = 0;
          audio
            .play()
            .then(() => {
              let fade = setInterval(() => {
                if (audio.volume < 1) {
                  audio.volume = Math.min(audio.volume + 0.05, 1);
                } else {
                  clearInterval(fade);
                }
              }, 200);
              localStorage.setItem('visited', 'true');
            })
            .catch(() => {
              console.log('Autoplay diblokir browser.');
            });
          document.removeEventListener('click', playAudioOnce);
        };
        document.addEventListener('click', playAudioOnce);
      }
    }, 1000); // fade-out selesai
  }, 2000); // durasi loading
});
