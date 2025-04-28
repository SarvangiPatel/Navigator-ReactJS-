
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <>

<section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Perfect Product</h1>
            <p>Upgrade your life with our innovative and reliable solution. Designed for your needs, built to last.</p>
            <Link to="/product"><button className="cta-button">Shop Now</button></Link>
            
          </div>
          <div className="hero-image">
            <img src="https://s.globalsources.com/IMAGES/skc/20240516072133213361365" alt="Product showcase" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"This product changed my life. Super easy to use and extremely reliable!"</p>
            <h4>- Jane D.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fantastic quality and great support from the team. Highly recommend!"</p>
            <h4>- Mike T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I was skeptical at first, but now I'm a loyal customer. Worth every penny."</p>
            <h4>- Sarah L.</h4>
          </div>
        </div>
      </section>
    {/* </div>   */}
    </>
    
  )
}

export default Home