import React from 'react';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/joseph-raphael-betito-8b4523227/', src: '/img/linkedin.png', alt: 'LinkedIn' },
  { href: 'https://www.upwork.com/freelancers/~01ed1a15cbe8526049', src: '/img/upwork.png', alt: 'UpWork' },
  { href: 'https://www.indeed.com', src: '/img/indeed.png', alt: 'Indeed' },
  { href: 'https://www.instagram.com/zekebetito08/', src: '/img/instagram.png', alt: 'Instagram' },
  { href: 'mailto:jlbetito08@gmail.com', src: '/img/gmail.png', alt: 'GMail' },
  { href: 'https://www.facebook.com/josephraphael.betito/', src: '/img/facebook.png', alt: 'Facebook' },
  { href: 'https://www.yahoo.com', src: '/img/yahoo.png', alt: 'Yahoo' }
];

const Contact = () => (
  <div className="contact">
    <div className="divider"><span>Contact</span></div>
    <p>I would love to contribute to designing, building, and managing your new and innovative ideas! Feel free to reach out to me via any of the contacts below.</p>
    <div className="contact-apps">
      <div className="contact-row">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
