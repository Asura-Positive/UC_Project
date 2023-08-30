import React from 'react'

const DeanCard = (props) => {
  return (
    <>  
    <div className="carousel-item  carousel px-5">
        <div className="cards d-flex justify-content-center align-items-center">
            <div className="img d-flex justify-content-center align-items-center">
                <img src={props.img} alt="" />
            </div>
            <h2>{props.name}</h2>
            <span>{props.college}</span>
        </div>
    </div>
    </>
  )
}

export default DeanCard