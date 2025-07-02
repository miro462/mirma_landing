document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');

  // Mostrar el banner solo si no hay decisión guardada
  const decision = localStorage.getItem('cookiesDecision');
  if (decision === 'accepted' || decision === 'rejected') {
    cookieBanner.classList.add('hidden');
  } else {
    cookieBanner.classList.remove('hidden');
  }

  // Función para ocultar banner y guardar decisión
  function handleDecision(decision) {
    localStorage.setItem('cookiesDecision', decision);
    cookieBanner.classList.add('hidden');
  }

  acceptBtn.addEventListener('click', () => {
    handleDecision('accepted');
  });

  rejectBtn.addEventListener('click', () => {
    handleDecision('rejected');
  });
});