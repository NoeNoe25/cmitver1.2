// components/PartnersBanner.jsx
import React from 'react';
import '../styles/PartnerBanner.css';
import ais from '../assets/logos/ais.png';
import exelon from '../assets/logos/exelon.png';
import amazon from '../assets/logos/amazon.png';
import google from '../assets/logos/google.png';
import thairung from '../assets/logos/thairung.png';
import wf from '../assets/logos/wf.png';
import wharton from '../assets/logos/wharton.png';


const PartnersBanner = () => {
  // Sample university logos - replace with your actual partner logos
  const partners = [
    { id: 1, name: 'Harvard', logo: ais },
    { id: 2, name: 'Stanford', logo:exelon },
    { id: 3, name: 'MIT', logo:amazon },
    { id: 4, name: 'Oxford', logo: google },
    { id: 5, name: 'Cambridge', logo: thairung },
    { id: 6, name: 'ETH Zurich', logo: wf },
    { id: 7, name: 'Tokyo University', logo: wharton },
    { id: 8, name: 'National University', logo: wharton },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-banner-container">
      <h3 className="banner-title">Our Academic Partners</h3>
      <div className="partners-banner">
        <div className="partners-track">
          {duplicatedPartners.map((partner) => (
            <div key={`${partner.id}-1`} className="partner-logo">
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