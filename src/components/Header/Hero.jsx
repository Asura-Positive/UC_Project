import React from 'react'
import '../styles/hero.css'

const Hero = () => {
  return (
    <>
    <section className='hero-section'>
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase">Discover the hidden world</p>
            <h1 className="display-1 fw-bolder text-capitalize">The Aurora Tours</h1>
            
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="text-uppercase fs-3 mt-5">The season has arrived</p>
            <p className="display-1 fw-bolder text-capitalize">3 available tours</p>
            
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="text-uppercase fs-3 mt-5">Destination activities</p>
            <p className="display-1 fw-bolder text-capitalize">Go glacier hiking</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
    </>
  )
}

export default Hero