// src/components/Footer.jsx
import React from 'react';
import { companyInfo } from "./pages/data/studioData";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        <p>{companyInfo.location} &mdash; {companyInfo.email}</p>
      </div>
    </footer>
  );
}