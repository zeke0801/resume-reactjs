import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="logo" style={{ textAlign: 'left' }}>Zeke <br /> Betito</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#work">Work</a>
          </nav>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.592-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.238l-1.918.001c-1.504 0-1.796.714-1.796 1.763v2.315h3.591l-.467 3.622h-3.125v9.293h6.125c.732 0 1.325-.592 1.325-1.324v-21.35c0-.733-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .385.043.761.127 1.122-4.09-.205-7.719-2.165-10.141-5.144-.424.726-.666 1.571-.666 2.473 0 1.705.869 3.213 2.188 4.096-.806-.026-1.564-.247-2.228-.616v.062c0 2.381 1.693 4.367 3.946 4.822-.412.112-.846.172-1.293.172-.316 0-.623-.03-.923-.086.623 1.945 2.432 3.362 4.576 3.404-1.677 1.314-3.791 2.099-6.085 2.099-.395 0-.787-.023-1.174-.068 2.169 1.391 4.745 2.201 7.521 2.201 9.025 0 13.967-7.481 13.967-13.966 0-.213-.004-.426-.014-.637.959-.693 1.792-1.56 2.448-2.548l-.047-.02z"/></svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.965.24 2.422.414a4.92 4.92 0 011.768 1.15 4.92 4.92 0 011.15 1.768c.175.457.36 1.251.414 2.422.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.965-.414 2.422a4.92 4.92 0 01-1.15 1.768 4.92 4.92 0 01-1.768 1.15c-.457.175-1.251.36-2.422.414-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.965-.24-2.422-.414a4.92 4.92 0 01-1.768-1.15 4.92 4.92 0 01-1.15-1.768c-.175-.457-.36-1.251-.414-2.422-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.965.414-2.422a4.92 4.92 0 011.15-1.768 4.92 4.92 0 011.768-1.15c.457-.175 1.251-.36 2.422-.414 1.266-.059 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.013-4.947.072-1.304.06-2.204.256-2.972.548a6.926 6.926 0 00-2.511 1.636 6.926 6.926 0 00-1.636 2.511c-.292.768-.488 1.668-.548 2.972-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.06 1.304.256 2.204.548 2.972a6.926 6.926 0 001.636 2.511 6.926 6.926 0 002.511 1.636c.768.292 1.668.488 2.972.548 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.304-.06 2.204-.256 2.972-.548a6.926 6.926 0 002.511-1.636 6.926 6.926 0 001.636-2.511c.292-.768.488-1.668.548-2.972.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.06-1.304-.256-2.204-.548-2.972a6.926 6.926 0 00-1.636-2.511 6.926 6.926 0 00-2.511-1.636c-.768-.292-1.668-.488-2.972-.548-1.277-.059-1.688-.072-4.947-.072z"/><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.165a4.004 4.004 0 110-8.008 4.004 4.004 0 010 8.008zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
          </div>
        </header>
        <div className="intro">
          <div className="intro-text">
            <h4>Hi, I'm Zeke</h4>
            <h1>Product<br />
            Development<br />
            and <br />
            Designer</h1>

            <h3 style={{ textDecoration: 'underline' }}> <a href="#">Contact</a></h3>
          </div>
        <div className="intro-image">
          <img src="/img/intro-author.jpg" alt="Zeke Betito" />
        </div>
        </div>
        <div className="about">
          <div className="divider">
            <span>about</span>
          </div>
          <p>A Graduate of Ateneo de Naga with a Bachelor of 
            Science in Computer Science, specializing in app 
            building, design, and workflow management. 
            Strong expertise in developing innovative 
            applications and streamlining processes for 
            enhanced efficiency. Demonstrated proficiency 
            in project management and collaborating with 
            iverse teams to deliver high-quality results. 
          </p>
          <div className="about-content">
            <div className="attributes">
              <h5>QPI</h5>
              <h5>Graduation Awards</h5>
              <h5>Thesis</h5>
            </div>
            <div className="attributes-cor">
              <h5>3.51</h5>
              <h5>Cum Laude
                  Silver Achievement</h5>
              <h5>PathSentinel: Utilizing Convolutional Neural
                  Networks for Image Verification on an 
                  Alternative Road Condition Monitoring System
              </h5>
            </div>
          </div>
        </div>
        <div className="aoe">
          <div className="divider">
            <span>area of expertise</span>
          </div>
          <div className="aoe-content">
            <div className="aoe-cor0">
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>JavaScript</h5>
              <h5>UI/UX</h5>
            </div>
            <div className="aoe-cor1">
              <h5>PathSentinel</h5>
              <h5>Project Blue</h5>
              <h5>RFID System</h5>
              <h5>Dalan;</h5>
            </div>
            <div className="aoe-cor2">
              <h5>SEO</h5>
              <h5>Link Building</h5>
              <h5>Keyword Research</h5>
              <h5>KPI Analysis</h5>
              <h5>Organic Traffic</h5>
            </div>
          </div>
        </div>
        <div className="work">
          <div className="divider">
            <span>work sample</span>
          </div>
          <div className="work-content">
            <div className="work-sample1">
                <div className='img'>
                  <img src="/img/work-ps.png" alt="Zeke Betito" />
                </div>
                <div className='img-desc'>
                <h5 style={{textDecoration: 'underline'}}>PathSentinel</h5>
                  A website dedicated for a joint reporting 
                  system between private citizens and the 
                  emergency and engineering sector of the 
                  local city.
                </div>
            </div>
            <div className="work-sample2">
                <div className='img-desc'>
                  <h5 style={{textDecoration: 'underline'}}>DAR RFID</h5>
                  A specialized website designed 
                  for making the recording of attendance 
                  and tracking the whereabouts of the 
                  employees within the office premise 
                  easier and faster
                </div>
                <div className='img'>
                  <img src="/img/work-rfid.png" alt="Zeke Betito" />
                </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="divider">
            <span>contact</span>
          </div>
          <p>I would love to contribute to designing, 
            building, and managing your new and innovative 
            ideas! Feel free to reach out to me to any of 
            the contact below. 
          </p>
        </div>
        <div className='contact-apps'>
          <div className="r1">
            <img src="/img/indeed.png" alt="Indeed" />
            <img src="/img/linkedin.png" alt="LinkedIn" />
            <img src="/img/upwork.png" alt="UpWork" />
          </div>
          <div className="r2">
            <img src="/img/instagram.png" alt="Instagram" />
            <img src="/img/gmail.png" alt="GMail" />
            <img src="/img/facebook.png" alt="Facebook" />
            <img src="/img/yahoo.png" alt="Yahoo" />
          </div>
        </div>
    </div>
  );
}

export default App;
