document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const hero = document.querySelector('.hero');

  // Mostrar el banner solo si no se ha aceptado aún
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.remove('hidden');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
  });

  if (hero) {
    const handleParallax = () => {
      const offset = window.scrollY * 0.12;
      hero.style.setProperty('--hero-parallax', `${offset}px`);
    };

    handleParallax();
    window.addEventListener('scroll', handleParallax, { passive: true });
  }
});
