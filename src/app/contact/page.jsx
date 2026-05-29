"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travel_interest: '',
    travel_window: '',
    guests: '',
    accommodation: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Callback State
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSubmitting, setCallbackSubmitting] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  useGsapAnimations();

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'This field is required.';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'This field is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address.';
      }
    } else if (name === 'travel_interest' && !value) {
      error = 'This field is required.';
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    ['name', 'email', 'travel_interest'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setInquirySubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setInquirySubmitting(false);
      setInquirySuccess(true);
    }, 1400);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;

    setCallbackSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setCallbackSubmitting(false);
      setCallbackSuccess(true);
      setTimeout(() => {
        setCallbackSuccess(false);
        setCallbackName('');
        setCallbackPhone('');
      }, 4000);
    }, 1000);
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, travel_interest, travel_window, guests } = formData;
    let msg = `Hello Elevated India,\n\nI am interested in designing a bespoke journey.\n`;
    if (name) msg += `\nName: ${name}`;
    if (travel_interest) msg += `\nInterest: ${travel_interest}`;
    if (travel_window) msg += `\nTravel Window: ${travel_window}`;
    if (guests) msg += `\nGuests: ${guests}`;
    msg += `\n\nPlease get in touch at your earliest convenience.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919999999999?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page-bg" style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="contact-grid">
        {/* Left Panel */}
        <div className="contact-image-panel" aria-hidden="true">
          <img src="/images/palace_dining_1776272561908.png" alt="Private palace dining" />
          <div className="contact-image-overlay"></div>
          <div style={{ position: 'absolute', bottom: 'var(--space-12)', left: 'var(--space-10)', right: 'var(--space-10)', zIndex: 2 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--ivory)', lineHeight: 1.55, marginBottom: 'var(--space-5)' }}>
              "Every exceptional journey begins not with a booking — but with a conversation."
            </p>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              — Elevated India
            </span>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-form-panel">
          <div style={{ maxWidth: '540px', width: '100%' }}>
            <span className="t-section-label gsap-fade-up">Private Inquiry</span>
            <span className="gold-line gold-line-left gsap-fade-up" style={{ transitionDelay: '150ms' }}></span>
            <h1 className="t-headline gsap-fade-up" style={{ marginBottom: 'var(--space-3)', transitionDelay: '300ms' }}>
              Begin Your Journey
            </h1>
            <p className="t-body gsap-fade-up" style={{ marginBottom: 'var(--space-10)', transitionDelay: '450ms' }}>
              Share a little about your vision for India and a member of our curatorial team will respond personally — typically within one working day.
            </p>

            {inquirySuccess ? (
              <div id="form-success" className="form-success" role="alert">
                <div className="form-success-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 14l5 5L22 9" stroke="#B8964A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--charcoal)', marginBottom: 'var(--space-3)' }}>
                    Your Inquiry Has Been Received
                  </h2>
                  <p className="t-body">
                    A member of our team will respond to you personally within one working day. We look forward to designing something extraordinary together.
                  </p>
                </div>
              </div>
            ) : (
              <form id="inquiry-form" onSubmit={handleInquirySubmit} noValidate aria-label="Travel inquiry form" className="gsap-fade-up" style={{ transitionDelay: '600ms' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-name">
                      Full Name <span style={{ color: 'var(--maroon)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="f-name"
                      name="name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      autoComplete="name"
                      style={errors.name ? { borderBottomColor: 'var(--maroon)' } : {}}
                    />
                    {errors.name && <span className="form-error" role="alert" style={{ display: 'block' }}>{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-email">
                      Email Address <span style={{ color: 'var(--maroon)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="f-email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      autoComplete="email"
                      style={errors.email ? { borderBottomColor: 'var(--maroon)' } : {}}
                    />
                    {errors.email && <span className="form-error" role="alert" style={{ display: 'block' }}>{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-interest">
                    Travel Interest / Occasion <span style={{ color: 'var(--maroon)' }}>*</span>
                  </label>
                  <select
                    id="f-interest"
                    name="travel_interest"
                    className={`form-select ${errors.travel_interest ? 'error' : ''}`}
                    required
                    value={formData.travel_interest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label="Travel interest"
                    style={errors.travel_interest ? { borderBottomColor: 'var(--maroon)' } : {}}
                  >
                    <option value="" disabled>Please select</option>
                    <option value="honeymoon">Honeymoon or Anniversary</option>
                    <option value="royal-heritage">Royal Heritage &amp; Palace Journeys</option>
                    <option value="wildlife">Wildlife &amp; Safari</option>
                    <option value="spiritual">Spiritual &amp; Transformational</option>
                    <option value="wellness">Wellness &amp; Restoration</option>
                    <option value="culture">Art, Craft &amp; Cultural Immersion</option>
                    <option value="family">Family or Multi-Generational</option>
                    <option value="celebration">Private Celebration or Event</option>
                    <option value="gastronomy">Gastronomy &amp; Culinary</option>
                    <option value="bespoke">Fully Bespoke (I have a vision)</option>
                  </select>
                  {errors.travel_interest && <span className="form-error" role="alert" style={{ display: 'block' }}>{errors.travel_interest}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-window">
                      Preferred Travel Window
                    </label>
                    <input
                      type="text"
                      id="f-window"
                      name="travel_window"
                      className="form-input"
                      value={formData.travel_window}
                      onChange={handleChange}
                      placeholder="e.g. October 2025, Winter"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-guests">
                      Number of Guests
                    </label>
                    <select
                      id="f-guests"
                      name="guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={handleChange}
                      aria-label="Number of guests"
                    >
                      <option value="" disabled>Select</option>
                      <option value="2">2 Guests</option>
                      <option value="3-4">3–4 Guests</option>
                      <option value="5-8">5–8 Guests</option>
                      <option value="9+">9 or more</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-accommodation">
                    Accommodation Expectations
                  </label>
                  <select
                    id="f-accommodation"
                    name="accommodation"
                    className="form-select"
                    value={formData.accommodation}
                    onChange={handleChange}
                    aria-label="Accommodation preferences"
                  >
                    <option value="" disabled>Select preference</option>
                    <option value="ultra-luxury">Ultra-luxury (Private palace suites, top-tier properties only)</option>
                    <option value="luxury">Luxury (Leading luxury hotels and heritage properties)</option>
                    <option value="boutique">Boutique Heritage (Intimate, authentic, character-rich)</option>
                    <option value="mixed">Mixed — comfort over brand recognition</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-notes">
                    Your Vision for This Journey
                  </label>
                  <textarea
                    id="f-notes"
                    name="notes"
                    className="form-textarea"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Share what you are imagining — experiences, feelings, occasions, or simply what draws you to India right now. There are no wrong answers here."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-gold btn-arrow"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="inquiry-submit-btn"
                  disabled={inquirySubmitting}
                >
                  {inquirySubmitting ? 'Sending...' : 'Request a Private Itinerary'}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="divider-or gsap-fade-up" style={{ marginTop: 'var(--space-8)' }}>
              or
            </div>

            {/* Direct Channels */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }} className="gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <button
                onClick={handleWhatsApp}
                className="btn btn-outline-gold"
                style={{ justifyContent: 'center', width: '100%' }}
                id="whatsapp-inquiry"
              >
                WhatsApp Us
              </button>
              <a href="mailto:hello@elevatedindia.com" className="btn btn-outline-gold" style={{ justifyContent: 'center' }} id="email-contact-btn">
                Email Directly
              </a>
            </div>

            {/* Details */}
            <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--stone-dark)' }} className="gsap-fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="contact-detail">
                <span className="contact-detail-label">Email</span>
                <a href="mailto:hello@elevatedindia.com" className="contact-detail-value">
                  hello@elevatedindia.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">WhatsApp</span>
                <a href="tel:+919999999999" className="contact-detail-value">
                  +91 99999 99999
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Response</span>
                <span className="contact-detail-value">Within one working day, by a real person</span>
              </div>
            </div>

            {/* Callback Box */}
            <div className="callback-box gsap-fade-up" style={{ transitionDelay: '450ms' }}>
              <p className="t-section-label" style={{ marginBottom: 'var(--space-3)' }}>
                Prefer a callback?
              </p>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)', fontSize: 'var(--text-sm)' }}>
                Leave your number and a convenient time. We will call you — on your terms.
              </p>
              <form id="callback-form" onSubmit={handleCallbackSubmit} noValidate>
                <div className="form-row" style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input
                      type="text"
                      id="cb-name"
                      name="cb_name"
                      className="form-input"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input
                      type="tel"
                      id="cb-phone"
                      name="cb_phone"
                      className="form-input"
                      required
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: callbackSuccess ? 'var(--forest)' : '',
                    borderColor: callbackSuccess ? 'var(--forest)' : '',
                  }}
                  id="callback-submit-btn"
                  disabled={callbackSubmitting || callbackSuccess}
                >
                  {callbackSuccess ? 'Request Received' : callbackSubmitting ? 'Requesting...' : 'Request a Callback'}
                </button>
              </form>
            </div>

            {/* Privacy Note */}
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--charcoal-light)', marginTop: 'var(--space-6)', lineHeight: 1.6 }} className="gsap-fade-up" style={{ transitionDelay: '600ms' }}>
              Your details are held in complete confidence. We do not share, sell, or distribute any personal information. Your privacy is our first obligation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
