import React from 'react';
import './App.css';
import logo from './logo.svg';
import searchIcon from './search-icon.svg';
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
          <button>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <nav className="nav">
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#learn">Learn</a>
          <a href="#about">About Us</a>
          <a href="#signup">Sign Up</a>
          <a href="#login" className="login-button">Log In</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src={banner} alt="Neighborhood" />
          <div className="hero-text">
            <h1>INTERESTED IN SELLING</h1>
            <h1>YOUR PROPERTY?</h1>
          </div>
        </section>
        <div className="hero-subtext">
          <p>Take a moment to complete the form and an Auction.com</p>
          <p>representative will contact you to discuss your property.</p>
        </div>
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
            </div>
            <div className="form-group">
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
            <p className="disclaimer">*By providing your contact information above, you acknowledge and confirm that Auction.com may contact you regarding your inquiry.</p>
          </form>
        </section>
        <section className="statsSection">
          <h3 className="title">We’re The Nation’s Leading Online Investment Property Marketplace</h3>
          <div className="statsWrapper statsWrapperDesktop">
            <div className="statsItem">
              <div className="statsTitle">510K</div>
              <div className="statsSubtitle">Properties Sold to Date</div>
            </div>
            <div className="statsItem">
              <div className="statsTitle">$62B</div>
              <div className="statsSubtitle">In Sales</div>
            </div>
            <div className="statsItem">
              <div className="statsTitle">6.9M</div>
              <div className="statsSubtitle">Registered Users</div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="social-media">
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            <a href="#youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-info">
            <a href="#privacy">Privacy Statement</a>
            <a href="#cookies">Cookie Preferences</a>
            <a href="#terms">Terms of Use</a>
            <a href="#participation">Participation Terms</a>
            <a href="#disclosures">Licensing & Disclosures</a>
            <a href="#accessibility">Accessibility</a>
          </div>
          <div className="footer-legal">
            <p>© 2024 Auction.com, LLC. All rights reserved.</p>
            <p>* No representation or warranties are made concerning the occupancy status of the property; bidders are responsible for verifying.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
