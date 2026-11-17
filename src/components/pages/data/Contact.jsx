// src/pages/Contact.jsx
import React, { useState } from 'react';
import { companyInfo } from '../data/studioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess(true);
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '1rem', color: '#111827' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '3rem' }}>
          Have a project in mind or need technical consultation? Reach out directly or send us a message below.
        </p>

        <div style={{ marginBottom: '3rem', fontSize: '0.95rem', color: '#4B5563' }}>
          <p><strong>Email:</strong> {companyInfo.email}</p>
          <p><strong>Telephone:</strong> {companyInfo.phone}</p>
        </div>

        <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', padding: '2.5rem', borderRadius: '4px' }}>
          {error && (
            <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #F87171', color: '#991B1B', padding: '0.75rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #4ADE80', color: '#166534', padding: '0.75rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Thank you! Your message has been sent successfully. We will be in touch shortly.
            </div>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '0.95rem' }}
              placeholder="N Pascal"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '0.95rem' }}
              placeholder="pascal@example.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '0.95rem' }}
              placeholder="Backend Architecture Consultation"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Message</label>
            <textarea 
              name="message" 
              rows="5"
              value={formData.message} 
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #E5E7EB', borderRadius: '4px', fontSize: '0.95rem', fontFamily: 'inherit' }}
              placeholder="Describe your project scope..."
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}