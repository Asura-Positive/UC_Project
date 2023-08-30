import React from 'react'

const Content = () => {
  return (
    <>
      <section className='about-setion mt-4 mb-5'>
        <div className="container align-items-center flex-md-row-reverse text-center">
          <h1>About UC</h1>
          <div className="row ">
            <div className="col-lg-6">
              <h2 className="text-center fw-bold display-2">The University Of Cambodia</h2>
              <p style={{textAlign:"justify"}}>
                  Since its founding in June 2003, The University of Cambodia (UC) has become one of the leading and most reputable higher education institutions in Cambodia. It is an intellectual community where students learn how to explore their curiosities, create and share knowledge, refine and challenge ideas, promote greater understanding, and serve their families and communities. The rigorous and supportive learning environment at UC fosters open and constructive dialogue and promotes strong critical, analytical, and creative thinking skills among students, while preparing them to address the increasingly complex issues in society and discover meaning in their own lives through offering innovative undergraduate, graduate and professional courses. The University recognizes the need to train and nurture a new generation of highly capable young thinkers who contribute to the intellectual, economic and social development of Cambodia, and who lead with values, integrity and compassion. The aforementioned values of the University are reflected in its pair of mottoes,<strong> “In Pursuit of Knowledge, Wisdom” and “Building Tomorrow’s Leaders.”</strong>
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