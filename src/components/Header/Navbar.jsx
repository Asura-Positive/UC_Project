import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a href="/" className="navbar-brand" data-aos="fade-up-right"  data-aos-eseing="ease-in-out"> University Of Cambodia</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse flex-row justify-content-end" id="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu bg-dark text-" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item text-light" to="">Action</Link></li>
                            <li><Link className="dropdown-item text-light" to="">Another action</Link></li>
                        </ul>
                        </li>
                    <li className="navbar-item">
                        <Link to="/admission" className='nav-link'>Admission</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu bg-dark text-" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item text-light" to="">Action</Link></li>
                            <li><Link className="dropdown-item text-light" to="">Another action</Link></li>
                        </ul>
                        </li>   
                    <li className="navbar-item">
                        <Link to="/scholarship" className='nav-link'>scholarship</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/campus" className='nav-link'>Our Campus</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/news" className='nav-link'>News</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar