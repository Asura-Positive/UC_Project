import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'



const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-4 border-bottom">
        <div className="container">
            <a href="/" className="navbar-brand" data-aos="fade-up-right"  data-aos-eseing="ease-in-out"> LOGO||</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse flex-row justify-content-end" id="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className='nav-link item-nav'>Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About US
                        </Link>
                        <ul className="dropdown-menu  " aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item " to="">Action</Link></li>
                            <li><Link className="dropdown-item " to="">Another action</Link></li>
                        </ul>
                        </li>
                    <li className="navbar-item">
                        <Link to="/admission" className='nav-link item-nav'>Admission</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Faculity
                        </Link>
                        <ul className="dropdown-menu  " aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item " to="">Action</Link></li>
                            <li><Link className="dropdown-item " to="">Another action</Link></li>
                        </ul>
                        </li>   
                    <li className="navbar-item">
                        <Link to="/scholarship" className='nav-link item-nav'>scholarship</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/campus" className='nav-link item-nav'>Our Campus</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/news" className='nav-link item-nav'>News</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className='nav-link item-nav'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar