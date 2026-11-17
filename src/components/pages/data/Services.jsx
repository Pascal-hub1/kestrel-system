// src/pages/Services.jsx
import React from 'react';
import { servicesData } from "./studioData";
import serviceCard from '../../serviceCard';

export default function Services() {
  return (
    <div className="container" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '1rem', color: '#111827' }}>
          Our Services
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: '1.6' }}>
          Tailored engineering solutions built for stability, security, and speed.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {servicesData.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            timeline={service.timeline}
          />
        ))}
      </div>
    </div>
  );
}