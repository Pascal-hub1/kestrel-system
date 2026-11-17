// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/studioData';

export default function Home() {
  const [inquiriesCount, setInquiriesCount] = useState(14);

  const handleIncrement = () => {
    setInquiriesCount(prev => prev + 1);
  };

  return (
    <div className="container" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '750px', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4B5563', marginBottom: '1rem' }}>
          {companyInfo.name} &mdash; {companyInfo.location}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.2', marginBottom: '1.5rem', color: '#111827' }}>
          {companyInfo.tagline}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2rem' }}>
          We design and engineer robust backend architectures, scalable full-stack web applications, and optimized database solutions for growing enterprises. Built with precision, performance, and maintainability at the core.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/services" className="btn-primary">Explore Services</Link>
          <Link to="/contact" style={{ fontSize: '0.95rem', fontWeight: '500', color: '#111827', padding: '0.65rem 1rem' }}>
            Get in touch &rarr;
          </Link>
        </div>
      </div>

      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '4px',
        padding: '2rem',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>Active Client Slot Tracker</h3>
        <p style={{ fontSize: '0.9rem', color: '#4B5563' }}>
          Total consultation requests logged for this quarter: <strong>{inquiriesCount}</strong>
        </p>
        <button 
          onClick={handleIncrement}
          style={{
            backgroundColor: '#FAFAFA',
            border: '1px solid #E5E7EB',
            color: '#111827',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
            width: 'fit-content'
          }}
        >
          Simulate New Inquiry
        </button>
      </div>
    </div>
  );
}