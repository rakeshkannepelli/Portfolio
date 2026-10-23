/**
 * RAKESH KANNEPELLI - FREELANCE CLIENT ACQUISITION PORTAL
 * Human-Crafted Skeuomorphic Experience, 60fps Carousel, Direction-Aware Touch Gestures,
 * Inline Interactive Scope Adder, Real-Time Market-Standard Estimator & PDF Generation.
 * Strictly adheres to 3-4 Weeks Minimum to 8-12 Weeks Maximum Quality Engineering Sprints.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSlideCarousel();
  initServiceSelection();
  initScopeFlowPicker();
  initCustomScopeAdder();
  initSmartCalculator();
  initBookingAndWhatsApp();
  initPdfGenerator();
});

/* ==========================================================
   Global State
   ========================================================== */
const state = {
  currentSlide: 0,
  totalSlides: 5,
  slideTitles: [
    'About & Proven Track Record',
    'Select Solution & Service Model',
    'Interactive Website Flow Specifier',
    'Market-Standard Investment Estimator',
    'Download Scope Brief & Contact'
  ],
  services: {
    'scratch-custom': {
      name: 'Option 1: Custom Build From Scratch & Tailored Software',
      basePrice: 48000,
      baseMinWeeks: 4,
      baseMaxWeeks: 6,
      desc: 'Bespoke architecture tailored from the ground up for scalable web apps, unique portals, or SaaS platforms with zero template limitations.'
    },
    'offline-digital': {
      name: 'Option 2: Making Your Offline Business Digital (Turnkey)',
      basePrice: 25000,
      baseMinWeeks: 3,
      baseMaxWeeks: 4,
      desc: 'Transforming local shops, clinics, and firms into 24/7 digital businesses in a focused 3 to 4 week quality cycle.'
    },
    'woocommerce': {
      name: 'Option 3: WooCommerce D2C Store (WordPress & Custom Tech)',
      basePrice: 24000,
      baseMinWeeks: 3,
      baseMaxWeeks: 4,
      desc: 'Indian D2C online store with Razorpay, UPI, PhonePe, and Cash on Delivery.'
    },
    'crm-portal': {
      name: 'Option 4: Custom CRM & Lead Automation Portal',
      basePrice: 32000,
      baseMinWeeks: 4,
      baseMaxWeeks: 6,
      desc: 'Centralize customer inquiries, assign sales leads, track follow-ups, and automate customer communication without expensive monthly SaaS fees.'
    },
    'portfolio': {
      name: 'Option 5: Corporate Business Portfolio & Lead Funnel',
      basePrice: 18000,
      baseMinWeeks: 3,
      baseMaxWeeks: 4,
      desc: 'Sleek executive website with sub-second page loads and high Google ranking.'
    }
  },
  selectedService: 'offline-digital',
  features: {
    'auth': {
      phase: 'Phase 1: Visitor Entry',
      name: 'User Accounts, Social & Mobile OTP Login',
      price: 7500,
      weeksText: '+1 Week',
      active: false
    },
    'cms': {
      phase: 'Phase 2: Browsing Experience',
      name: 'Dynamic Product Catalog & Content CMS',
      price: 6000,
      weeksText: '+1 Week',
      active: true
    },
    'payments': {
      phase: 'Phase 3: Conversion & Checkout',
      name: 'Razorpay, PhonePe & Instant UPI Integration',
      price: 6500,
      weeksText: '+1 Week',
      active: true
    },
    'whatsapp': {
      phase: 'Phase 4: Customer Interaction',
      name: 'WhatsApp Lead Desk & Instant Chat Routing',
      price: 3500,
      weeksText: '+0.5 Week',
      active: true
    },
    'ai-bot': {
      phase: 'Phase 5: Intelligence & Support',
      name: '24/7 AI Knowledge Assistant & FAQ Bot',
      price: 12000,
      weeksText: '+1.5 Weeks',
      active: false
    },
    'admin': {
      phase: 'Phase 6: Business Operations',
      name: 'Owner Admin Dashboard & Orders Desk',
      price: 8500,
      weeksText: '+1 Week',
      active: true
    },
    'invoice': {
      phase: 'Phase 7: Accounting & Fulfillment',
      name: 'Automated GST Invoicing & Tax Calculation',
      price: 4500,
      weeksText: '+0.5 Week',
      active: false
    },
    'seo': {
      phase: 'Phase 8: Growth & Search Ranking',
      name: 'Google Search SEO & Sub-Second Speed',
      price: 4000,
      weeksText: '+0.5 Week',
      active: true
    }
  },
  customFeatures: [] // Dynamically added by client right in the website flow!
};

