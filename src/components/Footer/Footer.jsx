import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <footer id="footer">
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
                    <li><i className="bx bx-chevron-right"></i> Location</li>
                    <li><i className="bx bx-chevron-right"></i> Phone Number </li>
                    <li><i className="bx bx-chevron-right"></i> Email School</li>
                    <li><i className="bx bx-chevron-right"></i> Desk Phone Number</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="container footer-bottom clearfix">
            <div className="copyright">
                &copy; Copyright <strong><span>&</span></strong>. All Rights Reserved
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