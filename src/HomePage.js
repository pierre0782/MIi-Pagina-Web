import React from 'react';
import './style.css';
import heroImage from './imagenes/foto4.avif'; // Ruta a la imagen del héroe
import logoImage from './imagenes/logo.png'; // Ruta al logo
import userImage1 from './imagenes/foto1.jpg'; // Ruta a la imagen del usuario 1
import userImage2 from './imagenes/foto2.jpg'; // Ruta a la imagen del usuario 2

const HomePage = ({ onEnterClick }) => {
  return (
    <div>
      <header className="homepage-header">
        <div className="homepage-header-left">
          <img src={logoImage} alt="Logo" className="homepage-logo" />
          <h1 className="homepage-title">SuggarDaddy</h1>
        </div>
        <div className="homepage-header-right">
          <nav>
            <ul>
              <li><a href="#" onClick={onEnterClick}>Enter</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="homepage-hero">
        <div className="homepage-hero-left">
          <div className="homepage-hero-content">
            <h1>Welcome to SuggarDaddy</h1>
            <p>Your perfect match is just a click away</p>
            <button className="homepage-cta-button" onClick={onEnterClick}>Get Started</button>
          </div>
        </div>
        <div className="homepage-hero-right">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </section>

      <section className="homepage-about">
        <div className="homepage-about-content">
          <div className="homepage-logo-container">
            <img src={logoImage} alt="Logo" className="homepage-logo" />
          </div>
          <div className="homepage-description">
            <h2>About Us</h2>
            <p>Discover the best way to meet new people and find your perfect match.</p>
          </div>
        </div>
      </section>

      <section className="homepage-testimonials">
        <h2>What our users say</h2>
        <div className="homepage-testimonial-slider">
          <div className="homepage-testimonial">
            <div className="homepage-testimonial-content">
              <div className="homepage-testimonial-image">
                <img src={userImage1} alt="User 1" className="homepage-user-avatar" />
              </div>
              <div className="homepage-testimonial-text">
                <p>"SuggarDaddy has changed my life!"</p>
              </div>
            </div>
          </div>
          <div className="homepage-testimonial">
            <div className="homepage-testimonial-content">
              <div className="homepage-testimonial-image">
                <img src={userImage2} alt="User 2" className="homepage-user-avatar" />
              </div>
              <div className="homepage-testimonial-text">
                <p>"I've met so many amazing people here."</p>
              </div>
            </div>
          </div>
        </div>
        <button className="homepage-prev">Prev</button>
        <button className="homepage-next">Next</button>
      </section>

      <footer className="homepage-footer">
        <div className="homepage-footer-columns">
          <div className="homepage-footer-column">
            <h3>About</h3>
            <a href="#">Company</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
          </div>
          <div className="homepage-footer-column">
            <h3>Help</h3>
            <a href="#">Support</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <p>&copy; 2023 SuggarDaddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
