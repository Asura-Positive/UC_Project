import React from 'react'
import '../styles/feature.css'

const Feature = () => {
  return (
    <>
    <section id="featured-services" className="featured-services py-5">
        <div className="container" >

            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="fa-solid fa-graduation-cap"></i></div>
                    <h4 className="title">Sholarship</h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="fa-solid fa-user"></i></div>
                    <h4 className="title">Skill Lecturer</h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="fa-solid fa-book"></i></div>
                    <h4 className="title">Book Library & Store</h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="fa-solid fa-school"></i></div>
                    <h4 className="title">Best University</h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feature