/* ==========================================================
   Timeline Calculation Engine (3-4 Weeks Min to 8-12 Weeks Max)
   ========================================================== */
function getCalculatedDeliveryTimeline() {
  const serviceObj = state.services[state.selectedService] || state.services['offline-digital'];
  let minWeeks = serviceObj.baseMinWeeks || 3;
  let maxWeeks = serviceObj.baseMaxWeeks || 4;

  let activeAddonsCount = 0;
  Object.values(state.features).forEach(f => {
    if (f.active) activeAddonsCount++;
  });
  activeAddonsCount += state.customFeatures.filter(cf => cf.active).length;

  // Addons scale delivery smoothly across senior engineering milestones
  if (activeAddonsCount >= 7) {
    minWeeks = Math.max(minWeeks + 3, 6);
    maxWeeks = Math.max(maxWeeks + 5, 12);
  } else if (activeAddonsCount >= 5) {
    minWeeks = Math.max(minWeeks + 2, 5);
    maxWeeks = Math.max(maxWeeks + 4, 8);
  } else if (activeAddonsCount >= 3) {
    minWeeks = Math.max(minWeeks + 1, 4);
    maxWeeks = Math.max(maxWeeks + 2, 6);
  }

  // Bounds enforcement: 3 weeks minimum, up to 12 weeks maximum
  minWeeks = Math.max(3, minWeeks);
  maxWeeks = Math.min(12, Math.max(4, maxWeeks));

  let labelSuffix = 'Quality Assurance & Production Sprint';
  if (maxWeeks >= 10) {
    labelSuffix = 'Enterprise-Grade Multi-Phase Architecture';
  } else if (maxWeeks >= 7) {
    labelSuffix = 'Comprehensive Full-Stack Sprints';
  } else if (maxWeeks >= 5) {
    labelSuffix = 'Multi-Module Deep Sprint';
  }

  return {
    minWeeks,
    maxWeeks,
    formatted: `${minWeeks} - ${maxWeeks} Weeks`,
    badgeText: `${minWeeks} - ${maxWeeks} Weeks (${labelSuffix})`
  };
}

/* ==========================================================
   1. Slide Carousel with Refined Touch & Direction Detection
   ========================================================== */
function initSlideCarousel() {
  const track = document.getElementById('slides-track');
  const pages = document.querySelectorAll('.slide-page');
  const navBtns = document.querySelectorAll('.nav-item-btn');
  const dots = document.querySelectorAll('.dock-dot, .slide-dot');
  const prevBtn = document.getElementById('dock-prev-btn');
  const nextBtn = document.getElementById('dock-next-btn');
  const nextBtnText = document.getElementById('next-btn-text');

  const stepPill = document.getElementById('step-pill');
  const stepNameText = document.getElementById('step-name-text');
  const progressPercentage = document.getElementById('progress-percentage');
  const progressFillBar = document.getElementById('progress-fill-mercury') || document.getElementById('progress-fill-bar');

  const nextStepLabels = [
    'Next',
    'Next',
    'Next',
    'Next',
    'Submit'
  ];

  window.goToSlide = function(index) {
    if (index < 0 || index >= state.totalSlides) return;
    state.currentSlide = index;

    // GPU-accelerated horizontal transform
    const offset = -(index * 20);
    if (track) {
      track.style.transform = `translate3d(${offset}%, 0, 0)`;
    }

    // Active slide styling
    pages.forEach((page, i) => {
      if (i === index) {
        page.classList.add('active-slide');
      } else {
        page.classList.remove('active-slide');
      }
    });

    // Top Header Navigation Bar
    navBtns.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Bottom Console Dock Dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Pinned Step Progress Bar
    const pct = (index + 1) * 20;
    if (progressFillBar) progressFillBar.style.width = `${pct}%`;
    if (progressPercentage) progressPercentage.textContent = `${pct}% Complete`;
    if (stepPill) stepPill.textContent = `Step ${index + 1} of 5`;
    if (stepNameText) stepNameText.textContent = state.slideTitles[index];

    // Dock Buttons
    if (prevBtn) prevBtn.disabled = (index === 0);
    if (nextBtnText) nextBtnText.textContent = nextStepLabels[index];

    // Auto-update links & calculation
    recalculateEstimate();
    updateWhatsAppURL();
  };

  // Nav Button Clicks
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = parseInt(btn.dataset.targetSlide, 10);
      window.goToSlide(target);
    });
  });

  // Dock Dot Clicks
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.dataset.dotIndex, 10);
      window.goToSlide(target);
    });
  });

  // Prev / Next Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.currentSlide > 0) {
        window.goToSlide(state.currentSlide - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (state.currentSlide < state.totalSlides - 1) {
        window.goToSlide(state.currentSlide + 1);
      } else {
        const nameInput = document.getElementById('client_name');
        if (nameInput) nameInput.focus();
      }
    });
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight') {
      if (state.currentSlide < state.totalSlides - 1) window.goToSlide(state.currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      if (state.currentSlide > 0) window.goToSlide(state.currentSlide - 1);
    }
  });

  // Mobile Touch Swiping with Direction-Locking (Preserves vertical scrolling)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const viewport = document.getElementById('slides-viewport');

  if (viewport) {
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Only trigger if horizontal swipe is intentional and exceeds vertical movement
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        // Swiped Left -> Next Slide
        if (state.currentSlide < state.totalSlides - 1) window.goToSlide(state.currentSlide + 1);
      } else {
        // Swiped Right -> Prev Slide
        if (state.currentSlide > 0) window.goToSlide(state.currentSlide - 1);
      }
    }
  }

  window.goToSlide(0);
}

