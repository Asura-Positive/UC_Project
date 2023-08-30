import React from 'react'
import '../styles/depart.css'
import Card from '../Cards/Card'
import departments from '../API/departments'

function createCard(department){
  return(
    <Card 
      key = {department.id}
      img= {department.img}
      name= {department.name}
      />
  )
}

const Department = () => {
  return (
    <>
      <section id="gallery" className="gallery py-5">
    <div className="container-fluid">
    <h1 className='text-center'>Here All The Faculity</h1>
      <div className="row gy-4 justify-content-center">
        {departments.map(createCard)}
      </div>
    </div>
  </section>
    </>
  )
}

export default Department