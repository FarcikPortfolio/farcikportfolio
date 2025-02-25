document.addEventListener("DOMContentLoaded", () => {
  // Funkce pro live odběratele
  function updateSubscriberCount() {
    // Tady by mohl být API request pro zjištění aktuálního počtu odběratelů
    let subscriberCount = Math.floor(Math.random() * 1000);  // Pro příklad generujeme náhodné číslo
    document.getElementById('subscriberCount').textContent = `Live odběratelé: ${subscriberCount}`;
  }

  // Volání funkce pro live odběratele každých 5 sekund
  setInterval(updateSubscriberCount, 5000);

  // Zvětšení a změna barvy při najetí myší
  const instagramLogo = document.querySelector('.instagram-link img');
  instagramLogo.addEventListener('mouseenter', () => {
    instagramLogo.style.transform = 'scale(1.2)';
    instagramLogo.style.filter = 'hue-rotate(60deg)';
  });
  instagramLogo.addEventListener('mouseleave', () => {
    instagramLogo.style.transform = 'scale(1)';
    instagramLogo.style.filter = 'none';
  });
});
