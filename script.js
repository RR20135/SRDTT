
document.addEventListener("DOMContentLoaded", () => {
  // Onglet initial affiché
  showTab('Entrainements');

  // Initialiser tous les carrousels
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const caption = carousel.querySelector('.caption');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    let currentIndex = 0;
    const total = items.length;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;

      // Mettre à jour la légende
      const captionText = items[currentIndex].getAttribute('data-caption') || '';
      caption.textContent = captionText;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % total;
      updateCarousel();
    });

    updateCarousel(); // affichage initial

    // Défilement auto toutes les 5 secondes
    setInterval(() => {
      currentIndex = (currentIndex + 1) % total;
      updateCarousel();
    }, 4000);
  });
});

// Fonction pour gérer les onglets
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(sec => sec.style.display = 'none');
  const tab = document.getElementById(tabId);
  if (tab) tab.style.display = 'block';
}

  // gerer le menu sur petit ecran
  const menuToggle = document.getElementById('mobile-menu');
  const nav = document.querySelector('nav');
  const menuItems = document.querySelectorAll('.menu-box button');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // ouvre/ferme le menu
});

// Fermer le menu lorsqu'on clique sur un item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});