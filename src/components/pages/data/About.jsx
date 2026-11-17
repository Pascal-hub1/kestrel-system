// src/pages/About.jsx
import React from 'react';
import { companyInfo } from '../data/studioData';

export default function About() {
  return (
    <div className="container" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '1.5rem', color: '#111827' }}>
          About {companyInfo.name}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Founded in {companyInfo.founded}, {companyInfo.name} is an independent software consultancy studio dedicated to crafting high-performance digital infrastructure. We specialize in eliminating technical debt, designing modular backend systems, and building responsive React interfaces.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Our Mission</h3>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              To deliver uncompromising code quality, rigorous engineering standards, and reliable digital products that scale effortlessly with business growth.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Our Approach</h3>
            <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              First-principles problem solving, clean component architecture, strict separation of concerns, and rigorous performance testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}