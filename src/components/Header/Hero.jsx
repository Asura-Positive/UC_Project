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
          <img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase">College Hero Section</p>
            <h1 className="display-1 fw-bolder text-capitalize">Title</h1>
            
          </div>
        </div>
        <div className="carousel-item c-item">
        <img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase">College Hero Section</p>
            <h1 className="display-1 fw-bolder text-capitalize">Title</h1>
            
          </div>
        </div>
        <div className="carousel-item c-item">
        <img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000" alt="" className='d-block w-100 c-img'/>
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase">College Hero Section</p>
            <h1 className="display-1 fw-bolder text-capitalize">Title</h1>
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