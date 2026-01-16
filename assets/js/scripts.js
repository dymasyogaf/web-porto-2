// ========================================
// PORTOFOLIO PASTEL - SCRIPTS.JS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  const forceTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
    setTimeout(() => window.scrollTo(0, 0), 50);
  };

  forceTop();
  window.addEventListener('load', forceTop, { once: true });
  window.addEventListener('pageshow', forceTop);

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const grid = document.getElementById('projectGrid');
  const gridBtn = document.getElementById('gridBtn');
  const masonryBtn = document.getElementById('masonryBtn');

  const setMasonryColumns = () => {
    if (!grid) return;
    grid.style.columnCount = 1;
    if (window.innerWidth >= 640) grid.style.columnCount = 2;
    if (window.innerWidth >= 1024) grid.style.columnCount = 3;
  };

  if (grid && gridBtn && masonryBtn) {
    gridBtn.addEventListener('click', () => {
      grid.style.columnCount = '';
      grid.style.columnGap = '';
      grid.className = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';
      [...grid.children].forEach((card) => {
        card.style.breakInside = '';
        card.style.marginBottom = '';
      });
    });

    masonryBtn.addEventListener('click', () => {
      grid.className = 'gap-6';
      grid.style.columnGap = '1.5rem';
      setMasonryColumns();
      [...grid.children].forEach((card) => {
        card.style.breakInside = 'avoid';
        card.style.marginBottom = '1.5rem';
      });
    });

    window.addEventListener('resize', () => {
      if (grid.className === 'gap-6') {
        setMasonryColumns();
      }
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });
  }

  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (contactForm && formNote) {
    contactForm.addEventListener('submit', () => {
      formNote.textContent = 'Terima kasih! Pesanmu sudah terkirim.';
      formNote.style.color = '#2f8f84';
    });
  }
});
