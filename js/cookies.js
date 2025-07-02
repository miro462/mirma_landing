document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  // Mostrar el banner solo si no se ha aceptado aún
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.remove('hidden');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
  });
});