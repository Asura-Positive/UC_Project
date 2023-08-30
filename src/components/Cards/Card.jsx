import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="col-xl-3 col-lg-4 col-md-6">
    <div className="gallery-item h-100">
      <img src={props.img} className='img-fluid' alt="" />
      <div className="gallery-links d-flex align-items-center justify-content-center">
        <h1 className="glightbox preview-link">{props.name}</h1> 
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Card