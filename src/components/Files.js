import React from 'react';
import './CSS/files.css';

const Experience = () => (
    <div className='files'>
        <h1>Certifications</h1>
        <div className='certs'>
            <div className='hs'>
                <img src="/img/hs1.png" alt='Hubspot SEO I'></img>
            </div>
            <div className='hs'>
                <img src="/img/hs2.png" alt='Hubspot SEO II'></img>
            </div>
        </div>
        <h1>Resume</h1>
        <div className='resume'>
            <div className='hs'>
                <a href='pdf/resume.pdf' target='_blank' rel='noopener noreferrer' className='view-link'>
                    <img src="/img/betito-resume.png" alt='Betito Resume'></img>
                </a>
            </div>
        </div>
    </div>
);

export default Experience;