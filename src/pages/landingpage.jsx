import React from 'react';
import './assets/css/style.css'; // Import your CSS file
import './assets/js/script.js';

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';

function LandingPage() {
  return (
    <div id="top">
        <div className="search-container" data-search-box>
          <div className="container">
      
            <button className="search-close-btn" aria-label="Close search" data-search-toggler>
              <ion-icon name="close-outline"></ion-icon>
            </button>
      
            <div className="search-wrapper">
              <input type="search" name="search" placeholder="Search Here..." aria-label="Search" className="search-field"/>
      
              <button className="search-submit" aria-label="Submit" data-search-toggler>
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
      
          </div>
        </div>
      
      
      
      
        <section className="hero" id="home" aria-label="hero" style={{backgroundImage: `url(${require('./hero-bg.jpg')})`}}>

            <div className="container">
      
              <div className="hero-content">
      
                <p className="section-subtitle">Better Learning Future With Us</p>
      
                <h2 className="h1 hero-title">Raja Educational Academy (REA)</h2>
      
                <p className="hero-text">
                  Complete Brain Development
                </p>
      
                <a className="btn btn-primary">
                  <span className="span">Get Started Today</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
      
              </div>
      
              <figure className="hero-banner">
  <img
    src={require("./images/hero-abs-1 (2).png")}
    width="900"
    height="900"
    loading="lazy"
    aria-hidden="true"
    className="abs-img abs-img-1"
    alt="Description of the image"
  />
  <img
    src={require("./images/hero-abs-2 (2).png")}
    width="200"
    height="200"
    loading="lazy"
    aria-hidden="true"
    className="abs-img abs-img-2"
    alt="Description of the image"
  />
</figure>

      
            </div>
          </section>
      
      
      
      
           
      
            <section className="section category" aria-label="category">
              <div className="container1">
            
            
                <h2 className="h2 section-title2">Course Categories</h2>
                <p className="section-subtitle2">Brainstorm Your Interest</p>
            
                <ul className="grid-list">
            
                  <li>
                    <div className="category-card" id="abacus">
                      <div className="card-icon">
                        <ion-icon name="apps-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">Abacus</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                  <li>
                    <div className="category-card" id="vedic-math">
                      <div className="card-icon">
                        <ion-icon name="file-tray-full-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">Vedic Math</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                  <li>
                    <div className="category-card" id="handwriting">
                      <div className="card-icon">
                        <ion-icon name="pencil-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">Handwriting</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                  <li>
                    <div className="category-card" id="ekids">
                      <div className="card-icon">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">E-Kids</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                  <li>
                    <div className="category-card" id="memory-techniques">
                      <div className="card-icon">
                        <ion-icon name="laptop-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">Memory Techniques</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                  <li>
                    <div className="category-card" id="rubic-cube">
                      <div className="card-icon">
                        <ion-icon name="cube-outline"></ion-icon>
                      </div>
                      <div>
                        <h3 className="h3 card-title">
                          <a href="/">Rubic Cube</a>
                        </h3>
                      </div>
                    </div>
                  </li>
            
                </ul>
              </div>
            </section>
            
            <div id="popupContainer" className="popup-container">
              <div className="popup-content" id="popupContent">
              </div>
            </div>
            
      
      
      
      
      
          
            <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <img src={require("./images/222.webp")} width="450" height="600" loading="lazy" alt="about banner" className="w-100 about-img" />
                <img src={require("./images/about-abs-1.jpg")} width="300" height="242" loading="lazy" aria-hidden="true" className="abs-img abs-img-1" />
              </figure>
              <div className="about-content">
                <p style={{fontSize: "20px"}}>
                  Welcome to Raja Educational Academy (REA), where we specialize in empowering children through innovative educational programs. As a women-led organization, we offer tailored courses in Abacus, E-Kids, Vedic Math, Memory Techniques, Rubik's Cube, and Handwriting.
                  <br />
                  At REA, our dedicated team of experts is committed to nurturing your child's potential. With years of experience in education, we focus on improving memory, concentration, and confidence levels. Our holistic approach fosters multi-dimensional thinking and spiritual development, ensuring outstanding performance and independent, confident individuals.
                  <br />
                  Our programs, designed for children aged 4 to 14, equip them with essential skills for success in a competitive world. From mastering mental calculation abilities to promoting intuitive thinking, we prepare the next generation for the challenges ahead.
                  <br />
                  Join us at REA and embark on a transformative journey for your child's bright future.
                </p>
              </div>
            </div>
          </section>
            
            <h2 className="h2 section-title3">Events</h2>
            <p className="section-subtitle3">Past Events and Upcoming Events</p>
      
            <section className="container5">
              
            <div className="box">
            
  <h2>Upcoming Events</h2>
  <ul>
    <li>
      <h3>Event A</h3>
      <p>Date: January 1, 2025</p>
      <p>Time: 10:00 AM</p>
      <p>Venue: Event Venue A</p>
    </li>
    <li>
      <h3>Event B</h3>
      <p>Date: February 15, 2025</p>
      <p>Time: 2:00 PM</p>
      <p>Venue: Event Venue B</p>
    </li>
    <li>
      <h3>Event C</h3>
      <p>Date: March 30, 2025</p>
      <p>Time: 5:30 PM</p>
      <p>Venue: Event Venue C</p>
    </li>
  </ul>
  <h2>Past Events</h2>
</div>

<div 
  className="box previous-events" 
  onClick={() => window.location.href='/prevevent'} 
  style={{ cursor: 'pointer' }} 
/>
               
            </section>
            
            
      
      
      
      
      
      
      
            <section className="section cta" aria-label="workshop" style={{backgroundImage: "url('./assets/images/cta-bg.png')"}}>
              <div className="container">
      
                <figure className="cta-banner">
                  <img src={require("./images/2.JPG")} width="580" height="380" loading="lazy" alt="cta banner"
                    className="img-cover"/>
                </figure>
      
                <div className="cta-content">
      
                  <p className="section-subtitle">Free Demo</p>
      
                  <h2 className="h2 section-title">Join Our Free Demo className</h2>
      
                  <p className="section-text">
                    
      "Get ready to explore our upcoming features firsthand with our free demo. Sign up now to be the first to try it out. Don't miss this exclusive opportunity!"
                  </p>
      
                  <a href="/" className="btn btn-secondary">
                    <span className="span">Upcoming ClassName</span>
      
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>
      
                </div>
      
              </div>
            </section>
            <section className="section event" id="event" aria-label="event">
              <div className="container1">
      
      
                <h2 className="h2 section-title2">Gallery</h2>
      
                <ul className="grid-list">
      
                  <li>
                    <div className="event-card">
      
                      <figure className="card-banner">
                        <img src={require("./images/1.JPG")} width="250" height="250" loading="lazy"
                          alt="Innovation & Technological Entrepreneurship Team" className="img-cover"/>
                      </figure>
      
                    </div>
                  </li>
      
                  <li>
                    <div className="event-card">
      
                      <figure className="card-banner">
                        <img src={require("./images/2.JPG")} width="250" height="250" loading="lazy"
                          alt="Virtual Spring Part-time Jobs Fair for Student" className="img-cover"/>
                      </figure>
                    </div>
                  </li>
      
                  <li>
                    <div className="event-card">
                      <figure className="card-banner">
                        <img src={require("./images/3.JPG")} width="250" height="250" loading="lazy"
                          alt="Explorations of Regional Chief Executive Network" className="img-cover"/>
                      </figure>
                    </div>
                  </li>
      
                </ul>
                <div className="view-more-container">
                  <a href="/Gallery" className="btn-view-more">View More</a>
                </div>
              </div>
              
            </section>
      
      
            <main>
              <article>
              <section className="section newsletter" aria-label="newsletter" style={{backgroundImage: `url(${require('./images/newsletter-bg.jpg')})`}}>
                  <div className="container3">
                    <div className="form-wrapper">
                      <h1 className="section-subtitle1">Contact Us</h1>
                      <form action="#" className="contact-form">
                        <div className="input-wrapper">
                          <input type="text" name="name" aria-label="name" placeholder="Your Name" required className="name-field"/>
                        </div>
                        <div className="input-wrapper">
                          <input type="email" name="email_address" aria-label="email" placeholder="Your Email Address" required className="email-field"/>
                        </div>
                        <div className="input-wrapper">
                          <select name="role" aria-label="role" required className="role-field">
                            <option value="">Select Your Role</option>
                            <option value="student">Student</option>
                            <option value="school">School</option>
                            <option value="Teacher">Teacher</option>
                            <option value="general">General</option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                        <textarea
  name="query"
  aria-label="query"
  placeholder="Write your query here"
  required
  className="query-field"
  style={{ height: '200px', width: 'calc(100% - 30px)' }}>
    
  </textarea>
                        </div>
                        <button type="submit" className="submit-btn1">
                          <span className="span">Submit</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </article>
            </main>
                 
      
       
      
      
      
      
      
      
      
      
        <a href="#top" className="back-top-btn" aria-label="Back to top" data-back-top-btn>
          <ion-icon name="arrow-up"></ion-icon>
        </a>
      
      
      
      
      </div>
  );
}

export default LandingPage;

