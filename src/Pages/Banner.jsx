import React from 'react'
import Container from '../Components/Container'
import ListDiscount from '../Components/ListDiscount'
import Sidebar from '../Components/Sidebar'

const Banner = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <ListDiscount/>
      </div>
    </div>
  )
}

export default Banner