/* ==========================================================
   2. Slide 2: Service Model Selection (5 Distinct Options)
   ========================================================== */
function initServiceSelection() {
  const serviceCards = document.querySelectorAll('.service-card-skeuo');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => {
        c.classList.remove('active-service');
      });
      card.classList.add('active-service');

      const key = card.dataset.serviceKey;
      if (state.services[key]) {
        state.selectedService = key;
      }

      recalculateEstimate();

      // Smooth tactile auto-advance to Slide 3
      setTimeout(() => {
        window.goToSlide(2);
      }, 220);
    });
  });
}

/* ==========================================================
   3. Slide 3: Scope Flow & Direct Inline Requirement Adder
   ========================================================== */
function initScopeFlowPicker() {
  const flowCards = document.querySelectorAll('.flow-item-card:not(.custom-added-card)');

  flowCards.forEach(card => {
    card.addEventListener('click', () => {
      const featId = card.dataset.featureId;
      if (!state.features[featId]) return;

      const isNowActive = !state.features[featId].active;
      state.features[featId].active = isNowActive;

      // Update card visual
      card.classList.toggle('flow-active', isNowActive);

      const switchEl = card.querySelector('.tactile-switch');
      if (switchEl) {
        switchEl.textContent = isNowActive ? '✓' : '+';
      }

      recalculateEstimate();
      renderQuickToggles();
    });
  });
}

/**
 * Allows the client to type any specific requirement and click "+ Add to Website Scope",
 * immediately creating a real deliverable card right in the website flow!
 */
function initCustomScopeAdder() {
  const addBtn = document.getElementById('add-custom-scope-btn');
  const input = document.getElementById('custom-feature-input');

  if (addBtn && input) {
    const handleAdd = () => {
      const val = input.value.trim();
      if (!val) {
        input.focus();
        return;
      }

      const customItem = {
        id: `custom_${Date.now()}`,
        phase: `Phase ${Object.keys(state.features).length + state.customFeatures.length + 1}: Custom Need`,
        name: val,
        price: 5000,
        weeksText: '+1 to 2 Weeks',
        active: true
      };

      state.customFeatures.push(customItem);
      input.value = '';
      renderCustomScopeCards();
      recalculateEstimate();
      renderQuickToggles();
    };

    addBtn.addEventListener('click', handleAdd);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
      }
    });
  }
}

function renderCustomScopeCards() {
  const container = document.getElementById('dynamic-custom-features-deck');
  if (!container) return;
  container.innerHTML = '';

  state.customFeatures.forEach((feat, index) => {
    const card = document.createElement('div');
    card.className = `flow-item-card flow-active custom-added-card`;
    card.dataset.customId = feat.id;

    card.innerHTML = `
      <div class="skeuo-icon-box" style="color: var(--accent-gold);">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
      <div class="flow-meta">
        <span class="flow-step-tag">Phase ${9 + index}: Client Custom Requirement</span>
        <h4 class="flow-title">${feat.name}</h4>
        <p class="flow-desc">Tailored bespoke deliverable added directly to your project scope.</p>
      </div>
      <div class="custom-card-actions">
        <button type="button" class="custom-remove-btn" title="Remove custom requirement">✕ Remove</button>
        <div class="tactile-switch">✓</div>
      </div>
    `;

    // Remove handler
    const removeBtn = card.querySelector('.custom-remove-btn');
    if (removeBtn) {
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.customFeatures = state.customFeatures.filter(f => f.id !== feat.id);
        renderCustomScopeCards();
        recalculateEstimate();
        renderQuickToggles();
      });
    }

    // Toggle active state
    card.addEventListener('click', () => {
      feat.active = !feat.active;
      card.classList.toggle('flow-active', feat.active);
      const switchEl = card.querySelector('.tactile-switch');
      if (switchEl) switchEl.textContent = feat.active ? '✓' : '+';
      recalculateEstimate();
      renderQuickToggles();
    });

    container.appendChild(card);
  });
}

/* ==========================================================
   4. Slide 4: Market-Standard Smart Estimator
   ========================================================= */
function initSmartCalculator() {
  renderQuickToggles();
  recalculateEstimate();
}

function renderQuickToggles() {
  const container = document.getElementById('calc-adjust-toggles');
  if (!container) return;
  container.innerHTML = '';

  // Standard flow features
  Object.entries(state.features).forEach(([id, feat]) => {
    const item = document.createElement('div');
    item.className = `adjust-row-item ${feat.active ? 'adjust-active' : ''}`;
    item.dataset.featureId = id;

    item.innerHTML = `
      <div class="adjust-name">
        <span style="color: ${feat.active ? 'var(--accent-gold)' : 'var(--text-muted)'}; font-weight: 900; font-size: 1.1rem; width: 18px;">${feat.active ? '✓' : '+'}</span>
        <span>${feat.name}</span>
      </div>
      <div class="adjust-price">+₹${feat.price.toLocaleString('en-IN')}</div>
    `;

    item.addEventListener('click', () => {
      feat.active = !feat.active;
      item.classList.toggle('adjust-active', feat.active);

      // Sync Slide 3 card
      const flowCard = document.querySelector(`.flow-item-card[data-feature-id="${id}"]`);
      if (flowCard) {
        flowCard.classList.toggle('flow-active', feat.active);
        const switchEl = flowCard.querySelector('.tactile-switch');
        if (switchEl) switchEl.textContent = feat.active ? '✓' : '+';
      }

      // Update check symbol and color
      const checkSpan = item.querySelector('.adjust-name span:first-child');
      if (checkSpan) {
        checkSpan.textContent = feat.active ? '✓' : '+';
        checkSpan.style.color = feat.active ? 'var(--accent-gold)' : 'var(--text-muted)';
      }

      recalculateEstimate();
    });

    container.appendChild(item);
  });

  // Client dynamically added custom features
  state.customFeatures.forEach((feat) => {
    const item = document.createElement('div');
    item.className = `adjust-row-item ${feat.active ? 'adjust-active' : ''}`;
    item.dataset.customId = feat.id;

    item.innerHTML = `
      <div class="adjust-name">
        <span style="color: ${feat.active ? 'var(--accent-gold)' : 'var(--text-muted)'}; font-weight: 900; font-size: 1.1rem; width: 18px;">${feat.active ? '✓' : '+'}</span>
        <span>✨ ${feat.name} (Custom)</span>
      </div>
      <div class="adjust-price">+₹${feat.price.toLocaleString('en-IN')}</div>
    `;

    item.addEventListener('click', () => {
      feat.active = !feat.active;
      item.classList.toggle('adjust-active', feat.active);

      // Sync Slide 3 dynamic card
      const cardOnSlide3 = document.querySelector(`.custom-added-card[data-custom-id="${feat.id}"]`);
      if (cardOnSlide3) {
        cardOnSlide3.classList.toggle('flow-active', feat.active);
        const switchEl = cardOnSlide3.querySelector('.tactile-switch');
        if (switchEl) switchEl.textContent = feat.active ? '✓' : '+';
      }

      recalculateEstimate();
    });

    container.appendChild(item);
  });
}

function recalculateEstimate() {
  const serviceObj = state.services[state.selectedService] || state.services['offline-digital'];

  let totalPrice = serviceObj.basePrice;

  // Standard active features
  Object.values(state.features).forEach(f => {
    if (f.active) {
      totalPrice += f.price;
    }
  });

  // Custom added features
  state.customFeatures.forEach(cf => {
    if (cf.active) {
      totalPrice += cf.price;
    }
  });

  // Calculate timeline in weeks (3-4 weeks minimum to 8-12 weeks maximum)
  const timeline = getCalculatedDeliveryTimeline();

  // Update DOM elements
  const totalInrEl = document.getElementById('calc-total-inr');
  const totalDaysEl = document.getElementById('calc-total-days');
  const usdEl = document.getElementById('calc-usd-equivalent');
  const serviceLabelEl = document.getElementById('calc-service-label');

  if (totalInrEl) {
    totalInrEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
  }

  if (totalDaysEl) {
    totalDaysEl.textContent = timeline.badgeText;
  }

  if (usdEl) {
    const usd = Math.round(totalPrice / 86.5);
    usdEl.textContent = `≈ $${usd.toLocaleString()} USD (Direct Developer Rate)`;
  }

  if (serviceLabelEl) {
    serviceLabelEl.textContent = serviceObj.name;
  }

  updateWhatsAppURL();
}

/* ==========================================================
   5. Slide 5: WhatsApp Pre-fill & EmailJS Submission
   ========================================================== */
function initBookingAndWhatsApp() {
  const form = document.getElementById('booking-form');
  const feedback = document.getElementById('booking-feedback');
  const emailBtn = document.getElementById('email-submit-btn');

  const nameInput = document.getElementById('client_name');
  const phoneInput = document.getElementById('client_phone');
  const emailInput = document.getElementById('client_email');
  const notesInput = document.getElementById('client_notes');

  [nameInput, phoneInput, emailInput, notesInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', updateWhatsAppURL);
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalBtnText = emailBtn.innerHTML;
      emailBtn.innerHTML = '<span>Transmitting Scope Brief...</span>';
      emailBtn.disabled = true;

      const serviceObj = state.services[state.selectedService] || state.services['offline-digital'];
      
      const activeFeats = Object.values(state.features)
        .filter(f => f.active)
        .map(f => `• ${f.phase}: ${f.name} (+₹${f.price.toLocaleString('en-IN')}, ${f.weeksText})`)
        .join('\n');

      const customFeats = state.customFeatures
        .filter(cf => cf.active)
        .map(cf => `• ${cf.phase}: ${cf.name} (+₹${cf.price.toLocaleString('en-IN')}, ${cf.weeksText})`)
        .join('\n');

      const totalInr = document.getElementById('calc-total-inr') ? document.getElementById('calc-total-inr').textContent : '₹35,000';
      const timeline = getCalculatedDeliveryTimeline();

      const structuredBrief = `
=== OFFICIAL CLIENT SCOPE SPECIFICATION ===
Client Name / Business: ${form.client_name.value}
WhatsApp / Phone: ${form.client_phone.value}
Email Address: ${form.client_email.value}

--- SELECTED ARCHITECTURE ---
Core Service Model: ${serviceObj.name}
Market-Standard Investment: ${totalInr}
Estimated Delivery Timeline: ${timeline.badgeText} (Milestone-based Quality Sprints)

--- CHRONOLOGICAL WEBSITE FLOW DELIVERABLES ---
${activeFeats || 'Standard Base Deliverables'}
${customFeats ? `\n--- CLIENT ADDED CUSTOM DELIVERABLES ---\n${customFeats}` : ''}

--- ADDITIONAL CLIENT NOTES ---
${form.client_notes.value || 'None provided.'}
============================================
      `.trim();

      const templateParams = {
        user_name: form.client_name.value,
        user_email: form.client_email.value,
        project_service: serviceObj.name,
        project_budget: totalInr,
        message: structuredBrief,
        to_email: 'rakeshkannepelli@gmail.com',
        to_name: 'Rakesh Kannepelli',
        reply_to: form.client_email.value
      };

      if (typeof emailjs !== 'undefined' && emailjs.send) {
        emailjs.send('service_hjtojrl', 'template_na60239', templateParams)
          .then(() => {
            feedback.textContent = '🎉 Your Project Scope Brief has been received directly by Rakesh! You will receive confirmation within 24 hours. Click "Chat on WhatsApp Directly" for immediate real-time sync.';
            feedback.className = 'form-feedback success';
            feedback.classList.remove('hidden');
          })
          .catch((err) => {
            console.error('EmailJS Relay Notice:', err);
            feedback.textContent = 'Notice: Email relay was busy. Please click "Chat on WhatsApp Directly" to send your pre-filled brief in one click!';
            feedback.className = 'form-feedback error';
            feedback.classList.remove('hidden');
          })
          .finally(() => {
            emailBtn.innerHTML = originalBtnText;
            emailBtn.disabled = false;
            setTimeout(() => {
              feedback.classList.add('hidden');
            }, 10000);
          });
      } else {
        feedback.textContent = '🎉 Brief configured! Please click "Chat on WhatsApp Directly" to connect with Rakesh.';
        feedback.className = 'form-feedback success';
        feedback.classList.remove('hidden');
        emailBtn.innerHTML = originalBtnText;
        emailBtn.disabled = false;
      }
    });
  }
}

