 function openModal() {
    document.getElementById('loginModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('loginModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('loginModal')) closeModal();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Show mobile login btn
  const ml = document.getElementById('mob-login');
  if (window.innerWidth <= 768) ml.style.display = 'inline-block';
  window.addEventListener('resize', () => {
    ml.style.display = window.innerWidth <= 768 ? 'inline-block' : 'none';
  });