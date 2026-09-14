(function injectWhatsAppButton() {
  if (document.querySelector('.whatsapp-float')) return; // Duplicate buttons rokne ke liye

  // 1. WhatsApp Button HTML Element Banana
  const waBtn = document.createElement('a');
  waBtn.className = 'whatsapp-float';
  waBtn.href = 'https://wa.me/919510896157?text=Hi%20Vadodara%20Broadband,%20I%20want%20to%20know%20more%20about%20your%20services!';
  waBtn.target = '_blank';
  waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
  waBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>`;

  // 2. CSS Styling Automatically Inject Karna
  const style = document.createElement('style');
  style.innerHTML = `
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #25d366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 25px rgba(37, 211, 102, 0.5);
      z-index: 9999;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 0 35px rgba(37, 211, 102, 0.8);
    }
  `;

  // 3. Document me Inject Karna
  document.head.appendChild(style);
  document.body.appendChild(waBtn);
})();
