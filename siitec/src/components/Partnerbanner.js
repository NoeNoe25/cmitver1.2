// components/PartnersBanner.jsx
import React from 'react';
import '../styles/PartnerBanner.css';
import abb from '../assets/logos/abb-logo.png';
import nvidia from '../assets/logos/nvidia-logo.png';
import nissan from '../assets/logos/nissan.png';
import nintendo from '../assets/logos/nintendo.png';
import reactjs from '../assets/logos/nodejs.png';
import bosh from '../assets/logos/bosh.png';
import harvard from '../assets/logos/harvard.png';


const PartnersBanner = () => {
  // Sample university logos - replace with your actual partner logos
  const partners = [
    { id: 1, name: 'Harvard', logo: abb },
    { id: 2, name: 'Stanford', logo:nvidia },
    { id: 3, name: 'MIT', logo:nissan },
    { id: 4, name: 'Oxford', logo: nintendo },
    { id: 5, name: 'Cambridge', logo: reactjs },
    { id: 6, name: 'ETH Zurich', logo: bosh},
    { id: 7, name: 'Tokyo University', logo: harvard },

  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-banner-container">
      <h3 className="banner-title">Our Academic Partners</h3>
      <div className="partners-banner">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`partner-${partner.id}-${index}`} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                title={partner.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersBanner;