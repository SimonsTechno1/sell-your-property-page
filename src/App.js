import React from 'react';
import './App.css';
import logo from './logo.svg';
import banner from './banner.webp';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="State, County, City, Zip, Address" />
          <button><i className="fas fa-search"></i></button>
        </div>
        <nav className="nav">
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#learn">Learn</a>
          <a href="#about">About Us</a>
          <a href="#signup">Sign Up</a>
          <a href="#login">Log In</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src={banner} alt="Neighborhood" />
          <div className="hero-text">
            <h1>Interested in Selling Your Property?</h1>
            <p>Take a moment to complete the form and an Auction.com representative will reach out to assist you further.</p>
          </div>
        </section>
        <section className="form-section">
          <form className="property-form">
            <h2>Your Contact Details</h2>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <h2>Tell Us About Your Property</h2>
            <div className="form-group">
              <input type="text" placeholder="Property Address (or APN)" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Property Condition" />
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Number of Properties" />
              <input type="text" placeholder="Property Market History" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Does a Mortgage still exist on the Property?" />
              <input type="text" placeholder="Property Occupancy" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Desired Price Range (No Min)" />
              <input type="text" placeholder="Desired Price Range (No Max)" />
            </div>
            <h2>Your Selling Preferences</h2>
            <div className="form-group">
              <input type="text" placeholder="What Is Your Relationship With The Property" />
              <input type="text" placeholder="When Are You Looking to Sell?" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="stats">
          <h2>We're The Nation's Leading Online Investment Property Marketplace</h2>
          <div className="stats-numbers">
            <div>
              <h3>510K</h3>
              <p>Properties Sold to Date</p>
            </div>
            <div>
              <h3>$62B</h3>
              <p>In Sales</p>
            </div>
            <div>
              <h3>6.9M</h3>
              <p>Registered Users</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="#youtube"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-info">
          <a href="#privacy">Privacy Statement</a>
          <a href="#cookies">Cookie Preferences</a>
          <a href="#terms">Terms of Use</a>
          <a href="#participation">Participation Terms</a>
          <a href="#disclosures">Licensing & Disclosures</a>
          <a href="#accessibility">Accessibility</a>
        </div>
        <div className="footer-apps">
          <a href="#appstore"><img src="appstore.png" alt="App Store" /></a>
          <a href="#googleplay"><img src="googleplay.png" alt="Google Play" /></a>
        </div>
        <div className="footer-copyright">
          <p>© 2024 Auction.com, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
