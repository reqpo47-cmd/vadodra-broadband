// Global Dynamic Modal Script for Vadodara Broadband

(function injectGlobalModal() {
  // 1. Inject CSS Styles Dynamic into Page Head
  const style = document.createElement('style');
  style.innerHTML = `
    .vb-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(3, 7, 18, 0.85);
      backdrop-filter: blur(14px);
      z-index: 9999;
      display: none;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .vb-modal-overlay.active {
      display: flex;
      animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    .vb-modal-card {
      background: linear-gradient(165deg, #0d1527 0%, #050b14 100%);
      border: 1px solid rgba(0, 242, 254, 0.35);
      box-shadow: 0 0 50px rgba(0, 242, 254, 0.15), 0 20px 40px rgba(0, 0, 0, 0.8);
      border-radius: 24px;
      max-width: 460px;
      width: 100%;
      padding: 32px 28px;
      position: relative;
      color: #f8fafc;
      font-family: 'Inter', -apple-system, sans-serif;
    }

    .vb-modal-close {
      position: absolute;
      top: 18px;
      right: 20px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #94a3b8;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
      transition: all 0.2s;
    }

    .vb-modal-close:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
      border-color: rgba(239, 68, 68, 0.4);
    }

    .vb-modal-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .vb-badge-pill {
      display: inline-block;
      background: rgba(0, 242, 254, 0.12);
      border: 1px solid rgba(0, 242, 254, 0.3);
      color: #00f2fe;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .vb-modal-title {
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 4px;
    }

    .vb-modal-subtitle {
      font-size: 13px;
      color: #94a3b8;
    }

    /* Trust Highlights Grid */
    .vb-trust-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 20px;
    }

    .vb-trust-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      padding: 8px;
      text-align: center;
    }

    .vb-trust-item strong {
      display: block;
      font-size: 11px;
      color: #00f2fe;
      margin-bottom: 2px;
    }

    .vb-trust-item span {
      font-size: 10px;
      color: #64748b;
    }

    /* Form Inputs */
    .vb-form-group {
      margin-bottom: 14px;
      text-align: left;
    }

    .vb-form-group label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: #cbd5e1;
      margin-bottom: 6px;
    }

    .vb-input-field {
      width: 100%;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 12px 14px;
      color: #fff;
      font-size: 14px;
      outline: none;
      transition: all 0.3s;
      box-sizing: border-box;
    }

    .vb-input-field:focus {
      border-color: #00f2fe;
      box-shadow: 0 0 12px rgba(0, 242, 254, 0.25);
    }

    .vb-input-field option {
      background: #0d1527;
      color: #fff;
    }

    /* Primary CTA Button */
    .vb-btn-submit {
      width: 100%;
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
      color: #000;
      font-weight: 800;
      font-size: 15px;
      padding: 14px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 18px;
    }

    .vb-btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0, 242, 254, 0.7);
    }

    .vb-direct-call {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px dashed rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #94a3b8;
    }

    .vb-call-link {
      color: #00f2fe;
      font-weight: 700;
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  // 2. Inject Modal HTML Layout
  const modalHTML = `
    <div class="vb-modal-overlay" id="globalConnModal">
      <div class="vb-modal-card">
        <button class="vb-modal-close" onclick="closeGlobalModal()">&times;</button>
        
        <div class="vb-modal-header">
          <span class="vb-badge-pill">⚡ VIP VIP Connection Booking</span>
          <h3 class="vb-modal-title">Get High-Speed Fiber</h3>
          <p class="vb-modal-subtitle" id="globalModalTopic">Inquiry For: Ultra Fast Broadband Connection</p>
        </div>

        <div class="vb-trust-grid">
          <div class="vb-trust-item">
            <strong>⚡ Installation</strong>
            <span>Same Day Active</span>
          </div>
          <div class="vb-trust-item">
            <strong>📶 Wi-Fi Router</strong>
            <span>Free Dual-Band</span>
          </div>
          <div class="vb-trust-item">
            <strong>🎯 Zero Cost</strong>
            <span>Free Booking</span>
          </div>
        </div>

        <form id="globalConnForm" onsubmit="handleModalSubmit(event)">
          <div class="vb-form-group">
            <label>Your Name</label>
            <input type="text" id="vbName" class="vb-input-field" placeholder="e.g. Rahul Sharma" required>
          </div>

          <div class="vb-form-group">
            <label>Mobile / WhatsApp Number</label>
            <input type="tel" id="vbPhone" class="vb-input-field" placeholder="e.g. 9876543210" pattern="[0-9]{10}" required>
          </div>

          <div class="vb-form-group">
            <label>Select Locality in Vadodara</label>
            <select id="vbArea" class="vb-input-field">
              <option value="Alkapuri">Alkapuri</option>
              <option value="Sayajigunj">Sayajigunj</option>
              <option value="Vasna Road">Vasna Road</option>
              <option value="Waghodia Road">Waghodia Road</option>
              <option value="Subhanpura">Subhanpura</option>
              <option value="Karelibaug">Karelibaug</option>
              <option value="Akota">Akota</option>
              <option value="Sama-Savli">Sama-Savli</option>
              <option value="Other Area">Other Location in Vadodara</option>
            </select>
          </div>

          <button type="submit" class="vb-btn-submit">
            <span>🚀 Request Free Feasibility Check</span>
          </button>
        </form>

        <div class="vb-direct-call">
          <span>Prefer direct call?</span>
          <a href="tel:9510896157" class="vb-call-link">📞 +91 9510896157</a>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
})();

// Helper Functions
window.showAdminModal = function(topicText) {
  const modal = document.getElementById('globalConnModal');
  const topicLabel = document.getElementById('globalModalTopic');
  if (topicLabel) topicLabel.innerText = "Inquiry For: " + (topicText || "Fiber Broadband");
  if (modal) modal.classList.add('active');
};

window.closeGlobalModal = function() {
  const modal = document.getElementById('globalConnModal');
  if (modal) modal.classList.remove('active');
};

window.handleModalSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('vbName').value;
  const phone = document.getElementById('vbPhone').value;
  const area = document.getElementById('vbArea').value;
  const topic = document.getElementById('globalModalTopic').innerText;

  const msg = `Hi Vadodara Broadband Team! 👋\n\nI want to get a new Fiber connection.\n\n👤 *Name:* ${name}\n📞 *Mobile:* ${phone}\n📍 *Area:* ${area}\n📌 *Details:* ${topic}\n\nPlease check coverage and contact me!`;
  
  window.open(`https://wa.me/919510896157?text=${encodeURIComponent(msg)}`, '_blank');
  closeGlobalModal();
};