function updateWhatsAppURL() {
  const whatsappBtn = document.getElementById('whatsapp-trigger-btn');
  if (!whatsappBtn) return;

  const serviceObj = state.services[state.selectedService] || state.services['offline-digital'];
  
  const activeFeats = Object.values(state.features)
    .filter(f => f.active)
    .map(f => `• ${f.name}`)
    .join('\n');

  const customFeats = state.customFeatures
    .filter(cf => cf.active)
    .map(cf => `• ✨ ${cf.name}`)
    .join('\n');

  const totalInr = document.getElementById('calc-total-inr') ? document.getElementById('calc-total-inr').textContent : '₹35,000';
  const timeline = getCalculatedDeliveryTimeline();

  const nameVal = document.getElementById('client_name') ? document.getElementById('client_name').value.trim() : '';
  const phoneVal = document.getElementById('client_phone') ? document.getElementById('client_phone').value.trim() : '';
  const notesVal = document.getElementById('client_notes') ? document.getElementById('client_notes').value.trim() : '';

  const clientHeader = nameVal ? `from *${nameVal}*` : '';
  const contactText = phoneVal ? `\n📞 My Phone: ${phoneVal}` : '';
  const customSection = customFeats ? `\n\n🎯 *Custom Added Requirements:*\n${customFeats}` : '';
  const notesText = notesVal ? `\n📝 Notes: ${notesVal}` : '';

  const message = `*NEW CLIENT PROJECT SCOPE BRIEF* ${clientHeader}
----------------------------------------
🚀 *Core Service:*
${serviceObj.name}

📦 *Included Flow Deliverables:*
${activeFeats || 'Standard Baseline Setup'}${customSection}

💰 *Market-Standard Investment:* ${totalInr}
⏱️ *Estimated Delivery:* ${timeline.badgeText}${contactText}${notesText}
----------------------------------------
Hi Rakesh, I configured my project scope on your advisory portal. I would like to review the architecture and kick off development!`.trim();

  const encodedMsg = encodeURIComponent(message);
  whatsappBtn.href = `https://wa.me/919398794176?text=${encodedMsg}`;
}

/* ==========================================================
   6. Executive Client-Side PDF Proposal Generator
   ========================================================== */
function initPdfGenerator() {
  const downloadBtn = document.getElementById('download-pdf-btn');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', () => {
    generateAndDownloadPdfProposal();
  });
}

function generateAndDownloadPdfProposal() {
  const serviceObj = state.services[state.selectedService] || state.services['offline-digital'];
  const totalInr = document.getElementById('calc-total-inr') ? document.getElementById('calc-total-inr').textContent : '₹48,500';
  const timeline = getCalculatedDeliveryTimeline();
  const usdEquivalent = document.getElementById('calc-usd-equivalent') ? document.getElementById('calc-usd-equivalent').textContent : '≈ $560 USD';

  const clientName = (document.getElementById('client_name') && document.getElementById('client_name').value.trim()) || 'Prospective Enterprise Client';
  const clientPhone = (document.getElementById('client_phone') && document.getElementById('client_phone').value.trim()) || 'Direct Teleconference Sync';
  const clientEmail = (document.getElementById('client_email') && document.getElementById('client_email').value.trim()) || 'Sync via WhatsApp';
  const clientNotes = (document.getElementById('client_notes') && document.getElementById('client_notes').value.trim()) || 'Standard production deliverables.';

  const proposalId = `RK-SCOPE-${Date.now().toString().slice(-6)}`;
  const dateFormatted = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Standard Active Features
  const standardRows = Object.values(state.features)
    .filter(f => f.active)
    .map(f => `
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #475569;">${f.phase}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 600; color: #0f172a;">${f.name}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; text-align: center; color: #334155;">${f.weeksText}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; text-align: right; font-weight: 700; color: #0284c7;">+₹${f.price.toLocaleString('en-IN')}</td>
      </tr>
    `).join('');

  // Dynamically Added Custom Features
  const customRows = state.customFeatures
    .filter(cf => cf.active)
    .map(cf => `
      <tr style="background: #fffbeb;">
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #b45309;">${cf.phase}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; font-weight: 700; color: #78350f;">✨ ${cf.name} (Client Custom)</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; text-align: center; color: #92400e;">${cf.weeksText}</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; text-align: right; font-weight: 800; color: #d97706;">+₹${cf.price.toLocaleString('en-IN')}</td>
      </tr>
    `).join('');

  const allRows = standardRows + customRows;

  // Executive Printable Window
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to open and download the official PDF proposal.');
    return;
  }

  printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Scope Brief - ${proposalId} - Rakesh Kannepelli</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
      padding: 24px;
    }
    .header-table {
      width: 100%;
      border-bottom: 3px solid #0f172a;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .brand-title {
      font-size: 22px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    .brand-sub {
      font-size: 13px;
      color: #64748b;
      margin-top: 3px;
      font-weight: 500;
    }
    .doc-meta {
      text-align: right;
    }
    .doc-tag {
      display: inline-block;
      background: #0f172a;
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .doc-id {
      font-size: 13px;
      font-weight: 700;
      color: #0284c7;
    }
    .doc-date {
      font-size: 12px;
      color: #64748b;
    }
    .client-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .info-label {
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 700;
      color: #64748b;
      margin-bottom: 2px;
    }
    .info-val {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    .section-title {
      font-size: 15px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
      border-left: 4px solid #f59e0b;
      padding-left: 8px;
    }
    .service-box {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
      background: #ffffff;
    }
    .table-features {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .table-features th {
      background: #f1f5f9;
      padding: 10px 14px;
      text-align: left;
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 800;
      color: #475569;
      border-bottom: 2px solid #cbd5e1;
    }
    .total-box {
      background: #0f172a;
      color: #ffffff;
      border-radius: 8px;
      padding: 18px 24px;
      margin-bottom: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .total-label {
      font-size: 13px;
      font-weight: 600;
      color: #cbd5e1;
    }
    .total-num {
      font-size: 28px;
      font-weight: 900;
      color: #fbbf24;
      text-align: right;
    }
    .guarantees-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 30px;
    }
    .guarantee-box {
      border: 1px solid #e2e8f0;
      padding: 12px;
      border-radius: 6px;
      font-size: 12px;
      background: #f8fafc;
    }
    .guarantee-box strong {
      display: block;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .signature-row {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #cbd5e1;
    }
    .sig-col {
      width: 45%;
    }
    .sig-line {
      border-top: 1px dashed #94a3b8;
      margin-top: 45px;
      padding-top: 8px;
      font-size: 12px;
      color: #475569;
    }
    .print-bar {
      margin-bottom: 20px;
      padding: 12px 18px;
      background: #f1f5f9;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .print-btn {
      background: #0284c7;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    @media print {
      .print-bar {
        display: none !important;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>

  <div class="print-bar">
    <div><strong>Executive Scope Document Ready:</strong> Click to save as official PDF or print.</div>
    <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <table class="header-table">
    <tr>
      <td>
        <div class="brand-title">RAKESH KANNEPELLI</div>
        <div class="brand-sub">Senior Full-Stack & AI Solutions Engineer · Hyderabad, India</div>
        <div style="font-size: 12px; color: #64748b; margin-top: 4px;">WhatsApp: +91 93987 94176 · rakeshkannepelli@gmail.com</div>
      </td>
      <td class="doc-meta">
        <div class="doc-tag">Official Scope & Proposal</div>
        <div class="doc-id">Reference: ${proposalId}</div>
        <div class="doc-date">Generated: ${dateFormatted}</div>
      </td>
    </tr>
  </table>

  <div class="client-card">
    <div>
      <div class="info-label">Client / Organization</div>
      <div class="info-val">${clientName}</div>
    </div>
    <div>
      <div class="info-label">Direct Contact</div>
      <div class="info-val">${clientPhone}</div>
    </div>
    <div>
      <div class="info-label">Email Address</div>
      <div class="info-val">${clientEmail}</div>
    </div>
    <div>
      <div class="info-label">Estimated Delivery Turnaround</div>
      <div class="info-val">${timeline.formatted} (Sprint Milestones)</div>
    </div>
  </div>

  <div class="section-title">1. Selected Core Architectural Model</div>
  <div class="service-box">
    <div style="font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">${serviceObj.name}</div>
    <div style="font-size: 13px; color: #475569;">${serviceObj.desc}</div>
    <div style="margin-top: 10px; font-size: 12px; color: #0284c7; font-weight: 700;">Baseline Quality Sprint: ${serviceObj.baseMinWeeks} - ${serviceObj.baseMaxWeeks} Weeks · Base Investment: ₹${serviceObj.basePrice.toLocaleString('en-IN')}</div>
  </div>

  <div class="section-title">2. Natural Website Flow & Functional Inclusions</div>
  <table class="table-features">
    <thead>
      <tr>
        <th style="width: 25%;">Execution Phase</th>
        <th style="width: 45%;">Deliverable Specification</th>
        <th style="width: 15%; text-align: center;">Sprint Addition</th>
        <th style="width: 15%; text-align: right;">Investment</th>
      </tr>
    </thead>
    <tbody>
      ${allRows}
    </tbody>
  </table>

  ${clientNotes !== 'Standard production deliverables.' ? `
  <div class="section-title">3. Additional Client Notes</div>
  <div class="service-box" style="background: #f8fafc; font-size: 13px; color: #334155;">
    ${clientNotes}
  </div>` : ''}

  <div class="total-box">
    <div>
      <div class="total-label">Market-Standard Estimated Total Investment</div>
      <div style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Direct Builder Pricing · No Agency Surcharges</div>
      <div style="font-size: 12px; color: #38bdf8; margin-top: 2px;">${usdEquivalent}</div>
    </div>
    <div>
      <div class="total-num">${totalInr}</div>
      <div style="font-size: 12px; color: #cbd5e1; text-align: right; margin-top: 4px;">Delivery: ${timeline.formatted}</div>
    </div>
  </div>

  <div class="section-title">4. Engineer Commitments & Delivery Standards</div>
  <div class="guarantees-grid">
    <div class="guarantee-box">
      <strong>3-4 to 8-12 Weeks Quality Sprint</strong>
      Rigorous software quality assurance without rushed templates. Full testing across mobile & desktop.
    </div>
    <div class="guarantee-box">
      <strong>100% Code Ownership</strong>
      Full production repository transferred to client on GitHub with complete commercial rights.
    </div>
    <div class="guarantee-box">
      <strong>Direct WhatsApp Standup</strong>
      Weekly sprint progress demos directly from Rakesh without middleman delays.
    </div>
  </div>

  <div class="signature-row">
    <div class="sig-col">
      <div style="font-size: 13px; font-weight: 800; color: #0f172a;">Rakesh Kannepelli</div>
      <div style="font-size: 11px; color: #64748b;">Principal Solutions Engineer</div>
      <div class="sig-line">Lead Engineer Signature & Authorization</div>
    </div>
    <div class="sig-col">
      <div style="font-size: 13px; font-weight: 800; color: #0f172a;">${clientName}</div>
      <div style="font-size: 11px; color: #64748b;">Authorized Project Sponsor</div>
      <div class="sig-line">Client Acceptance Signature & Date</div>
    </div>
  </div>

</body>
</html>
  `);

  printWindow.document.close();
}
