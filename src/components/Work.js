import React from 'react';
import './CSS/work.css';
import Button from './Button'; 

const AreaOfExpertise = () => (
  <div className="work">
    <h1>Portfolio</h1>
    <div className="work-content">
      <div className="work-cor0">
        <div className="block">
          <img src="/img/p1.png" alt="Block 5" /><br/>
        </div>
        <div className="block">
          <div className='overlay'>
            <h3>SEO Application</h3>
            An application of the Hubspot principles on SEO
            <Button href='https://www.figma.com/design/SMa1yeVoEaXR9kXvtwKSMj/SEO-Portfolio?node-id=0-1&t=jDHVaT6umwo3VaJv-1'>Explore</Button>
          </div>
          <img src="/img/seo.png" alt="Block 5" /><br/>
        </div>
        <div className="block">
          <img src="/img/p2.png" alt="Block 5" /><br/>
        </div>
      </div>
      <div className="work-cor1">
        <div className="block">
          <div className='overlay'>
              <h3>Dalan;</h3>
              A tech-startup that I confounded during my Senior Year
              <Button href='https://www.figma.com/design/AsTEIOUqWzFZaZqxLUJMJJ/Dalan%3B-Wireframe-and-Design-Process?m=auto&t=jDHVaT6umwo3VaJv-1'>Explore</Button>
            </div>
          <img src="/img/dalan;.png" alt="Block 5" /><br/>
        </div>
        <div className="block">
          <div className='overlay'>
              <h3>PathSentinel</h3>
              A software we developed for our thesis that enables local governments to track reported road issues
              <Button href='https://www.figma.com/design/dStxtIBr8wnn4nydQec3qv/PathSentinel-Application?m=auto&t=jDHVaT6umwo3VaJv-1'>Explore</Button>
            </div>
          <img src="/img/pathsentinel.png" alt="Block 5" /><br/>
        </div>
        <div className="block">
        <div className='overlay'>
            <h3>Vet Ping</h3>
            Commissioned small project that allows veterinarians announced their medical rounds on a specific location
            <Button href='https://www.figma.com/design/wAS6HMS6iKKlAqexuNkyf7/(Ongoing)-Vet-Ping-Application?t=wwiwxn7MONf9YCk8-1'>Explore</Button>
          </div>
          <img src="/img/vet.png" alt="Block 5" /><br/>
        </div>
      </div>
    </div>
  </div>
);

export default AreaOfExpertise;