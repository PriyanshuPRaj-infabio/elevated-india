/* ========================================================
   ELEVATED INDIA — INQUIRY JS
   inquiry.js — Form validation, WhatsApp, Submission
   ======================================================== */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '919999999999'; // Replace with actual number

  // ── Inquiry Form Validation ───────────────────────────
  const inquiryForm = document.getElementById('inquiry-form');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm(this)) {
        submitForm(this);
      }
    });

    // Live validation on blur
    inquiryForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(field);
      });
    });
  }

  function validateField(field) {
    const group = field.closest('.form-group');
    const error = group && group.querySelector('.form-error');
    const required = field.hasAttribute('required');
    let valid = true;
    let message = '';

    if (required && !field.value.trim()) {
      valid = false;
      message = 'This field is required.';
    } else if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      valid = false;
      message = 'Please enter a valid email address.';
    } else if (field.type === 'tel' && field.value && !/^\+?[\d\s\-().]{7,20}$/.test(field.value)) {
      valid = false;
      message = 'Please enter a valid phone number.';
    }

    if (!valid) {
      field.classList.add('error');
      field.style.borderBottomColor = 'var(--maroon)';
      if (error) {
        error.textContent = message;
        error.style.display = 'block';
      }
    } else {
      field.classList.remove('error');
      field.style.borderBottomColor = '';
      if (error) {
        error.textContent = '';
        error.style.display = 'none';
      }
    }

    return valid;
  }

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('.form-input[required], .form-select[required], .form-textarea[required]').forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  function submitForm(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Gather form data
    const data = new FormData(form);
    const payload = {};
    data.forEach((val, key) => { payload[key] = val; });

    // Simulate API call (replace with real endpoint)
    setTimeout(() => {
      showSuccessState(form, submitBtn, originalText);
    }, 1400);
  }

  function showSuccessState(form, btn, originalText) {
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      form.style.opacity = '0';
      form.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        form.style.display = 'none';
        successMsg.style.display = 'flex';
        successMsg.style.opacity = '0';
        requestAnimationFrame(() => {
          successMsg.style.transition = 'opacity 0.6s ease';
          successMsg.style.opacity = '1';
        });
      }, 500);
    } else {
      btn.textContent = '✓ Inquiry Sent';
      btn.style.opacity = '1';
      btn.style.background = 'var(--forest)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3500);
    }
  }

  // ── WhatsApp Integration ──────────────────────────────
  function buildWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  }

  const whatsappBtns = document.querySelectorAll('[data-whatsapp]');
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = btn.dataset.whatsapp || 'Hello, I would like to enquire about a bespoke journey with Elevated India.';
      window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    });
  });

  // WhatsApp from inquiry form
  const whatsappFormBtn = document.getElementById('whatsapp-inquiry');
  if (whatsappFormBtn) {
    whatsappFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('f-name')?.value || '';
      const interest = document.getElementById('f-interest')?.value || '';
      const window_pref = document.getElementById('f-window')?.value || '';
      const guests = document.getElementById('f-guests')?.value || '';

      let msg = `Hello Elevated India,\n\nI am interested in designing a bespoke journey.\n`;
      if (name) msg += `\nName: ${name}`;
      if (interest) msg += `\nInterest: ${interest}`;
      if (window_pref) msg += `\nTravel Window: ${window_pref}`;
      if (guests) msg += `\nGuests: ${guests}`;
      msg += `\n\nPlease get in touch at your earliest convenience.`;

      window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
    });
  }

  // ── Callback Request ──────────────────────────────────
  const callbackForm = document.getElementById('callback-form');
  if (callbackForm) {
    callbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = callbackForm.querySelector('#cb-phone')?.value;
      const name = callbackForm.querySelector('#cb-name')?.value;
      const btn = callbackForm.querySelector('[type="submit"]');

      if (!phone) return;

      btn.textContent = 'Request Received';
      btn.disabled = true;
      btn.style.background = 'var(--forest)';

      setTimeout(() => {
        callbackForm.reset();
        btn.textContent = 'Request a Callback';
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    });
  }

})();
