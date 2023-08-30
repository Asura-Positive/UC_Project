import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <footer id="footer" className='bottom-0'>
        <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>UC LOGO</h3>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h2>Feature Links</h2>
                    <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Admission</Link></li>
                    <li><Link>Faculity</Link></li>
                    <li><Link>Scholarship</Link></li>
                    <li><Link>Our Campus</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Contact US</Link></li>
                    <li><Link>News</Link></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Information</h4>
                    <ul>
                    <li><i className="pe-3 fa-solid fa-map-location-dot"></i> Location</li>
                    <li><i className="pe-3 fa-solid fa-phone"></i> Phone Number </li>
                    <li><i className="pe-3 fa-solid fa-envelope"></i> Email School</li>
                    <li><i className="pe-3 fa-solid fa-blender-phone"></i> Desk Phone Number</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="fa-brands fa-wikipedia-w"></i></a>
                    <a href="#" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="container footer-bottom clearfix">
            <div className="copyright">
                &copy; Copyright <strong><span>2023</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            
                Designed by Ruos Sovanra
            </div>
        </div>
    </footer>
    </> 
  )
}

export default Footer