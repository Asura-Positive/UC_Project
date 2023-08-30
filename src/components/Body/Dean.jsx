import React from 'react'
import '../styles/dean.css'
import DeanCard from '../Cards/DeanCard'
import deans from '../API/deans'
import Carousels from '../Cards/Carousels'

const deanCard= (dean)=>{
    return(
        <DeanCard 
        key = {dean.id}
        img= {dean.img}
        name = {dean.name}
        college = {dean.college}
        />

    )
}

const Dean = () => {
  return (
    <>
    <h1 className="text-center">Here All The Dean</h1>  
    <div className="wrapper py-4 d-flex justify-content-center">
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <Carousels />
            <div className="carousel-inner">
                    <div className="carousel-item active carousel px-5">
                        <div className="cards d-flex justify-content-center align-items-center">
                            <div className="img d-flex justify-content-center align-items-center">
                                <img src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png" alt="" />
                            </div>
                            <h2>Blanche Pearson</h2>
                            <span>Sales Manager</span>
                        </div>
                    </div>
                {deans.map(deanCard)}
               
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Dean