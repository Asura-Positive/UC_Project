import React from 'react'
import '../styles/contact-form.css'

const ContactForm = () => {
  return (
    <>
    <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2 className="text-center">Contact</h2>
      </div>
      <div className="row">
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.820037362191!2d104.86155819357913!3d11.558308100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b83795d97b%3A0x735f8f7a3e5bc507!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6A4Z6Y4Z-S4Z6W4Z674Z6H4Z62!5e0!3m2!1skm!2skh!4v1693383288612!5m2!1skm!2skh" frameBorder="0" width= '100%'  height= '290px' style={{border:0 }} allowFullScreen></iframe>
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="/" method="post" role="submit" className="email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control"  name='name' id='name' autoComplete="true"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor='email'>Your Email</label>
                <input type="email" className="form-control" name='email' autoComplete="true" id='email'/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='subject'>Your Subject</label>
              <input type="text" className="form-control" name='subject' id='subject'/>
            </div>
            <div className="form-group">
              <label htmlFor='message'>Your Message</label>
              <textarea className="form-control" name="message" rows="10" id='message'></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
    </>
  )
}

export default ContactForm