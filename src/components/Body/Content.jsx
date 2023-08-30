import React from 'react'

const Content = () => {
  return (
    <>
      <section className='about-setion mt-4 mb-5'>
        <div className="container align-items-center flex-md-row-reverse text-center">
          <h1>About US</h1>
          <div className="row ">
            <div className="col-lg-6">
              <h2 className="text-center fw-bold display-2">Title</h2>
              <p style={{textAlign:"justify"}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sequi ex quae molestias? Amet at maxime blanditiis vero veniam. Ea soluta totam saepe inventore voluptas asperiores enim neque necessitatibus cumque.
              </p>
              <button className='btn btn-primary d-flex align-items-left '>About US</button>
            </div>
            <div className="col-lg-6 mt-2">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className='w-100'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content